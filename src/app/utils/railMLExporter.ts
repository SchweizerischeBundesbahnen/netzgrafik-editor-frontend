import {DataService} from '../services/data/data.service';
import {TrainrunService} from '../services/data/trainrun.service';
import {NodeService} from '../services/data/node.service';
import {TrainrunSectionService} from '../services/data/trainrunsection.service';
import {Trainrun} from '../models/trainrun.model';
import {Node} from '../models/node.model';
import {TrainrunSection} from '../models/trainrunsection.model';
import {TrainrunIterator} from '../services/util/trainrun.iterator';
import {TimeUtils} from './time';
import {GeneralViewFunctions} from '../view/util/generalViewFunctions';
import {TrainrunCategory} from '../data-structures/business.data.structures';

export class RailMLExporter {
  private;

  constructor(
    private dataService: DataService,
    private nodeService: NodeService,
    private trainrunService: TrainrunService,
    private trainrunSectionService: TrainrunSectionService,
  ) {}

  private static createMetaData(doc: XMLDocument): HTMLElement {
    const metadata = doc.createElement('metadata');

    const organizationalUnits = doc.createElement('organizationalUnits');
    metadata.append(organizationalUnits);

    const customer = doc.createElement('customer');
    customer.setAttribute('id', 'cust01');
    customer.setAttribute('code', 'sbb');
    customer.setAttribute(
      'name',
      'Schweizerische Bundesbahnen - Netzgrafik-Editor Export',
    );
    organizationalUnits.append(customer);

    const operationalUndertaking = doc.createElement('operationalUndertaking');
    operationalUndertaking.setAttribute('id', 'opu01');
    operationalUndertaking.setAttribute('code', 'sbb');
    operationalUndertaking.setAttribute(
      'name',
      'Schweizerische Bundesbahnen - Netzgrafik-Editor Export',
    );
    organizationalUnits.append(operationalUndertaking);

    return metadata;
  }

  private static createRollinstock(doc: XMLDocument): HTMLElement {
    return doc.createElement('rollinstock');
  }

  createRailML(): string {
    // https://wiki2.railml.org/wiki/Dev:XMLtree
    const doc = document.implementation.createDocument('', '', null);
    const railml = doc.createElement('railml');

    railml.setAttribute(
      'xmlns:xsi',
      'http://www.w3.org/2001/XMLSchema-instance',
    );
    railml.setAttribute('xmlns', 'http://www.railml.org/schemas/2013');
    railml.setAttribute(
      'xsi:schemaLocation',
      'http://www.railml.org/schemas/2013 http://www.railml.org/schemas/2013/railML-2.2/railML.xsd',
    );
    railml.setAttribute('version', '2.2');
    doc.append(railml);
    railml.append(RailMLExporter.createMetaData(doc));
    railml.append(this.createInfrastructure(doc));
    railml.append(this.createTimetable(doc));

    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
  }

  private createOcpsTT(
    doc: XMLDocument,
    trainrun: Trainrun,
    startNode: Node,
    timeOffset: number,
  ): HTMLElement {
    const ocpsTT = doc.createElement('ocpsTT');
    let visitingNode = startNode;
    let prevVisitingNode = visitingNode;
    let trainrunSection: TrainrunSection = visitingNode.getStartTrainrunSection(
      trainrun.getId(),
    );
    if (trainrunSection === undefined) {
      return ocpsTT;
    }
    const iterator: TrainrunIterator = this.trainrunService.getIterator(
      visitingNode,
      trainrunSection,
    );
    let sequence = 0;
    let departureTime =
      visitingNode.getId() === trainrunSection.getSourceNodeId()
        ? trainrunSection.getSourceDepartureConsecutiveTime()
        : trainrunSection.getTargetDepartureConsecutiveTime();
    let arrivalTime: number;
    while (iterator.hasNext()) {
      const currentTrainrunSectionNodePair = iterator.next();
      visitingNode = currentTrainrunSectionNodePair.node;
      trainrunSection = currentTrainrunSectionNodePair.trainrunSection;

      sequence += 1;
      departureTime =
        visitingNode.getId() !== trainrunSection.getSourceNodeId()
          ? trainrunSection.getSourceDepartureConsecutiveTime()
          : trainrunSection.getTargetDepartureConsecutiveTime();
      ocpsTT.append(
        this.createOcpTT(
          doc,
          trainrunSection,
          prevVisitingNode,
          sequence,
          timeOffset,
          departureTime,
          arrivalTime,
          false,
        ),
      );

      prevVisitingNode = visitingNode;
      arrivalTime =
        visitingNode.getId() === trainrunSection.getSourceNodeId()
          ? trainrunSection.getSourceArrivalConsecutiveTime()
          : trainrunSection.getTargetArrivalConsecutiveTime();
    }
    departureTime = undefined;
    sequence += 1;
    ocpsTT.append(
      this.createOcpTT(
        doc,
        trainrunSection,
        visitingNode,
        sequence,
        timeOffset,
        departureTime,
        arrivalTime,
        true,
      ),
    );

    return ocpsTT;
  }

