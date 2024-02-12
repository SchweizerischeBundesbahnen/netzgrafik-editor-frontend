import {DataService} from '../data/data.service';
import {NodeService} from '../data/node.service';
import {ResourceService} from '../data/resource.service';
import {TrainrunService} from '../data/trainrun.service';
import {TrainrunSectionService} from '../data/trainrunsection.service';
import {StammdatenService} from '../data/stammdaten.service';
import {NoteService} from '../data/note.service';
import {Node} from '../../models/node.model';
import {TrainrunSection} from '../../models/trainrunsection.model';
import {LogService} from '../../logger/log.service';
import {LogPublishersService} from '../../logger/log.publishers.service';
import {LabelGroupService} from '../data/labelgroup.service';
import {LabelService} from '../data/label.serivce';
import {NetzgrafikUnitTesting} from '../../../integration-testing/netzgrafik.unit.testing';
import {FilterService} from '../ui/filter.service';
import {NetzgrafikColoringService} from '../data/netzgrafikColoring.service';
import {IsTrainrunSelectedService} from './is-trainrun-section.service';

describe('TrainrunSectionService', () => {
  let dataService: DataService;
  let nodeService: NodeService;
  let resourceService: ResourceService;
  let trainrunService: TrainrunService;
  let trainrunSectionService: TrainrunSectionService;
  let stammdatenService: StammdatenService;
  let noteService: NoteService;
  let nodes: Node[] = null;
  let trainrunSections: TrainrunSection[] = null;
  let logService: LogService = null;
  let logPublishersService: LogPublishersService = null;
  let labelGroupService: LabelGroupService = null;
  let labelService: LabelService = null;
  let filterService: FilterService = null;
  let netzgrafikColoringService: NetzgrafikColoringService = null;

  beforeEach(() => {
    stammdatenService = new StammdatenService();
    resourceService = new ResourceService();
    logPublishersService = new LogPublishersService();
    logService = new LogService(logPublishersService);
    labelGroupService = new LabelGroupService(logService);
    labelService = new LabelService(logService, labelGroupService);
    filterService = new FilterService(labelService, labelGroupService);
    trainrunService = new TrainrunService(
      logService,
      labelService,
      filterService,
    );
    trainrunSectionService = new TrainrunSectionService(
      logService,
      trainrunService,
      filterService,
    );
    nodeService = new NodeService(
      logService,
      resourceService,
      trainrunService,
      trainrunSectionService,
      labelService,
      filterService,
    );
    noteService = new NoteService(logService, labelService, filterService);
    netzgrafikColoringService = new NetzgrafikColoringService(logService);
    dataService = new DataService(
      resourceService,
      nodeService,
      trainrunSectionService,
      trainrunService,
      stammdatenService,
      noteService,
      labelService,
      labelGroupService,
      filterService,
      netzgrafikColoringService,
    );

    nodeService.nodes.subscribe((updatesNodes) => (nodes = updatesNodes));
    trainrunSectionService.trainrunSections.subscribe(
      (updatesTrainrunSections) => (trainrunSections = updatesTrainrunSections),
    );
  });

  it('Test load data', () => {
    dataService.loadNetzgrafikDto(
      NetzgrafikUnitTesting.getUnitTestNetzgrafik(),
    );
    expect(nodes.length).toBe(5);
    expect(trainrunSections.length).toBe(8);
  });

  it('TrainrunSectionService.updateTrainrunSectionNumberOfStops', () => {
    dataService.loadNetzgrafikDto(
      NetzgrafikUnitTesting.getUnitTestNetzgrafik(),
    );
    const ts = trainrunSectionService.getTrainrunSectionFromId(1);
    trainrunSectionService.updateTrainrunSectionNumberOfStops(ts, 0);
    expect(ts.getNumberOfStops()).toBe(0);
    trainrunSectionService.updateTrainrunSectionNumberOfStops(ts, undefined);
    expect(ts.getNumberOfStops()).toBe(undefined);
    trainrunSectionService.updateTrainrunSectionNumberOfStops(ts, 3);
    expect(ts.getNumberOfStops()).toBe(3);
  });

  it('TrainrunSectionService.setTrainrunSectionAsSelected', () => {
    dataService.loadNetzgrafikDto(
      NetzgrafikUnitTesting.getUnitTestNetzgrafik(),
    );
    const ts = trainrunSectionService.getTrainrunSectionFromId(1);
    expect(trainrunSectionService.getSelectedTrainrunSection()).toBe(null);
    trainrunSectionService.setTrainrunSectionAsSelected(0);
    expect(trainrunSectionService.getSelectedTrainrunSection().getId()).toBe(0);
  });

  it('TrainrunSectionService.boundMinutesToOneHour', () => {
    expect(TrainrunSectionService.boundMinutesToOneHour(0)).toBe(0);
    expect(TrainrunSectionService.boundMinutesToOneHour(120)).toBe(0);
    expect(TrainrunSectionService.boundMinutesToOneHour(130)).toBe(10);
    expect(TrainrunSectionService.boundMinutesToOneHour(undefined)).toBe(
      undefined,
    );
    expect(TrainrunSectionService.boundMinutesToOneHour(-30)).toBe(30);
    expect(TrainrunSectionService.boundMinutesToOneHour(-330)).toBe(30);
  });

  it('TrainrunSectionService.propagateTimesForNewTrainrunSection', () => {
    dataService.loadNetzgrafikDto(
      NetzgrafikUnitTesting.getUnitTestNetzgrafik(),
    );
    const ts = trainrunSectionService.getTrainrunSectionFromId(1);
    expect(ts.getTargetDepartureConsecutiveTime()).toBe(38);
    expect(ts.getTargetArrivalConsecutiveTime()).toBe(22);
    expect(ts.getSourceDepartureConsecutiveTime()).toBe(12);
    expect(ts.getSourceArrivalConsecutiveTime()).toBe(48);
    // should not have any impact
    trainrunSectionService.propagateTimesForNewTrainrunSection(ts);
    expect(ts.getTargetDepartureConsecutiveTime()).toBe(38);
    expect(ts.getTargetArrivalConsecutiveTime()).toBe(22);
    expect(ts.getSourceDepartureConsecutiveTime()).toBe(12);
    expect(ts.getSourceArrivalConsecutiveTime()).toBe(48);
  });
});
