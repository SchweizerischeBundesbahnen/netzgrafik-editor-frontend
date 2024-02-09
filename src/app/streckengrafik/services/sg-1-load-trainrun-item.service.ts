import { Injectable, OnDestroy } from '@angular/core';
import { Trainrun } from '../../models/trainrun.model';
import { TrainrunItem } from '../model/trainrunItem';
import { PathItem } from '../model/pathItem';
import { GeneralViewFunctions } from '../../view/util/generalViewFunctions';
import { PathNode } from '../model/pathNode';
import { PathSection } from '../model/pathSection';
import { Node } from '../../models/node.model';
import { TrainrunIterator } from '../../services/util/trainrun.iterator';
import { TrainrunSection } from '../../models/trainrunsection.model';
import { TrainrunService } from '../../services/data/trainrun.service';
import { FilterService } from '../../services/ui/filter.service';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TrainrunSectionService } from '../../services/data/trainrunsection.service';
import { TrackData } from '../model/trackData';
import { UiInteractionService } from '../../services/ui/ui.interaction.service';
import { EditorMode } from '../../view/editor-menu/editor-mode';
import { TrainrunTemplatePathAlignmentType } from '../model/enum/trainrun-template-path-alignment-type';
import { IsTrainrunSelectedService } from '../../services/data/is-trainrun-section.service';

@Injectable({
  providedIn: 'root',
})
export class Sg1LoadTrainrunItemService implements OnDestroy {
  private readonly trainrunItemSubject = new BehaviorSubject<TrainrunItem>(
    undefined,
  );
  private readonly trainrunItem$ = this.trainrunItemSubject.asObservable();

  private readonly trainrunItemsSubject = new BehaviorSubject<TrainrunItem[]>(
    undefined,
  );
  private readonly trainrunItems$ = this.trainrunItemsSubject.asObservable();

  trainruns: Trainrun[];
  trainrunSections: TrainrunSection[];
  trainrunIdSelectedByClick: number;
  private cachedTrainrunItems: TrainrunItem = undefined;

  private readonly destroyed$ = new Subject<void>();
  private forwardTrainrunSectionGroup: TrainrunSectionGroup[];

