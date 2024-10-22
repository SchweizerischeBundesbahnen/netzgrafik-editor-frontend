import {
  HaltezeitFachCategories,
  LinePatternRefs,
  NetzgrafikDto,
} from "../app/data-structures/business.data.structures";

export class NetzgrafikUnitTestingOdMatrix {
  static getUnitTestNetzgrafik(): NetzgrafikDto {
    return {
      nodes: [
        {
          id: 11,
          betriebspunktName: "C",
          fullName: "C",
          positionX: 1536,
          positionY: 864,
          ports: [
            {
              id: 14,
              trainrunSectionId: 7,
              positionIndex: 0,
              positionAlignment: 2,
            },
            {
              id: 20,
              trainrunSectionId: 10,
              positionIndex: 1,
              positionAlignment: 2,
            },
            {
              id: 15,
              trainrunSectionId: 8,
              positionIndex: 2,
              positionAlignment: 2,
            },
            {
              id: 21,
              trainrunSectionId: 11,
              positionIndex: 3,
              positionAlignment: 2,
            },
          ],
          transitions: [
            {
              id: 4,
              port1Id: 20,
              port2Id: 21,
              isNonStopTransit: true,
            },
          ],
          connections: [],
          resourceId: 12,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 3,
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
              haltezeit: 1,
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
          id: 12,
          betriebspunktName: "A",
          fullName: "A",
          positionX: 1120,
          positionY: 672,
          ports: [
            {
              id: 17,
              trainrunSectionId: 9,
              positionIndex: 0,
              positionAlignment: 1,
            },
            {
              id: 12,
              trainrunSectionId: 6,
              positionIndex: 0,
              positionAlignment: 2,
            },
            {
              id: 13,
              trainrunSectionId: 7,
              positionIndex: 0,
              positionAlignment: 3,
            },
            {
              id: 19,
              trainrunSectionId: 10,
              positionIndex: 1,
              positionAlignment: 3,
            },
          ],
          transitions: [
            {
              id: 3,
              port1Id: 12,
              port2Id: 13,
              isNonStopTransit: false,
            },
          ],
          connections: [],
          resourceId: 13,
          perronkanten: 5,
          connectionTime: 8,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 3,
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
              haltezeit: 1,
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
          id: 13,
          betriebspunktName: "D",
          fullName: "D",
          positionX: 1088,
          positionY: 1088,
          ports: [
            {
              id: 18,
              trainrunSectionId: 9,
              positionIndex: 0,
              positionAlignment: 0,
            },
            {
              id: 22,
              trainrunSectionId: 11,
              positionIndex: 0,
              positionAlignment: 3,
            },
          ],
          transitions: [],
          connections: [],
          resourceId: 14,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 3,
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
              haltezeit: 1,
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
          id: 14,
          betriebspunktName: "B",
          fullName: "B",
          positionX: 800,
          positionY: 864,
          ports: [
            {
              id: 11,
              trainrunSectionId: 6,
              positionIndex: 0,
              positionAlignment: 3,
            },
            {
              id: 16,
              trainrunSectionId: 8,
              positionIndex: 1,
              positionAlignment: 3,
            },
          ],
          transitions: [],
          connections: [],
          resourceId: 15,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitIPV: {
              haltezeit: 3,
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
              haltezeit: 1,
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
          id: 6,
          sourceNodeId: 14,
          sourcePortId: 11,
          targetNodeId: 12,
          targetPortId: 12,
          travelTime: {
            time: 2,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 0,
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
            time: 58,
            consecutiveTime: 58,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 2,
            consecutiveTime: 2,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 4,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 898,
                y: 880,
              },
              {
                x: 962,
                y: 880,
              },
              {
                x: 1054,
                y: 688,
              },
              {
                x: 1118,
                y: 688,
              },
            ],
            textPositions: {
              "0": {
                x: 916,
                y: 892,
              },
              "1": {
                x: 944,
                y: 868,
              },
              "2": {
                x: 1100,
                y: 676,
              },
              "3": {
                x: 1072,
                y: 700,
              },
              "4": {
                x: 1008,
                y: 772,
              },
              "5": {
                x: 1008,
                y: 772,
              },
              "6": {
                x: 1008,
                y: 796,
              },
            },
          },
          warnings: null,
        },
        {
          id: 7,
          sourceNodeId: 12,
          sourcePortId: 13,
          targetNodeId: 11,
          targetPortId: 14,
          travelTime: {
            time: 4,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 3,
            consecutiveTime: 3,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 57,
            consecutiveTime: 57,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 53,
            consecutiveTime: 53,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 7,
            consecutiveTime: 7,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 4,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1218,
                y: 688,
              },
              {
                x: 1282,
                y: 688,
              },
              {
                x: 1470,
                y: 880,
              },
              {
                x: 1534,
                y: 880,
              },
            ],
            textPositions: {
              "0": {
                x: 1236,
                y: 700,
              },
              "1": {
                x: 1264,
                y: 676,
              },
              "2": {
                x: 1516,
                y: 868,
              },
              "3": {
                x: 1488,
                y: 892,
              },
              "4": {
                x: 1376,
                y: 772,
              },
              "5": {
                x: 1376,
                y: 772,
              },
              "6": {
                x: 1376,
                y: 796,
              },
            },
          },
          warnings: null,
        },
        {
          id: 8,
          sourceNodeId: 11,
          sourcePortId: 15,
          targetNodeId: 14,
          targetPortId: 16,
          travelTime: {
            time: 6,
            consecutiveTime: 1,
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
            time: 54,
            consecutiveTime: 54,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 6,
            consecutiveTime: 66,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 5,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1534,
                y: 944,
              },
              {
                x: 1470,
                y: 944,
              },
              {
                x: 962,
                y: 912,
              },
              {
                x: 898,
                y: 912,
              },
            ],
            textPositions: {
              "0": {
                x: 1516,
                y: 932,
              },
              "1": {
                x: 1488,
                y: 956,
              },
              "2": {
                x: 916,
                y: 924,
              },
              "3": {
                x: 944,
                y: 900,
              },
              "4": {
                x: 1216,
                y: 916,
              },
              "5": {
                x: 1216,
                y: 916,
              },
              "6": {
                x: 1216,
                y: 940,
              },
            },
          },
          warnings: null,
        },
        {
          id: 9,
          sourceNodeId: 12,
          sourcePortId: 17,
          targetNodeId: 13,
          targetPortId: 18,
          travelTime: {
            time: 2,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 8,
            consecutiveTime: 8,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 52,
            consecutiveTime: 52,
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
            consecutiveTime: 10,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 6,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1136,
                y: 766,
              },
              {
                x: 1136,
                y: 830,
              },
              {
                x: 1104,
                y: 1022,
              },
              {
                x: 1104,
                y: 1086,
              },
            ],
            textPositions: {
              "0": {
                x: 1124,
                y: 784,
              },
              "1": {
                x: 1148,
                y: 812,
              },
              "2": {
                x: 1116,
                y: 1068,
              },
              "3": {
                x: 1092,
                y: 1040,
              },
              "4": {
                x: 1108,
                y: 926,
              },
              "5": {
                x: 1108,
                y: 926,
              },
              "6": {
                x: 1132,
                y: 926,
              },
            },
          },
          warnings: null,
        },
        {
          id: 10,
          sourceNodeId: 12,
          sourcePortId: 19,
          targetNodeId: 11,
          targetPortId: 20,
          travelTime: {
            time: 5,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 0,
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
            time: 55,
            consecutiveTime: 55,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 5,
            consecutiveTime: 5,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 7,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1218,
                y: 720,
              },
              {
                x: 1282,
                y: 720,
              },
              {
                x: 1470,
                y: 912,
              },
              {
                x: 1534,
                y: 912,
              },
            ],
            textPositions: {
              "0": {
                x: 1236,
                y: 732,
              },
              "1": {
                x: 1264,
                y: 708,
              },
              "2": {
                x: 1516,
                y: 900,
              },
              "3": {
                x: 1488,
                y: 924,
              },
              "4": {
                x: 1376,
                y: 804,
              },
              "5": {
                x: 1376,
                y: 804,
              },
              "6": {
                x: 1376,
                y: 828,
              },
            },
          },
          warnings: null,
        },
        {
          id: 11,
          sourceNodeId: 11,
          sourcePortId: 21,
          targetNodeId: 13,
          targetPortId: 22,
          travelTime: {
            time: 4,
            consecutiveTime: 1,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 5,
            consecutiveTime: 5,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 55,
            consecutiveTime: 55,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 51,
            consecutiveTime: 51,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 9,
            consecutiveTime: 9,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 7,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1534,
                y: 976,
              },
              {
                x: 1470,
                y: 976,
              },
              {
                x: 1250,
                y: 1104,
              },
              {
                x: 1186,
                y: 1104,
              },
            ],
            textPositions: {
              "0": {
                x: 1516,
                y: 964,
              },
              "1": {
                x: 1488,
                y: 988,
              },
              "2": {
                x: 1204,
                y: 1116,
              },
              "3": {
                x: 1232,
                y: 1092,
              },
              "4": {
                x: 1360,
                y: 1028,
              },
              "5": {
                x: 1360,
                y: 1028,
              },
              "6": {
                x: 1360,
                y: 1052,
              },
            },
          },
          warnings: null,
        },
      ],
      trainruns: [
        {
          id: 4,
          name: "1",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
        {
          id: 5,
          name: "2",
          categoryId: 3,
          frequencyId: 2,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
        {
          id: 6,
          name: "4",
          categoryId: 6,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
        {
          id: 7,
          name: "3",
          categoryId: 5,
          frequencyId: 0,
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
        {
          id: 12,
          capacity: 2,
        },
        {
          id: 13,
          capacity: 2,
        },
        {
          id: 14,
          capacity: 2,
        },
        {
          id: 15,
          capacity: 2,
        },
      ],
      metadata: {
        analyticsSettings: {
          originDestinationSettings: {
            connectionPenalty: 5,
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
              {
                from: 360,
                to: 420,
              },
              {
                from: 960,
                to: 1140,
              },
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