  private createOcpTT(
    doc: XMLDocument,
    trainrunSection: TrainrunSection,
    node: Node,
    sequence: number,
    timeOffset: number,
    departureTime: number,
    arrivalTime: number,
    isEndOCP: boolean,
  ): HTMLElement {
    const ocpTT = doc.createElement('ocpTT');
    ocpTT.setAttribute('sequence', '' + sequence);
    ocpTT.setAttribute('ocpRef', this.createOCPId(node));
    ocpTT.setAttribute('trackInfo', node.getBetriebspunktName());
    // ocpTT.setAttribute('trackRef', 'trackRef ???? ');
    if (!node.isNonStop(trainrunSection)) {
      ocpTT.setAttribute('ocpType', 'stop');
      ocpTT.append(
        this.createTime(
          doc,
          departureTime,
          arrivalTime,
          timeOffset,
          'published',
        ),
      );
      ocpTT.append(
        this.createTime(
          doc,
          departureTime,
          arrivalTime,
          timeOffset,
          'scheduled',
        ),
      );
      if (!isEndOCP) {
        ocpTT.append(this.createSectionTT(doc, trainrunSection, node));
      }
      const stopDescription = doc.createElement('stopDescription');
      stopDescription.setAttribute('commercial', 'true');
      //stopDescription.setAttribute('purpose', 'stop');
      const stopTimes = doc.createElement('stopTimes');
      stopDescription.append(stopTimes);
      ocpTT.append(stopDescription);
    } else {
      ocpTT.setAttribute('ocpType', 'pass');
      ocpTT.append(
        this.createTime(doc, arrivalTime, undefined, timeOffset, 'scheduled'),
      );
      if (!isEndOCP) {
        ocpTT.append(this.createSectionTT(doc, trainrunSection, node));
      }
    }
    return ocpTT;
  }

  private createSectionTT(
    doc: XMLDocument,
    trainrunSection: TrainrunSection,
    node: Node,
  ): HTMLElement {
    const sectionTT = doc.createElement('sectionTT');
    sectionTT.setAttribute(
      'section',
      this.createTrackId(
        trainrunSection.getSourceNode(),
        trainrunSection.getTargetNode(),
      ),
    );
    sectionTT.setAttribute(
      'lineRef',
      this.createLineId(
        trainrunSection.getSourceNode(),
        trainrunSection.getTargetNode(),
      ),
    );
    sectionTT.append(this.createTrackRef(doc, trainrunSection, node));
    sectionTT.append(this.createRunTimes(doc, trainrunSection));
    return sectionTT;
  }

  private createRunTimes(
    doc: XMLDocument,
    trainrunSection: TrainrunSection,
  ): HTMLElement {
    const runTimes = doc.createElement('runTimes');
    const minutes = Math.floor(trainrunSection.getTravelTime());
    const seconds = (trainrunSection.getTravelTime() - minutes) * 60;
    let mt = 'PT' + minutes + 'M';
    if (seconds !== 0) {
      mt += seconds + 'S';
    }
    runTimes.setAttribute('minimalTime', mt);
    runTimes.setAttribute('operationalReserve', 'PT0S');
    return runTimes;
  }

