import {HaltezeitFachCategories, LabelRef, LinePatternRefs, NetzgrafikDto} from '../app/data-structures/business.data.structures';
import {TrainrunSectionText} from '../app/data-structures/technical.data.structures';

export class NetzgrafikUnitTesting {
  static getUnitTestNetzgrafik(): NetzgrafikDto {
    return {
      nodes: [{
        id: 0,
        betriebspunktName: 'BN',
        fullName: 'Bern',
        positionX: 32,
        positionY: 32,
        ports: [{
          id: 0,
          positionAlignment: 3,
          positionIndex: 0,
          trainrunSectionId: 0
        },
          {
            id: 6,
            trainrunSectionId: 3,
            positionIndex: 1,
            positionAlignment: 3
          }
        ],
        transitions: [],
        connections: [],
        resourceId: null,
        perronkanten: 10,
        connectionTime: 5,
        trainrunCategoryHaltezeiten: {
          [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
          [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
          [HaltezeitFachCategories.Uncategorized]: {haltezeit: 0, no_halt: true}
        },
        symmetryAxis: 0,
        warnings: null,
        labelIds: [3]
      }, {
        id: 1,
        betriebspunktName: 'OL',
        fullName: 'Olten',
        positionX: 320,
        positionY: 32,
        ports: [{
          id: 1,
          positionAlignment: 2,
          positionIndex: 0,
          trainrunSectionId: 0
        }, {
          id: 7,
          trainrunSectionId: 3,
          positionIndex: 1,
          positionAlignment: 2
        }, {
          id: 2,
          positionAlignment: 3,
          positionIndex: 0,
          trainrunSectionId: 1
        }, {
          id: 4,
          positionAlignment: 3,
          positionIndex: 1,
          trainrunSectionId: 2
        }, {
          id: 8,
          trainrunSectionId: 4,
          positionIndex: 2,
          positionAlignment: 3
        }
        ],
        transitions: [{
          id: 0,
          port1Id: 1,
          port2Id: 2,
          isNonStopTransit: false
        }, {
          id: 1,
          port1Id: 7,
          port2Id: 8,
          isNonStopTransit: true
        }
        ],
        connections: [],
        resourceId: null,
        perronkanten: 10,
        connectionTime: 5,
        trainrunCategoryHaltezeiten: {
          [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
          [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
          [HaltezeitFachCategories.Uncategorized]: {haltezeit: 0, no_halt: true}
        },
        symmetryAxis: null,
        warnings: null,
        labelIds: [3, 4]
      }, {
        id: 2,
        betriebspunktName: 'ZUE',
        fullName: 'Zuerich',
        positionX: 736,
        positionY: 64,
        ports: [{
          id: 3,
          positionAlignment: 2,
          positionIndex: 0,
          trainrunSectionId: 1
        }, {
          id: 5,
          positionAlignment: 2,
          positionIndex: 1,
          trainrunSectionId: 2
        }, {
          id: 9,
          trainrunSectionId: 4,
          positionIndex: 2,
          positionAlignment: 2
        }, {
          id: 10,
          trainrunSectionId: 5,
          positionIndex: 0,
          positionAlignment: 3
        }, {
          id: 13,
          trainrunSectionId: 6,
          positionIndex: 1,
          positionAlignment: 3
        }, {
          id: 15,
          trainrunSectionId: 7,
          positionIndex: 2,
          positionAlignment: 3
        }
        ],
        transitions: [{
          id: 2,
          port1Id: 9,
          port2Id: 10,
          isNonStopTransit: false
        }
        ],
        connections: [{
          id: 1,
          port1Id: 13,
          port2Id: 9
        }, {
          id: 2,
          port1Id: 15,
          port2Id: 9
        }
        ],
        resourceId: null,
        perronkanten: 10,
        connectionTime: 5,
        trainrunCategoryHaltezeiten: {
          [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
          [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
          [HaltezeitFachCategories.Uncategorized]: {haltezeit: 0, no_halt: true}
        },
        symmetryAxis: null,
        warnings: null,
        labelIds: []
      }, {
        id: 3,
        betriebspunktName: 'SG',
        fullName: 'St. Gallen',
        positionX: 1184,
        positionY: 64,
        ports: [
          {
            id: 11,
            positionAlignment: 2,
            positionIndex: 0,
            trainrunSectionId: 5
          }
        ],
        transitions: [],
        connections: [],
        resourceId: null,
        perronkanten: 5,
        connectionTime: 3,
        trainrunCategoryHaltezeiten: {
          [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
          [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
          [HaltezeitFachCategories.Uncategorized]: {haltezeit: 0, no_halt: true}
        },
        symmetryAxis: null,
        warnings: null,
        labelIds: []
      }, {
        id: 4,
        betriebspunktName: 'CH',
        fullName: 'Chur',
        positionX: 1056,
        positionY: 256,
        ports: [{
          id: 12,
          trainrunSectionId: 6,
          positionIndex: 0,
          positionAlignment: 2
        }, {
          id: 14,
          trainrunSectionId: 7,
          positionIndex: 1,
          positionAlignment: 2
        }
        ],
        transitions: [],
        connections: [],
        resourceId: null,
        perronkanten: 5,
        connectionTime: 4,
        trainrunCategoryHaltezeiten: {
          [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
          [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
          [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
          [HaltezeitFachCategories.Uncategorized]: {haltezeit: 0, no_halt: true}
        },
        symmetryAxis: null,
        warnings: null,
        labelIds: []
      }
      ],
      trainrunSections: [{
        id: 0,
        sourceNodeId: 0,
        sourcePortId: 0,
        targetNodeId: 1,
        targetPortId: 1,
        sourceDeparture: {time: 0, consecutiveTime: 0, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 0, consecutiveTime: 60, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 50, consecutiveTime: 50, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 10, consecutiveTime: 10, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 10, consecutiveTime: 0, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 0,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 1,
        sourceNodeId: 1,
        sourcePortId: 2,
        targetNodeId: 2,
        targetPortId: 3,
        sourceDeparture: {time: 12, consecutiveTime: 12, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 48, consecutiveTime: 48, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 38, consecutiveTime: 38, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 22, consecutiveTime: 22, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 10, consecutiveTime: 0, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 0,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 2,
        sourceNodeId: 1,
        sourcePortId: 4,
        targetNodeId: 2,
        targetPortId: 5,
        sourceDeparture: {time: 15, consecutiveTime: 15, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 45, consecutiveTime: 45, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 25, consecutiveTime: 25, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 35, consecutiveTime: 35, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 20, consecutiveTime: 0, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 1,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 3,
        sourceNodeId: 0,
        sourcePortId: 6,
        targetNodeId: 1,
        targetPortId: 7,
        sourceDeparture: {time: 0, consecutiveTime: 0, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 0, consecutiveTime: 120, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 21, consecutiveTime: 81, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 39, consecutiveTime: 39, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 39, consecutiveTime: 10, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 2,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 4,
        sourceNodeId: 1,
        sourcePortId: 8,
        targetNodeId: 2,
        targetPortId: 9,
        sourceDeparture: {time: 39, consecutiveTime: 39, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 21, consecutiveTime: 81, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 11, consecutiveTime: 71, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 49, consecutiveTime: 49, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 10, consecutiveTime: 10, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 2,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 5,
        sourceNodeId: 2,
        sourcePortId: 10,
        targetNodeId: 3,
        targetPortId: 11,
        sourceDeparture: {time: 50, consecutiveTime: 50, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 10, consecutiveTime: 70, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 19, consecutiveTime: 19, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 41, consecutiveTime: 101, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 51, consecutiveTime: 10, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 2,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 6,
        sourceNodeId: 4,
        sourcePortId: 12,
        targetNodeId: 2,
        targetPortId: 13,
        sourceDeparture: {time: 55, consecutiveTime: 55, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 5, consecutiveTime: 65, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 55, consecutiveTime: 55, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 5, consecutiveTime: 65, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 10, consecutiveTime: 10, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 3,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }, {
        id: 7,
        sourceNodeId: 4,
        sourcePortId: 14,
        targetNodeId: 2,
        targetPortId: 15,
        sourceDeparture: {time: 0, consecutiveTime: 0, lock: false, warning: null, timeFormatter: null},
        sourceArrival: {time: 0, consecutiveTime: 60, lock: false, warning: null, timeFormatter: null},
        targetDeparture: {time: 50, consecutiveTime: 50, lock: false, warning: null, timeFormatter: null},
        targetArrival: {time: 10, consecutiveTime: 10, lock: false, warning: null, timeFormatter: null},
        travelTime: {time: 10, consecutiveTime: 10, lock: true, warning: null, timeFormatter: null},
        numberOfStops: 0,
        trainrunId: 4,
        resourceId: 0,
        specificTrainrunSectionFrequencyId: null,
        path: {
          path: [], textPositions: {
            [TrainrunSectionText.SourceArrival]: {x: 0, y: 0},
            [TrainrunSectionText.SourceDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TargetArrival]: {x: 0, y: 0},
            [TrainrunSectionText.TargetDeparture]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionName]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionTravelTime]: {x: 0, y: 0},
            [TrainrunSectionText.TrainrunSectionNumberOfStops]: {x: 0, y: 0}
          }
        },
        warnings: null
      }],
      trainruns: [
        {
          id: 0,
          name: '1',
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [0]
        },
        {
          id: 1,
          name: '1',
          categoryId: 4,
          frequencyId: 2,
          trainrunTimeCategoryId: 0,
          labelIds: [1]
        },
        {
          id: 2,
          name: '1234',
          categoryId: 4,
          frequencyId: 1,
          trainrunTimeCategoryId: 0,
          labelIds: [1, 2]
        },
        {
          id: 3,
          name: '5678',
          categoryId: 3,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [0, 1, 2]
        },
        {
          id: 4,
          name: '5678-2',
          categoryId: 3,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: []
        }],
      resources: [],
      metadata: {
        trainrunCategories: [
          {
            id: 0, order: 0, shortName: 'EC', name: 'International', colorRef: 'EC',
            fachCategory: HaltezeitFachCategories.IPV,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                // -> Gruppe ROT
          {
            id: 1, order: 1, shortName: 'IC', name: 'InterCity', colorRef: 'IC',
            fachCategory: HaltezeitFachCategories.A,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                // -> Gruppe ROT
          {
            id: 2, order: 2, shortName: 'IR', name: 'InterRegio', colorRef: 'IR',
            fachCategory: HaltezeitFachCategories.B,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                // -> Gruppe BLAU
          {
            id: 3, order: 3, shortName: 'RE', name: 'RegioExpress', colorRef: 'RE',
            fachCategory: HaltezeitFachCategories.C,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                 // -> Gruppe GRÜN
          {
            id: 4, order: 4, shortName: 'S', name: 'RegioUndSBahnverkehr', colorRef: 'S',
            fachCategory: HaltezeitFachCategories.D,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                 // -> Gruppe SCHWARZ
          {
            id: 5, order: 5, shortName: 'GEX', name: 'GüterExpress', colorRef: 'GEX',
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          },     // -> Gruppe BLAUVIOLETT
          {
            id: 6, order: 6, shortName: 'G', name: 'Güterverkehr', colorRef: 'G',
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime:4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          },     // -> Gruppe BLAUVIOLETT
        ],
        trainrunFrequencies: [
          {
            id: 0,
            order: 0,
            frequency: 15,
            offset: 0,
            shortName: '15',
            name: 'verkehrt viertelstündlich',
            linePatternRef: LinePatternRefs.Freq15
          },
          {
            id: 1,
            order: 0,
            frequency: 20,
            offset: 0,
            shortName: '20',
            name: 'verkehrt im 20 Minuten Takt',
            linePatternRef: LinePatternRefs.Freq20
          },
          {
            id: 2,
            order: 0,
            frequency: 30,
            offset: 0,
            shortName: '30',
            name: 'verkehrt halbstündlich',
            linePatternRef: LinePatternRefs.Freq30
          },
          {id: 3, order: 0, frequency: 60, offset: 0, shortName: '60', name: 'verkehrt stündlich', linePatternRef: LinePatternRefs.Freq60},
          {
            id: 4,
            order: 0,
            frequency: 120,
            offset: 0,
            shortName: '120',
            name: 'verkehrt zweistündlich',
            linePatternRef: LinePatternRefs.Freq120
          },
        ],
        trainrunTimeCategories: [
          {
            id: 0,
            order: 0,
            shortName: '7/24', name: 'verkehrt uneingeschränkt',
            dayTimeInterval: [],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCat7_24
          },
          {
            id: 1,
            order: 0,
            shortName: 'HVZ',
            name: 'verkehrt zur Hauptverkehrszeit',
            dayTimeInterval: [{from: 360, to: 420}, {from: 960, to: 1140}],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCatHVZ
          },
          {
            id: 2,
            order: 0,
            shortName: 'zeitweise',
            name: 'verkehrt zeitweise',
            dayTimeInterval: [],
            weekday: [],
            linePatternRef: LinePatternRefs.TimeZeitweise
          },
        ],
        netzgrafikColors: []
      },
      freeFloatingTexts: [
        {
          id: 3,
          x: 1312,
          y: 160,
          width: 192,
          height: 64,
          title: 'Frabcodierter Text',
          text: '<p><em>Folgendes</em></p>spannend<p><strong>FETT</strong>',
          backgroundColor: '#ffffff',
          textColor: '#000000',
          labelIds: []
        }
      ],
      labels: [
        {
          id: 0,
          label: 'TestLabel',
          labelGroupId: 0,
          labelRef: LabelRef.Trainrun
        },
        {
          id: 1,
          label: 'Test',
          labelGroupId: 0,
          labelRef: LabelRef.Trainrun
        },
        {
          id: 2,
          label: 'Label',
          labelGroupId: 0,
          labelRef: LabelRef.Trainrun
        },
        {
          id: 3,
          label: 'Label',
          labelGroupId: 1,
          labelRef: LabelRef.Node
        },
        {
          id: 4,
          label: 'Test',
          labelGroupId: 1,
          labelRef: LabelRef.Node
        },
      ],
      labelGroups: [
        {
          id: 0,
          name: 'Standard',
          labelRef: LabelRef.Trainrun
        },
        {
          id: 1,
          name: 'Standard',
          labelRef: LabelRef.Node
        }
      ],
      filterData: {
        filterSettings: []
      }
    };
  }
}
