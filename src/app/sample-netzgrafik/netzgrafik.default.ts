import {
  HaltezeitFachCategories,
  LinePatternRefs,
  NetzgrafikDto,
} from "../data-structures/business.data.structures";
import {environment} from "../../environments/environment";
import {NetzgrafikDemoStandaloneGithub} from "./netzgrafik.demo.standalone.github";

export class NetzgrafikDefault {
  static getDefaultNetzgrafik(): NetzgrafikDto {
    if (environment.standalonedemo) {
      return NetzgrafikDemoStandaloneGithub.getNetzgrafikDemoStandaloneGithub();
    }
    return {
      nodes: [
        {
          id: 0,
          betriebspunktName: "A",
          fullName: "A",
          positionX: 384,
          positionY: 288,
          ports: [
            {
              id: 1,
              trainrunSectionId: 1,
              positionIndex: 0,
              positionAlignment: 2
            },
          ],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: 0,
          warnings: null,
          labelIds: [],
        },
        {
          id: 1,
          betriebspunktName: "B",
          fullName: "B",
          positionX: 800,
          positionY: 288,
          ports: [
            {
              id: 2,
              trainrunSectionId: 1,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 3,
              trainrunSectionId: 2,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {"id": 1, "port1Id": 2, "port2Id": 3, "isNonStopTransit": false}
          ],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
        {
          id: 2,
          betriebspunktName: "C",
          fullName: "C",
          positionX: 1184,
          positionY: 288,
          ports: [
            {
            id: 4,
            trainrunSectionId: 2,
            positionIndex: 0,
            positionAlignment: 2
          },
        ],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
      ],
      trainrunSections: [
        {
          id: 1,
          sourceNodeId: 0,
          sourcePortId: 1,
          targetNodeId: 1,
          targetPortId: 2,
          travelTime: {
            time: 5,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 0,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          sourceArrival: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          targetDeparture: {
            time: 55,
            consecutiveTime: 55,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          targetArrival: {
            time: 5,
            consecutiveTime: 5,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          numberOfStops: 0,
          trainrunId: 2,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {x: 482, y: 304},
              {x: 546, y: 304},
              {x: 734, y: 304},
              {x: 798, y: 304}
            ],
            textPositions: {
              0: {x: 500, y: 316},
              1: {x: 528, y: 292},
              2: {x: 780, y: 292},
              3: {x: 752, y: 316},
              4: {x: 640, y: 292},
              5: {x: 640, y: 292},
              6: {x: 640, y: 316}
            }
          },
          warnings: null
        },
        {
          id: 2,
          sourceNodeId: 1,
          sourcePortId: 3,
          targetNodeId: 2,
          targetPortId: 4,
          travelTime: {
            time: 10,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null
          },
          sourceDeparture: {
            time: 7,
            consecutiveTime: 7,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          sourceArrival: {
            time: 53,
            consecutiveTime: 53,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          targetDeparture: {
            time: 43,
            consecutiveTime: 43,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          targetArrival: {
            time: 17,
            consecutiveTime: 17,
            lock: false,
            warning: null,
            timeFormatter: null
          },
          numberOfStops: 0,
          trainrunId: 2,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {x: 898, y: 304},
              {x: 962, y: 304},
              {x: 1118, y: 304},
              {x: 1182, y: 304}
            ],
            textPositions: {
              0: {x: 916, y: 316},
              1: {x: 944, y: 292},
              2: {x: 1164, y: 292},
              3: {x: 1136, y: 316},
              4: {x: 1040, y: 292},
              5: {x: 1040, y: 292},
              6: {x: 1040, y: 316}
            }
          },
          warnings: null
        }
      ],
      trainruns: [
        {
          id: 2,
          name: "X",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: []
        }
      ],
      resources: [],
      metadata: {
        analyticsSettings: {
          originDestinationSettings: {
            connectionPenalty: 5,
          }
        },
        trainrunCategories: [
          {
            id: 0,
            order: 0,
            shortName: "EC",
            name: "International",
            colorRef: "EC",
            fachCategory: HaltezeitFachCategories.IPV,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe ROT
          {
            id: 1,
            order: 1,
            shortName: "IC",
            name: "InterCity",
            colorRef: "IC",
            fachCategory: HaltezeitFachCategories.A,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe ROT
          {
            id: 2,
            order: 2,
            shortName: "IR",
            name: "InterRegio",
            colorRef: "IR",
            fachCategory: HaltezeitFachCategories.B,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe BLAU
          {
            id: 3,
            order: 3,
            shortName: "RE",
            name: "RegioExpress",
            colorRef: "RE",
            fachCategory: HaltezeitFachCategories.C,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe GRÜN
          {
            id: 4,
            order: 4,
            shortName: "S",
            name: "RegioUndSBahnverkehr",
            colorRef: "S",
            fachCategory: HaltezeitFachCategories.D,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe SCHWARZ
          {
            id: 5,
            order: 5,
            shortName: "GEX",
            name: "GüterExpress",
            colorRef: "GEX",
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          }, // -> Gruppe BLAUVIOLETT
          {
            id: 6,
            order: 6,
            shortName: "G",
            name: "Güterverkehr",
            colorRef: "G",
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          }, // -> Gruppe BLAUVIOLETT
        ],
        trainrunFrequencies: [
          {
            id: 0,
            order: 0,
            frequency: 15,
            offset: 0,
            shortName: "15",
            name: "verkehrt viertelstündlich",
            linePatternRef: LinePatternRefs.Freq15,
          },
          {
            id: 1,
            order: 0,
            frequency: 20,
            offset: 0,
            shortName: "20",
            name: "verkehrt im 20 Minuten Takt",
            linePatternRef: LinePatternRefs.Freq20,
          },
          {
            id: 2,
            order: 0,
            frequency: 30,
            offset: 0,
            shortName: "30",
            name: "verkehrt halbstündlich",
            linePatternRef: LinePatternRefs.Freq30,
          },
          {
            id: 3,
            order: 0,
            frequency: 60,
            offset: 0,
            shortName: "60",
            name: "verkehrt stündlich",
            linePatternRef: LinePatternRefs.Freq60,
          },
          {
            id: 4,
            order: 0,
            frequency: 120,
            offset: 0,
            shortName: "120",
            name: "verkehrt zweistündlich (gerade)",
            linePatternRef: LinePatternRefs.Freq120,
          },
          {
            id: 5,
            order: 0,
            frequency: 120,
            offset: 60,
            shortName: "120+",
            name: "verkehrt zweistündlich (ungerade)",
            linePatternRef: LinePatternRefs.Freq120,
          },
        ],
        trainrunTimeCategories: [
          {
            id: 0,
            order: 0,
            shortName: "7/24",
            name: "verkehrt uneingeschränkt",
            dayTimeInterval: [],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCat7_24,
          },
          {
            id: 1,
            order: 0,
            shortName: "HVZ",
            name: "verkehrt zur Hauptverkehrszeit",
            dayTimeInterval: [
              {from: 360, to: 420},
              {from: 960, to: 1140},
            ],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCatHVZ,
          },
          {
            id: 2,
            order: 0,
            shortName: "zeitweise",
            name: "verkehrt zeitweise",
            dayTimeInterval: [],
            weekday: [],
            linePatternRef: LinePatternRefs.TimeZeitweise,
          },
        ],
        netzgrafikColors: [],
      },
      freeFloatingTexts: [],
      labels: [],
      labelGroups: [],
      filterData: {
        filterSettings: [],
      },
    };
  }
}