  private createTrackRef(
    doc: XMLDocument,
    trainrunSection: TrainrunSection,
    node: Node,
  ): HTMLElement {
    const trackRef = doc.createElement('trackRef');
    trackRef.setAttribute(
      'ref',
      this.createTrackId(
        trainrunSection.getSourceNode(),
        trainrunSection.getTargetNode(),
      ),
    );
    const node1 = trainrunSection.getSourceNode();
    const node2 = trainrunSection.getTargetNode();
    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    if (node === t1) {
      trackRef.setAttribute('dir', 'down');
    } else {
      trackRef.setAttribute('dir', 'up');
    }
    return trackRef;
  }

  private createTime(
    doc: XMLDocument,
    departureTime: number,
    arrivalTime: number,
    timeOffset: number,
    scope: string,
  ) {
    const times = doc.createElement('times');
    times.setAttribute('scope', scope);
    if (arrivalTime !== undefined) {
      times.setAttribute(
        'arrival',
        TimeUtils.convertTime2HHMMSS((timeOffset + arrivalTime) * 60),
      );
    }
    if (departureTime !== undefined) {
      times.setAttribute(
        'departure',
        TimeUtils.convertTime2HHMMSS((timeOffset + departureTime) * 60),
      );
    }
    return times;
  }

  private createTrainPart(doc: XMLDocument, trainrun: Trainrun): HTMLElement[] {
    let freq = trainrun.getFrequency();
    if (freq === null) {
      freq = 60;
    }
    const returns: HTMLElement[] = [];
    const freqRollout = Array.from(Array(Math.ceil(120 / freq)).keys());

    let startNode = this.trainrunService.getStartNodeWithTrainrunId(
      trainrun.getId(),
    );
    const bothNode = this.trainrunService.getBothEndNodesWithTrainrunId(
      trainrun.getId(),
    );
    let endNode =
      bothNode.endNode1 === startNode ? bothNode.endNode2 : bothNode.endNode1;

    startNode = GeneralViewFunctions.getLeftOrTopNode(startNode, endNode);
    endNode = startNode === startNode ? endNode : startNode;

    // FORWARD -> direction
    // Attribute 'code' contains a stringified JSON (temporary used while generating the RailML export)
    let forwardRollout = 1;
    freqRollout.forEach((fLoop) => {
      const timeOffset = trainrun.getFrequencyOffset() + fLoop * freq;
      const trainPart1 = doc.createElement('trainPart');
      const idForward = 'tp_' + trainrun.getId() + '_forward_' + timeOffset;
      trainPart1.setAttribute('id', idForward);
      trainPart1.setAttribute(
        'name',
        trainrun.getTitle() +
          ' ' +
          startNode.getBetriebspunktName().trim() +
          '-' +
          endNode.getBetriebspunktName().trim() +
          ' (' +
          trainrun.getId() +
          ')',
      );
      trainPart1.setAttribute(
        'categoryRef',
        this.createCategoryId(trainrun.getTrainrunCategory()),
      );
      trainPart1.setAttribute(
        'code',
        '{"trainrunId":' +
          trainrun.getId() +
          ',"direction": "forward", "timeOffset": ' +
          timeOffset +
          ',' +
          '"trainNumber": ' +
          trainrun.getId() +
          ',' +
          '"additionalTrainNumber": ' +
          forwardRollout +
          ',' +
          '"startNode": "' +
          startNode.getBetriebspunktName() +
          '", "endNode": "' +
          endNode.getBetriebspunktName() +
          '"}',
      );
      trainPart1.append(
        this.createOcpsTT(doc, trainrun, startNode, timeOffset),
      );
      returns.push(trainPart1);
      forwardRollout += 2;
    });

    // BACKWARD -> direction
    // Attribute 'code' contains a stringified JSON (temporary used while generating the RailML export)
    let backwardRollout = 0;
    freqRollout.forEach((fLoop) => {
      const timeOffset = fLoop * freq;
      const trainPart2 = doc.createElement('trainPart');
      const idBackward = 'tp_' + trainrun.getId() + '_backward_' + timeOffset;
      trainPart2.setAttribute('id', idBackward);
      trainPart2.setAttribute(
        'name',
        trainrun.getTitle() +
          ' ' +
          endNode.getBetriebspunktName().trim() +
          '-' +
          startNode.getBetriebspunktName().trim() +
          ' (' +
          trainrun.getId() +
          ')',
      );
      trainPart2.setAttribute(
        'categoryRef',
        this.createCategoryId(trainrun.getTrainrunCategory()),
      );
      trainPart2.setAttribute(
        'code',
        '{"trainrunId":' +
          trainrun.getId() +
          ',"direction": "backward", "timeOffset": ' +
          timeOffset +
          ',' +
          '"trainNumber": ' +
          trainrun.getId() +
          ',' +
          '"additionalTrainNumber": ' +
          backwardRollout +
          ',' +
          '"startNode": "' +
          endNode.getBetriebspunktName() +
          '", "endNode": "' +
          startNode.getBetriebspunktName() +
          '"}',
      );
      trainPart2.append(this.createOcpsTT(doc, trainrun, endNode, timeOffset));
      returns.push(trainPart2);
      backwardRollout += 2;
    });

    return returns;
  }