  constructor(
    private readonly trainrunService: TrainrunService,
    private readonly trainrunSectionService: TrainrunSectionService,
    private readonly filterService: FilterService,
    private readonly isTrainrunSelectedService: IsTrainrunSelectedService,
    private readonly uiInteractionService: UiInteractionService,
  ) {
    this.isTrainrunSelectedService
      .getTrainrunIdSelectedByClick()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((trainrunIdSelectedByClick) => {
        if (this.trainrunIdSelectedByClick !== trainrunIdSelectedByClick) {
          this.trainrunIdSelectedByClick = trainrunIdSelectedByClick;
          this.render();
        }
      });

    this.trainrunService.trainruns
      .pipe(takeUntil(this.destroyed$))
      .subscribe((trainruns) => {
        if (this.trainruns !== trainruns) {
          this.trainruns = trainruns;
          this.render();
        }
      });

    this.trainrunSectionService.trainrunSections
      .pipe(takeUntil(this.destroyed$))
      .subscribe((trainrunSections) => {
        this.trainrunSections = trainrunSections;
        this.render();
      });

    this.filterService.filter.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.render();
    });

    this.uiInteractionService.setEditorModeObservable
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.render();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getTrainrunItem(): Observable<TrainrunItem> {
    return this.trainrunItem$;
  }

  getTrainrunItems(): Observable<TrainrunItem[]> {
    return this.trainrunItems$;
  }

  private render() {
    if (
      this.uiInteractionService.getEditorMode() !==
      EditorMode.StreckengrafikEditing
    ) {
      return;
    }

    if (!this.trainruns) {
      return;
    }

    if (this.trainruns.length === 0) {
      return;
    }

    if (!this.trainrunSections) {
      return;
    }

    if (this.trainrunSections.length === 0) {
      return;
    }

    const selectedTrainrun: Trainrun = this.getSelectedTrainrun();
    if (selectedTrainrun) {
      if (selectedTrainrun.selected()) {
        this.cachedTrainrunItems = this.loadTrainrunItem(
          selectedTrainrun,
          true,
        );
      }
    }

    if (this.cachedTrainrunItems !== undefined) {
      this.trainrunItemSubject.next(this.cachedTrainrunItems);
      this.trainrunItemsSubject.next(
        this.loadTrainrunItems(this.cachedTrainrunItems),
      );
    }
  }

  private getTurnaroundStartNodeForward(
    fromNode: Node,
    trainrunSection: TrainrunSection,
    trainrun: Trainrun,
  ): number {
    const depTime = fromNode.getDepartureConsecutiveTime(trainrunSection);

    let wendeTime =
      (Math.max(trainrun.getFrequency(), 60) -
        2 * fromNode.getArrivalTime(trainrunSection)) %
      trainrun.getFrequency();
    if (wendeTime < 0) {
      wendeTime += trainrun.getFrequency();
    }
    if (wendeTime < trainrun.getTrainrunCategory().minimalTurnaroundTime) {
      wendeTime += trainrun.getFrequency();
    }
    return depTime - wendeTime;
  }

  private getTurnaroundEndNodeForward(
    toNode: Node,
    trainrunSection: TrainrunSection,
    trainrun: Trainrun,
  ): number {
    const arrTime = toNode.getArrivalConsecutiveTime(trainrunSection);

    let wendeTime =
      (Math.max(trainrun.getFrequency(), 60) -
        2 * toNode.getArrivalTime(trainrunSection)) %
      trainrun.getFrequency();
    if (wendeTime < 0) {
      wendeTime += trainrun.getFrequency();
    }
    if (wendeTime < trainrun.getTrainrunCategory().minimalTurnaroundTime) {
      wendeTime += trainrun.getFrequency();
    }
    return arrTime + wendeTime;
  }

  private getTurnaroundStartNodeBackward(
    fromNode: Node,
    trainrunSection: TrainrunSection,
    trainrun: Trainrun,
  ): number {
    return this.getTurnaroundStartNodeForward(
      fromNode,
      trainrunSection,
      trainrun,
    );
  }

  private getTurnaroundEndNodeBackward(
    fromNode: Node,
    trainrunSection: TrainrunSection,
    trainrun: Trainrun,
  ): number {
    return this.getTurnaroundEndNodeForward(
      fromNode,
      trainrunSection,
      trainrun,
    );
  }

  private loadTrainrunItem(
    trainrun: Trainrun,
    onlyForward: boolean,
  ): TrainrunItem {
    let index = 0;
    let trainrunStartTime = 0;
    let trainrunEndTime = 0;
    const pathItems: PathItem[] = [];
    if (
      this.trainrunService.getTrainrunFromId(trainrun.getId()) === undefined
    ) {
      return undefined;
    }
    const bothEndNodes = this.trainrunService.getBothEndNodesWithTrainrunId(
      trainrun.getId(),
    );
    let startForwardNode = GeneralViewFunctions.getLeftOrTopNode(
      bothEndNodes.endNode1,
      bothEndNodes.endNode2,
    );
    let startBackwardNode =
      bothEndNodes.endNode1.getId() === startForwardNode.getId()
        ? bothEndNodes.endNode2
        : bothEndNodes.endNode1;

    if (onlyForward) {
      this.forwardTrainrunSectionGroup = this.trainrunSectionGroup(
        trainrun.getId(),
        startForwardNode,
      );
    } else {
      if (
        this.isTrainRunWayDirectionBackward(
          trainrun,
          startForwardNode,
          startBackwardNode,
          this.forwardTrainrunSectionGroup,
        )
      ) {
        const nextStartForwardNode = startBackwardNode;
        const nextStartBackwardNode = startForwardNode;
        startForwardNode = nextStartForwardNode;
        startBackwardNode = nextStartBackwardNode;
      }
    }

    const forwardTrainrunSectionGroup = this.trainrunSectionGroup(
      trainrun.getId(),
      startForwardNode,
    );
    const backwardTrainrunSectionGroup = this.trainrunSectionGroup(
      trainrun.getId(),
      startBackwardNode,
    );

    let forwardStartNode: PathNode = undefined;
    let forwardEndNode: PathNode = undefined;
    let backwardStartNode: PathNode = undefined;
    let backwardEndNode: PathNode = undefined;

    forwardTrainrunSectionGroup.forEach((trainrunSectionGroup) => {
      const trainrunSection =
        trainrunSectionGroup.trainrunSectionWithNodes.trainrunSection;
      const fromNode = trainrunSectionGroup.trainrunSectionWithNodes.fromNode;
      const toNode = trainrunSectionGroup.trainrunSectionWithNodes.toNode;
      let toTrainrunSection = undefined;
      if (trainrunSectionGroup.toTrainrunSectionWithNodes) {
        toTrainrunSection =
          trainrunSectionGroup.toTrainrunSectionWithNodes.trainrunSection;
      }

      // First Node;
      if (fromNode.getId() === startForwardNode.getId()) {
        const sourcePathNode = new PathNode(
          fromNode.getDepartureConsecutiveTime(trainrunSection),
          this.getTurnaroundStartNodeForward(
            fromNode,
            trainrunSection,
            trainrun,
          ),
          fromNode.getId(),
          fromNode.getBetriebspunktName(),
          index++,
          new TrackData(1), //forward track 1
          false,
          !this.filterService.filterNode(fromNode),
        );
        trainrunStartTime = sourcePathNode.departureTime;
        forwardStartNode = sourcePathNode;
        pathItems.push(sourcePathNode);
      }

      const pathSection = new PathSection(
        trainrunSection.getId(),
        fromNode.getDepartureConsecutiveTime(trainrunSection),
        toNode.getArrivalConsecutiveTime(trainrunSection),
        trainrunSection.getNumberOfStops(),
        new TrackData(1),
      );
      trainrunEndTime = toNode.getArrivalConsecutiveTime(trainrunSection);
      pathItems.push(pathSection);

      let arrivalTime = toNode.getArrivalConsecutiveTime(trainrunSection);
      if (toTrainrunSection) {
        arrivalTime = toNode.getDepartureConsecutiveTime(toTrainrunSection);
      }
      const targetPathNode = new PathNode(
        arrivalTime,
        toNode.getArrivalConsecutiveTime(trainrunSection),
        toNode.getId(),
        toNode.getBetriebspunktName(),
        index++,
        new TrackData(1), // forward
        false,
        !this.filterService.filterNode(toNode),
      );

      if (toNode.getId() === startBackwardNode.getId()) {
        targetPathNode.departureTime = this.getTurnaroundEndNodeForward(
          toNode,
          trainrunSection,
          trainrun,
        );
        forwardEndNode = targetPathNode;
      }
      pathItems.push(targetPathNode);
    });
    if (!onlyForward) {
      backwardTrainrunSectionGroup.forEach((trainrunSectionGroup) => {
        const trainrunSection =
          trainrunSectionGroup.trainrunSectionWithNodes.trainrunSection;
        const fromNode = trainrunSectionGroup.trainrunSectionWithNodes.fromNode;
        const toNode = trainrunSectionGroup.trainrunSectionWithNodes.toNode;
        let toTrainrunSection = undefined;
        if (trainrunSectionGroup.toTrainrunSectionWithNodes) {
          toTrainrunSection =
            trainrunSectionGroup.toTrainrunSectionWithNodes.trainrunSection;
        }
        // Erster Node
        if (fromNode.getId() === startBackwardNode.getId()) {
          const sourcePathNode = new PathNode(
            fromNode.getDepartureConsecutiveTime(trainrunSection),
            this.getTurnaroundStartNodeBackward(
              fromNode,
              trainrunSection,
              trainrun,
            ),
            fromNode.getId(),
            fromNode.getBetriebspunktName(),
            index-- - 1,
            new TrackData(2), // backward
            true,
            !this.filterService.filterNode(fromNode),
          );
          backwardStartNode = sourcePathNode;
          pathItems.push(sourcePathNode);
        }

        const pathSection = new PathSection(
          trainrunSection.getId(),
          fromNode.getDepartureConsecutiveTime(trainrunSection),
          toNode.getArrivalConsecutiveTime(trainrunSection),
          trainrunSection.getNumberOfStops(),
          new TrackData(1),
          true,
        );
        trainrunEndTime = toNode.getArrivalConsecutiveTime(trainrunSection);
        pathItems.push(pathSection);

        let arrivalTime = toNode.getArrivalConsecutiveTime(trainrunSection);
        if (toTrainrunSection) {
          arrivalTime = toNode.getDepartureConsecutiveTime(toTrainrunSection);
        }
        const targetPathNode = new PathNode(
          arrivalTime,
          toNode.getArrivalConsecutiveTime(trainrunSection),
          toNode.getId(),
          toNode.getBetriebspunktName(),
          index-- - 1,
          new TrackData(2), // backward
          true,
          !this.filterService.filterNode(toNode),
        );

        if (toNode.getId() === startForwardNode.getId()) {
          targetPathNode.departureTime = this.getTurnaroundEndNodeBackward(
            toNode,
            trainrunSection,
            trainrun,
          );
          backwardEndNode = targetPathNode;
        }

        pathItems.push(targetPathNode);
      });
    }

    if (forwardEndNode !== undefined && backwardStartNode !== undefined) {
      if (
        forwardEndNode.departureTime - forwardEndNode.arrivalTime >=
        trainrun.getFrequency()
      ) {
        forwardEndNode.arrivalTime =
          backwardStartNode.arrivalTime + trainrun.getFrequency();
        forwardEndNode.departureTime =
          backwardStartNode.departureTime + trainrun.getFrequency();
      }
    }
    if (backwardEndNode !== undefined && forwardStartNode !== undefined) {
      if (
        backwardEndNode.departureTime - backwardEndNode.arrivalTime >=
        trainrun.getFrequency()
      ) {
        backwardEndNode.arrivalTime =
          forwardStartNode.arrivalTime + trainrun.getFrequency();
        backwardEndNode.departureTime =
          forwardStartNode.departureTime + trainrun.getFrequency();
      }
    }

    pathItems.forEach((pathItem, i) => {
      if (pathItem.isNode()) {
        const pathNode = pathItem.getPathNode();
        pathNode.arrivalPathSection = this.getPreviousPathSection(pathItems, i);
        pathNode.departurePathSection = this.getNextPathSection(pathItems, i);
      }
      if (pathItem.isSection()) {
        const pathSection = pathItem.getPathSection();
        pathSection.departurePathNode = this.getPreviousPathNode(pathItems, i);
        pathSection.arrivalPathNode = this.getNextPathNode(pathItems, i);
        pathSection.isFilteredDepartureNode = this.getDepartureNodeIsFilterd(
          pathItems,
          i,
        );
        pathSection.isFilteredArrivalNode = this.getArrivalNodeIsFilterdr(
          pathItems,
          i,
        );
        pathSection.arrivalBranchEndNode = this.getFirstPathNode(pathItems);
        pathSection.departureBranchEndNode = this.getLastPathNode(pathItems);
      }
    });

    return new TrainrunItem(
      trainrun.getId(),
      trainrun.getFrequency(),
      trainrun.getFrequencyOffset(),
      trainrunStartTime,
      trainrunEndTime,
      trainrun.getTitle(),
      trainrun.getCategoryShortName(),
      trainrun.getCategoryColorRef(),
      pathItems,
    );
  }

  private loadTrainrunItems(
    templateTrainrunItem: TrainrunItem,
  ): TrainrunItem[] {
    const trainrunItems: TrainrunItem[] = [];
    if (this.trainruns) {
      this.trainruns.forEach((trainrun: Trainrun) => {
        if (this.filterService.filterTrainrun(trainrun)) {
          const trainrunItem = this.loadTrainrunItem(trainrun, false);
          this.sortTrainrunItemAndRotateAlongTemplatePath(
            trainrun,
            trainrunItem,
            templateTrainrunItem,
          );
          trainrunItems.push(trainrunItem);
        }
      });
    }
    return trainrunItems;
  }

  sortTrainrunItemAndRotateAlongTemplatePath(
    trainrun: Trainrun,
    trainrunItem: TrainrunItem,
    templateTrainrunItem: TrainrunItem,
  ) {
    /**** Adrian Egli (adrian.egli@sbb.ch)
    TODO - This sortTrainrunItemAndRotateAlongTemplatePath is might just a hot fix for special case if there is a trainrun running from
    [ A - B - C - B - D | A - B - B - C | .... or ... ] -> passes two times same node
    There is sill an issue in the CODE - if the trainrun passes the second time a node, the in-/out
    branching edge will not all be rendered!
    */

    /*
    console.log('================================================================================================================');
    console.log(trainrun, 'trainrunItem', trainrunItem, 'template', templateTrainrunItem);
    console.log('----------------------------------------------------------------------------------------------------------------');
     */
    this.classifyPathItem(trainrun, trainrunItem, templateTrainrunItem);

    const indicesForward: number[] = [];
    const indicesBackward: number[] = [];
    let maxIndex = 0;
    trainrunItem.pathItems.forEach((item: PathItem, index: number) => {
      if (item.isSection()) {
        if (!item.backward) {
          // forward
          const section = item.getPathSection();
          if (
            section.isPartOfTemplatePath ===
            TrainrunTemplatePathAlignmentType.SectionOppositeDirection
          ) {
            indicesForward.push(index);
          }
        } else {
          // backward
          const section = item.getPathSection();
          if (
            section.isPartOfTemplatePath ===
            TrainrunTemplatePathAlignmentType.SectionSameDirection
          ) {
            indicesBackward.push(index);
          }
        }
      }
      if (item.isNode()) {
        maxIndex = Math.max(item.getPathNode().index, maxIndex);
      }
    });

    // console.log(indicesForward, indicesBackward);
    let swapIndF: number[] = [];
    const collectRotateDirectionF: number[] = [];
    indicesForward.forEach((v) => {
      swapIndF.push(v - 2);
      swapIndF.push(v - 1);
      swapIndF.push(v);
      swapIndF.push(v + 1);
      swapIndF.push(v + 2);

      if (v > 1) {
        const predecessor = trainrunItem.pathItems[v - 2];
        if (predecessor.isSection()) {
          if (
            predecessor.getPathSection().isPartOfTemplatePath ===
            TrainrunTemplatePathAlignmentType.SectionSameDirection
          ) {
            collectRotateDirectionF.push(v);
          }
        }
      }

      if (v < trainrunItem.pathItems.length / 2 - 3) {
        const successor = trainrunItem.pathItems[v + 2];
        if (successor.isSection()) {
          if (
            successor.getPathSection().isPartOfTemplatePath ===
            TrainrunTemplatePathAlignmentType.SectionSameDirection
          ) {
            collectRotateDirectionF.push(v);
          }
        }
      }
    });

    let swapIndB: number[] = [];
    const collectRotateDirectionB: number[] = [];
    indicesBackward.forEach((v) => {
      swapIndB.push(v - 2);
      swapIndB.push(v - 1);
      swapIndB.push(v);
      swapIndB.push(v + 1);
      swapIndB.push(v + 2);

      if (v < trainrunItem.pathItems.length - 3) {
        const successor = trainrunItem.pathItems[v + 2];
        if (successor.isSection()) {
          if (
            successor.getPathSection().isPartOfTemplatePath ===
            TrainrunTemplatePathAlignmentType.SectionOppositeDirection
          ) {
            collectRotateDirectionB.push(v);
          }
        }
      }

      if (v > 1) {
        const predecessor = trainrunItem.pathItems[v - 2];
        if (predecessor.isSection()) {
          if (
            predecessor.getPathSection().isPartOfTemplatePath ===
            TrainrunTemplatePathAlignmentType.SectionOppositeDirection
          ) {
            collectRotateDirectionB.push(v);
          }
        }
      }
    });

    swapIndB = swapIndB.reverse();
    swapIndF = swapIndF.filter((v, i, a) => a.indexOf(v) === i);
    swapIndB = swapIndB.filter((v, i, a) => a.indexOf(v) === i);

    // console.log(trainrunItem.pathItems.length, swapIndF, swapIndB);

    swapIndF.forEach((v, index) => {
      if (swapIndF[index] >= 0) {
        if (index === 0) {
          if (
            trainrunItem.pathItems[swapIndF[index]].isPartOfTemplatePath !==
            TrainrunTemplatePathAlignmentType.SectionNotFound
          ) {
            console.log('ERROR - sg-1-load-trainrun-item.service.ts');
            return;
          }
        }

        const fItem = trainrunItem.pathItems[swapIndF[index]];
        const bItem = trainrunItem.pathItems[swapIndB[index]];
        fItem.backward = true;
        bItem.backward = false;
        fItem.oppDirectionTemplatePath = true;
        bItem.oppDirectionTemplatePath = true;
        if (fItem.isSection()) {
          const dEnd = fItem.getPathSection().departureBranchEndNode;
          fItem.getPathSection().departureBranchEndNode =
            fItem.getPathSection().arrivalBranchEndNode;
          fItem.getPathSection().arrivalBranchEndNode = dEnd;
        }
        if (bItem.isSection()) {
          const dEnd = bItem.getPathSection().departureBranchEndNode;
          bItem.getPathSection().departureBranchEndNode =
            bItem.getPathSection().arrivalBranchEndNode;
          bItem.getPathSection().arrivalBranchEndNode = dEnd;
        }

        trainrunItem.pathItems[swapIndF[index]] = bItem;
        trainrunItem.pathItems[swapIndB[index]] = fItem;
      }
    });

    /*
    trainrunItem.pathItems.forEach((item: PathItem) => {
      console.log(
        item.backward ? 'B ' : 'F ',
        'OPP:', item.oppDirectionTemplatePath ? 'Y ' : 'N ',
        TrainrunTemplatePathAlignmentType[item.isPartOfTemplatePath],
        item);
    });
    */
  }

  classifyPathItem(
    trainrun: Trainrun,
    trainrunItem: TrainrunItem,
    templateTrainrunItem: TrainrunItem,
  ) {
    trainrunItem.pathItems.forEach((item: PathItem) => {
      if (item.isSection()) {
        const section = item.getPathSection();
        const found = templateTrainrunItem.pathItems.find(
          (tempItem: PathItem) => {
            if (tempItem.isNode()) {
              return false;
            }
            const tempSection = tempItem.getPathSection();
            return (
              section.departurePathNode.nodeId ===
                tempSection.departurePathNode.nodeId &&
              section.arrivalPathNode.nodeId ===
                tempSection.arrivalPathNode.nodeId
            );
          },
        );
        item.isPartOfTemplatePath =
          found !== undefined
            ? TrainrunTemplatePathAlignmentType.SectionSameDirection
            : TrainrunTemplatePathAlignmentType.SectionNotFound;

        if (found === undefined) {
          const oppFound = templateTrainrunItem.pathItems.find(
            (tempItem: PathItem) => {
              if (tempItem.isNode()) {
                return false;
              }
              const tempSection = tempItem.getPathSection();
              return (
                section.arrivalPathNode.nodeId ===
                  tempSection.departurePathNode.nodeId &&
                section.departurePathNode.nodeId ===
                  tempSection.arrivalPathNode.nodeId
              );
            },
          );

          item.isPartOfTemplatePath =
            oppFound !== undefined
              ? TrainrunTemplatePathAlignmentType.SectionOppositeDirection
              : TrainrunTemplatePathAlignmentType.SectionNotFound;
        }
      } else {
        const node = item.getPathNode();
        const found = templateTrainrunItem.pathItems.find(
          (tempItem: PathItem) => {
            if (tempItem.isSection()) {
              return false;
            }
            const tempNode = tempItem.getPathNode();
            return tempNode.nodeId === node.nodeId;
          },
        );
        item.isPartOfTemplatePath =
          found !== undefined
            ? TrainrunTemplatePathAlignmentType.NodeFound
            : TrainrunTemplatePathAlignmentType.NodeNotFound;
      }
    });

    // isPartOfTemplatePath
  }

  isTrainRunWayDirectionBackward(
    trainrun,
    startForwardNode,
    startBackwardNode,
    selectedForwardTrainrunSectionGroups: TrainrunSectionGroup[],
  ): boolean {
    const forwardTrainrunSectionGroups = this.trainrunSectionGroup(
      trainrun.getId(),
      startForwardNode,
    );
    const backwardTrainrunSectionGroups = this.trainrunSectionGroup(
      trainrun.getId(),
      startBackwardNode,
    );

    const selectedPaths = this.betriebspunktNamePaths(
      selectedForwardTrainrunSectionGroups,
    );
    const forwardPaths = this.betriebspunktNamePaths(
      forwardTrainrunSectionGroups,
    );
    const backwardPaths = this.betriebspunktNamePaths(
      backwardTrainrunSectionGroups,
    );

    let rateForward = this.ratePath(
      selectedPaths,
      this.removeNoMatchinNodeName(selectedPaths, forwardPaths),
    );
    let rateBackward = this.ratePath(
      selectedPaths,
      this.removeNoMatchinNodeName(selectedPaths, backwardPaths),
    );
    if (rateForward === rateBackward) {
      rateForward = this.ratePath(
        this.addStartEnde(selectedPaths),
        this.addStartEnde(forwardPaths),
      );
      rateBackward = this.ratePath(
        this.addStartEnde(selectedPaths),
        this.addStartEnde(backwardPaths),
      );
    }
    return rateForward < rateBackward;
  }

  setDataOnlyForTestPurpose() {
    this.trainruns = this.trainrunService.getTrainruns();
    this.trainrunSections = this.trainrunSectionService.getTrainrunSections();
    if (this.trainrunService.getSelectedTrainrun()) {
      this.trainrunIdSelectedByClick = this.trainrunService
        .getSelectedTrainrun()
        .getId();
    }
    this.render();
  }

  private betriebspunktNamePaths(trainrunSectionGroups) {
    const paths = [];
    trainrunSectionGroups.forEach((trainrunSectionGroup) => {
      if (trainrunSectionGroup.trainrunSectionWhitheNodes) {
        if (trainrunSectionGroup.trainrunSectionWhitheNodes.fromNode) {
          paths.push(
            trainrunSectionGroup.trainrunSectionWhitheNodes.fromNode.getBetriebspunktName(),
          );
        }
        if (trainrunSectionGroup.trainrunSectionWhitheNodes.toNode) {
          paths.push(
            trainrunSectionGroup.trainrunSectionWhitheNodes.toNode.getBetriebspunktName(),
          );
        }
      }
    });
    return paths;
  }

  private removeNoMatchinNodeName(selectedPaths, paths) {
    const returnPaths = [];
    paths.forEach((path) => {
      let isInPaths = false;
      selectedPaths.forEach((selectedPath) => {
        if (path === selectedPath) {
          isInPaths = true;
        }
      });
      if (isInPaths) {
        returnPaths.push(path);
      }
    });
    return returnPaths;
  }

  private addStartEnde(paths) {
    const returnPaths = [];
    returnPaths.push('#St#');
    paths.forEach((path) => {
      returnPaths.push(path);
    });
    returnPaths.push('#En#');
    return returnPaths;
  }

  private ratePath(selectedPaths, paths) {
    let returnValue = 0;
    for (let pathSize = paths.length; pathSize > 0; pathSize--) {
      const selectedPathCombos = this.pathCombination(selectedPaths, pathSize);
      const pathCombos = this.pathCombination(paths, pathSize);
      pathCombos.forEach((pathCombo) => {
        selectedPathCombos.forEach((selectedPathCombo) => {
          if (selectedPathCombo === pathCombo) {
            if (pathSize > returnValue) {
              returnValue = pathSize;
            }
          }
        });
      });
    }
    return returnValue;
  }

  private pathCombination(paths, size) {
    const returnValues = [];
    for (let i = 0; i < paths.length; i++) {
      if (i + size <= paths.length) {
        let nodeValues = '';
        for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
          if (nodeValues !== '') {
            nodeValues = nodeValues + ':';
          }
          nodeValues = nodeValues + paths[i + sizeIndex];
        }
        returnValues.push(nodeValues);
      }
    }
    return returnValues;
  }

  private getSelectedTrainrun(): Trainrun {
    let selectedTrainrun: Trainrun = undefined;
    if (this.trainruns) {
      this.trainruns.forEach((trainrun) => {
        if (trainrun.getId() === this.trainrunIdSelectedByClick) {
          selectedTrainrun = trainrun;
        }
      });
    }
    return selectedTrainrun;
  }

  private getPreviousPathSection(
    pathItems: PathItem[],
    i: number,
  ): PathSection {
    if (i > 0) {
      const pathItem = pathItems[i - 1];
      if (pathItem instanceof PathSection) {
        return pathItem;
      }
    }
    return undefined;
  }

  private getNextPathSection(pathItems: PathItem[], i: number): PathSection {
    if (i + 1 < pathItems.length) {
      const pathItem = pathItems[i + 1];
      if (pathItem instanceof PathSection) {
        return pathItem;
      }
    }
    return undefined;
  }

  private getPreviousPathNode(pathItems: PathItem[], i: number): PathNode {
    if (i > 0) {
      const pathItem = pathItems[i - 1];
      if (pathItem instanceof PathNode) {
        return pathItem;
      }
    }
    return undefined;
  }

  private getNextPathNode(pathItems: PathItem[], i: number): PathNode {
    if (i + 1 < pathItems.length) {
      const pathItem = pathItems[i + 1];
      if (pathItem instanceof PathNode) {
        return pathItem;
      }
    }
    return undefined;
  }

  private getLastPathNode(pathItems: PathItem[]): PathNode {
    if (pathItems.length > 0) {
      const onlyForwardPathItems = pathItems.filter(
        (pathItems) => !pathItems.backward,
      );
      if (onlyForwardPathItems.length > 0) {
        const pathItem = onlyForwardPathItems[onlyForwardPathItems.length - 1];
        if (pathItem instanceof PathNode) {
          return pathItem;
        }
      }
    }
    return undefined;
  }

  private getFirstPathNode(pathItems: PathItem[]): PathNode {
    if (pathItems.length > 0) {
      const pathItem = pathItems[0];
      if (pathItem instanceof PathNode) {
        return pathItem;
      }
    }
    return undefined;
  }

  private getDepartureNodeIsFilterd(pathItems: PathItem[], i: number): boolean {
    if (i > 0) {
      const pathItem = pathItems[i - 1];
      if (pathItem instanceof PathNode) {
        return pathItem.filter;
      }
    }
    return false;
  }

  private getArrivalNodeIsFilterdr(pathItems: PathItem[], i: number): boolean {
    if (i + 1 < pathItems.length) {
      const pathItem = pathItems[i + 1];
      if (pathItem instanceof PathNode) {
        return pathItem.filter;
      }
    }
    return false;
  }

  private trainrunSectionGroup(
    trainrunId: number,
    node: Node,
  ): TrainrunSectionGroup[] {
    const trainrunSectionGroups: TrainrunSectionGroup[] = [];
    let trainrunSection = undefined;
    let trainrunSectionGroup: TrainrunSectionGroup = undefined;
    let fromNode = node;
    let toNode = undefined;
    const startTrainrunSection = node.getStartTrainrunSection(trainrunId);
    if (startTrainrunSection === undefined) {
      return trainrunSectionGroups;
    }
    const iterator: TrainrunIterator = this.trainrunService.getIterator(
      node,
      startTrainrunSection,
    );
    while (iterator.hasNext()) {
      const currentTrainrunSectionNodePair = iterator.next();
      if (trainrunSectionGroup) {
        trainrunSectionGroup.toTrainrunSectionWithNodes =
          new TrainrunSectionWithNodes(
            fromNode,
            currentTrainrunSectionNodePair.trainrunSection,
            currentTrainrunSectionNodePair.node,
          );
        trainrunSectionGroups.push(trainrunSectionGroup);
      }
      let fromTrainrunSectionWhitheNodes = undefined;
      if (trainrunSection) {
        fromTrainrunSectionWhitheNodes = new TrainrunSectionWithNodes(
          fromNode,
          trainrunSection,
          toNode,
        );
      }
      trainrunSection = currentTrainrunSectionNodePair.trainrunSection;
      toNode = currentTrainrunSectionNodePair.node;
      const trainrunSectionWhithNodes = new TrainrunSectionWithNodes(
        fromNode,
        trainrunSection,
        toNode,
      );
      trainrunSectionGroup = new TrainrunSectionGroup(
        fromTrainrunSectionWhitheNodes,
        trainrunSectionWhithNodes,
        undefined,
      );
      fromNode = toNode;
    }
    if (trainrunSectionGroup) {
      trainrunSectionGroups.push(trainrunSectionGroup);
    }

    return trainrunSectionGroups;
  }
}

class TrainrunSectionGroup {
  constructor(
    public fromTrainrunSectionWithNodes: TrainrunSectionWithNodes,
    public trainrunSectionWithNodes: TrainrunSectionWithNodes,
    public toTrainrunSectionWithNodes: TrainrunSectionWithNodes,
  ) {}
}

class TrainrunSectionWithNodes {
  constructor(
    public fromNode: Node,
    public trainrunSection: TrainrunSection,
    public toNode: Node,
  ) {}
}
