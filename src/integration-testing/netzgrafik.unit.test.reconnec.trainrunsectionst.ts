import {
  HaltezeitFachCategories,
  LinePatternRefs,
  NetzgrafikDto,
} from "../app/data-structures/business.data.structures";

export class NetzgrafikUnitTestingReconnectTrainrunSection {
  static getUnitTestReconnectTrainrunSectionNetzgrafik(): NetzgrafikDto {
    return {
      nodes: [
        {
          id: 0,
          betriebspunktName: "BN",
          fullName: "Bern",
          positionX: -192,
          positionY: 32,
          ports: [
            {
              id: 4,
              trainrunSectionId: 2,
              positionIndex: 0,
              positionAlignment: 3,
            },
            {
              id: 5,
              trainrunSectionId: 3,
              positionIndex: 1,
              positionAlignment: 3,
            },
          ],
          transitions: [
            {
              id: 1,
              port1Id: 4,
              port2Id: 5,
              isNonStopTransit: false,
            },
          ],
          connections: [],
          resourceId: 1,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitA: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitB: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitC: {
              haltezeit: 1.5,
              no_halt: false,
            },
            HaltezeitD: {
              haltezeit: 1,
              no_halt: false,
            },
            HaltezeitUncategorized: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: 0,
          warnings: null,
          labelIds: [],
        },
        {
          id: 1,
          betriebspunktName: "OL",
          fullName: "Olten",
          positionX: 832,
          positionY: 32,
          ports: [
            {
              id: 2,
              trainrunSectionId: 1,
              positionIndex: 0,
              positionAlignment: 2,
            },
            {
              id: 8,
              trainrunSectionId: 4,
              positionIndex: 1,
              positionAlignment: 2,
            },
          ],
          transitions: [
            {
              id: 4,
              port1Id: 8,
              port2Id: 2,
              isNonStopTransit: false,
            },
          ],
          connections: [],
          resourceId: 2,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitA: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitB: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitC: {
              haltezeit: 1.5,
              no_halt: false,
            },
            HaltezeitD: {
              haltezeit: 1,
              no_halt: false,
            },
            HaltezeitUncategorized: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
        {
          id: 7,
          betriebspunktName: "RTR",
          fullName: "Rothrist",
          positionX: 320,
          positionY: 32,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: 8,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitA: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitB: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitC: {
              haltezeit: 1.5,
              no_halt: false,
            },
            HaltezeitD: {
              haltezeit: 1,
              no_halt: false,
            },
            HaltezeitUncategorized: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
        {
          id: 8,
          betriebspunktName: "LTH",
          fullName: "Langenthal",
          positionX: 320,
          positionY: 192,
          ports: [
            {
              id: 3,
              trainrunSectionId: 2,
              positionIndex: 0,
              positionAlignment: 2,
            },
            {
              id: 6,
              trainrunSectionId: 3,
              positionIndex: 1,
              positionAlignment: 2,
            },
            {
              id: 9,
              trainrunSectionId: 1,
              positionIndex: 0,
              positionAlignment: 3,
            },
            {
              id: 10,
              trainrunSectionId: 4,
              positionIndex: 1,
              positionAlignment: 3,
            },
          ],
          transitions: [
            {
              id: 3,
              port1Id: 3,
              port2Id: 9,
              isNonStopTransit: false,
            },
          ],
          connections: [],
          resourceId: 9,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitA: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitB: {
              haltezeit: 2,
              no_halt: false,
            },
            HaltezeitC: {
              haltezeit: 1.5,
              no_halt: false,
            },
            HaltezeitD: {
              haltezeit: 1,
              no_halt: false,
            },
            HaltezeitUncategorized: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
      ],
      trainrunSections: [
        {
          id: 1,
          sourceNodeId: 8,
          sourcePortId: 9,
          targetNodeId: 1,
          targetPortId: 2,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 50,
            consecutiveTime: 50,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 10,
            consecutiveTime: 70,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 1,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 418,
                y: 208,
              },
              {
                x: 482,
                y: 208,
              },
              {
                x: 766,
                y: 48,
              },
              {
                x: 830,
                y: 48,
              },
            ],
            textPositions: {
              0: {
                x: 436,
                y: 220,
              },
              1: {
                x: 464,
                y: 196,
              },
              2: {
                x: 812,
                y: 36,
              },
              3: {
                x: 784,
                y: 60,
              },
              4: {
                x: 624,
                y: 116,
              },
              5: {
                x: 624,
                y: 116,
              },
              6: {
                x: 624,
                y: 140,
              },
            },
          },
          warnings: null,
        },
        {
          id: 2,
          sourceNodeId: 8,
          sourcePortId: 3,
          targetNodeId: 0,
          targetPortId: 4,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 50,
            consecutiveTime: 50,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 10,
            consecutiveTime: 70,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 1,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 318,
                y: 208,
              },
              {
                x: 254,
                y: 208,
              },
              {
                x: -30,
                y: 48,
              },
              {
                x: -94,
                y: 48,
              },
            ],
            textPositions: {
              0: {
                x: 300,
                y: 196,
              },
              1: {
                x: 272,
                y: 220,
              },
              2: {
                x: -76,
                y: 60,
              },
              3: {
                x: -48,
                y: 36,
              },
              4: {
                x: 112,
                y: 116,
              },
              5: {
                x: 112,
                y: 116,
              },
              6: {
                x: 112,
                y: 140,
              },
            },
          },
          warnings: null,
        },
        {
          id: 3,
          sourceNodeId: 0,
          sourcePortId: 5,
          targetNodeId: 8,
          targetPortId: 6,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 12,
            consecutiveTime: 72,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 48,
            consecutiveTime: 48,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 38,
            consecutiveTime: 38,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 22,
            consecutiveTime: 82,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 1,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -94,
                y: 80,
              },
              {
                x: -30,
                y: 80,
              },
              {
                x: 254,
                y: 240,
              },
              {
                x: 318,
                y: 240,
              },
            ],
            textPositions: {
              0: {
                x: -76,
                y: 92,
              },
              1: {
                x: -48,
                y: 68,
              },
              2: {
                x: 300,
                y: 228,
              },
              3: {
                x: 272,
                y: 252,
              },
              4: {
                x: 112,
                y: 148,
              },
              5: {
                x: 112,
                y: 148,
              },
              6: {
                x: 112,
                y: 172,
              },
            },
          },
          warnings: null,
        },
        {
          id: 4,
          sourceNodeId: 8,
          sourcePortId: 10,
          targetNodeId: 1,
          targetPortId: 8,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 2,
            consecutiveTime: 2,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 58,
            consecutiveTime: 118,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 48,
            consecutiveTime: 108,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 12,
            consecutiveTime: 12,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 1,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 418,
                y: 240,
              },
              {
                x: 482,
                y: 240,
              },
              {
                x: 766,
                y: 80,
              },
              {
                x: 830,
                y: 80,
              },
            ],
            textPositions: {
              0: {
                x: 436,
                y: 252,
              },
              1: {
                x: 464,
                y: 228,
              },
              2: {
                x: 812,
                y: 68,
              },
              3: {
                x: 784,
                y: 92,
              },
              4: {
                x: 624,
                y: 148,
              },
              5: {
                x: 624,
                y: 148,
              },
              6: {
                x: 624,
                y: 172,
              },
            },
          },
          warnings: null,
        },
      ],
      trainruns: [
        {
          id: 1,
          name: "X",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
      ],
      resources: [
        {
          id: 1,
          capacity: 2,
        },
        {
          id: 2,
          capacity: 2,
        },
        {
          id: 3,
          capacity: 2,
        },
        {
          id: 4,
          capacity: 2,
        },
        {
          id: 5,
          capacity: 2,
        },
        {
          id: 6,
          capacity: 2,
        },
        {
          id: 7,
          capacity: 2,
        },
        {
          id: 8,
          capacity: 2,
        },
        {
          id: 9,
          capacity: 2,
        },
        {
          id: 10,
          capacity: 2,
        },
        {
          id: 11,
          capacity: 2,
        },
      ],
      metadata: {
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
            name: "verkehrt zweistündlich",
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