  private createTrainGroups(
    doc: XMLDocument,
    trainParts: HTMLElement,
  ): HTMLElement {
    const trainGroups = doc.createElement('trainGroups');
    let trainGroup: HTMLElement;
    let trainRunId = '';
    let grpCounter = 1;
    let sequence = 1;
    trainParts.childNodes.forEach((trainPart: HTMLElement) => {
      const codeObject = JSON.parse(trainPart.getAttribute('code'));
      const currentTrainRunId =
        codeObject.trainrunId + '@' + codeObject.direction;
      if (trainRunId !== currentTrainRunId) {
        trainGroup = doc.createElement('trainGroup');
        trainGroup.setAttribute('id', 'tg_' + grpCounter);
        trainGroups.append(trainGroup);
        trainRunId = currentTrainRunId;
        grpCounter += 1;
        sequence = 1;
      }
      const trainRef = doc.createElement('trainRef');
      trainRef.setAttribute('sequence', '' + sequence);
      trainRef.setAttribute('ref', 'tr_' + trainPart.getAttribute('id'));
      trainGroup.append(trainRef);
      sequence += 1;
    });
    return trainGroups;
  }

  private createTrains(doc: XMLDocument, trainParts: HTMLElement): HTMLElement {
    const trains = doc.createElement('trains');
    trainParts.childNodes.forEach((trainPart: HTMLElement) => {
      const train = doc.createElement('train');
      const codeObject = JSON.parse(trainPart.getAttribute('code'));
      const currentTrainRunId = codeObject.trainrunId;
      const trainrun =
        this.trainrunService.getTrainrunFromId(currentTrainRunId);
      train.setAttribute('id', 'tr_' + trainPart.getAttribute('id'));
      train.setAttribute('name', trainPart.getAttribute('name'));
      train.setAttribute('type', 'commercial');
      //train.setAttribute('trainNumber', '' + codeObject.trainNumber);
      train.setAttribute(
        'additionalTrainNumber',
        '' + codeObject.additionalTrainNumber,
      );
      train.setAttribute(
        'description',
        trainrun.getCategoryShortName() +
          ' ' +
          trainrun.getTitle() +
          ' [' +
          codeObject.startNode +
          '-' +
          codeObject.endNode +
          ']',
      );
      const trainPartSequence = doc.createElement('trainPartSequence');
      trainPartSequence.setAttribute('sequence', '1');
      trainPartSequence.setAttribute('pathStatus', 'planned');
      train.append(trainPartSequence);
      const trainPartRef = doc.createElement('trainPartRef');
      trainPartRef.setAttribute('position', '1');
      trainPartRef.setAttribute('ref', trainPart.getAttribute('id'));
      trainPartSequence.append(trainPartRef);
      trains.append(train);
    });
    return trains;
  }

  private createTrainParts(doc: XMLDocument): HTMLElement {
    const trainParts = doc.createElement('trainParts');
    this.trainrunService.getTrainruns().forEach((trainrun) => {
      const trainPartForwardBackward = this.createTrainPart(doc, trainrun);
      trainPartForwardBackward.forEach((tp) => {
        trainParts.append(tp);
      });
    });
    return trainParts;
  }

  private createCategories(doc: XMLDocument): HTMLElement {
    const categories = doc.createElement('categories');
    this.dataService
      .getNetzgrafikDto()
      .metadata.trainrunCategories.forEach((cat) => {
        const category = doc.createElement('category');
        category.setAttribute('id', this.createCategoryId(cat));
        category.setAttribute('name', cat.shortName);
        category.setAttribute('code', cat.shortName);
        category.setAttribute('description', cat.name);
        categories.append(category);
      });
    return categories;
  }

  private createTimetable(doc: XMLDocument): HTMLElement {
    const timetable = doc.createElement('timetable');
    timetable.setAttribute('id', 'tt01');
    // const timetablePeriods = doc.createElement('timetablePeriods');
    // timetable.append(timetablePeriods);
    timetable.append(this.createCategories(doc));
    // const operatingPeriods = doc.createElement('operatingPeriods');
    // timetable.append(operatingPeriods);
    const trainParts = this.createTrainParts(doc);
    timetable.append(trainParts);
    const trains = this.createTrains(doc, trainParts);
    timetable.append(trains);
    timetable.append(this.createTrainGroups(doc, trainParts));
    // clean up 'code'
    trainParts.childNodes.forEach((trainPart: HTMLElement) =>
      trainPart.removeAttribute('code'),
    );
    return timetable;
  }

  private createOperationControlPoints(doc: XMLDocument): HTMLElement {
    const operationControlPoints = doc.createElement('operationControlPoints');
    this.nodeService.getNodes().forEach((node) => {
      const ocp = doc.createElement('ocp');
      ocp.setAttribute('id', this.createOCPId(node));
      ocp.setAttribute('name', node.getFullName());
      ocp.setAttribute('code', node.getBetriebspunktName());
      ocp.setAttribute(
        'description',
        'Schweizerische Bundesbahnen - Netzgrafik-Editor Export',
      );
      ocp.setAttribute(
        'type',
        node.isNonStopNode() ? 'operationalName' : 'trafficName',
      );
      operationControlPoints.append(ocp);

      // added "fake" GeoCoord for debug
      const geoCoord = doc.createElement('geoCoord');
      geoCoord.setAttribute(
        'coord',
        46.94 -
          node.getPositionY() / 5000 +
          ' ' +
          (7.43 + node.getPositionX() / 5000),
      );
      geoCoord.setAttribute('epsgCode', 'urn:ogc:def:crs:EPSG::4326');
      ocp.append(geoCoord);
    });
    return operationControlPoints;
  }

  private createInfrastructure(doc: XMLDocument): HTMLElement {
    const infrastructure = doc.createElement('infrastructure');
    infrastructure.setAttribute('id', 'inf01');
    this.createTracksAndTrackgroups(doc).forEach((el) =>
      infrastructure.append(el),
    );
    infrastructure.append(this.createOperationControlPoints(doc));
    //infrastructure.append(RailMLExporter.createRollinstock(doc));
    return infrastructure;
  }

  private createTracksAndTrackgroups(doc: XMLDocument): HTMLElement[] {
    class NodeConnection {
      constructor(
        public node1: Node,
        public node2: Node,
      ) {}
    }

    const nodeConnections: NodeConnection[] = [];
    this.trainrunSectionService
      .getTrainrunSections()
      .forEach((ts: TrainrunSection) => {
        const obj: NodeConnection = new NodeConnection(
          ts.getSourceNode(),
          ts.getTargetNode(),
        );
        nodeConnections.push(obj);
      });

    const distinctNodeConnections = nodeConnections.filter(
      (nodeConnection, i, arr) =>
        arr.findIndex(
          (t) =>
            this.createTrackId(t.node1, t.node2) ===
            this.createTrackId(nodeConnection.node1, nodeConnection.node2),
        ) === i,
    );

    const tracks = doc.createElement('tracks');
    distinctNodeConnections.forEach((t) => {
      const track = this.createTrack(doc, t.node1, t.node2);
      tracks.append(track);
    });

    const trackGroups = doc.createElement('trackGroups');
    distinctNodeConnections.forEach((t) => {
      const line = this.createLine(doc, t.node1, t.node2);
      trackGroups.append(line);
    });
    return [tracks, trackGroups];
  }

  private createTrackTopology(
    doc: XMLDocument,
    node1: Node,
    node2: Node,
  ): HTMLElement {
    const trackTopology = doc.createElement('trackTopology');

    const trackId = this.createTrackId(node1, node2);

    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    const t2 = t1 === node1 ? node2 : node1;

    const trackBegin = doc.createElement('trackBegin');
    trackBegin.setAttribute('id', trackId + '-begin');
    trackBegin.setAttribute('pos', '0');
    const macroscopicNode1 = doc.createElement('macroscopicNode');
    macroscopicNode1.setAttribute('ocpRef', this.createOCPId(t1));
    trackBegin.append(macroscopicNode1);
    trackTopology.append(trackBegin);

    const trackEnd = doc.createElement('trackEnd');
    trackEnd.setAttribute('id', trackId + '-end');
    trackEnd.setAttribute('pos', '400');
    const macroscopicNode2 = doc.createElement('macroscopicNode');
    macroscopicNode2.setAttribute('ocpRef', this.createOCPId(t2));
    trackEnd.append(macroscopicNode2);
    trackTopology.append(trackEnd);

    return trackTopology;
  }

  private createTrack(doc: XMLDocument, node1: Node, node2: Node): HTMLElement {
    const track = doc.createElement('track');
    const trackId = this.createTrackId(node1, node2);
    track.setAttribute('id', trackId);
    track.setAttribute('name', this.createTrackName(node1, node2));
    track.setAttribute('type', 'mainTrack');
    track.setAttribute('mainDir', 'none');
    track.append(this.createTrackTopology(doc, node1, node2));
    return track;
  }

  private createLine(doc: XMLDocument, node1: Node, node2: Node): HTMLElement {
    const line = doc.createElement('line');
    const lineId = this.createLineId(node1, node2);
    line.setAttribute('id', lineId);
    line.setAttribute('name', this.createLineName(node1, node2));
    line.setAttribute('description', this.createLineDescription(node1, node2));
    const trackRef = doc.createElement('trackRef');
    trackRef.setAttribute('ref', this.createTrackId(node1, node2));
    line.append(trackRef);
    return line;
  }

  private createTrackName(node1: Node, node2: Node): string {
    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    const t2 = t1 === node1 ? node2 : node1;
    return (
      t1.getBetriebspunktName().trim() + '-' + t2.getBetriebspunktName().trim()
    );
  }

  private createTrackId(node1: Node, node2: Node): string {
    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    const t2 = t1 === node1 ? node2 : node1;
    return (
      'st' +
      t1.getId() +
      t1.getBetriebspunktName().trim() +
      t2.getId() +
      t2.getBetriebspunktName().trim()
    );
  }

  private createLineName(node1: Node, node2: Node): string {
    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    const t2 = t1 === node1 ? node2 : node1;
    return (
      t1.getBetriebspunktName().trim() + '-' + t2.getBetriebspunktName().trim()
    );
  }

  private createLineDescription(node1: Node, node2: Node): string {
    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    const t2 = t1 === node1 ? node2 : node1;
    return t1.getFullName().trim() + ' - ' + t2.getFullName().trim();
  }

  private createLineId(node1: Node, node2: Node): string {
    const t1 = GeneralViewFunctions.getLeftOrTopNode(node1, node2);
    const t2 = t1 === node1 ? node2 : node1;
    return (
      's' +
      t1.getId() +
      t1.getBetriebspunktName().trim() +
      t2.getId() +
      t2.getBetriebspunktName().trim()
    );
  }

  private createOCPId(node: Node): string {
    return 'n0085' + node.getBetriebspunktName().trim() + node.getId();
  }

  private createCategoryId(cat: TrainrunCategory): string {
    return 'cat' + cat.id + cat.shortName.trim();
  }
}
