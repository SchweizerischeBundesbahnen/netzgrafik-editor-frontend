import {
  HaltezeitFachCategories,
  LinePatternRefs,
  NetzgrafikDto,
} from "../data-structures/business.data.structures";

export class NetzgrafikDemoStandaloneGithub {
  static getNetzgrafikDemoStandaloneGithub(): NetzgrafikDto {
    return {
      nodes: [
        {
          id: 128,
          betriebspunktName: "Lausanne",
          fullName: "Lausanne",
          positionX: -3072,
          positionY: 544,
          ports: [
            {
              id: 1207,
              trainrunSectionId: 596,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1187,
              trainrunSectionId: 586,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1382,
              trainrunSectionId: 683,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1380,
              trainrunSectionId: 682,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 345,
              port1Id: 1187,
              port2Id: 1380,
              isNonStopTransit: false
            },
            {
              id: 347,
              port1Id: 1207,
              port2Id: 1382,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 152,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 129,
          betriebspunktName: "Bern",
          fullName: "Bern",
          positionX: -2144,
          positionY: 128,
          ports: [
            {
              id: 1328,
              trainrunSectionId: 656,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1311,
              trainrunSectionId: 648,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1313,
              trainrunSectionId: 649,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1339,
              trainrunSectionId: 662,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1205,
              trainrunSectionId: 595,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1109,
              trainrunSectionId: 547,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1440,
              trainrunSectionId: 712,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1329,
              trainrunSectionId: 657,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1436,
              trainrunSectionId: 710,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1434,
              trainrunSectionId: 709,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1432,
              trainrunSectionId: 708,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1430,
              trainrunSectionId: 707,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1428,
              trainrunSectionId: 706,
              positionIndex: 6,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 315,
              port1Id: 1328,
              port2Id: 1329,
              isNonStopTransit: false
            },
            {
              id: 376,
              port1Id: 1109,
              port2Id: 1430,
              isNonStopTransit: false
            },
            {
              id: 378,
              port1Id: 1339,
              port2Id: 1432,
              isNonStopTransit: false
            },
            {
              id: 380,
              port1Id: 1313,
              port2Id: 1434,
              isNonStopTransit: false
            },
            {
              id: 382,
              port1Id: 1311,
              port2Id: 1436,
              isNonStopTransit: false
            },
            {
              id: 386,
              port1Id: 1205,
              port2Id: 1440,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 153,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 130,
          betriebspunktName: "Biel",
          fullName: "Biel",
          positionX: -2528,
          positionY: -32,
          ports: [
            {
              id: 1183,
              trainrunSectionId: 584,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1418,
              trainrunSectionId: 701,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 366,
              port1Id: 1183,
              port2Id: 1418,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 154,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 131,
          betriebspunktName: "Interlaken ",
          fullName: "Interlaken Ost",
          positionX: -1088,
          positionY: 928,
          ports: [
            {
              id: 1318,
              trainrunSectionId: 651,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1344,
              trainrunSectionId: 664,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 155,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 132,
          betriebspunktName: "Visp",
          fullName: "Visp",
          positionX: -2144,
          positionY: 1440,
          ports: [
            {
              id: 1323,
              trainrunSectionId: 654,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1322,
              trainrunSectionId: 653,
              positionIndex: 1,
              positionAlignment: 0
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 156,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 133,
          betriebspunktName: "Olten",
          fullName: "Olten",
          positionX: 64,
          positionY: 96,
          ports: [
            {
              id: 1047,
              trainrunSectionId: 516,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1331,
              trainrunSectionId: 658,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1308,
              trainrunSectionId: 646,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1371,
              trainrunSectionId: 678,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1131,
              trainrunSectionId: 558,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1117,
              trainrunSectionId: 551,
              positionIndex: 5,
              positionAlignment: 0
            },
            {
              id: 1046,
              trainrunSectionId: 515,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1370,
              trainrunSectionId: 677,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1130,
              trainrunSectionId: 557,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1116,
              trainrunSectionId: 550,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1181,
              trainrunSectionId: 583,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1203,
              trainrunSectionId: 594,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1394,
              trainrunSectionId: 689,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1309,
              trainrunSectionId: 647,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1225,
              trainrunSectionId: 605,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1241,
              trainrunSectionId: 613,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1165,
              trainrunSectionId: 575,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1202,
              trainrunSectionId: 593,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1180,
              trainrunSectionId: 582,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1224,
              trainrunSectionId: 604,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1240,
              trainrunSectionId: 612,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1164,
              trainrunSectionId: 574,
              positionIndex: 4,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 210,
              port1Id: 1047,
              port2Id: 1046,
              isNonStopTransit: false
            },
            {
              id: 236,
              port1Id: 1117,
              port2Id: 1116,
              isNonStopTransit: false
            },
            {
              id: 242,
              port1Id: 1131,
              port2Id: 1130,
              isNonStopTransit: false
            },
            {
              id: 253,
              port1Id: 1165,
              port2Id: 1164,
              isNonStopTransit: false
            },
            {
              id: 259,
              port1Id: 1181,
              port2Id: 1180,
              isNonStopTransit: false
            },
            {
              id: 264,
              port1Id: 1203,
              port2Id: 1202,
              isNonStopTransit: true
            },
            {
              id: 270,
              port1Id: 1225,
              port2Id: 1224,
              isNonStopTransit: true
            },
            {
              id: 276,
              port1Id: 1241,
              port2Id: 1240,
              isNonStopTransit: true
            },
            {
              id: 308,
              port1Id: 1308,
              port2Id: 1309,
              isNonStopTransit: false
            },
            {
              id: 340,
              port1Id: 1371,
              port2Id: 1370,
              isNonStopTransit: false
            },
            {
              id: 353,
              port1Id: 1331,
              port2Id: 1394,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 157,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 134,
          betriebspunktName: "Basel",
          fullName: "Basel",
          positionX: 64,
          positionY: -1888,
          ports: [
            {
              id: 1054,
              trainrunSectionId: 519,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1416,
              trainrunSectionId: 700,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1277,
              trainrunSectionId: 631,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1338,
              trainrunSectionId: 661,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1301,
              trainrunSectionId: 643,
              positionIndex: 4,
              positionAlignment: 1
            },
            {
              id: 1378,
              trainrunSectionId: 681,
              positionIndex: 5,
              positionAlignment: 1
            },
            {
              id: 1138,
              trainrunSectionId: 561,
              positionIndex: 6,
              positionAlignment: 1
            },
            {
              id: 1124,
              trainrunSectionId: 554,
              positionIndex: 7,
              positionAlignment: 1
            },
            {
              id: 1267,
              trainrunSectionId: 626,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 158,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 135,
          betriebspunktName: "Zürich",
          fullName: "Zürich",
          positionX: 2656,
          positionY: 32,
          ports: [
            {
              id: 1255,
              trainrunSectionId: 620,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1254,
              trainrunSectionId: 619,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1360,
              trainrunSectionId: 672,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1149,
              trainrunSectionId: 567,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1153,
              trainrunSectionId: 569,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1358,
              trainrunSectionId: 671,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1356,
              trainrunSectionId: 670,
              positionIndex: 4,
              positionAlignment: 1
            },
            {
              id: 1354,
              trainrunSectionId: 669,
              positionIndex: 5,
              positionAlignment: 1
            },
            {
              id: 1195,
              trainrunSectionId: 590,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1401,
              trainrunSectionId: 693,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1292,
              trainrunSectionId: 638,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1173,
              trainrunSectionId: 579,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1217,
              trainrunSectionId: 601,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1233,
              trainrunSectionId: 609,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1157,
              trainrunSectionId: 571,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1276,
              trainrunSectionId: 630,
              positionIndex: 7,
              positionAlignment: 2
            },
            {
              id: 1300,
              trainrunSectionId: 642,
              positionIndex: 8,
              positionAlignment: 2
            },
            {
              id: 1191,
              trainrunSectionId: 588,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1172,
              trainrunSectionId: 578,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1213,
              trainrunSectionId: 599,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1229,
              trainrunSectionId: 607,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1139,
              trainrunSectionId: 562,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1245,
              trainrunSectionId: 615,
              positionIndex: 5,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 250,
              port1Id: 1153,
              port2Id: 1157,
              isNonStopTransit: false
            },
            {
              id: 256,
              port1Id: 1173,
              port2Id: 1172,
              isNonStopTransit: false
            },
            {
              id: 261,
              port1Id: 1195,
              port2Id: 1191,
              isNonStopTransit: false
            },
            {
              id: 267,
              port1Id: 1217,
              port2Id: 1213,
              isNonStopTransit: false
            },
            {
              id: 273,
              port1Id: 1233,
              port2Id: 1229,
              isNonStopTransit: false
            },
            {
              id: 329,
              port1Id: 1354,
              port2Id: 1245,
              isNonStopTransit: false
            },
            {
              id: 357,
              port1Id: 1149,
              port2Id: 1401,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 159,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 136,
          betriebspunktName: "Bellinz.",
          fullName: "Bellinzona",
          positionX: 2592,
          positionY: 3232,
          ports: [
            {
              id: 1059,
              trainrunSectionId: 522,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1035,
              trainrunSectionId: 510,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1071,
              trainrunSectionId: 528,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1083,
              trainrunSectionId: 534,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1058,
              trainrunSectionId: 521,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1034,
              trainrunSectionId: 509,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1070,
              trainrunSectionId: 527,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1082,
              trainrunSectionId: 533,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 206,
              port1Id: 1035,
              port2Id: 1034,
              isNonStopTransit: false
            },
            {
              id: 216,
              port1Id: 1059,
              port2Id: 1058,
              isNonStopTransit: false
            },
            {
              id: 221,
              port1Id: 1071,
              port2Id: 1070,
              isNonStopTransit: false
            },
            {
              id: 226,
              port1Id: 1083,
              port2Id: 1082,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 160,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 137,
          betriebspunktName: "St. Gallen",
          fullName: "Sankt Gallen",
          positionX: 4640,
          positionY: 96,
          ports: [
            {
              id: 1145,
              trainrunSectionId: 565,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1212,
              trainrunSectionId: 598,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1167,
              trainrunSectionId: 576,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1144,
              trainrunSectionId: 564,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1419,
              trainrunSectionId: 702,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 248,
              port1Id: 1145,
              port2Id: 1144,
              isNonStopTransit: false
            },
            {
              id: 367,
              port1Id: 1167,
              port2Id: 1419,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 161,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 138,
          betriebspunktName: "Schaffh.",
          fullName: "Schaffhausen",
          positionX: 2624,
          positionY: -1120,
          ports: [
            {
              id: 1256,
              trainrunSectionId: 620,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1251,
              trainrunSectionId: 618,
              positionIndex: 1,
              positionAlignment: 1
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 162,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 139,
          betriebspunktName: "Konstanz",
          fullName: "Konstanz",
          positionX: 4256,
          positionY: -416,
          ports: [
            {
              id: 1250,
              trainrunSectionId: 617,
              positionIndex: 0,
              positionAlignment: 1
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 163,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 140,
          betriebspunktName: "Sargans",
          fullName: "Sargans",
          positionX: 4640,
          positionY: 1184,
          ports: [
            {
              id: 1146,
              trainrunSectionId: 565,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1151,
              trainrunSectionId: 568,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1147,
              trainrunSectionId: 566,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1155,
              trainrunSectionId: 570,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1362,
              trainrunSectionId: 673,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1364,
              trainrunSectionId: 674,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 249,
              port1Id: 1146,
              port2Id: 1147,
              isNonStopTransit: false
            },
            {
              id: 334,
              port1Id: 1151,
              port2Id: 1362,
              isNonStopTransit: false
            },
            {
              id: 336,
              port1Id: 1155,
              port2Id: 1364,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 164,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 141,
          betriebspunktName: "Sursee",
          fullName: "Sursee",
          positionX: 64,
          positionY: 1184,
          ports: [
            {
              id: 1043,
              trainrunSectionId: 514,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1105,
              trainrunSectionId: 545,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1367,
              trainrunSectionId: 676,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1127,
              trainrunSectionId: 556,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1113,
              trainrunSectionId: 549,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1042,
              trainrunSectionId: 513,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1104,
              trainrunSectionId: 544,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1366,
              trainrunSectionId: 675,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1126,
              trainrunSectionId: 555,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1112,
              trainrunSectionId: 548,
              positionIndex: 4,
              positionAlignment: 1
            }
          ],
          transitions: [
            {
              id: 208,
              port1Id: 1043,
              port2Id: 1042,
              isNonStopTransit: true
            },
            {
              id: 232,
              port1Id: 1105,
              port2Id: 1104,
              isNonStopTransit: false
            },
            {
              id: 234,
              port1Id: 1113,
              port2Id: 1112,
              isNonStopTransit: false
            },
            {
              id: 240,
              port1Id: 1127,
              port2Id: 1126,
              isNonStopTransit: true
            },
            {
              id: 338,
              port1Id: 1367,
              port2Id: 1366,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 165,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 142,
          betriebspunktName: "Luzern",
          fullName: "Luzern",
          positionX: 64,
          positionY: 1728,
          ports: [
            {
              id: 1041,
              trainrunSectionId: 513,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1103,
              trainrunSectionId: 544,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1365,
              trainrunSectionId: 675,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1125,
              trainrunSectionId: 555,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1111,
              trainrunSectionId: 548,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1352,
              trainrunSectionId: 668,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1350,
              trainrunSectionId: 667,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1099,
              trainrunSectionId: 542,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1095,
              trainrunSectionId: 540,
              positionIndex: 3,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 327,
              port1Id: 1041,
              port2Id: 1352,
              isNonStopTransit: false
            },
            {
              id: 337,
              port1Id: 1365,
              port2Id: 1350,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 166,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 143,
          betriebspunktName: "Zofingen",
          fullName: "Zofingen",
          positionX: 64,
          positionY: 736,
          ports: [
            {
              id: 1045,
              trainrunSectionId: 515,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1369,
              trainrunSectionId: 677,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1129,
              trainrunSectionId: 557,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1115,
              trainrunSectionId: 550,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1044,
              trainrunSectionId: 514,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1106,
              trainrunSectionId: 545,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1368,
              trainrunSectionId: 676,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1128,
              trainrunSectionId: 556,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1114,
              trainrunSectionId: 549,
              positionIndex: 4,
              positionAlignment: 1
            },
            {
              id: 1107,
              trainrunSectionId: 546,
              positionIndex: 0,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 209,
              port1Id: 1045,
              port2Id: 1044,
              isNonStopTransit: true
            },
            {
              id: 233,
              port1Id: 1107,
              port2Id: 1106,
              isNonStopTransit: false
            },
            {
              id: 235,
              port1Id: 1115,
              port2Id: 1114,
              isNonStopTransit: false
            },
            {
              id: 241,
              port1Id: 1129,
              port2Id: 1128,
              isNonStopTransit: true
            },
            {
              id: 339,
              port1Id: 1369,
              port2Id: 1368,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 167,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 144,
          betriebspunktName: "Gelterk.",
          fullName: "Gelterkinden",
          positionX: 64,
          positionY: -448,
          ports: [
            {
              id: 1049,
              trainrunSectionId: 517,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1411,
              trainrunSectionId: 698,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1282,
              trainrunSectionId: 633,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1333,
              trainrunSectionId: 659,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1306,
              trainrunSectionId: 645,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1373,
              trainrunSectionId: 679,
              positionIndex: 5,
              positionAlignment: 0
            },
            {
              id: 1133,
              trainrunSectionId: 559,
              positionIndex: 6,
              positionAlignment: 0
            },
            {
              id: 1119,
              trainrunSectionId: 552,
              positionIndex: 7,
              positionAlignment: 0
            },
            {
              id: 1048,
              trainrunSectionId: 516,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1332,
              trainrunSectionId: 658,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1307,
              trainrunSectionId: 646,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1372,
              trainrunSectionId: 678,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1132,
              trainrunSectionId: 558,
              positionIndex: 4,
              positionAlignment: 1
            },
            {
              id: 1118,
              trainrunSectionId: 551,
              positionIndex: 5,
              positionAlignment: 1
            },
            {
              id: 1410,
              trainrunSectionId: 697,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1283,
              trainrunSectionId: 634,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 211,
              port1Id: 1049,
              port2Id: 1048,
              isNonStopTransit: true
            },
            {
              id: 237,
              port1Id: 1119,
              port2Id: 1118,
              isNonStopTransit: false
            },
            {
              id: 243,
              port1Id: 1133,
              port2Id: 1132,
              isNonStopTransit: true
            },
            {
              id: 297,
              port1Id: 1282,
              port2Id: 1283,
              isNonStopTransit: true
            },
            {
              id: 307,
              port1Id: 1306,
              port2Id: 1307,
              isNonStopTransit: true
            },
            {
              id: 316,
              port1Id: 1333,
              port2Id: 1332,
              isNonStopTransit: true
            },
            {
              id: 341,
              port1Id: 1373,
              port2Id: 1372,
              isNonStopTransit: true
            },
            {
              id: 362,
              port1Id: 1411,
              port2Id: 1410,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 168,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 145,
          betriebspunktName: "Sissach",
          fullName: "Sissach",
          positionX: 64,
          positionY: -928,
          ports: [
            {
              id: 1051,
              trainrunSectionId: 518,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1413,
              trainrunSectionId: 699,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1280,
              trainrunSectionId: 632,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1335,
              trainrunSectionId: 660,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1304,
              trainrunSectionId: 644,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1375,
              trainrunSectionId: 680,
              positionIndex: 5,
              positionAlignment: 0
            },
            {
              id: 1135,
              trainrunSectionId: 560,
              positionIndex: 6,
              positionAlignment: 0
            },
            {
              id: 1121,
              trainrunSectionId: 553,
              positionIndex: 7,
              positionAlignment: 0
            },
            {
              id: 1050,
              trainrunSectionId: 517,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1412,
              trainrunSectionId: 698,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1281,
              trainrunSectionId: 633,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1334,
              trainrunSectionId: 659,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1305,
              trainrunSectionId: 645,
              positionIndex: 4,
              positionAlignment: 1
            },
            {
              id: 1374,
              trainrunSectionId: 679,
              positionIndex: 5,
              positionAlignment: 1
            },
            {
              id: 1134,
              trainrunSectionId: 559,
              positionIndex: 6,
              positionAlignment: 1
            },
            {
              id: 1120,
              trainrunSectionId: 552,
              positionIndex: 7,
              positionAlignment: 1
            }
          ],
          transitions: [
            {
              id: 212,
              port1Id: 1051,
              port2Id: 1050,
              isNonStopTransit: true
            },
            {
              id: 238,
              port1Id: 1121,
              port2Id: 1120,
              isNonStopTransit: false
            },
            {
              id: 244,
              port1Id: 1135,
              port2Id: 1134,
              isNonStopTransit: true
            },
            {
              id: 296,
              port1Id: 1280,
              port2Id: 1281,
              isNonStopTransit: true
            },
            {
              id: 306,
              port1Id: 1304,
              port2Id: 1305,
              isNonStopTransit: true
            },
            {
              id: 317,
              port1Id: 1335,
              port2Id: 1334,
              isNonStopTransit: true
            },
            {
              id: 342,
              port1Id: 1375,
              port2Id: 1374,
              isNonStopTransit: true
            },
            {
              id: 363,
              port1Id: 1413,
              port2Id: 1412,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 169,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 146,
          betriebspunktName: "Liestal",
          fullName: "Liestal",
          positionX: 64,
          positionY: -1408,
          ports: [
            {
              id: 1053,
              trainrunSectionId: 519,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1415,
              trainrunSectionId: 700,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1278,
              trainrunSectionId: 631,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1337,
              trainrunSectionId: 661,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1302,
              trainrunSectionId: 643,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1377,
              trainrunSectionId: 681,
              positionIndex: 5,
              positionAlignment: 0
            },
            {
              id: 1137,
              trainrunSectionId: 561,
              positionIndex: 6,
              positionAlignment: 0
            },
            {
              id: 1123,
              trainrunSectionId: 554,
              positionIndex: 7,
              positionAlignment: 0
            },
            {
              id: 1052,
              trainrunSectionId: 518,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1414,
              trainrunSectionId: 699,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1279,
              trainrunSectionId: 632,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1336,
              trainrunSectionId: 660,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1303,
              trainrunSectionId: 644,
              positionIndex: 4,
              positionAlignment: 1
            },
            {
              id: 1376,
              trainrunSectionId: 680,
              positionIndex: 5,
              positionAlignment: 1
            },
            {
              id: 1136,
              trainrunSectionId: 560,
              positionIndex: 6,
              positionAlignment: 1
            },
            {
              id: 1122,
              trainrunSectionId: 553,
              positionIndex: 7,
              positionAlignment: 1
            }
          ],
          transitions: [
            {
              id: 213,
              port1Id: 1053,
              port2Id: 1052,
              isNonStopTransit: true
            },
            {
              id: 239,
              port1Id: 1123,
              port2Id: 1122,
              isNonStopTransit: false
            },
            {
              id: 245,
              port1Id: 1137,
              port2Id: 1136,
              isNonStopTransit: true
            },
            {
              id: 295,
              port1Id: 1278,
              port2Id: 1279,
              isNonStopTransit: true
            },
            {
              id: 305,
              port1Id: 1302,
              port2Id: 1303,
              isNonStopTransit: true
            },
            {
              id: 318,
              port1Id: 1337,
              port2Id: 1336,
              isNonStopTransit: true
            },
            {
              id: 343,
              port1Id: 1377,
              port2Id: 1376,
              isNonStopTransit: true
            },
            {
              id: 364,
              port1Id: 1415,
              port2Id: 1414,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 170,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 147,
          betriebspunktName: "Aarau",
          fullName: "Aarau",
          positionX: 960,
          positionY: 32,
          ports: [
            {
              id: 1409,
              trainrunSectionId: 697,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1284,
              trainrunSectionId: 634,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1201,
              trainrunSectionId: 593,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1179,
              trainrunSectionId: 582,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1223,
              trainrunSectionId: 604,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1239,
              trainrunSectionId: 612,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1163,
              trainrunSectionId: 574,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1200,
              trainrunSectionId: 592,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1408,
              trainrunSectionId: 696,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1285,
              trainrunSectionId: 635,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1178,
              trainrunSectionId: 581,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1222,
              trainrunSectionId: 603,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1238,
              trainrunSectionId: 611,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1162,
              trainrunSectionId: 573,
              positionIndex: 6,
              positionAlignment: 3
            },
            {
              id: 1293,
              trainrunSectionId: 639,
              positionIndex: 7,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 252,
              port1Id: 1163,
              port2Id: 1162,
              isNonStopTransit: true
            },
            {
              id: 258,
              port1Id: 1179,
              port2Id: 1178,
              isNonStopTransit: false
            },
            {
              id: 263,
              port1Id: 1201,
              port2Id: 1200,
              isNonStopTransit: true
            },
            {
              id: 269,
              port1Id: 1223,
              port2Id: 1222,
              isNonStopTransit: true
            },
            {
              id: 275,
              port1Id: 1239,
              port2Id: 1238,
              isNonStopTransit: true
            },
            {
              id: 298,
              port1Id: 1284,
              port2Id: 1285,
              isNonStopTransit: true
            },
            {
              id: 361,
              port1Id: 1409,
              port2Id: 1408,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 171,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 148,
          betriebspunktName: "Lenzburg",
          fullName: "Lenzburg",
          positionX: 1344,
          positionY: 32,
          ports: [
            {
              id: 1199,
              trainrunSectionId: 592,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1407,
              trainrunSectionId: 696,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1286,
              trainrunSectionId: 635,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1177,
              trainrunSectionId: 581,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1221,
              trainrunSectionId: 603,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1237,
              trainrunSectionId: 611,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1161,
              trainrunSectionId: 573,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1294,
              trainrunSectionId: 639,
              positionIndex: 7,
              positionAlignment: 2
            },
            {
              id: 1258,
              trainrunSectionId: 621,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1406,
              trainrunSectionId: 695,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1287,
              trainrunSectionId: 636,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1260,
              trainrunSectionId: 622,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1262,
              trainrunSectionId: 623,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1264,
              trainrunSectionId: 624,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1266,
              trainrunSectionId: 625,
              positionIndex: 6,
              positionAlignment: 3
            },
            {
              id: 1295,
              trainrunSectionId: 640,
              positionIndex: 7,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 282,
              port1Id: 1199,
              port2Id: 1258,
              isNonStopTransit: true
            },
            {
              id: 284,
              port1Id: 1177,
              port2Id: 1260,
              isNonStopTransit: true
            },
            {
              id: 286,
              port1Id: 1221,
              port2Id: 1262,
              isNonStopTransit: true
            },
            {
              id: 288,
              port1Id: 1237,
              port2Id: 1264,
              isNonStopTransit: true
            },
            {
              id: 290,
              port1Id: 1161,
              port2Id: 1266,
              isNonStopTransit: true
            },
            {
              id: 299,
              port1Id: 1286,
              port2Id: 1287,
              isNonStopTransit: true
            },
            {
              id: 302,
              port1Id: 1294,
              port2Id: 1295,
              isNonStopTransit: false
            },
            {
              id: 360,
              port1Id: 1407,
              port2Id: 1406,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 172,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 149,
          betriebspunktName: "Baden",
          fullName: "Baden",
          positionX: 2240,
          positionY: 32,
          ports: [
            {
              id: 1197,
              trainrunSectionId: 591,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1403,
              trainrunSectionId: 694,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1290,
              trainrunSectionId: 637,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1175,
              trainrunSectionId: 580,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1219,
              trainrunSectionId: 602,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1235,
              trainrunSectionId: 610,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1159,
              trainrunSectionId: 572,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1274,
              trainrunSectionId: 629,
              positionIndex: 7,
              positionAlignment: 2
            },
            {
              id: 1298,
              trainrunSectionId: 641,
              positionIndex: 8,
              positionAlignment: 2
            },
            {
              id: 1196,
              trainrunSectionId: 590,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1402,
              trainrunSectionId: 693,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1291,
              trainrunSectionId: 638,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1174,
              trainrunSectionId: 579,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1218,
              trainrunSectionId: 601,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1234,
              trainrunSectionId: 609,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1158,
              trainrunSectionId: 571,
              positionIndex: 6,
              positionAlignment: 3
            },
            {
              id: 1275,
              trainrunSectionId: 630,
              positionIndex: 7,
              positionAlignment: 3
            },
            {
              id: 1299,
              trainrunSectionId: 642,
              positionIndex: 8,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 251,
              port1Id: 1159,
              port2Id: 1158,
              isNonStopTransit: true
            },
            {
              id: 257,
              port1Id: 1175,
              port2Id: 1174,
              isNonStopTransit: true
            },
            {
              id: 262,
              port1Id: 1197,
              port2Id: 1196,
              isNonStopTransit: true
            },
            {
              id: 268,
              port1Id: 1219,
              port2Id: 1218,
              isNonStopTransit: true
            },
            {
              id: 274,
              port1Id: 1235,
              port2Id: 1234,
              isNonStopTransit: true
            },
            {
              id: 294,
              port1Id: 1274,
              port2Id: 1275,
              isNonStopTransit: false
            },
            {
              id: 301,
              port1Id: 1290,
              port2Id: 1291,
              isNonStopTransit: true
            },
            {
              id: 304,
              port1Id: 1298,
              port2Id: 1299,
              isNonStopTransit: true
            },
            {
              id: 358,
              port1Id: 1403,
              port2Id: 1402,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 173,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 150,
          betriebspunktName: "Zürich ✈",
          fullName: "Zürich Flughafen",
          positionX: 3296,
          positionY: 32,
          ports: [
            {
              id: 1192,
              trainrunSectionId: 588,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1171,
              trainrunSectionId: 578,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1214,
              trainrunSectionId: 599,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1230,
              trainrunSectionId: 607,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1140,
              trainrunSectionId: 562,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1246,
              trainrunSectionId: 615,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1193,
              trainrunSectionId: 589,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1170,
              trainrunSectionId: 577,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1215,
              trainrunSectionId: 600,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1231,
              trainrunSectionId: 608,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1141,
              trainrunSectionId: 563,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1247,
              trainrunSectionId: 616,
              positionIndex: 5,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 246,
              port1Id: 1140,
              port2Id: 1141,
              isNonStopTransit: false
            },
            {
              id: 255,
              port1Id: 1171,
              port2Id: 1170,
              isNonStopTransit: false
            },
            {
              id: 260,
              port1Id: 1192,
              port2Id: 1193,
              isNonStopTransit: false
            },
            {
              id: 266,
              port1Id: 1214,
              port2Id: 1215,
              isNonStopTransit: false
            },
            {
              id: 272,
              port1Id: 1230,
              port2Id: 1231,
              isNonStopTransit: false
            },
            {
              id: 278,
              port1Id: 1246,
              port2Id: 1247,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 174,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 151,
          betriebspunktName: "Wintert.",
          fullName: "Winterthur",
          positionX: 3872,
          positionY: 32,
          ports: [
            {
              id: 1249,
              trainrunSectionId: 617,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1194,
              trainrunSectionId: 589,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1169,
              trainrunSectionId: 577,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1216,
              trainrunSectionId: 600,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1232,
              trainrunSectionId: 608,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1142,
              trainrunSectionId: 563,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1248,
              trainrunSectionId: 616,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1227,
              trainrunSectionId: 606,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1243,
              trainrunSectionId: 614,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1211,
              trainrunSectionId: 598,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1168,
              trainrunSectionId: 576,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1143,
              trainrunSectionId: 564,
              positionIndex: 4,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 247,
              port1Id: 1142,
              port2Id: 1143,
              isNonStopTransit: false
            },
            {
              id: 254,
              port1Id: 1169,
              port2Id: 1168,
              isNonStopTransit: false
            },
            {
              id: 265,
              port1Id: 1194,
              port2Id: 1211,
              isNonStopTransit: false
            },
            {
              id: 271,
              port1Id: 1216,
              port2Id: 1227,
              isNonStopTransit: false
            },
            {
              id: 277,
              port1Id: 1232,
              port2Id: 1243,
              isNonStopTransit: false
            },
            {
              id: 279,
              port1Id: 1249,
              port2Id: 1248,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 175,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 152,
          betriebspunktName: "Chur",
          fullName: "Chur",
          positionX: 4640,
          positionY: 1888,
          ports: [
            {
              id: 1152,
              trainrunSectionId: 568,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1148,
              trainrunSectionId: 566,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1156,
              trainrunSectionId: 570,
              positionIndex: 2,
              positionAlignment: 0
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 176,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 153,
          betriebspunktName: "Zug",
          fullName: "Zug",
          positionX: 2656,
          positionY: 1312,
          ports: [
            {
              id: 1067,
              trainrunSectionId: 526,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1093,
              trainrunSectionId: 539,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1101,
              trainrunSectionId: 543,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1097,
              trainrunSectionId: 541,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1066,
              trainrunSectionId: 525,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1092,
              trainrunSectionId: 538,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1348,
              trainrunSectionId: 666,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1346,
              trainrunSectionId: 665,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 220,
              port1Id: 1067,
              port2Id: 1066,
              isNonStopTransit: false
            },
            {
              id: 231,
              port1Id: 1093,
              port2Id: 1092,
              isNonStopTransit: false
            },
            {
              id: 322,
              port1Id: 1097,
              port2Id: 1346,
              isNonStopTransit: false
            },
            {
              id: 324,
              port1Id: 1101,
              port2Id: 1348,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 177,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 154,
          betriebspunktName: "Arth-G.",
          fullName: "Arth-Goldau",
          positionX: 2656,
          positionY: 1792,
          ports: [
            {
              id: 1065,
              trainrunSectionId: 525,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1091,
              trainrunSectionId: 538,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1064,
              trainrunSectionId: 524,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1038,
              trainrunSectionId: 511,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1078,
              trainrunSectionId: 531,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1090,
              trainrunSectionId: 537,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1039,
              trainrunSectionId: 512,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1079,
              trainrunSectionId: 532,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 207,
              port1Id: 1038,
              port2Id: 1039,
              isNonStopTransit: false
            },
            {
              id: 219,
              port1Id: 1065,
              port2Id: 1064,
              isNonStopTransit: false
            },
            {
              id: 225,
              port1Id: 1078,
              port2Id: 1079,
              isNonStopTransit: false
            },
            {
              id: 230,
              port1Id: 1091,
              port2Id: 1090,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 178,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 155,
          betriebspunktName: "Altdorf",
          fullName: "Altdorf",
          positionX: 2656,
          positionY: 2176,
          ports: [
            {
              id: 1063,
              trainrunSectionId: 524,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1037,
              trainrunSectionId: 511,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1077,
              trainrunSectionId: 531,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1089,
              trainrunSectionId: 537,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1062,
              trainrunSectionId: 523,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1055,
              trainrunSectionId: 520,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1076,
              trainrunSectionId: 530,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1088,
              trainrunSectionId: 536,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 214,
              port1Id: 1037,
              port2Id: 1055,
              isNonStopTransit: true
            },
            {
              id: 218,
              port1Id: 1063,
              port2Id: 1062,
              isNonStopTransit: false
            },
            {
              id: 224,
              port1Id: 1077,
              port2Id: 1076,
              isNonStopTransit: false
            },
            {
              id: 229,
              port1Id: 1089,
              port2Id: 1088,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 179,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 156,
          betriebspunktName: "Lugano",
          fullName: "Lugano",
          positionX: 2592,
          positionY: 3712,
          ports: [
            {
              id: 1057,
              trainrunSectionId: 521,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1033,
              trainrunSectionId: 509,
              positionIndex: 1,
              positionAlignment: 0
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 180,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 157,
          betriebspunktName: "Locarno",
          fullName: "Locarno",
          positionX: 2208,
          positionY: 3232,
          ports: [
            {
              id: 1069,
              trainrunSectionId: 527,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1081,
              trainrunSectionId: 533,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 181,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 158,
          betriebspunktName: "Biasca",
          fullName: "Biasca",
          positionX: 2592,
          positionY: 2688,
          ports: [
            {
              id: 1073,
              trainrunSectionId: 529,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1085,
              trainrunSectionId: 535,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1061,
              trainrunSectionId: 523,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1056,
              trainrunSectionId: 520,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1060,
              trainrunSectionId: 522,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1036,
              trainrunSectionId: 510,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1072,
              trainrunSectionId: 528,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1084,
              trainrunSectionId: 534,
              positionIndex: 3,
              positionAlignment: 1
            }
          ],
          transitions: [
            {
              id: 215,
              port1Id: 1056,
              port2Id: 1036,
              isNonStopTransit: true
            },
            {
              id: 217,
              port1Id: 1061,
              port2Id: 1060,
              isNonStopTransit: true
            },
            {
              id: 222,
              port1Id: 1073,
              port2Id: 1072,
              isNonStopTransit: false
            },
            {
              id: 227,
              port1Id: 1085,
              port2Id: 1084,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 182,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 159,
          betriebspunktName: "Göschn.",
          fullName: "Göschenen",
          positionX: 2272,
          positionY: 2240,
          ports: [
            {
              id: 1074,
              trainrunSectionId: 529,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1086,
              trainrunSectionId: 535,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1075,
              trainrunSectionId: 530,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1087,
              trainrunSectionId: 536,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 223,
              port1Id: 1074,
              port2Id: 1075,
              isNonStopTransit: false
            },
            {
              id: 228,
              port1Id: 1086,
              port2Id: 1087,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 183,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 160,
          betriebspunktName: "Genf",
          fullName: "Genf",
          positionX: -3936,
          positionY: 608,
          ports: [
            {
              id: 1209,
              trainrunSectionId: 597,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1185,
              trainrunSectionId: 585,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1189,
              trainrunSectionId: 587,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1424,
              trainrunSectionId: 704,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1426,
              trainrunSectionId: 705,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1422,
              trainrunSectionId: 703,
              positionIndex: 2,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 369,
              port1Id: 1189,
              port2Id: 1422,
              isNonStopTransit: false
            },
            {
              id: 371,
              port1Id: 1209,
              port2Id: 1424,
              isNonStopTransit: false
            },
            {
              id: 373,
              port1Id: 1185,
              port2Id: 1426,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 184,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 161,
          betriebspunktName: "Genf ✈",
          fullName: "Aiport",
          positionX: -4352,
          positionY: 608,
          ports: [
            {
              id: 1210,
              trainrunSectionId: 597,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1186,
              trainrunSectionId: 585,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1190,
              trainrunSectionId: 587,
              positionIndex: 2,
              positionAlignment: 3
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 185,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 162,
          betriebspunktName: "Romansh.",
          fullName: "Romanshorn",
          positionX: 4640,
          positionY: -192,
          ports: [
            {
              id: 1228,
              trainrunSectionId: 606,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1244,
              trainrunSectionId: 614,
              positionIndex: 1,
              positionAlignment: 2
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 186,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 163,
          betriebspunktName: "Bülach",
          fullName: "Bülach",
          positionX: 2784,
          positionY: -544,
          ports: [
            {
              id: 1252,
              trainrunSectionId: 618,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1253,
              trainrunSectionId: 619,
              positionIndex: 0,
              positionAlignment: 1
            }
          ],
          transitions: [
            {
              id: 280,
              port1Id: 1252,
              port2Id: 1253,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 187,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 164,
          betriebspunktName: "Reihnf.",
          fullName: "Reihnfelden",
          positionX: 1056,
          positionY: -960,
          ports: [
            {
              id: 1268,
              trainrunSectionId: 626,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1269,
              trainrunSectionId: 627,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 291,
              port1Id: 1268,
              port2Id: 1269,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 188,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 165,
          betriebspunktName: "Frick",
          fullName: "Frick",
          positionX: 1792,
          positionY: -672,
          ports: [
            {
              id: 1271,
              trainrunSectionId: 628,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1270,
              trainrunSectionId: 627,
              positionIndex: 0,
              positionAlignment: 2
            }
          ],
          transitions: [
            {
              id: 292,
              port1Id: 1271,
              port2Id: 1270,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 189,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 166,
          betriebspunktName: "Brugg",
          fullName: "Brugg",
          positionX: 1792,
          positionY: 32,
          ports: [
            {
              id: 1272,
              trainrunSectionId: 628,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1257,
              trainrunSectionId: 621,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1405,
              trainrunSectionId: 695,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1288,
              trainrunSectionId: 636,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1259,
              trainrunSectionId: 622,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1261,
              trainrunSectionId: 623,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1263,
              trainrunSectionId: 624,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1265,
              trainrunSectionId: 625,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1296,
              trainrunSectionId: 640,
              positionIndex: 7,
              positionAlignment: 2
            },
            {
              id: 1198,
              trainrunSectionId: 591,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1404,
              trainrunSectionId: 694,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1289,
              trainrunSectionId: 637,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1176,
              trainrunSectionId: 580,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1220,
              trainrunSectionId: 602,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1236,
              trainrunSectionId: 610,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1160,
              trainrunSectionId: 572,
              positionIndex: 6,
              positionAlignment: 3
            },
            {
              id: 1273,
              trainrunSectionId: 629,
              positionIndex: 7,
              positionAlignment: 3
            },
            {
              id: 1297,
              trainrunSectionId: 641,
              positionIndex: 8,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 281,
              port1Id: 1257,
              port2Id: 1198,
              isNonStopTransit: true
            },
            {
              id: 283,
              port1Id: 1259,
              port2Id: 1176,
              isNonStopTransit: true
            },
            {
              id: 285,
              port1Id: 1261,
              port2Id: 1220,
              isNonStopTransit: true
            },
            {
              id: 287,
              port1Id: 1263,
              port2Id: 1236,
              isNonStopTransit: false
            },
            {
              id: 289,
              port1Id: 1265,
              port2Id: 1160,
              isNonStopTransit: true
            },
            {
              id: 293,
              port1Id: 1272,
              port2Id: 1273,
              isNonStopTransit: false
            },
            {
              id: 300,
              port1Id: 1288,
              port2Id: 1289,
              isNonStopTransit: true
            },
            {
              id: 303,
              port1Id: 1296,
              port2Id: 1297,
              isNonStopTransit: true
            },
            {
              id: 359,
              port1Id: 1405,
              port2Id: 1404,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 190,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 167,
          betriebspunktName: "Thun",
          fullName: "Thun",
          positionX: -2144,
          positionY: 640,
          ports: [
            {
              id: 1327,
              trainrunSectionId: 656,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1312,
              trainrunSectionId: 648,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1314,
              trainrunSectionId: 649,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1340,
              trainrunSectionId: 662,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1326,
              trainrunSectionId: 655,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1315,
              trainrunSectionId: 650,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1319,
              trainrunSectionId: 652,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1341,
              trainrunSectionId: 663,
              positionIndex: 3,
              positionAlignment: 1
            }
          ],
          transitions: [
            {
              id: 309,
              port1Id: 1312,
              port2Id: 1315,
              isNonStopTransit: false
            },
            {
              id: 311,
              port1Id: 1314,
              port2Id: 1319,
              isNonStopTransit: false
            },
            {
              id: 314,
              port1Id: 1327,
              port2Id: 1326,
              isNonStopTransit: false
            },
            {
              id: 319,
              port1Id: 1340,
              port2Id: 1341,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 191,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 168,
          betriebspunktName: "Spiez",
          fullName: "Spiez",
          positionX: -2144,
          positionY: 928,
          ports: [
            {
              id: 1325,
              trainrunSectionId: 655,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1316,
              trainrunSectionId: 650,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1320,
              trainrunSectionId: 652,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1342,
              trainrunSectionId: 663,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1324,
              trainrunSectionId: 654,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1321,
              trainrunSectionId: 653,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1317,
              trainrunSectionId: 651,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1343,
              trainrunSectionId: 664,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 310,
              port1Id: 1316,
              port2Id: 1317,
              isNonStopTransit: false
            },
            {
              id: 312,
              port1Id: 1320,
              port2Id: 1321,
              isNonStopTransit: false
            },
            {
              id: 313,
              port1Id: 1325,
              port2Id: 1324,
              isNonStopTransit: false
            },
            {
              id: 320,
              port1Id: 1342,
              port2Id: 1343,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 192,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 169,
          betriebspunktName: "Rothkr.",
          fullName: "Rothkreuz",
          positionX: 1856,
          positionY: 1728,
          ports: [
            {
              id: 1351,
              trainrunSectionId: 668,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1349,
              trainrunSectionId: 667,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1100,
              trainrunSectionId: 542,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1096,
              trainrunSectionId: 540,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1347,
              trainrunSectionId: 666,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1345,
              trainrunSectionId: 665,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1040,
              trainrunSectionId: 512,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1080,
              trainrunSectionId: 532,
              positionIndex: 3,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 321,
              port1Id: 1096,
              port2Id: 1345,
              isNonStopTransit: false
            },
            {
              id: 323,
              port1Id: 1100,
              port2Id: 1347,
              isNonStopTransit: true
            },
            {
              id: 325,
              port1Id: 1349,
              port2Id: 1080,
              isNonStopTransit: true
            },
            {
              id: 326,
              port1Id: 1351,
              port2Id: 1040,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 193,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 170,
          betriebspunktName: "Thalwil",
          fullName: "Thalwil",
          positionX: 2656,
          positionY: 736,
          ports: [
            {
              id: 1359,
              trainrunSectionId: 672,
              positionIndex: 0,
              positionAlignment: 0
            },
            {
              id: 1150,
              trainrunSectionId: 567,
              positionIndex: 1,
              positionAlignment: 0
            },
            {
              id: 1154,
              trainrunSectionId: 569,
              positionIndex: 2,
              positionAlignment: 0
            },
            {
              id: 1357,
              trainrunSectionId: 671,
              positionIndex: 3,
              positionAlignment: 0
            },
            {
              id: 1355,
              trainrunSectionId: 670,
              positionIndex: 4,
              positionAlignment: 0
            },
            {
              id: 1353,
              trainrunSectionId: 669,
              positionIndex: 5,
              positionAlignment: 0
            },
            {
              id: 1068,
              trainrunSectionId: 526,
              positionIndex: 0,
              positionAlignment: 1
            },
            {
              id: 1094,
              trainrunSectionId: 539,
              positionIndex: 1,
              positionAlignment: 1
            },
            {
              id: 1102,
              trainrunSectionId: 543,
              positionIndex: 2,
              positionAlignment: 1
            },
            {
              id: 1098,
              trainrunSectionId: 541,
              positionIndex: 3,
              positionAlignment: 1
            },
            {
              id: 1361,
              trainrunSectionId: 673,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1363,
              trainrunSectionId: 674,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 328,
              port1Id: 1353,
              port2Id: 1098,
              isNonStopTransit: false
            },
            {
              id: 330,
              port1Id: 1355,
              port2Id: 1102,
              isNonStopTransit: true
            },
            {
              id: 331,
              port1Id: 1357,
              port2Id: 1094,
              isNonStopTransit: true
            },
            {
              id: 332,
              port1Id: 1359,
              port2Id: 1068,
              isNonStopTransit: true
            },
            {
              id: 333,
              port1Id: 1150,
              port2Id: 1361,
              isNonStopTransit: true
            },
            {
              id: 335,
              port1Id: 1154,
              port2Id: 1363,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 194,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 171,
          betriebspunktName: "Fribourg",
          fullName: "Fribourg",
          positionX: -2560,
          positionY: 288,
          ports: [
            {
              id: 1381,
              trainrunSectionId: 683,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1379,
              trainrunSectionId: 682,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1206,
              trainrunSectionId: 595,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1110,
              trainrunSectionId: 547,
              positionIndex: 1,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 344,
              port1Id: 1379,
              port2Id: 1110,
              isNonStopTransit: false
            },
            {
              id: 346,
              port1Id: 1381,
              port2Id: 1206,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 195,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 172,
          betriebspunktName: "RTR",
          fullName: "Rothrist",
          positionX: -608,
          positionY: 128,
          ports: [
            {
              id: 1395,
              trainrunSectionId: 690,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1438,
              trainrunSectionId: 711,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1391,
              trainrunSectionId: 688,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1389,
              trainrunSectionId: 687,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1387,
              trainrunSectionId: 686,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1383,
              trainrunSectionId: 684,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1385,
              trainrunSectionId: 685,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1204,
              trainrunSectionId: 594,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1393,
              trainrunSectionId: 689,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1310,
              trainrunSectionId: 647,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1226,
              trainrunSectionId: 605,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1242,
              trainrunSectionId: 613,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1166,
              trainrunSectionId: 575,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1108,
              trainrunSectionId: 546,
              positionIndex: 6,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 348,
              port1Id: 1108,
              port2Id: 1383,
              isNonStopTransit: true
            },
            {
              id: 349,
              port1Id: 1385,
              port2Id: 1166,
              isNonStopTransit: true
            },
            {
              id: 350,
              port1Id: 1387,
              port2Id: 1242,
              isNonStopTransit: true
            },
            {
              id: 351,
              port1Id: 1389,
              port2Id: 1226,
              isNonStopTransit: true
            },
            {
              id: 352,
              port1Id: 1391,
              port2Id: 1310,
              isNonStopTransit: true
            },
            {
              id: 354,
              port1Id: 1395,
              port2Id: 1204,
              isNonStopTransit: true
            },
            {
              id: 384,
              port1Id: 1438,
              port2Id: 1393,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 196,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 173,
          betriebspunktName: "Burgdorf",
          fullName: "Burgdorf",
          positionX: -1344,
          positionY: 352,
          ports: [
            {
              id: 1397,
              trainrunSectionId: 691,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1400,
              trainrunSectionId: 692,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 356,
              port1Id: 1397,
              port2Id: 1400,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 197,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 174,
          betriebspunktName: "Langent.",
          fullName: "Langenthal",
          positionX: -992,
          positionY: 352,
          ports: [
            {
              id: 1399,
              trainrunSectionId: 692,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1386,
              trainrunSectionId: 685,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 355,
              port1Id: 1399,
              port2Id: 1386,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 198,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 175,
          betriebspunktName: "Solothurn",
          fullName: "Solothurn",
          positionX: -1696,
          positionY: -32,
          ports: [
            {
              id: 1417,
              trainrunSectionId: 701,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1182,
              trainrunSectionId: 583,
              positionIndex: 0,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 365,
              port1Id: 1417,
              port2Id: 1182,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 199,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 176,
          betriebspunktName: "Rohrsch.",
          fullName: "Rohrschach",
          positionX: 5376,
          positionY: 96,
          ports: [
            {
              id: 1420,
              trainrunSectionId: 702,
              positionIndex: 0,
              positionAlignment: 2
            }
          ],
          transitions: [],
          connections: [],
          resourceId: 200,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 177,
          betriebspunktName: "Morges",
          fullName: "Morges",
          positionX: -3520,
          positionY: 544,
          ports: [
            {
              id: 1423,
              trainrunSectionId: 704,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1425,
              trainrunSectionId: 705,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1421,
              trainrunSectionId: 703,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1184,
              trainrunSectionId: 584,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1208,
              trainrunSectionId: 596,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1188,
              trainrunSectionId: 586,
              positionIndex: 2,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 368,
              port1Id: 1421,
              port2Id: 1188,
              isNonStopTransit: false
            },
            {
              id: 370,
              port1Id: 1423,
              port2Id: 1208,
              isNonStopTransit: true
            },
            {
              id: 372,
              port1Id: 1425,
              port2Id: 1184,
              isNonStopTransit: false
            }
          ],
          connections: [],
          resourceId: 201,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 178,
          betriebspunktName: "BNWD",
          fullName: "Bern Wankdorf",
          positionX: -1696,
          positionY: 128,
          ports: [
            {
              id: 1439,
              trainrunSectionId: 712,
              positionIndex: 0,
              positionAlignment: 2
            },
            {
              id: 1330,
              trainrunSectionId: 657,
              positionIndex: 1,
              positionAlignment: 2
            },
            {
              id: 1435,
              trainrunSectionId: 710,
              positionIndex: 2,
              positionAlignment: 2
            },
            {
              id: 1433,
              trainrunSectionId: 709,
              positionIndex: 3,
              positionAlignment: 2
            },
            {
              id: 1431,
              trainrunSectionId: 708,
              positionIndex: 4,
              positionAlignment: 2
            },
            {
              id: 1429,
              trainrunSectionId: 707,
              positionIndex: 5,
              positionAlignment: 2
            },
            {
              id: 1427,
              trainrunSectionId: 706,
              positionIndex: 6,
              positionAlignment: 2
            },
            {
              id: 1396,
              trainrunSectionId: 690,
              positionIndex: 0,
              positionAlignment: 3
            },
            {
              id: 1437,
              trainrunSectionId: 711,
              positionIndex: 1,
              positionAlignment: 3
            },
            {
              id: 1392,
              trainrunSectionId: 688,
              positionIndex: 2,
              positionAlignment: 3
            },
            {
              id: 1390,
              trainrunSectionId: 687,
              positionIndex: 3,
              positionAlignment: 3
            },
            {
              id: 1388,
              trainrunSectionId: 686,
              positionIndex: 4,
              positionAlignment: 3
            },
            {
              id: 1384,
              trainrunSectionId: 684,
              positionIndex: 5,
              positionAlignment: 3
            },
            {
              id: 1398,
              trainrunSectionId: 691,
              positionIndex: 6,
              positionAlignment: 3
            }
          ],
          transitions: [
            {
              id: 374,
              port1Id: 1427,
              port2Id: 1398,
              isNonStopTransit: true
            },
            {
              id: 375,
              port1Id: 1429,
              port2Id: 1384,
              isNonStopTransit: true
            },
            {
              id: 377,
              port1Id: 1431,
              port2Id: 1388,
              isNonStopTransit: true
            },
            {
              id: 379,
              port1Id: 1433,
              port2Id: 1390,
              isNonStopTransit: true
            },
            {
              id: 381,
              port1Id: 1435,
              port2Id: 1392,
              isNonStopTransit: true
            },
            {
              id: 383,
              port1Id: 1330,
              port2Id: 1437,
              isNonStopTransit: true
            },
            {
              id: 385,
              port1Id: 1439,
              port2Id: 1396,
              isNonStopTransit: true
            }
          ],
          connections: [],
          resourceId: 202,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            HaltezeitA: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitB: {
              no_halt: false,
              haltezeit: 2
            },
            HaltezeitC: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitD: {
              no_halt: false,
              haltezeit: 1
            },
            HaltezeitIPV: {
              no_halt: false,
              haltezeit: 3
            },
            HaltezeitUncategorized: {
              no_halt: true,
              haltezeit: 0
            }
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        }
      ],
      trainrunSections: [
        {
          id: 509,
          sourceNodeId: 156,
          sourcePortId: 1033,
          targetNodeId: 136,
          targetPortId: 1034,
          travelTime: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 182
          },
          sourceArrival: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 178
          },
          targetDeparture: {
            lock: false,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 164
          },
          targetArrival: {
            lock: false,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 196
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2640,
                y: 3710
              },
              {
                x: 2640,
                y: 3646
              },
              {
                x: 2640,
                y: 3390
              },
              {
                x: 2640,
                y: 3326
              }
            ],
            textPositions: {
              0: {
                x: 2652,
                y: 3692
              },
              1: {
                x: 2628,
                y: 3664
              },
              2: {
                x: 2628,
                y: 3344
              },
              3: {
                x: 2652,
                y: 3372
              },
              4: {
                x: 2628,
                y: 3518
              },
              5: {
                x: 2628,
                y: 3518
              },
              6: {
                x: 2652,
                y: 3518
              }
            }
          },
          warnings: null
        },
        {
          id: 510,
          sourceNodeId: 136,
          sourcePortId: 1035,
          targetNodeId: 158,
          targetPortId: 1036,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 198
          },
          sourceArrival: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 162
          },
          targetDeparture: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 156
          },
          targetArrival: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 204
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2640,
                y: 3230
              },
              {
                x: 2640,
                y: 3166
              },
              {
                x: 2640,
                y: 2818
              },
              {
                x: 2640,
                y: 2754
              }
            ],
            textPositions: {
              0: {
                x: 2652,
                y: 3212
              },
              1: {
                x: 2628,
                y: 3184
              },
              2: {
                x: 2628,
                y: 2772
              },
              3: {
                x: 2652,
                y: 2800
              },
              4: {
                x: 2628,
                y: 2992
              },
              5: {
                x: 2628,
                y: 2992
              },
              6: {
                x: 2652,
                y: 2992
              }
            }
          },
          warnings: null
        },
        {
          id: 511,
          sourceNodeId: 155,
          sourcePortId: 1037,
          targetNodeId: 154,
          targetPortId: 1038,
          travelTime: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 232
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 128
          },
          targetDeparture: {
            lock: true,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 109
          },
          targetArrival: {
            lock: true,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 251
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2704,
                y: 2174
              },
              {
                x: 2704,
                y: 2110
              },
              {
                x: 2704,
                y: 1950
              },
              {
                x: 2704,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 2716,
                y: 2156
              },
              1: {
                x: 2692,
                y: 2128
              },
              2: {
                x: 2692,
                y: 1904
              },
              3: {
                x: 2716,
                y: 1932
              },
              4: {
                x: 2692,
                y: 2030
              },
              5: {
                x: 2692,
                y: 2030
              },
              6: {
                x: 2716,
                y: 2030
              }
            }
          },
          warnings: null
        },
        {
          id: 512,
          sourceNodeId: 154,
          sourcePortId: 1039,
          targetNodeId: 169,
          targetPortId: 1040,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 255
          },
          sourceArrival: {
            lock: true,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 105
          },
          targetDeparture: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 87
          },
          targetArrival: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 273
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 1808
              },
              {
                x: 2590,
                y: 1808
              },
              {
                x: 2018,
                y: 1808
              },
              {
                x: 1954,
                y: 1808
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 1796
              },
              1: {
                x: 2608,
                y: 1820
              },
              2: {
                x: 1972,
                y: 1820
              },
              3: {
                x: 2000,
                y: 1796
              },
              4: {
                x: 2304,
                y: 1796
              },
              5: {
                x: 2304,
                y: 1796
              },
              6: {
                x: 2304,
                y: 1820
              }
            }
          },
          warnings: null
        },
        {
          id: 513,
          sourceNodeId: 142,
          sourcePortId: 1041,
          targetNodeId: 141,
          targetPortId: 1042,
          travelTime: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 295
          },
          sourceArrival: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 65
          },
          targetDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          targetArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 314
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: 1726
              },
              {
                x: 80,
                y: 1662
              },
              {
                x: 80,
                y: 1314
              },
              {
                x: 80,
                y: 1250
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: 1708
              },
              1: {
                x: 68,
                y: 1680
              },
              2: {
                x: 68,
                y: 1268
              },
              3: {
                x: 92,
                y: 1296
              },
              4: {
                x: 68,
                y: 1488
              },
              5: {
                x: 68,
                y: 1488
              },
              6: {
                x: 92,
                y: 1488
              }
            }
          },
          warnings: null
        },
        {
          id: 514,
          sourceNodeId: 141,
          sourcePortId: 1043,
          targetNodeId: 143,
          targetPortId: 1044,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 314
          },
          sourceArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          targetDeparture: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 37
          },
          targetArrival: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 323
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: 1182
              },
              {
                x: 80,
                y: 1118
              },
              {
                x: 80,
                y: 866
              },
              {
                x: 80,
                y: 802
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: 1164
              },
              1: {
                x: 68,
                y: 1136
              },
              2: {
                x: 68,
                y: 820
              },
              3: {
                x: 92,
                y: 848
              },
              4: {
                x: 68,
                y: 992
              },
              5: {
                x: 68,
                y: 992
              },
              6: {
                x: 92,
                y: 992
              }
            }
          },
          warnings: null
        },
        {
          id: 515,
          sourceNodeId: 143,
          sourcePortId: 1045,
          targetNodeId: 133,
          targetPortId: 1046,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 323
          },
          sourceArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 37
          },
          targetDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 30
          },
          targetArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: 734
              },
              {
                x: 80,
                y: 670
              },
              {
                x: 80,
                y: 414
              },
              {
                x: 80,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: 716
              },
              1: {
                x: 68,
                y: 688
              },
              2: {
                x: 68,
                y: 368
              },
              3: {
                x: 92,
                y: 396
              },
              4: {
                x: 68,
                y: 542
              },
              5: {
                x: 68,
                y: 542
              },
              6: {
                x: 92,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 516,
          sourceNodeId: 133,
          sourcePortId: 1047,
          targetNodeId: 144,
          targetPortId: 1048,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 332
          },
          sourceArrival: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 28
          },
          targetDeparture: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          targetArrival: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 342
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: 94
              },
              {
                x: 80,
                y: 30
              },
              {
                x: 80,
                y: -290
              },
              {
                x: 80,
                y: -354
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: 76
              },
              1: {
                x: 68,
                y: 48
              },
              2: {
                x: 68,
                y: -336
              },
              3: {
                x: 92,
                y: -308
              },
              4: {
                x: 68,
                y: -130
              },
              5: {
                x: 68,
                y: -130
              },
              6: {
                x: 92,
                y: -130
              }
            }
          },
          warnings: null
        },
        {
          id: 517,
          sourceNodeId: 144,
          sourcePortId: 1049,
          targetNodeId: 145,
          targetPortId: 1050,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 342
          },
          sourceArrival: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: -450
              },
              {
                x: 80,
                y: -514
              },
              {
                x: 80,
                y: -798
              },
              {
                x: 80,
                y: -862
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: -468
              },
              1: {
                x: 68,
                y: -496
              },
              2: {
                x: 68,
                y: -844
              },
              3: {
                x: 92,
                y: -816
              },
              4: {
                x: 68,
                y: -656
              },
              5: {
                x: 68,
                y: -656
              },
              6: {
                x: 92,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 518,
          sourceNodeId: 145,
          sourcePortId: 1051,
          targetNodeId: 146,
          targetPortId: 1052,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 8
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 352
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: -930
              },
              {
                x: 80,
                y: -994
              },
              {
                x: 80,
                y: -1278
              },
              {
                x: 80,
                y: -1342
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: -948
              },
              1: {
                x: 68,
                y: -976
              },
              2: {
                x: 68,
                y: -1324
              },
              3: {
                x: 92,
                y: -1296
              },
              4: {
                x: 68,
                y: -1136
              },
              5: {
                x: 68,
                y: -1136
              },
              6: {
                x: 92,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 519,
          sourceNodeId: 146,
          sourcePortId: 1053,
          targetNodeId: 134,
          targetPortId: 1054,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 352
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 8
          },
          targetDeparture: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 3
          },
          targetArrival: {
            lock: true,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 357
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 80,
                y: -1410
              },
              {
                x: 80,
                y: -1474
              },
              {
                x: 80,
                y: -1758
              },
              {
                x: 80,
                y: -1822
              }
            ],
            textPositions: {
              0: {
                x: 92,
                y: -1428
              },
              1: {
                x: 68,
                y: -1456
              },
              2: {
                x: 68,
                y: -1804
              },
              3: {
                x: 92,
                y: -1776
              },
              4: {
                x: 68,
                y: -1616
              },
              5: {
                x: 68,
                y: -1616
              },
              6: {
                x: 92,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 520,
          sourceNodeId: 155,
          sourcePortId: 1055,
          targetNodeId: 158,
          targetPortId: 1056,
          travelTime: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 128
          },
          sourceArrival: {
            lock: true,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 232
          },
          targetDeparture: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 204
          },
          targetArrival: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 156
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2704,
                y: 2270
              },
              {
                x: 2704,
                y: 2334
              },
              {
                x: 2704,
                y: 2622
              },
              {
                x: 2704,
                y: 2686
              }
            ],
            textPositions: {
              0: {
                x: 2692,
                y: 2288
              },
              1: {
                x: 2716,
                y: 2316
              },
              2: {
                x: 2716,
                y: 2668
              },
              3: {
                x: 2692,
                y: 2640
              },
              4: {
                x: 2692,
                y: 2478
              },
              5: {
                x: 2692,
                y: 2478
              },
              6: {
                x: 2716,
                y: 2478
              }
            }
          },
          warnings: null
        },
        {
          id: 521,
          sourceNodeId: 156,
          sourcePortId: 1057,
          targetNodeId: 136,
          targetPortId: 1058,
          travelTime: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 2
          },
          sourceArrival: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 118
          },
          targetDeparture: {
            lock: false,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 104
          },
          targetArrival: {
            lock: false,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 16
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2608,
                y: 3710
              },
              {
                x: 2608,
                y: 3646
              },
              {
                x: 2608,
                y: 3390
              },
              {
                x: 2608,
                y: 3326
              }
            ],
            textPositions: {
              0: {
                x: 2620,
                y: 3692
              },
              1: {
                x: 2596,
                y: 3664
              },
              2: {
                x: 2596,
                y: 3344
              },
              3: {
                x: 2620,
                y: 3372
              },
              4: {
                x: 2596,
                y: 3518
              },
              5: {
                x: 2596,
                y: 3518
              },
              6: {
                x: 2620,
                y: 3518
              }
            }
          },
          warnings: null
        },
        {
          id: 522,
          sourceNodeId: 136,
          sourcePortId: 1059,
          targetNodeId: 158,
          targetPortId: 1060,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          sourceArrival: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 102
          },
          targetDeparture: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 96
          },
          targetArrival: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 24
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2608,
                y: 3230
              },
              {
                x: 2608,
                y: 3166
              },
              {
                x: 2608,
                y: 2818
              },
              {
                x: 2608,
                y: 2754
              }
            ],
            textPositions: {
              0: {
                x: 2620,
                y: 3212
              },
              1: {
                x: 2596,
                y: 3184
              },
              2: {
                x: 2596,
                y: 2772
              },
              3: {
                x: 2620,
                y: 2800
              },
              4: {
                x: 2596,
                y: 2992
              },
              5: {
                x: 2596,
                y: 2992
              },
              6: {
                x: 2620,
                y: 2992
              }
            }
          },
          warnings: null
        },
        {
          id: 523,
          sourceNodeId: 158,
          sourcePortId: 1061,
          targetNodeId: 155,
          targetPortId: 1062,
          travelTime: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 24
          },
          sourceArrival: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 96
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 2686
              },
              {
                x: 2672,
                y: 2622
              },
              {
                x: 2672,
                y: 2334
              },
              {
                x: 2672,
                y: 2270
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 2668
              },
              1: {
                x: 2660,
                y: 2640
              },
              2: {
                x: 2660,
                y: 2288
              },
              3: {
                x: 2684,
                y: 2316
              },
              4: {
                x: 2660,
                y: 2478
              },
              5: {
                x: 2660,
                y: 2478
              },
              6: {
                x: 2684,
                y: 2478
              }
            }
          },
          warnings: null
        },
        {
          id: 524,
          sourceNodeId: 155,
          sourcePortId: 1063,
          targetNodeId: 154,
          targetPortId: 1064,
          travelTime: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetDeparture: {
            lock: true,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 49
          },
          targetArrival: {
            lock: true,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 71
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 2174
              },
              {
                x: 2672,
                y: 2110
              },
              {
                x: 2672,
                y: 1950
              },
              {
                x: 2672,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 2156
              },
              1: {
                x: 2660,
                y: 2128
              },
              2: {
                x: 2660,
                y: 1904
              },
              3: {
                x: 2684,
                y: 1932
              },
              4: {
                x: 2660,
                y: 2030
              },
              5: {
                x: 2660,
                y: 2030
              },
              6: {
                x: 2684,
                y: 2030
              }
            }
          },
          warnings: null
        },
        {
          id: 525,
          sourceNodeId: 154,
          sourcePortId: 1065,
          targetNodeId: 153,
          targetPortId: 1066,
          travelTime: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 75
          },
          sourceArrival: {
            lock: true,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 45
          },
          targetDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 30
          },
          targetArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 1790
              },
              {
                x: 2672,
                y: 1726
              },
              {
                x: 2672,
                y: 1470
              },
              {
                x: 2672,
                y: 1406
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 1772
              },
              1: {
                x: 2660,
                y: 1744
              },
              2: {
                x: 2660,
                y: 1424
              },
              3: {
                x: 2684,
                y: 1452
              },
              4: {
                x: 2660,
                y: 1598
              },
              5: {
                x: 2660,
                y: 1598
              },
              6: {
                x: 2684,
                y: 1598
              }
            }
          },
          warnings: null
        },
        {
          id: 526,
          sourceNodeId: 153,
          sourcePortId: 1067,
          targetNodeId: 170,
          targetPortId: 1068,
          travelTime: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 91
          },
          sourceArrival: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 29
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 107
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 1310
              },
              {
                x: 2672,
                y: 1246
              },
              {
                x: 2672,
                y: 894
              },
              {
                x: 2672,
                y: 830
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 1292
              },
              1: {
                x: 2660,
                y: 1264
              },
              2: {
                x: 2660,
                y: 848
              },
              3: {
                x: 2684,
                y: 876
              },
              4: {
                x: 2660,
                y: 1070
              },
              5: {
                x: 2660,
                y: 1070
              },
              6: {
                x: 2684,
                y: 1070
              }
            }
          },
          warnings: null
        },
        {
          id: 527,
          sourceNodeId: 157,
          sourcePortId: 1069,
          targetNodeId: 136,
          targetPortId: 1070,
          travelTime: {
            lock: true,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 273
          },
          sourceArrival: {
            lock: true,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 327
          },
          targetDeparture: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 304
          },
          targetArrival: {
            lock: true,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 296
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2306,
                y: 3248
              },
              {
                x: 2370,
                y: 3248
              },
              {
                x: 2526,
                y: 3248
              },
              {
                x: 2590,
                y: 3248
              }
            ],
            textPositions: {
              0: {
                x: 2324,
                y: 3260
              },
              1: {
                x: 2352,
                y: 3236
              },
              2: {
                x: 2572,
                y: 3236
              },
              3: {
                x: 2544,
                y: 3260
              },
              4: {
                x: 2448,
                y: 3236
              },
              5: {
                x: 2448,
                y: 3236
              },
              6: {
                x: 2448,
                y: 3260
              }
            }
          },
          warnings: null
        },
        {
          id: 528,
          sourceNodeId: 136,
          sourcePortId: 1071,
          targetNodeId: 158,
          targetPortId: 1072,
          travelTime: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 300
          },
          sourceArrival: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 300
          },
          targetDeparture: {
            lock: true,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 285
          },
          targetArrival: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 315
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 3230
              },
              {
                x: 2672,
                y: 3166
              },
              {
                x: 2672,
                y: 2818
              },
              {
                x: 2672,
                y: 2754
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 3212
              },
              1: {
                x: 2660,
                y: 3184
              },
              2: {
                x: 2660,
                y: 2772
              },
              3: {
                x: 2684,
                y: 2800
              },
              4: {
                x: 2660,
                y: 2992
              },
              5: {
                x: 2660,
                y: 2992
              },
              6: {
                x: 2684,
                y: 2992
              }
            }
          },
          warnings: null
        },
        {
          id: 529,
          sourceNodeId: 158,
          sourcePortId: 1073,
          targetNodeId: 159,
          targetPortId: 1074,
          travelTime: {
            lock: true,
            time: 53,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 316
          },
          sourceArrival: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 284
          },
          targetDeparture: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 231
          },
          targetArrival: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 369
          },
          numberOfStops: 5,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2608,
                y: 2686
              },
              {
                x: 2608,
                y: 2622
              },
              {
                x: 2288,
                y: 2398
              },
              {
                x: 2288,
                y: 2334
              }
            ],
            textPositions: {
              0: {
                x: 2620,
                y: 2668
              },
              1: {
                x: 2596,
                y: 2640
              },
              2: {
                x: 2276,
                y: 2352
              },
              3: {
                x: 2300,
                y: 2380
              },
              4: {
                x: 2460,
                y: 2510
              },
              5: {
                x: 2460,
                y: 2510
              },
              6: {
                x: 2436,
                y: 2510
              }
            }
          },
          warnings: null
        },
        {
          id: 530,
          sourceNodeId: 159,
          sourcePortId: 1075,
          targetNodeId: 155,
          targetPortId: 1076,
          travelTime: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 370
          },
          sourceArrival: {
            lock: true,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 230
          },
          targetDeparture: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 198
          },
          targetArrival: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 402
          },
          numberOfStops: 1,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2370,
                y: 2256
              },
              {
                x: 2434,
                y: 2256
              },
              {
                x: 2590,
                y: 2192
              },
              {
                x: 2654,
                y: 2192
              }
            ],
            textPositions: {
              0: {
                x: 2388,
                y: 2268
              },
              1: {
                x: 2416,
                y: 2244
              },
              2: {
                x: 2636,
                y: 2180
              },
              3: {
                x: 2608,
                y: 2204
              },
              4: {
                x: 2512,
                y: 2212
              },
              5: {
                x: 2512,
                y: 2212
              },
              6: {
                x: 2512,
                y: 2236
              }
            }
          },
          warnings: null
        },
        {
          id: 531,
          sourceNodeId: 155,
          sourcePortId: 1077,
          targetNodeId: 154,
          targetPortId: 1078,
          travelTime: {
            lock: true,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 403
          },
          sourceArrival: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 197
          },
          targetDeparture: {
            lock: true,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 174
          },
          targetArrival: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 426
          },
          numberOfStops: 3,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2736,
                y: 2174
              },
              {
                x: 2736,
                y: 2110
              },
              {
                x: 2736,
                y: 1950
              },
              {
                x: 2736,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 2748,
                y: 2156
              },
              1: {
                x: 2724,
                y: 2128
              },
              2: {
                x: 2724,
                y: 1904
              },
              3: {
                x: 2748,
                y: 1932
              },
              4: {
                x: 2724,
                y: 2030
              },
              5: {
                x: 2724,
                y: 2030
              },
              6: {
                x: 2748,
                y: 2030
              }
            }
          },
          warnings: null
        },
        {
          id: 532,
          sourceNodeId: 154,
          sourcePortId: 1079,
          targetNodeId: 169,
          targetPortId: 1080,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 435
          },
          sourceArrival: {
            lock: true,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 165
          },
          targetDeparture: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 147
          },
          targetArrival: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 453
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 1840
              },
              {
                x: 2590,
                y: 1840
              },
              {
                x: 2018,
                y: 1840
              },
              {
                x: 1954,
                y: 1840
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 1828
              },
              1: {
                x: 2608,
                y: 1852
              },
              2: {
                x: 1972,
                y: 1852
              },
              3: {
                x: 2000,
                y: 1828
              },
              4: {
                x: 2304,
                y: 1828
              },
              5: {
                x: 2304,
                y: 1828
              },
              6: {
                x: 2304,
                y: 1852
              }
            }
          },
          warnings: null
        },
        {
          id: 533,
          sourceNodeId: 157,
          sourcePortId: 1081,
          targetNodeId: 136,
          targetPortId: 1082,
          travelTime: {
            lock: true,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 153
          },
          sourceArrival: {
            lock: true,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 207
          },
          targetDeparture: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 184
          },
          targetArrival: {
            lock: true,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 176
          },
          numberOfStops: 3,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2306,
                y: 3280
              },
              {
                x: 2370,
                y: 3280
              },
              {
                x: 2526,
                y: 3280
              },
              {
                x: 2590,
                y: 3280
              }
            ],
            textPositions: {
              0: {
                x: 2324,
                y: 3292
              },
              1: {
                x: 2352,
                y: 3268
              },
              2: {
                x: 2572,
                y: 3268
              },
              3: {
                x: 2544,
                y: 3292
              },
              4: {
                x: 2448,
                y: 3268
              },
              5: {
                x: 2448,
                y: 3268
              },
              6: {
                x: 2448,
                y: 3292
              }
            }
          },
          warnings: null
        },
        {
          id: 534,
          sourceNodeId: 136,
          sourcePortId: 1083,
          targetNodeId: 158,
          targetPortId: 1084,
          travelTime: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 180
          },
          sourceArrival: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 180
          },
          targetDeparture: {
            lock: true,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 165
          },
          targetArrival: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 195
          },
          numberOfStops: 1,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2704,
                y: 3230
              },
              {
                x: 2704,
                y: 3166
              },
              {
                x: 2704,
                y: 2818
              },
              {
                x: 2704,
                y: 2754
              }
            ],
            textPositions: {
              0: {
                x: 2716,
                y: 3212
              },
              1: {
                x: 2692,
                y: 3184
              },
              2: {
                x: 2692,
                y: 2772
              },
              3: {
                x: 2716,
                y: 2800
              },
              4: {
                x: 2692,
                y: 2992
              },
              5: {
                x: 2692,
                y: 2992
              },
              6: {
                x: 2716,
                y: 2992
              }
            }
          },
          warnings: null
        },
        {
          id: 535,
          sourceNodeId: 158,
          sourcePortId: 1085,
          targetNodeId: 159,
          targetPortId: 1086,
          travelTime: {
            lock: true,
            time: 53,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 196
          },
          sourceArrival: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 164
          },
          targetDeparture: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 111
          },
          targetArrival: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 249
          },
          numberOfStops: 5,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2640,
                y: 2686
              },
              {
                x: 2640,
                y: 2622
              },
              {
                x: 2320,
                y: 2398
              },
              {
                x: 2320,
                y: 2334
              }
            ],
            textPositions: {
              0: {
                x: 2652,
                y: 2668
              },
              1: {
                x: 2628,
                y: 2640
              },
              2: {
                x: 2308,
                y: 2352
              },
              3: {
                x: 2332,
                y: 2380
              },
              4: {
                x: 2492,
                y: 2510
              },
              5: {
                x: 2492,
                y: 2510
              },
              6: {
                x: 2468,
                y: 2510
              }
            }
          },
          warnings: null
        },
        {
          id: 536,
          sourceNodeId: 159,
          sourcePortId: 1087,
          targetNodeId: 155,
          targetPortId: 1088,
          travelTime: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 250
          },
          sourceArrival: {
            lock: true,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 110
          },
          targetDeparture: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 78
          },
          targetArrival: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 282
          },
          numberOfStops: 1,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2370,
                y: 2288
              },
              {
                x: 2434,
                y: 2288
              },
              {
                x: 2590,
                y: 2224
              },
              {
                x: 2654,
                y: 2224
              }
            ],
            textPositions: {
              0: {
                x: 2388,
                y: 2300
              },
              1: {
                x: 2416,
                y: 2276
              },
              2: {
                x: 2636,
                y: 2212
              },
              3: {
                x: 2608,
                y: 2236
              },
              4: {
                x: 2512,
                y: 2244
              },
              5: {
                x: 2512,
                y: 2244
              },
              6: {
                x: 2512,
                y: 2268
              }
            }
          },
          warnings: null
        },
        {
          id: 537,
          sourceNodeId: 155,
          sourcePortId: 1089,
          targetNodeId: 154,
          targetPortId: 1090,
          travelTime: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 283
          },
          sourceArrival: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 77
          },
          targetDeparture: {
            lock: true,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 54
          },
          targetArrival: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 306
          },
          numberOfStops: 3,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2768,
                y: 2174
              },
              {
                x: 2768,
                y: 2110
              },
              {
                x: 2768,
                y: 1950
              },
              {
                x: 2768,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 2780,
                y: 2156
              },
              1: {
                x: 2756,
                y: 2128
              },
              2: {
                x: 2756,
                y: 1904
              },
              3: {
                x: 2780,
                y: 1932
              },
              4: {
                x: 2756,
                y: 2030
              },
              5: {
                x: 2756,
                y: 2030
              },
              6: {
                x: 2780,
                y: 2030
              }
            }
          },
          warnings: null
        },
        {
          id: 538,
          sourceNodeId: 154,
          sourcePortId: 1091,
          targetNodeId: 153,
          targetPortId: 1092,
          travelTime: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 315
          },
          sourceArrival: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 45
          },
          targetDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 30
          },
          targetArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          numberOfStops: 0,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2704,
                y: 1790
              },
              {
                x: 2704,
                y: 1726
              },
              {
                x: 2704,
                y: 1470
              },
              {
                x: 2704,
                y: 1406
              }
            ],
            textPositions: {
              0: {
                x: 2716,
                y: 1772
              },
              1: {
                x: 2692,
                y: 1744
              },
              2: {
                x: 2692,
                y: 1424
              },
              3: {
                x: 2716,
                y: 1452
              },
              4: {
                x: 2692,
                y: 1598
              },
              5: {
                x: 2692,
                y: 1598
              },
              6: {
                x: 2716,
                y: 1598
              }
            }
          },
          warnings: null
        },
        {
          id: 539,
          sourceNodeId: 153,
          sourcePortId: 1093,
          targetNodeId: 170,
          targetPortId: 1094,
          travelTime: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 331
          },
          sourceArrival: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 29
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          numberOfStops: 0,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2704,
                y: 1310
              },
              {
                x: 2704,
                y: 1246
              },
              {
                x: 2704,
                y: 894
              },
              {
                x: 2704,
                y: 830
              }
            ],
            textPositions: {
              0: {
                x: 2716,
                y: 1292
              },
              1: {
                x: 2692,
                y: 1264
              },
              2: {
                x: 2692,
                y: 848
              },
              3: {
                x: 2716,
                y: 876
              },
              4: {
                x: 2692,
                y: 1070
              },
              5: {
                x: 2692,
                y: 1070
              },
              6: {
                x: 2716,
                y: 1070
              }
            }
          },
          warnings: null
        },
        {
          id: 540,
          sourceNodeId: 142,
          sourcePortId: 1095,
          targetNodeId: 169,
          targetPortId: 1096,
          travelTime: {
            lock: false,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 35
          },
          sourceArrival: {
            lock: true,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 265
          },
          targetDeparture: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 253
          },
          targetArrival: {
            lock: true,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 47
          },
          numberOfStops: 0,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 226,
                y: 1840
              },
              {
                x: 290,
                y: 1840
              },
              {
                x: 1790,
                y: 1840
              },
              {
                x: 1854,
                y: 1840
              }
            ],
            textPositions: {
              0: {
                x: 244,
                y: 1852
              },
              1: {
                x: 272,
                y: 1828
              },
              2: {
                x: 1836,
                y: 1828
              },
              3: {
                x: 1808,
                y: 1852
              },
              4: {
                x: 1040,
                y: 1828
              },
              5: {
                x: 1040,
                y: 1828
              },
              6: {
                x: 1040,
                y: 1852
              }
            }
          },
          warnings: null
        },
        {
          id: 541,
          sourceNodeId: 153,
          sourcePortId: 1097,
          targetNodeId: 170,
          targetPortId: 1098,
          travelTime: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 58
          },
          sourceArrival: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 242
          },
          targetDeparture: {
            lock: true,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 227
          },
          targetArrival: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 73
          },
          numberOfStops: 1,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2768,
                y: 1310
              },
              {
                x: 2768,
                y: 1246
              },
              {
                x: 2768,
                y: 894
              },
              {
                x: 2768,
                y: 830
              }
            ],
            textPositions: {
              0: {
                x: 2780,
                y: 1292
              },
              1: {
                x: 2756,
                y: 1264
              },
              2: {
                x: 2756,
                y: 848
              },
              3: {
                x: 2780,
                y: 876
              },
              4: {
                x: 2756,
                y: 1070
              },
              5: {
                x: 2756,
                y: 1070
              },
              6: {
                x: 2780,
                y: 1070
              }
            }
          },
          warnings: null
        },
        {
          id: 542,
          sourceNodeId: 142,
          sourcePortId: 1099,
          targetNodeId: 169,
          targetPortId: 1100,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 9
          },
          sourceArrival: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 51
          },
          targetDeparture: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 42
          },
          targetArrival: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          numberOfStops: 0,
          trainrunId: 80,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 226,
                y: 1808
              },
              {
                x: 290,
                y: 1808
              },
              {
                x: 1790,
                y: 1808
              },
              {
                x: 1854,
                y: 1808
              }
            ],
            textPositions: {
              0: {
                x: 244,
                y: 1820
              },
              1: {
                x: 272,
                y: 1796
              },
              2: {
                x: 1836,
                y: 1796
              },
              3: {
                x: 1808,
                y: 1820
              },
              4: {
                x: 1040,
                y: 1796
              },
              5: {
                x: 1040,
                y: 1796
              },
              6: {
                x: 1040,
                y: 1820
              }
            }
          },
          warnings: null
        },
        {
          id: 543,
          sourceNodeId: 153,
          sourcePortId: 1101,
          targetNodeId: 170,
          targetPortId: 1102,
          travelTime: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 29
          },
          sourceArrival: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 31
          },
          targetDeparture: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 17
          },
          targetArrival: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 43
          },
          numberOfStops: 0,
          trainrunId: 80,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2736,
                y: 1310
              },
              {
                x: 2736,
                y: 1246
              },
              {
                x: 2736,
                y: 894
              },
              {
                x: 2736,
                y: 830
              }
            ],
            textPositions: {
              0: {
                x: 2748,
                y: 1292
              },
              1: {
                x: 2724,
                y: 1264
              },
              2: {
                x: 2724,
                y: 848
              },
              3: {
                x: 2748,
                y: 876
              },
              4: {
                x: 2724,
                y: 1070
              },
              5: {
                x: 2724,
                y: 1070
              },
              6: {
                x: 2748,
                y: 1070
              }
            }
          },
          warnings: null
        },
        {
          id: 544,
          sourceNodeId: 142,
          sourcePortId: 1103,
          targetNodeId: 141,
          targetPortId: 1104,
          travelTime: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 299
          },
          sourceArrival: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 241
          },
          targetDeparture: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 222
          },
          targetArrival: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 318
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: 1726
              },
              {
                x: 112,
                y: 1662
              },
              {
                x: 112,
                y: 1314
              },
              {
                x: 112,
                y: 1250
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: 1708
              },
              1: {
                x: 100,
                y: 1680
              },
              2: {
                x: 100,
                y: 1268
              },
              3: {
                x: 124,
                y: 1296
              },
              4: {
                x: 100,
                y: 1488
              },
              5: {
                x: 100,
                y: 1488
              },
              6: {
                x: 124,
                y: 1488
              }
            }
          },
          warnings: null
        },
        {
          id: 545,
          sourceNodeId: 141,
          sourcePortId: 1105,
          targetNodeId: 143,
          targetPortId: 1106,
          travelTime: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 319
          },
          sourceArrival: {
            lock: true,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 221
          },
          targetDeparture: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 209
          },
          targetArrival: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 331
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: 1182
              },
              {
                x: 112,
                y: 1118
              },
              {
                x: 112,
                y: 866
              },
              {
                x: 112,
                y: 802
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: 1164
              },
              1: {
                x: 100,
                y: 1136
              },
              2: {
                x: 100,
                y: 820
              },
              3: {
                x: 124,
                y: 848
              },
              4: {
                x: 100,
                y: 992
              },
              5: {
                x: 100,
                y: 992
              },
              6: {
                x: 124,
                y: 992
              }
            }
          },
          warnings: null
        },
        {
          id: 546,
          sourceNodeId: 143,
          sourcePortId: 1107,
          targetNodeId: 172,
          targetPortId: 1108,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 332
          },
          sourceArrival: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 208
          },
          targetDeparture: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 201
          },
          targetArrival: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 339
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 752
              },
              {
                x: -2,
                y: 752
              },
              {
                x: -446,
                y: 336
              },
              {
                x: -510,
                y: 336
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 740
              },
              1: {
                x: 16,
                y: 764
              },
              2: {
                x: -492,
                y: 348
              },
              3: {
                x: -464,
                y: 324
              },
              4: {
                x: -224,
                y: 532
              },
              5: {
                x: -224,
                y: 532
              },
              6: {
                x: -224,
                y: 556
              }
            }
          },
          warnings: null
        },
        {
          id: 547,
          sourceNodeId: 129,
          sourcePortId: 1109,
          targetNodeId: 171,
          targetPortId: 1110,
          travelTime: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 364
          },
          sourceArrival: {
            lock: true,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 176
          },
          targetDeparture: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 154
          },
          targetArrival: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 386
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2146,
                y: 176
              },
              {
                x: -2210,
                y: 176
              },
              {
                x: -2398,
                y: 336
              },
              {
                x: -2462,
                y: 336
              }
            ],
            textPositions: {
              0: {
                x: -2164,
                y: 164
              },
              1: {
                x: -2192,
                y: 188
              },
              2: {
                x: -2444,
                y: 348
              },
              3: {
                x: -2416,
                y: 324
              },
              4: {
                x: -2304,
                y: 244
              },
              5: {
                x: -2304,
                y: 244
              },
              6: {
                x: -2304,
                y: 268
              }
            }
          },
          warnings: null
        },
        {
          id: 548,
          sourceNodeId: 142,
          sourcePortId: 1111,
          targetNodeId: 141,
          targetPortId: 1112,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          sourceArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetDeparture: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 72
          },
          targetArrival: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 108
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 208,
                y: 1726
              },
              {
                x: 208,
                y: 1662
              },
              {
                x: 208,
                y: 1314
              },
              {
                x: 208,
                y: 1250
              }
            ],
            textPositions: {
              0: {
                x: 220,
                y: 1708
              },
              1: {
                x: 196,
                y: 1680
              },
              2: {
                x: 196,
                y: 1268
              },
              3: {
                x: 220,
                y: 1296
              },
              4: {
                x: 196,
                y: 1488
              },
              5: {
                x: 196,
                y: 1488
              },
              6: {
                x: 220,
                y: 1488
              }
            }
          },
          warnings: null
        },
        {
          id: 549,
          sourceNodeId: 141,
          sourcePortId: 1113,
          targetNodeId: 143,
          targetPortId: 1114,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 109
          },
          sourceArrival: {
            lock: true,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 71
          },
          targetDeparture: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 58
          },
          targetArrival: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 122
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 208,
                y: 1182
              },
              {
                x: 208,
                y: 1118
              },
              {
                x: 208,
                y: 866
              },
              {
                x: 208,
                y: 802
              }
            ],
            textPositions: {
              0: {
                x: 220,
                y: 1164
              },
              1: {
                x: 196,
                y: 1136
              },
              2: {
                x: 196,
                y: 820
              },
              3: {
                x: 220,
                y: 848
              },
              4: {
                x: 196,
                y: 992
              },
              5: {
                x: 196,
                y: 992
              },
              6: {
                x: 220,
                y: 992
              }
            }
          },
          warnings: null
        },
        {
          id: 550,
          sourceNodeId: 143,
          sourcePortId: 1115,
          targetNodeId: 133,
          targetPortId: 1116,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 124
          },
          sourceArrival: {
            lock: true,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 56
          },
          targetDeparture: {
            lock: true,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 49
          },
          targetArrival: {
            lock: true,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 131
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: 734
              },
              {
                x: 176,
                y: 670
              },
              {
                x: 176,
                y: 414
              },
              {
                x: 176,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: 716
              },
              1: {
                x: 164,
                y: 688
              },
              2: {
                x: 164,
                y: 368
              },
              3: {
                x: 188,
                y: 396
              },
              4: {
                x: 164,
                y: 542
              },
              5: {
                x: 164,
                y: 542
              },
              6: {
                x: 188,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 551,
          sourceNodeId: 133,
          sourcePortId: 1117,
          targetNodeId: 144,
          targetPortId: 1118,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 132
          },
          sourceArrival: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 48
          },
          targetDeparture: {
            lock: true,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 38
          },
          targetArrival: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 142
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 240,
                y: 94
              },
              {
                x: 240,
                y: 30
              },
              {
                x: 240,
                y: -290
              },
              {
                x: 240,
                y: -354
              }
            ],
            textPositions: {
              0: {
                x: 252,
                y: 76
              },
              1: {
                x: 228,
                y: 48
              },
              2: {
                x: 228,
                y: -336
              },
              3: {
                x: 252,
                y: -308
              },
              4: {
                x: 228,
                y: -130
              },
              5: {
                x: 228,
                y: -130
              },
              6: {
                x: 252,
                y: -130
              }
            }
          },
          warnings: null
        },
        {
          id: 552,
          sourceNodeId: 144,
          sourcePortId: 1119,
          targetNodeId: 145,
          targetPortId: 1120,
          travelTime: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 143
          },
          sourceArrival: {
            lock: true,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 37
          },
          targetDeparture: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 33
          },
          targetArrival: {
            lock: true,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 147
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 304,
                y: -450
              },
              {
                x: 304,
                y: -514
              },
              {
                x: 304,
                y: -798
              },
              {
                x: 304,
                y: -862
              }
            ],
            textPositions: {
              0: {
                x: 316,
                y: -468
              },
              1: {
                x: 292,
                y: -496
              },
              2: {
                x: 292,
                y: -844
              },
              3: {
                x: 316,
                y: -816
              },
              4: {
                x: 292,
                y: -656
              },
              5: {
                x: 292,
                y: -656
              },
              6: {
                x: 316,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 553,
          sourceNodeId: 145,
          sourcePortId: 1121,
          targetNodeId: 146,
          targetPortId: 1122,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 148
          },
          sourceArrival: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 32
          },
          targetDeparture: {
            lock: true,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 27
          },
          targetArrival: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 153
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 304,
                y: -930
              },
              {
                x: 304,
                y: -994
              },
              {
                x: 304,
                y: -1278
              },
              {
                x: 304,
                y: -1342
              }
            ],
            textPositions: {
              0: {
                x: 316,
                y: -948
              },
              1: {
                x: 292,
                y: -976
              },
              2: {
                x: 292,
                y: -1324
              },
              3: {
                x: 316,
                y: -1296
              },
              4: {
                x: 292,
                y: -1136
              },
              5: {
                x: 292,
                y: -1136
              },
              6: {
                x: 316,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 554,
          sourceNodeId: 146,
          sourcePortId: 1123,
          targetNodeId: 134,
          targetPortId: 1124,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 154
          },
          sourceArrival: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 26
          },
          targetDeparture: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 16
          },
          targetArrival: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 164
          },
          numberOfStops: 0,
          trainrunId: 82,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 304,
                y: -1410
              },
              {
                x: 304,
                y: -1474
              },
              {
                x: 304,
                y: -1758
              },
              {
                x: 304,
                y: -1822
              }
            ],
            textPositions: {
              0: {
                x: 316,
                y: -1428
              },
              1: {
                x: 292,
                y: -1456
              },
              2: {
                x: 292,
                y: -1804
              },
              3: {
                x: 316,
                y: -1776
              },
              4: {
                x: 292,
                y: -1616
              },
              5: {
                x: 292,
                y: -1616
              },
              6: {
                x: 316,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 555,
          sourceNodeId: 142,
          sourcePortId: 1125,
          targetNodeId: 141,
          targetPortId: 1126,
          travelTime: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 115
          },
          sourceArrival: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 65
          },
          targetDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          targetArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 134
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: 1726
              },
              {
                x: 176,
                y: 1662
              },
              {
                x: 176,
                y: 1314
              },
              {
                x: 176,
                y: 1250
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: 1708
              },
              1: {
                x: 164,
                y: 1680
              },
              2: {
                x: 164,
                y: 1268
              },
              3: {
                x: 188,
                y: 1296
              },
              4: {
                x: 164,
                y: 1488
              },
              5: {
                x: 164,
                y: 1488
              },
              6: {
                x: 188,
                y: 1488
              }
            }
          },
          warnings: null
        },
        {
          id: 556,
          sourceNodeId: 141,
          sourcePortId: 1127,
          targetNodeId: 143,
          targetPortId: 1128,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 134
          },
          sourceArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          targetDeparture: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 38
          },
          targetArrival: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 142
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: 1182
              },
              {
                x: 176,
                y: 1118
              },
              {
                x: 176,
                y: 866
              },
              {
                x: 176,
                y: 802
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: 1164
              },
              1: {
                x: 164,
                y: 1136
              },
              2: {
                x: 164,
                y: 820
              },
              3: {
                x: 188,
                y: 848
              },
              4: {
                x: 164,
                y: 992
              },
              5: {
                x: 164,
                y: 992
              },
              6: {
                x: 188,
                y: 992
              }
            }
          },
          warnings: null
        },
        {
          id: 557,
          sourceNodeId: 143,
          sourcePortId: 1129,
          targetNodeId: 133,
          targetPortId: 1130,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 142
          },
          sourceArrival: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 38
          },
          targetDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 30
          },
          targetArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 150
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: 734
              },
              {
                x: 144,
                y: 670
              },
              {
                x: 144,
                y: 414
              },
              {
                x: 144,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 156,
                y: 716
              },
              1: {
                x: 132,
                y: 688
              },
              2: {
                x: 132,
                y: 368
              },
              3: {
                x: 156,
                y: 396
              },
              4: {
                x: 132,
                y: 542
              },
              5: {
                x: 132,
                y: 542
              },
              6: {
                x: 156,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 558,
          sourceNodeId: 133,
          sourcePortId: 1131,
          targetNodeId: 144,
          targetPortId: 1132,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 152
          },
          sourceArrival: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 28
          },
          targetDeparture: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          targetArrival: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 162
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 208,
                y: 94
              },
              {
                x: 208,
                y: 30
              },
              {
                x: 208,
                y: -290
              },
              {
                x: 208,
                y: -354
              }
            ],
            textPositions: {
              0: {
                x: 220,
                y: 76
              },
              1: {
                x: 196,
                y: 48
              },
              2: {
                x: 196,
                y: -336
              },
              3: {
                x: 220,
                y: -308
              },
              4: {
                x: 196,
                y: -130
              },
              5: {
                x: 196,
                y: -130
              },
              6: {
                x: 220,
                y: -130
              }
            }
          },
          warnings: null
        },
        {
          id: 559,
          sourceNodeId: 144,
          sourcePortId: 1133,
          targetNodeId: 145,
          targetPortId: 1134,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 162
          },
          sourceArrival: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 167
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 272,
                y: -450
              },
              {
                x: 272,
                y: -514
              },
              {
                x: 272,
                y: -798
              },
              {
                x: 272,
                y: -862
              }
            ],
            textPositions: {
              0: {
                x: 284,
                y: -468
              },
              1: {
                x: 260,
                y: -496
              },
              2: {
                x: 260,
                y: -844
              },
              3: {
                x: 284,
                y: -816
              },
              4: {
                x: 260,
                y: -656
              },
              5: {
                x: 260,
                y: -656
              },
              6: {
                x: 284,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 560,
          sourceNodeId: 145,
          sourcePortId: 1135,
          targetNodeId: 146,
          targetPortId: 1136,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 167
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 8
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 172
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 272,
                y: -930
              },
              {
                x: 272,
                y: -994
              },
              {
                x: 272,
                y: -1278
              },
              {
                x: 272,
                y: -1342
              }
            ],
            textPositions: {
              0: {
                x: 284,
                y: -948
              },
              1: {
                x: 260,
                y: -976
              },
              2: {
                x: 260,
                y: -1324
              },
              3: {
                x: 284,
                y: -1296
              },
              4: {
                x: 260,
                y: -1136
              },
              5: {
                x: 260,
                y: -1136
              },
              6: {
                x: 284,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 561,
          sourceNodeId: 146,
          sourcePortId: 1137,
          targetNodeId: 134,
          targetPortId: 1138,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 172
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 8
          },
          targetDeparture: {
            lock: false,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 3
          },
          targetArrival: {
            lock: false,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 177
          },
          numberOfStops: 0,
          trainrunId: 83,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 272,
                y: -1410
              },
              {
                x: 272,
                y: -1474
              },
              {
                x: 272,
                y: -1758
              },
              {
                x: 272,
                y: -1822
              }
            ],
            textPositions: {
              0: {
                x: 284,
                y: -1428
              },
              1: {
                x: 260,
                y: -1456
              },
              2: {
                x: 260,
                y: -1804
              },
              3: {
                x: 284,
                y: -1776
              },
              4: {
                x: 260,
                y: -1616
              },
              5: {
                x: 260,
                y: -1616
              },
              6: {
                x: 284,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 562,
          sourceNodeId: 135,
          sourcePortId: 1139,
          targetNodeId: 150,
          targetPortId: 1140,
          travelTime: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 9
          },
          sourceArrival: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 291
          },
          targetDeparture: {
            lock: true,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 279
          },
          targetArrival: {
            lock: true,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 21
          },
          numberOfStops: 1,
          trainrunId: 84,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 176
              },
              {
                x: 2914,
                y: 176
              },
              {
                x: 3230,
                y: 176
              },
              {
                x: 3294,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 188
              },
              1: {
                x: 2896,
                y: 164
              },
              2: {
                x: 3276,
                y: 164
              },
              3: {
                x: 3248,
                y: 188
              },
              4: {
                x: 3072,
                y: 164
              },
              5: {
                x: 3072,
                y: 164
              },
              6: {
                x: 3072,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 563,
          sourceNodeId: 150,
          sourcePortId: 1141,
          targetNodeId: 151,
          targetPortId: 1142,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 23
          },
          sourceArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 277
          },
          targetDeparture: {
            lock: true,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 264
          },
          targetArrival: {
            lock: true,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 36
          },
          numberOfStops: 0,
          trainrunId: 84,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3394,
                y: 176
              },
              {
                x: 3458,
                y: 176
              },
              {
                x: 3806,
                y: 176
              },
              {
                x: 3870,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 3412,
                y: 188
              },
              1: {
                x: 3440,
                y: 164
              },
              2: {
                x: 3852,
                y: 164
              },
              3: {
                x: 3824,
                y: 188
              },
              4: {
                x: 3632,
                y: 164
              },
              5: {
                x: 3632,
                y: 164
              },
              6: {
                x: 3632,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 564,
          sourceNodeId: 151,
          sourcePortId: 1143,
          targetNodeId: 137,
          targetPortId: 1144,
          travelTime: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 38
          },
          sourceArrival: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 262
          },
          targetDeparture: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 218
          },
          targetArrival: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 82
          },
          numberOfStops: 4,
          trainrunId: 84,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3970,
                y: 176
              },
              {
                x: 4034,
                y: 176
              },
              {
                x: 4574,
                y: 176
              },
              {
                x: 4638,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 3988,
                y: 188
              },
              1: {
                x: 4016,
                y: 164
              },
              2: {
                x: 4620,
                y: 164
              },
              3: {
                x: 4592,
                y: 188
              },
              4: {
                x: 4304,
                y: 164
              },
              5: {
                x: 4304,
                y: 164
              },
              6: {
                x: 4304,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 565,
          sourceNodeId: 137,
          sourcePortId: 1145,
          targetNodeId: 140,
          targetPortId: 1146,
          travelTime: {
            lock: true,
            time: 61,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 84
          },
          sourceArrival: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 216
          },
          targetDeparture: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 155
          },
          targetArrival: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 145
          },
          numberOfStops: 5,
          trainrunId: 84,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 4656,
                y: 222
              },
              {
                x: 4656,
                y: 286
              },
              {
                x: 4656,
                y: 1118
              },
              {
                x: 4656,
                y: 1182
              }
            ],
            textPositions: {
              0: {
                x: 4644,
                y: 240
              },
              1: {
                x: 4668,
                y: 268
              },
              2: {
                x: 4668,
                y: 1164
              },
              3: {
                x: 4644,
                y: 1136
              },
              4: {
                x: 4644,
                y: 702
              },
              5: {
                x: 4644,
                y: 702
              },
              6: {
                x: 4668,
                y: 702
              }
            }
          },
          warnings: null
        },
        {
          id: 566,
          sourceNodeId: 140,
          sourcePortId: 1147,
          targetNodeId: 152,
          targetPortId: 1148,
          travelTime: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 146
          },
          sourceArrival: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 154
          },
          targetDeparture: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 132
          },
          targetArrival: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 168
          },
          numberOfStops: 2,
          trainrunId: 84,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 4688,
                y: 1278
              },
              {
                x: 4688,
                y: 1342
              },
              {
                x: 4688,
                y: 1822
              },
              {
                x: 4688,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 4676,
                y: 1296
              },
              1: {
                x: 4700,
                y: 1324
              },
              2: {
                x: 4700,
                y: 1868
              },
              3: {
                x: 4676,
                y: 1840
              },
              4: {
                x: 4676,
                y: 1582
              },
              5: {
                x: 4676,
                y: 1582
              },
              6: {
                x: 4700,
                y: 1582
              }
            }
          },
          warnings: null
        },
        {
          id: 567,
          sourceNodeId: 135,
          sourcePortId: 1149,
          targetNodeId: 170,
          targetPortId: 1150,
          travelTime: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 67
          },
          sourceArrival: {
            lock: true,
            time: 53,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 293
          },
          targetDeparture: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 285
          },
          targetArrival: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 75
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2704,
                y: 350
              },
              {
                x: 2704,
                y: 414
              },
              {
                x: 2704,
                y: 670
              },
              {
                x: 2704,
                y: 734
              }
            ],
            textPositions: {
              0: {
                x: 2692,
                y: 368
              },
              1: {
                x: 2716,
                y: 396
              },
              2: {
                x: 2716,
                y: 716
              },
              3: {
                x: 2692,
                y: 688
              },
              4: {
                x: 2692,
                y: 542
              },
              5: {
                x: 2692,
                y: 542
              },
              6: {
                x: 2716,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 568,
          sourceNodeId: 140,
          sourcePortId: 1151,
          targetNodeId: 152,
          targetPortId: 1152,
          travelTime: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 123
          },
          sourceArrival: {
            lock: true,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 237
          },
          targetDeparture: {
            lock: true,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 218
          },
          targetArrival: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 142
          },
          numberOfStops: 1,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 4656,
                y: 1278
              },
              {
                x: 4656,
                y: 1342
              },
              {
                x: 4656,
                y: 1822
              },
              {
                x: 4656,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 4644,
                y: 1296
              },
              1: {
                x: 4668,
                y: 1324
              },
              2: {
                x: 4668,
                y: 1868
              },
              3: {
                x: 4644,
                y: 1840
              },
              4: {
                x: 4644,
                y: 1582
              },
              5: {
                x: 4644,
                y: 1582
              },
              6: {
                x: 4668,
                y: 1582
              }
            }
          },
          warnings: null
        },
        {
          id: 569,
          sourceNodeId: 135,
          sourcePortId: 1153,
          targetNodeId: 170,
          targetPortId: 1154,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 132
          },
          sourceArrival: {
            lock: false,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 288
          },
          targetDeparture: {
            lock: true,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 280
          },
          targetArrival: {
            lock: true,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 140
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2736,
                y: 350
              },
              {
                x: 2736,
                y: 414
              },
              {
                x: 2736,
                y: 670
              },
              {
                x: 2736,
                y: 734
              }
            ],
            textPositions: {
              0: {
                x: 2724,
                y: 368
              },
              1: {
                x: 2748,
                y: 396
              },
              2: {
                x: 2748,
                y: 716
              },
              3: {
                x: 2724,
                y: 688
              },
              4: {
                x: 2724,
                y: 542
              },
              5: {
                x: 2724,
                y: 542
              },
              6: {
                x: 2748,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 570,
          sourceNodeId: 140,
          sourcePortId: 1155,
          targetNodeId: 152,
          targetPortId: 1156,
          travelTime: {
            lock: true,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 203
          },
          sourceArrival: {
            lock: true,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 217
          },
          targetDeparture: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 197
          },
          targetArrival: {
            lock: true,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 223
          },
          numberOfStops: 1,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 4720,
                y: 1278
              },
              {
                x: 4720,
                y: 1342
              },
              {
                x: 4720,
                y: 1822
              },
              {
                x: 4720,
                y: 1886
              }
            ],
            textPositions: {
              0: {
                x: 4708,
                y: 1296
              },
              1: {
                x: 4732,
                y: 1324
              },
              2: {
                x: 4732,
                y: 1868
              },
              3: {
                x: 4708,
                y: 1840
              },
              4: {
                x: 4708,
                y: 1582
              },
              5: {
                x: 4708,
                y: 1582
              },
              6: {
                x: 4732,
                y: 1582
              }
            }
          },
          warnings: null
        },
        {
          id: 571,
          sourceNodeId: 135,
          sourcePortId: 1157,
          targetNodeId: 149,
          targetPortId: 1158,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 294
          },
          sourceArrival: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 126
          },
          targetDeparture: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 119
          },
          targetArrival: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 301
          },
          numberOfStops: 1,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 240
              },
              {
                x: 2590,
                y: 240
              },
              {
                x: 2402,
                y: 240
              },
              {
                x: 2338,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 228
              },
              1: {
                x: 2608,
                y: 252
              },
              2: {
                x: 2356,
                y: 252
              },
              3: {
                x: 2384,
                y: 228
              },
              4: {
                x: 2496,
                y: 228
              },
              5: {
                x: 2496,
                y: 228
              },
              6: {
                x: 2496,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 572,
          sourceNodeId: 149,
          sourcePortId: 1159,
          targetNodeId: 166,
          targetPortId: 1160,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 301
          },
          sourceArrival: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 119
          },
          targetDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 308
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2238,
                y: 240
              },
              {
                x: 2174,
                y: 240
              },
              {
                x: 1954,
                y: 240
              },
              {
                x: 1890,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: 2220,
                y: 228
              },
              1: {
                x: 2192,
                y: 252
              },
              2: {
                x: 1908,
                y: 252
              },
              3: {
                x: 1936,
                y: 228
              },
              4: {
                x: 2064,
                y: 228
              },
              5: {
                x: 2064,
                y: 228
              },
              6: {
                x: 2064,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 573,
          sourceNodeId: 148,
          sourcePortId: 1161,
          targetNodeId: 147,
          targetPortId: 1162,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 315
          },
          sourceArrival: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 105
          },
          targetDeparture: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 98
          },
          targetArrival: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 322
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1342,
                y: 240
              },
              {
                x: 1278,
                y: 240
              },
              {
                x: 1122,
                y: 240
              },
              {
                x: 1058,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: 1324,
                y: 228
              },
              1: {
                x: 1296,
                y: 252
              },
              2: {
                x: 1076,
                y: 252
              },
              3: {
                x: 1104,
                y: 228
              },
              4: {
                x: 1200,
                y: 228
              },
              5: {
                x: 1200,
                y: 228
              },
              6: {
                x: 1200,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 574,
          sourceNodeId: 147,
          sourcePortId: 1163,
          targetNodeId: 133,
          targetPortId: 1164,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 322
          },
          sourceArrival: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 98
          },
          targetDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 958,
                y: 240
              },
              {
                x: 894,
                y: 240
              },
              {
                x: 322,
                y: 240
              },
              {
                x: 258,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: 940,
                y: 228
              },
              1: {
                x: 912,
                y: 252
              },
              2: {
                x: 276,
                y: 252
              },
              3: {
                x: 304,
                y: 228
              },
              4: {
                x: 608,
                y: 228
              },
              5: {
                x: 608,
                y: 228
              },
              6: {
                x: 608,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 575,
          sourceNodeId: 133,
          sourcePortId: 1165,
          targetNodeId: 172,
          targetPortId: 1166,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 336
          },
          sourceArrival: {
            lock: true,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 84
          },
          targetDeparture: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 77
          },
          targetArrival: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 343
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 304
              },
              {
                x: -2,
                y: 304
              },
              {
                x: -446,
                y: 304
              },
              {
                x: -510,
                y: 304
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 292
              },
              1: {
                x: 16,
                y: 316
              },
              2: {
                x: -492,
                y: 316
              },
              3: {
                x: -464,
                y: 292
              },
              4: {
                x: -224,
                y: 292
              },
              5: {
                x: -224,
                y: 292
              },
              6: {
                x: -224,
                y: 316
              }
            }
          },
          warnings: null
        },
        {
          id: 576,
          sourceNodeId: 137,
          sourcePortId: 1167,
          targetNodeId: 151,
          targetPortId: 1168,
          travelTime: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 298
          },
          sourceArrival: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 242
          },
          targetDeparture: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 209
          },
          targetArrival: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 331
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 4638,
                y: 144
              },
              {
                x: 4574,
                y: 144
              },
              {
                x: 4034,
                y: 144
              },
              {
                x: 3970,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 4620,
                y: 132
              },
              1: {
                x: 4592,
                y: 156
              },
              2: {
                x: 3988,
                y: 156
              },
              3: {
                x: 4016,
                y: 132
              },
              4: {
                x: 4304,
                y: 132
              },
              5: {
                x: 4304,
                y: 132
              },
              6: {
                x: 4304,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 577,
          sourceNodeId: 151,
          sourcePortId: 1169,
          targetNodeId: 150,
          targetPortId: 1170,
          travelTime: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 333
          },
          sourceArrival: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 207
          },
          targetDeparture: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 193
          },
          targetArrival: {
            lock: true,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3870,
                y: 80
              },
              {
                x: 3806,
                y: 80
              },
              {
                x: 3458,
                y: 80
              },
              {
                x: 3394,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 3852,
                y: 68
              },
              1: {
                x: 3824,
                y: 92
              },
              2: {
                x: 3412,
                y: 92
              },
              3: {
                x: 3440,
                y: 68
              },
              4: {
                x: 3632,
                y: 68
              },
              5: {
                x: 3632,
                y: 68
              },
              6: {
                x: 3632,
                y: 92
              }
            }
          },
          warnings: null
        },
        {
          id: 578,
          sourceNodeId: 150,
          sourcePortId: 1171,
          targetNodeId: 135,
          targetPortId: 1172,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 348
          },
          sourceArrival: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 192
          },
          targetDeparture: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 183
          },
          targetArrival: {
            lock: true,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 357
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3294,
                y: 80
              },
              {
                x: 3230,
                y: 80
              },
              {
                x: 2914,
                y: 80
              },
              {
                x: 2850,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 3276,
                y: 68
              },
              1: {
                x: 3248,
                y: 92
              },
              2: {
                x: 2868,
                y: 92
              },
              3: {
                x: 2896,
                y: 68
              },
              4: {
                x: 3072,
                y: 68
              },
              5: {
                x: 3072,
                y: 68
              },
              6: {
                x: 3072,
                y: 92
              }
            }
          },
          warnings: null
        },
        {
          id: 579,
          sourceNodeId: 135,
          sourcePortId: 1173,
          targetNodeId: 149,
          targetPortId: 1174,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 364
          },
          sourceArrival: {
            lock: true,
            time: 56,
            warning: {
              title: "Quelle Ankunft Warnung",
              description: "Quellankunftszeit kann nicht erreicht werden"
            },
            timeFormatter: null,
            consecutiveTime: 176
          },
          targetDeparture: {
            lock: false,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 170
          },
          targetArrival: {
            lock: false,
            time: 10,
            warning: {
              title: "Ziel Ankunft Warnung",
              description: "Zielankunftszeit kann nicht erreicht werden"
            },
            timeFormatter: null,
            consecutiveTime: 370
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 144
              },
              {
                x: 2590,
                y: 144
              },
              {
                x: 2402,
                y: 144
              },
              {
                x: 2338,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 132
              },
              1: {
                x: 2608,
                y: 156
              },
              2: {
                x: 2356,
                y: 156
              },
              3: {
                x: 2384,
                y: 132
              },
              4: {
                x: 2496,
                y: 132
              },
              5: {
                x: 2496,
                y: 132
              },
              6: {
                x: 2496,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 580,
          sourceNodeId: 149,
          sourcePortId: 1175,
          targetNodeId: 166,
          targetPortId: 1176,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 370
          },
          sourceArrival: {
            lock: false,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 170
          },
          targetDeparture: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 163
          },
          targetArrival: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 377
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2238,
                y: 144
              },
              {
                x: 2174,
                y: 144
              },
              {
                x: 1954,
                y: 144
              },
              {
                x: 1890,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 2220,
                y: 132
              },
              1: {
                x: 2192,
                y: 156
              },
              2: {
                x: 1908,
                y: 156
              },
              3: {
                x: 1936,
                y: 132
              },
              4: {
                x: 2064,
                y: 132
              },
              5: {
                x: 2064,
                y: 132
              },
              6: {
                x: 2064,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 581,
          sourceNodeId: 148,
          sourcePortId: 1177,
          targetNodeId: 147,
          targetPortId: 1178,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 384
          },
          sourceArrival: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 156
          },
          targetDeparture: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 151
          },
          targetArrival: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 389
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1342,
                y: 144
              },
              {
                x: 1278,
                y: 144
              },
              {
                x: 1122,
                y: 144
              },
              {
                x: 1058,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 1324,
                y: 132
              },
              1: {
                x: 1296,
                y: 156
              },
              2: {
                x: 1076,
                y: 156
              },
              3: {
                x: 1104,
                y: 132
              },
              4: {
                x: 1200,
                y: 132
              },
              5: {
                x: 1200,
                y: 132
              },
              6: {
                x: 1200,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 582,
          sourceNodeId: 147,
          sourcePortId: 1179,
          targetNodeId: 133,
          targetPortId: 1180,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 391
          },
          sourceArrival: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 149
          },
          targetDeparture: {
            lock: true,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 140
          },
          targetArrival: {
            lock: true,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 400
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 958,
                y: 144
              },
              {
                x: 894,
                y: 144
              },
              {
                x: 322,
                y: 144
              },
              {
                x: 258,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 940,
                y: 132
              },
              1: {
                x: 912,
                y: 156
              },
              2: {
                x: 276,
                y: 156
              },
              3: {
                x: 304,
                y: 132
              },
              4: {
                x: 608,
                y: 132
              },
              5: {
                x: 608,
                y: 132
              },
              6: {
                x: 608,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 583,
          sourceNodeId: 133,
          sourcePortId: 1181,
          targetNodeId: 175,
          targetPortId: 1182,
          travelTime: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 402
          },
          sourceArrival: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 138
          },
          targetDeparture: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 121
          },
          targetArrival: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 419
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 112
              },
              {
                x: -2,
                y: 112
              },
              {
                x: -1534,
                y: -16
              },
              {
                x: -1598,
                y: -16
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 100
              },
              1: {
                x: 16,
                y: 124
              },
              2: {
                x: -1580,
                y: -4
              },
              3: {
                x: -1552,
                y: -28
              },
              4: {
                x: -768,
                y: 36
              },
              5: {
                x: -768,
                y: 36
              },
              6: {
                x: -768,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 584,
          sourceNodeId: 130,
          sourcePortId: 1183,
          targetNodeId: 177,
          targetPortId: 1184,
          travelTime: {
            lock: false,
            time: 61,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 437
          },
          sourceArrival: {
            lock: true,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 103
          },
          targetDeparture: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 42
          },
          targetArrival: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 498
          },
          numberOfStops: 2,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2530,
                y: -16
              },
              {
                x: -2594,
                y: -16
              },
              {
                x: -3358,
                y: 560
              },
              {
                x: -3422,
                y: 560
              }
            ],
            textPositions: {
              0: {
                x: -2548,
                y: -28
              },
              1: {
                x: -2576,
                y: -4
              },
              2: {
                x: -3404,
                y: 572
              },
              3: {
                x: -3376,
                y: 548
              },
              4: {
                x: -2976,
                y: 260
              },
              5: {
                x: -2976,
                y: 260
              },
              6: {
                x: -2976,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 585,
          sourceNodeId: 160,
          sourcePortId: 1185,
          targetNodeId: 161,
          targetPortId: 1186,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 528
          },
          sourceArrival: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 12
          },
          targetDeparture: {
            lock: false,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 4
          },
          targetArrival: {
            lock: false,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 536
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3938,
                y: 656
              },
              {
                x: -4002,
                y: 656
              },
              {
                x: -4190,
                y: 656
              },
              {
                x: -4254,
                y: 656
              }
            ],
            textPositions: {
              0: {
                x: -3956,
                y: 644
              },
              1: {
                x: -3984,
                y: 668
              },
              2: {
                x: -4236,
                y: 668
              },
              3: {
                x: -4208,
                y: 644
              },
              4: {
                x: -4096,
                y: 644
              },
              5: {
                x: -4096,
                y: 644
              },
              6: {
                x: -4096,
                y: 668
              }
            }
          },
          warnings: null
        },
        {
          id: 586,
          sourceNodeId: 128,
          sourcePortId: 1187,
          targetNodeId: 177,
          targetPortId: 1188,
          travelTime: {
            lock: false,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 439
          },
          sourceArrival: {
            lock: true,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 101
          },
          targetDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 450
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3074,
                y: 592
              },
              {
                x: -3138,
                y: 592
              },
              {
                x: -3358,
                y: 624
              },
              {
                x: -3422,
                y: 624
              }
            ],
            textPositions: {
              0: {
                x: -3092,
                y: 580
              },
              1: {
                x: -3120,
                y: 604
              },
              2: {
                x: -3404,
                y: 636
              },
              3: {
                x: -3376,
                y: 612
              },
              4: {
                x: -3248,
                y: 596
              },
              5: {
                x: -3248,
                y: 596
              },
              6: {
                x: -3248,
                y: 620
              }
            }
          },
          warnings: null
        },
        {
          id: 587,
          sourceNodeId: 160,
          sourcePortId: 1189,
          targetNodeId: 161,
          targetPortId: 1190,
          travelTime: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 484
          },
          sourceArrival: {
            lock: true,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 56
          },
          targetDeparture: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 48
          },
          targetArrival: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 492
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3938,
                y: 688
              },
              {
                x: -4002,
                y: 688
              },
              {
                x: -4190,
                y: 688
              },
              {
                x: -4254,
                y: 688
              }
            ],
            textPositions: {
              0: {
                x: -3956,
                y: 676
              },
              1: {
                x: -3984,
                y: 700
              },
              2: {
                x: -4236,
                y: 700
              },
              3: {
                x: -4208,
                y: 676
              },
              4: {
                x: -4096,
                y: 676
              },
              5: {
                x: -4096,
                y: 676
              },
              6: {
                x: -4096,
                y: 700
              }
            }
          },
          warnings: null
        },
        {
          id: 588,
          sourceNodeId: 135,
          sourcePortId: 1191,
          targetNodeId: 150,
          targetPortId: 1192,
          travelTime: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 219
          },
          sourceArrival: {
            lock: true,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 321
          },
          targetDeparture: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 309
          },
          targetArrival: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 231
          },
          numberOfStops: 1,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 48
              },
              {
                x: 2914,
                y: 48
              },
              {
                x: 3230,
                y: 48
              },
              {
                x: 3294,
                y: 48
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 60
              },
              1: {
                x: 2896,
                y: 36
              },
              2: {
                x: 3276,
                y: 36
              },
              3: {
                x: 3248,
                y: 60
              },
              4: {
                x: 3072,
                y: 36
              },
              5: {
                x: 3072,
                y: 36
              },
              6: {
                x: 3072,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 589,
          sourceNodeId: 150,
          sourcePortId: 1193,
          targetNodeId: 151,
          targetPortId: 1194,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 53,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 233
          },
          sourceArrival: {
            lock: false,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 307
          },
          targetDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 294
          },
          targetArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 246
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3394,
                y: 48
              },
              {
                x: 3458,
                y: 48
              },
              {
                x: 3806,
                y: 48
              },
              {
                x: 3870,
                y: 48
              }
            ],
            textPositions: {
              0: {
                x: 3412,
                y: 60
              },
              1: {
                x: 3440,
                y: 36
              },
              2: {
                x: 3852,
                y: 36
              },
              3: {
                x: 3824,
                y: 60
              },
              4: {
                x: 3632,
                y: 36
              },
              5: {
                x: 3632,
                y: 36
              },
              6: {
                x: 3632,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 590,
          sourceNodeId: 135,
          sourcePortId: 1195,
          targetNodeId: 149,
          targetPortId: 1196,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 346
          },
          sourceArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 194
          },
          targetDeparture: {
            lock: false,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 189
          },
          targetArrival: {
            lock: false,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 351
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 48
              },
              {
                x: 2590,
                y: 48
              },
              {
                x: 2402,
                y: 48
              },
              {
                x: 2338,
                y: 48
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 36
              },
              1: {
                x: 2608,
                y: 60
              },
              2: {
                x: 2356,
                y: 60
              },
              3: {
                x: 2384,
                y: 36
              },
              4: {
                x: 2496,
                y: 36
              },
              5: {
                x: 2496,
                y: 36
              },
              6: {
                x: 2496,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 591,
          sourceNodeId: 149,
          sourcePortId: 1197,
          targetNodeId: 166,
          targetPortId: 1198,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 351
          },
          sourceArrival: {
            lock: false,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 189
          },
          targetDeparture: {
            lock: false,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 184
          },
          targetArrival: {
            lock: false,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 356
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2238,
                y: 48
              },
              {
                x: 2174,
                y: 48
              },
              {
                x: 1954,
                y: 48
              },
              {
                x: 1890,
                y: 48
              }
            ],
            textPositions: {
              0: {
                x: 2220,
                y: 36
              },
              1: {
                x: 2192,
                y: 60
              },
              2: {
                x: 1908,
                y: 60
              },
              3: {
                x: 1936,
                y: 36
              },
              4: {
                x: 2064,
                y: 36
              },
              5: {
                x: 2064,
                y: 36
              },
              6: {
                x: 2064,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 592,
          sourceNodeId: 148,
          sourcePortId: 1199,
          targetNodeId: 147,
          targetPortId: 1200,
          travelTime: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 361
          },
          sourceArrival: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 179
          },
          targetDeparture: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 175
          },
          targetArrival: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 365
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1342,
                y: 48
              },
              {
                x: 1278,
                y: 48
              },
              {
                x: 1122,
                y: 48
              },
              {
                x: 1058,
                y: 48
              }
            ],
            textPositions: {
              0: {
                x: 1324,
                y: 36
              },
              1: {
                x: 1296,
                y: 60
              },
              2: {
                x: 1076,
                y: 60
              },
              3: {
                x: 1104,
                y: 36
              },
              4: {
                x: 1200,
                y: 36
              },
              5: {
                x: 1200,
                y: 36
              },
              6: {
                x: 1200,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 593,
          sourceNodeId: 147,
          sourcePortId: 1201,
          targetNodeId: 133,
          targetPortId: 1202,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 365
          },
          sourceArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 175
          },
          targetDeparture: {
            lock: false,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 170
          },
          targetArrival: {
            lock: false,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 370
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 958,
                y: 112
              },
              {
                x: 894,
                y: 112
              },
              {
                x: 322,
                y: 112
              },
              {
                x: 258,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 940,
                y: 100
              },
              1: {
                x: 912,
                y: 124
              },
              2: {
                x: 276,
                y: 124
              },
              3: {
                x: 304,
                y: 100
              },
              4: {
                x: 608,
                y: 100
              },
              5: {
                x: 608,
                y: 100
              },
              6: {
                x: 608,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 594,
          sourceNodeId: 133,
          sourcePortId: 1203,
          targetNodeId: 172,
          targetPortId: 1204,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 370
          },
          sourceArrival: {
            lock: false,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 170
          },
          targetDeparture: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 163
          },
          targetArrival: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 377
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 144
              },
              {
                x: -2,
                y: 144
              },
              {
                x: -446,
                y: 144
              },
              {
                x: -510,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 132
              },
              1: {
                x: 16,
                y: 156
              },
              2: {
                x: -492,
                y: 156
              },
              3: {
                x: -464,
                y: 132
              },
              4: {
                x: -224,
                y: 132
              },
              5: {
                x: -224,
                y: 132
              },
              6: {
                x: -224,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 595,
          sourceNodeId: 129,
          sourcePortId: 1205,
          targetNodeId: 171,
          targetPortId: 1206,
          travelTime: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 390
          },
          sourceArrival: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 150
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 128
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 412
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2146,
                y: 144
              },
              {
                x: -2210,
                y: 144
              },
              {
                x: -2398,
                y: 304
              },
              {
                x: -2462,
                y: 304
              }
            ],
            textPositions: {
              0: {
                x: -2164,
                y: 132
              },
              1: {
                x: -2192,
                y: 156
              },
              2: {
                x: -2444,
                y: 316
              },
              3: {
                x: -2416,
                y: 292
              },
              4: {
                x: -2304,
                y: 212
              },
              5: {
                x: -2304,
                y: 212
              },
              6: {
                x: -2304,
                y: 236
              }
            }
          },
          warnings: null
        },
        {
          id: 596,
          sourceNodeId: 128,
          sourcePortId: 1207,
          targetNodeId: 177,
          targetPortId: 1208,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 463
          },
          sourceArrival: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 77
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 472
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3074,
                y: 560
              },
              {
                x: -3138,
                y: 560
              },
              {
                x: -3358,
                y: 592
              },
              {
                x: -3422,
                y: 592
              }
            ],
            textPositions: {
              0: {
                x: -3092,
                y: 548
              },
              1: {
                x: -3120,
                y: 572
              },
              2: {
                x: -3404,
                y: 604
              },
              3: {
                x: -3376,
                y: 580
              },
              4: {
                x: -3248,
                y: 564
              },
              5: {
                x: -3248,
                y: 564
              },
              6: {
                x: -3248,
                y: 588
              }
            }
          },
          warnings: null
        },
        {
          id: 597,
          sourceNodeId: 160,
          sourcePortId: 1209,
          targetNodeId: 161,
          targetPortId: 1210,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 501
          },
          sourceArrival: {
            lock: true,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 39
          },
          targetDeparture: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 32
          },
          targetArrival: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 508
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3938,
                y: 624
              },
              {
                x: -4002,
                y: 624
              },
              {
                x: -4190,
                y: 624
              },
              {
                x: -4254,
                y: 624
              }
            ],
            textPositions: {
              0: {
                x: -3956,
                y: 612
              },
              1: {
                x: -3984,
                y: 636
              },
              2: {
                x: -4236,
                y: 636
              },
              3: {
                x: -4208,
                y: 612
              },
              4: {
                x: -4096,
                y: 612
              },
              5: {
                x: -4096,
                y: 612
              },
              6: {
                x: -4096,
                y: 636
              }
            }
          },
          warnings: null
        },
        {
          id: 598,
          sourceNodeId: 151,
          sourcePortId: 1211,
          targetNodeId: 137,
          targetPortId: 1212,
          travelTime: {
            lock: false,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 248
          },
          sourceArrival: {
            lock: true,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 292
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 248
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 292
          },
          numberOfStops: 4,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3970,
                y: 112
              },
              {
                x: 4034,
                y: 112
              },
              {
                x: 4574,
                y: 112
              },
              {
                x: 4638,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 3988,
                y: 124
              },
              1: {
                x: 4016,
                y: 100
              },
              2: {
                x: 4620,
                y: 100
              },
              3: {
                x: 4592,
                y: 124
              },
              4: {
                x: 4304,
                y: 100
              },
              5: {
                x: 4304,
                y: 100
              },
              6: {
                x: 4304,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 599,
          sourceNodeId: 135,
          sourcePortId: 1213,
          targetNodeId: 150,
          targetPortId: 1214,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 125
          },
          sourceArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 295
          },
          targetDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 286
          },
          targetArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 134
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 112
              },
              {
                x: 2914,
                y: 112
              },
              {
                x: 3230,
                y: 112
              },
              {
                x: 3294,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 124
              },
              1: {
                x: 2896,
                y: 100
              },
              2: {
                x: 3276,
                y: 100
              },
              3: {
                x: 3248,
                y: 124
              },
              4: {
                x: 3072,
                y: 100
              },
              5: {
                x: 3072,
                y: 100
              },
              6: {
                x: 3072,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 600,
          sourceNodeId: 150,
          sourcePortId: 1215,
          targetNodeId: 151,
          targetPortId: 1216,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 136
          },
          sourceArrival: {
            lock: false,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 284
          },
          targetDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 271
          },
          targetArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 149
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3394,
                y: 112
              },
              {
                x: 3458,
                y: 112
              },
              {
                x: 3806,
                y: 112
              },
              {
                x: 3870,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 3412,
                y: 124
              },
              1: {
                x: 3440,
                y: 100
              },
              2: {
                x: 3852,
                y: 100
              },
              3: {
                x: 3824,
                y: 124
              },
              4: {
                x: 3632,
                y: 100
              },
              5: {
                x: 3632,
                y: 100
              },
              6: {
                x: 3632,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 601,
          sourceNodeId: 135,
          sourcePortId: 1217,
          targetNodeId: 149,
          targetPortId: 1218,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 302
          },
          sourceArrival: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 118
          },
          targetDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 308
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 176
              },
              {
                x: 2590,
                y: 176
              },
              {
                x: 2402,
                y: 176
              },
              {
                x: 2338,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 164
              },
              1: {
                x: 2608,
                y: 188
              },
              2: {
                x: 2356,
                y: 188
              },
              3: {
                x: 2384,
                y: 164
              },
              4: {
                x: 2496,
                y: 164
              },
              5: {
                x: 2496,
                y: 164
              },
              6: {
                x: 2496,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 602,
          sourceNodeId: 149,
          sourcePortId: 1219,
          targetNodeId: 166,
          targetPortId: 1220,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 308
          },
          sourceArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 106
          },
          targetArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 314
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2238,
                y: 176
              },
              {
                x: 2174,
                y: 176
              },
              {
                x: 1954,
                y: 176
              },
              {
                x: 1890,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 2220,
                y: 164
              },
              1: {
                x: 2192,
                y: 188
              },
              2: {
                x: 1908,
                y: 188
              },
              3: {
                x: 1936,
                y: 164
              },
              4: {
                x: 2064,
                y: 164
              },
              5: {
                x: 2064,
                y: 164
              },
              6: {
                x: 2064,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 603,
          sourceNodeId: 148,
          sourcePortId: 1221,
          targetNodeId: 147,
          targetPortId: 1222,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 320
          },
          sourceArrival: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 100
          },
          targetDeparture: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 95
          },
          targetArrival: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 325
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1342,
                y: 176
              },
              {
                x: 1278,
                y: 176
              },
              {
                x: 1122,
                y: 176
              },
              {
                x: 1058,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 1324,
                y: 164
              },
              1: {
                x: 1296,
                y: 188
              },
              2: {
                x: 1076,
                y: 188
              },
              3: {
                x: 1104,
                y: 164
              },
              4: {
                x: 1200,
                y: 164
              },
              5: {
                x: 1200,
                y: 164
              },
              6: {
                x: 1200,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 604,
          sourceNodeId: 147,
          sourcePortId: 1223,
          targetNodeId: 133,
          targetPortId: 1224,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 325
          },
          sourceArrival: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 95
          },
          targetDeparture: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetArrival: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 958,
                y: 176
              },
              {
                x: 894,
                y: 176
              },
              {
                x: 322,
                y: 176
              },
              {
                x: 258,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 940,
                y: 164
              },
              1: {
                x: 912,
                y: 188
              },
              2: {
                x: 276,
                y: 188
              },
              3: {
                x: 304,
                y: 164
              },
              4: {
                x: 608,
                y: 164
              },
              5: {
                x: 608,
                y: 164
              },
              6: {
                x: 608,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 605,
          sourceNodeId: 133,
          sourcePortId: 1225,
          targetNodeId: 172,
          targetPortId: 1226,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          sourceArrival: {
            lock: true,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 83
          },
          targetArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 337
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 240
              },
              {
                x: -2,
                y: 240
              },
              {
                x: -446,
                y: 240
              },
              {
                x: -510,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 228
              },
              1: {
                x: 16,
                y: 252
              },
              2: {
                x: -492,
                y: 252
              },
              3: {
                x: -464,
                y: 228
              },
              4: {
                x: -224,
                y: 228
              },
              5: {
                x: -224,
                y: 228
              },
              6: {
                x: -224,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 606,
          sourceNodeId: 151,
          sourcePortId: 1227,
          targetNodeId: 162,
          targetPortId: 1228,
          travelTime: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 151
          },
          sourceArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 269
          },
          targetDeparture: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 218
          },
          targetArrival: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 202
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3970,
                y: 48
              },
              {
                x: 4034,
                y: 48
              },
              {
                x: 4574,
                y: -176
              },
              {
                x: 4638,
                y: -176
              }
            ],
            textPositions: {
              0: {
                x: 3988,
                y: 60
              },
              1: {
                x: 4016,
                y: 36
              },
              2: {
                x: 4620,
                y: -188
              },
              3: {
                x: 4592,
                y: -164
              },
              4: {
                x: 4304,
                y: -76
              },
              5: {
                x: 4304,
                y: -76
              },
              6: {
                x: 4304,
                y: -52
              }
            }
          },
          warnings: null
        },
        {
          id: 607,
          sourceNodeId: 135,
          sourcePortId: 1229,
          targetNodeId: 150,
          targetPortId: 1230,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 125
          },
          sourceArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 295
          },
          targetDeparture: {
            lock: true,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 286
          },
          targetArrival: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 134
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 144
              },
              {
                x: 2914,
                y: 144
              },
              {
                x: 3230,
                y: 144
              },
              {
                x: 3294,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 156
              },
              1: {
                x: 2896,
                y: 132
              },
              2: {
                x: 3276,
                y: 132
              },
              3: {
                x: 3248,
                y: 156
              },
              4: {
                x: 3072,
                y: 132
              },
              5: {
                x: 3072,
                y: 132
              },
              6: {
                x: 3072,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 608,
          sourceNodeId: 150,
          sourcePortId: 1231,
          targetNodeId: 151,
          targetPortId: 1232,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 136
          },
          sourceArrival: {
            lock: false,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 284
          },
          targetDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 271
          },
          targetArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 149
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3394,
                y: 144
              },
              {
                x: 3458,
                y: 144
              },
              {
                x: 3806,
                y: 144
              },
              {
                x: 3870,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 3412,
                y: 156
              },
              1: {
                x: 3440,
                y: 132
              },
              2: {
                x: 3852,
                y: 132
              },
              3: {
                x: 3824,
                y: 156
              },
              4: {
                x: 3632,
                y: 132
              },
              5: {
                x: 3632,
                y: 132
              },
              6: {
                x: 3632,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 609,
          sourceNodeId: 135,
          sourcePortId: 1233,
          targetNodeId: 149,
          targetPortId: 1234,
          travelTime: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 302
          },
          sourceArrival: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 118
          },
          targetDeparture: {
            lock: true,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 103
          },
          targetArrival: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 317
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 208
              },
              {
                x: 2590,
                y: 208
              },
              {
                x: 2402,
                y: 208
              },
              {
                x: 2338,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 196
              },
              1: {
                x: 2608,
                y: 220
              },
              2: {
                x: 2356,
                y: 220
              },
              3: {
                x: 2384,
                y: 196
              },
              4: {
                x: 2496,
                y: 196
              },
              5: {
                x: 2496,
                y: 196
              },
              6: {
                x: 2496,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 610,
          sourceNodeId: 149,
          sourcePortId: 1235,
          targetNodeId: 166,
          targetPortId: 1236,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 317
          },
          sourceArrival: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 103
          },
          targetDeparture: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 97
          },
          targetArrival: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 323
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2238,
                y: 208
              },
              {
                x: 2174,
                y: 208
              },
              {
                x: 1954,
                y: 208
              },
              {
                x: 1890,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 2220,
                y: 196
              },
              1: {
                x: 2192,
                y: 220
              },
              2: {
                x: 1908,
                y: 220
              },
              3: {
                x: 1936,
                y: 196
              },
              4: {
                x: 2064,
                y: 196
              },
              5: {
                x: 2064,
                y: 196
              },
              6: {
                x: 2064,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 611,
          sourceNodeId: 148,
          sourcePortId: 1237,
          targetNodeId: 147,
          targetPortId: 1238,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          sourceArrival: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetDeparture: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 85
          },
          targetArrival: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 335
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1342,
                y: 208
              },
              {
                x: 1278,
                y: 208
              },
              {
                x: 1122,
                y: 208
              },
              {
                x: 1058,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 1324,
                y: 196
              },
              1: {
                x: 1296,
                y: 220
              },
              2: {
                x: 1076,
                y: 220
              },
              3: {
                x: 1104,
                y: 196
              },
              4: {
                x: 1200,
                y: 196
              },
              5: {
                x: 1200,
                y: 196
              },
              6: {
                x: 1200,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 612,
          sourceNodeId: 147,
          sourcePortId: 1239,
          targetNodeId: 133,
          targetPortId: 1240,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 335
          },
          sourceArrival: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 85
          },
          targetDeparture: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 80
          },
          targetArrival: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 340
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 958,
                y: 208
              },
              {
                x: 894,
                y: 208
              },
              {
                x: 322,
                y: 208
              },
              {
                x: 258,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 940,
                y: 196
              },
              1: {
                x: 912,
                y: 220
              },
              2: {
                x: 276,
                y: 220
              },
              3: {
                x: 304,
                y: 196
              },
              4: {
                x: 608,
                y: 196
              },
              5: {
                x: 608,
                y: 196
              },
              6: {
                x: 608,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 613,
          sourceNodeId: 133,
          sourcePortId: 1241,
          targetNodeId: 172,
          targetPortId: 1242,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 340
          },
          sourceArrival: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 80
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 73
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 272
              },
              {
                x: -2,
                y: 272
              },
              {
                x: -446,
                y: 272
              },
              {
                x: -510,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 260
              },
              1: {
                x: 16,
                y: 284
              },
              2: {
                x: -492,
                y: 284
              },
              3: {
                x: -464,
                y: 260
              },
              4: {
                x: -224,
                y: 260
              },
              5: {
                x: -224,
                y: 260
              },
              6: {
                x: -224,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 614,
          sourceNodeId: 151,
          sourcePortId: 1243,
          targetNodeId: 162,
          targetPortId: 1244,
          travelTime: {
            lock: true,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 151
          },
          sourceArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 269
          },
          targetDeparture: {
            lock: false,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 228
          },
          targetArrival: {
            lock: false,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 192
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3970,
                y: 80
              },
              {
                x: 4034,
                y: 80
              },
              {
                x: 4574,
                y: -144
              },
              {
                x: 4638,
                y: -144
              }
            ],
            textPositions: {
              0: {
                x: 3988,
                y: 92
              },
              1: {
                x: 4016,
                y: 68
              },
              2: {
                x: 4620,
                y: -156
              },
              3: {
                x: 4592,
                y: -132
              },
              4: {
                x: 4304,
                y: -44
              },
              5: {
                x: 4304,
                y: -44
              },
              6: {
                x: 4304,
                y: -20
              }
            }
          },
          warnings: null
        },
        {
          id: 615,
          sourceNodeId: 135,
          sourcePortId: 1245,
          targetNodeId: 150,
          targetPortId: 1246,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 95
          },
          sourceArrival: {
            lock: true,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 205
          },
          targetDeparture: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 196
          },
          targetArrival: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 104
          },
          numberOfStops: 0,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 208
              },
              {
                x: 2914,
                y: 208
              },
              {
                x: 3230,
                y: 208
              },
              {
                x: 3294,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 220
              },
              1: {
                x: 2896,
                y: 196
              },
              2: {
                x: 3276,
                y: 196
              },
              3: {
                x: 3248,
                y: 220
              },
              4: {
                x: 3072,
                y: 196
              },
              5: {
                x: 3072,
                y: 196
              },
              6: {
                x: 3072,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 616,
          sourceNodeId: 150,
          sourcePortId: 1247,
          targetNodeId: 151,
          targetPortId: 1248,
          travelTime: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 106
          },
          sourceArrival: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 194
          },
          targetDeparture: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 181
          },
          targetArrival: {
            lock: true,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 119
          },
          numberOfStops: 0,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3394,
                y: 208
              },
              {
                x: 3458,
                y: 208
              },
              {
                x: 3806,
                y: 208
              },
              {
                x: 3870,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 3412,
                y: 220
              },
              1: {
                x: 3440,
                y: 196
              },
              2: {
                x: 3852,
                y: 196
              },
              3: {
                x: 3824,
                y: 220
              },
              4: {
                x: 3632,
                y: 196
              },
              5: {
                x: 3632,
                y: 196
              },
              6: {
                x: 3632,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 617,
          sourceNodeId: 151,
          sourcePortId: 1249,
          targetNodeId: 139,
          targetPortId: 1250,
          travelTime: {
            lock: false,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 121
          },
          sourceArrival: {
            lock: true,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 179
          },
          targetDeparture: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 130
          },
          targetArrival: {
            lock: true,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 170
          },
          numberOfStops: 2,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 3888,
                y: 30
              },
              {
                x: 3888,
                y: -34
              },
              {
                x: 4272,
                y: -286
              },
              {
                x: 4272,
                y: -350
              }
            ],
            textPositions: {
              0: {
                x: 3900,
                y: 12
              },
              1: {
                x: 3876,
                y: -16
              },
              2: {
                x: 4260,
                y: -332
              },
              3: {
                x: 4284,
                y: -304
              },
              4: {
                x: 4068,
                y: -160
              },
              5: {
                x: 4068,
                y: -160
              },
              6: {
                x: 4092,
                y: -160
              }
            }
          },
          warnings: null
        },
        {
          id: 618,
          sourceNodeId: 138,
          sourcePortId: 1251,
          targetNodeId: 163,
          targetPortId: 1252,
          travelTime: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 0
          },
          sourceArrival: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 60
          },
          targetDeparture: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 59
          },
          targetArrival: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          numberOfStops: 0,
          trainrunId: 91,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: -1054
              },
              {
                x: 2672,
                y: -990
              },
              {
                x: 2800,
                y: -610
              },
              {
                x: 2800,
                y: -546
              }
            ],
            textPositions: {
              0: {
                x: 2660,
                y: -1036
              },
              1: {
                x: 2684,
                y: -1008
              },
              2: {
                x: 2812,
                y: -564
              },
              3: {
                x: 2788,
                y: -592
              },
              4: {
                x: 2748,
                y: -800
              },
              5: {
                x: 2748,
                y: -800
              },
              6: {
                x: 2724,
                y: -800
              }
            }
          },
          warnings: null
        },
        {
          id: 619,
          sourceNodeId: 163,
          sourcePortId: 1253,
          targetNodeId: 135,
          targetPortId: 1254,
          travelTime: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 3
          },
          sourceArrival: {
            lock: false,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 57
          },
          targetDeparture: {
            lock: false,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 56
          },
          targetArrival: {
            lock: false,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 4
          },
          numberOfStops: 0,
          trainrunId: 91,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2800,
                y: -478
              },
              {
                x: 2800,
                y: -414
              },
              {
                x: 2704,
                y: -34
              },
              {
                x: 2704,
                y: 30
              }
            ],
            textPositions: {
              0: {
                x: 2788,
                y: -460
              },
              1: {
                x: 2812,
                y: -432
              },
              2: {
                x: 2716,
                y: 12
              },
              3: {
                x: 2692,
                y: -16
              },
              4: {
                x: 2740,
                y: -224
              },
              5: {
                x: 2740,
                y: -224
              },
              6: {
                x: 2764,
                y: -224
              }
            }
          },
          warnings: null
        },
        {
          id: 620,
          sourceNodeId: 135,
          sourcePortId: 1255,
          targetNodeId: 138,
          targetPortId: 1256,
          travelTime: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 120
          },
          sourceArrival: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 60
          },
          targetDeparture: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 59
          },
          targetArrival: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 121
          },
          numberOfStops: 0,
          trainrunId: 92,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 30
              },
              {
                x: 2672,
                y: -34
              },
              {
                x: 2640,
                y: -990
              },
              {
                x: 2640,
                y: -1054
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 12
              },
              1: {
                x: 2660,
                y: -16
              },
              2: {
                x: 2628,
                y: -1036
              },
              3: {
                x: 2652,
                y: -1008
              },
              4: {
                x: 2668,
                y: -512
              },
              5: {
                x: 2668,
                y: -512
              },
              6: {
                x: 2644,
                y: -512
              }
            }
          },
          warnings: null
        },
        {
          id: 621,
          sourceNodeId: 166,
          sourcePortId: 1257,
          targetNodeId: 148,
          targetPortId: 1258,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 356
          },
          sourceArrival: {
            lock: false,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 184
          },
          targetDeparture: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 179
          },
          targetArrival: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 361
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1790,
                y: 48
              },
              {
                x: 1726,
                y: 48
              },
              {
                x: 1506,
                y: 48
              },
              {
                x: 1442,
                y: 48
              }
            ],
            textPositions: {
              0: {
                x: 1772,
                y: 36
              },
              1: {
                x: 1744,
                y: 60
              },
              2: {
                x: 1460,
                y: 60
              },
              3: {
                x: 1488,
                y: 36
              },
              4: {
                x: 1616,
                y: 36
              },
              5: {
                x: 1616,
                y: 36
              },
              6: {
                x: 1616,
                y: 60
              }
            }
          },
          warnings: null
        },
        {
          id: 622,
          sourceNodeId: 166,
          sourcePortId: 1259,
          targetNodeId: 148,
          targetPortId: 1260,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 377
          },
          sourceArrival: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 163
          },
          targetDeparture: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 156
          },
          targetArrival: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 384
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1790,
                y: 144
              },
              {
                x: 1726,
                y: 144
              },
              {
                x: 1506,
                y: 144
              },
              {
                x: 1442,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: 1772,
                y: 132
              },
              1: {
                x: 1744,
                y: 156
              },
              2: {
                x: 1460,
                y: 156
              },
              3: {
                x: 1488,
                y: 132
              },
              4: {
                x: 1616,
                y: 132
              },
              5: {
                x: 1616,
                y: 132
              },
              6: {
                x: 1616,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 623,
          sourceNodeId: 166,
          sourcePortId: 1261,
          targetNodeId: 148,
          targetPortId: 1262,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 314
          },
          sourceArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 106
          },
          targetDeparture: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 100
          },
          targetArrival: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 320
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1790,
                y: 176
              },
              {
                x: 1726,
                y: 176
              },
              {
                x: 1506,
                y: 176
              },
              {
                x: 1442,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: 1772,
                y: 164
              },
              1: {
                x: 1744,
                y: 188
              },
              2: {
                x: 1460,
                y: 188
              },
              3: {
                x: 1488,
                y: 164
              },
              4: {
                x: 1616,
                y: 164
              },
              5: {
                x: 1616,
                y: 164
              },
              6: {
                x: 1616,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 624,
          sourceNodeId: 166,
          sourcePortId: 1263,
          targetNodeId: 148,
          targetPortId: 1264,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 325
          },
          sourceArrival: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 95
          },
          targetDeparture: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetArrival: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 330
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1790,
                y: 208
              },
              {
                x: 1726,
                y: 208
              },
              {
                x: 1506,
                y: 208
              },
              {
                x: 1442,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 1772,
                y: 196
              },
              1: {
                x: 1744,
                y: 220
              },
              2: {
                x: 1460,
                y: 220
              },
              3: {
                x: 1488,
                y: 196
              },
              4: {
                x: 1616,
                y: 196
              },
              5: {
                x: 1616,
                y: 196
              },
              6: {
                x: 1616,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 625,
          sourceNodeId: 166,
          sourcePortId: 1265,
          targetNodeId: 148,
          targetPortId: 1266,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 308
          },
          sourceArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetDeparture: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 105
          },
          targetArrival: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 315
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1790,
                y: 240
              },
              {
                x: 1726,
                y: 240
              },
              {
                x: 1506,
                y: 240
              },
              {
                x: 1442,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: 1772,
                y: 228
              },
              1: {
                x: 1744,
                y: 252
              },
              2: {
                x: 1460,
                y: 252
              },
              3: {
                x: 1488,
                y: 228
              },
              4: {
                x: 1616,
                y: 228
              },
              5: {
                x: 1616,
                y: 228
              },
              6: {
                x: 1616,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 626,
          sourceNodeId: 134,
          sourcePortId: 1267,
          targetNodeId: 164,
          targetPortId: 1268,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 11
          },
          sourceArrival: {
            lock: false,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 169
          },
          targetDeparture: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 156
          },
          targetArrival: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 24
          },
          numberOfStops: 0,
          trainrunId: 93,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 322,
                y: -1872
              },
              {
                x: 386,
                y: -1872
              },
              {
                x: 990,
                y: -944
              },
              {
                x: 1054,
                y: -944
              }
            ],
            textPositions: {
              0: {
                x: 340,
                y: -1860
              },
              1: {
                x: 368,
                y: -1884
              },
              2: {
                x: 1036,
                y: -956
              },
              3: {
                x: 1008,
                y: -932
              },
              4: {
                x: 688,
                y: -1420
              },
              5: {
                x: 688,
                y: -1420
              },
              6: {
                x: 688,
                y: -1396
              }
            }
          },
          warnings: null
        },
        {
          id: 627,
          sourceNodeId: 164,
          sourcePortId: 1269,
          targetNodeId: 165,
          targetPortId: 1270,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 25
          },
          sourceArrival: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 155
          },
          targetDeparture: {
            lock: false,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 146
          },
          targetArrival: {
            lock: false,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 34
          },
          numberOfStops: 0,
          trainrunId: 93,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1154,
                y: -944
              },
              {
                x: 1218,
                y: -944
              },
              {
                x: 1726,
                y: -656
              },
              {
                x: 1790,
                y: -656
              }
            ],
            textPositions: {
              0: {
                x: 1172,
                y: -932
              },
              1: {
                x: 1200,
                y: -956
              },
              2: {
                x: 1772,
                y: -668
              },
              3: {
                x: 1744,
                y: -644
              },
              4: {
                x: 1472,
                y: -812
              },
              5: {
                x: 1472,
                y: -812
              },
              6: {
                x: 1472,
                y: -788
              }
            }
          },
          warnings: null
        },
        {
          id: 628,
          sourceNodeId: 165,
          sourcePortId: 1271,
          targetNodeId: 166,
          targetPortId: 1272,
          travelTime: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 35
          },
          sourceArrival: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 145
          },
          targetDeparture: {
            lock: false,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 123
          },
          targetArrival: {
            lock: false,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 57
          },
          numberOfStops: 0,
          trainrunId: 93,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1808,
                y: -606
              },
              {
                x: 1808,
                y: -542
              },
              {
                x: 1808,
                y: -34
              },
              {
                x: 1808,
                y: 30
              }
            ],
            textPositions: {
              0: {
                x: 1796,
                y: -588
              },
              1: {
                x: 1820,
                y: -560
              },
              2: {
                x: 1820,
                y: 12
              },
              3: {
                x: 1796,
                y: -16
              },
              4: {
                x: 1796,
                y: -288
              },
              5: {
                x: 1796,
                y: -288
              },
              6: {
                x: 1820,
                y: -288
              }
            }
          },
          warnings: null
        },
        {
          id: 629,
          sourceNodeId: 166,
          sourcePortId: 1273,
          targetNodeId: 149,
          targetPortId: 1274,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 60
          },
          sourceArrival: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 120
          },
          targetDeparture: {
            lock: false,
            time: 53,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 113
          },
          targetArrival: {
            lock: false,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 67
          },
          numberOfStops: 0,
          trainrunId: 93,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1890,
                y: 272
              },
              {
                x: 1954,
                y: 272
              },
              {
                x: 2174,
                y: 272
              },
              {
                x: 2238,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: 1908,
                y: 284
              },
              1: {
                x: 1936,
                y: 260
              },
              2: {
                x: 2220,
                y: 260
              },
              3: {
                x: 2192,
                y: 284
              },
              4: {
                x: 2064,
                y: 260
              },
              5: {
                x: 2064,
                y: 260
              },
              6: {
                x: 2064,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 630,
          sourceNodeId: 149,
          sourcePortId: 1275,
          targetNodeId: 135,
          targetPortId: 1276,
          travelTime: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          sourceArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetDeparture: {
            lock: false,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 96
          },
          targetArrival: {
            lock: false,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 84
          },
          numberOfStops: 0,
          trainrunId: 93,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2338,
                y: 272
              },
              {
                x: 2402,
                y: 272
              },
              {
                x: 2590,
                y: 272
              },
              {
                x: 2654,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: 2356,
                y: 284
              },
              1: {
                x: 2384,
                y: 260
              },
              2: {
                x: 2636,
                y: 260
              },
              3: {
                x: 2608,
                y: 284
              },
              4: {
                x: 2496,
                y: 260
              },
              5: {
                x: 2496,
                y: 260
              },
              6: {
                x: 2496,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 631,
          sourceNodeId: 134,
          sourcePortId: 1277,
          targetNodeId: 146,
          targetPortId: 1278,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 6
          },
          sourceArrival: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 174
          },
          targetDeparture: {
            lock: false,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 169
          },
          targetArrival: {
            lock: false,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 11
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: -1822
              },
              {
                x: 144,
                y: -1758
              },
              {
                x: 144,
                y: -1474
              },
              {
                x: 144,
                y: -1410
              }
            ],
            textPositions: {
              0: {
                x: 132,
                y: -1804
              },
              1: {
                x: 156,
                y: -1776
              },
              2: {
                x: 156,
                y: -1428
              },
              3: {
                x: 132,
                y: -1456
              },
              4: {
                x: 132,
                y: -1616
              },
              5: {
                x: 132,
                y: -1616
              },
              6: {
                x: 156,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 632,
          sourceNodeId: 146,
          sourcePortId: 1279,
          targetNodeId: 145,
          targetPortId: 1280,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 11
          },
          sourceArrival: {
            lock: false,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 169
          },
          targetDeparture: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 163
          },
          targetArrival: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 17
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: -1342
              },
              {
                x: 144,
                y: -1278
              },
              {
                x: 144,
                y: -994
              },
              {
                x: 144,
                y: -930
              }
            ],
            textPositions: {
              0: {
                x: 132,
                y: -1324
              },
              1: {
                x: 156,
                y: -1296
              },
              2: {
                x: 156,
                y: -948
              },
              3: {
                x: 132,
                y: -976
              },
              4: {
                x: 132,
                y: -1136
              },
              5: {
                x: 132,
                y: -1136
              },
              6: {
                x: 156,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 633,
          sourceNodeId: 145,
          sourcePortId: 1281,
          targetNodeId: 144,
          targetPortId: 1282,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 17
          },
          sourceArrival: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 163
          },
          targetDeparture: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 157
          },
          targetArrival: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 23
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: -862
              },
              {
                x: 144,
                y: -798
              },
              {
                x: 144,
                y: -514
              },
              {
                x: 144,
                y: -450
              }
            ],
            textPositions: {
              0: {
                x: 132,
                y: -844
              },
              1: {
                x: 156,
                y: -816
              },
              2: {
                x: 156,
                y: -468
              },
              3: {
                x: 132,
                y: -496
              },
              4: {
                x: 132,
                y: -656
              },
              5: {
                x: 132,
                y: -656
              },
              6: {
                x: 156,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 634,
          sourceNodeId: 144,
          sourcePortId: 1283,
          targetNodeId: 147,
          targetPortId: 1284,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 23
          },
          sourceArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 157
          },
          targetDeparture: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 147
          },
          targetArrival: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 33
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 322,
                y: -400
              },
              {
                x: 386,
                y: -400
              },
              {
                x: 894,
                y: 80
              },
              {
                x: 958,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 340,
                y: -388
              },
              1: {
                x: 368,
                y: -412
              },
              2: {
                x: 940,
                y: 68
              },
              3: {
                x: 912,
                y: 92
              },
              4: {
                x: 640,
                y: -172
              },
              5: {
                x: 640,
                y: -172
              },
              6: {
                x: 640,
                y: -148
              }
            }
          },
          warnings: null
        },
        {
          id: 635,
          sourceNodeId: 147,
          sourcePortId: 1285,
          targetNodeId: 148,
          targetPortId: 1286,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 33
          },
          sourceArrival: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 147
          },
          targetDeparture: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 140
          },
          targetArrival: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 40
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1058,
                y: 112
              },
              {
                x: 1122,
                y: 112
              },
              {
                x: 1278,
                y: 112
              },
              {
                x: 1342,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 1076,
                y: 124
              },
              1: {
                x: 1104,
                y: 100
              },
              2: {
                x: 1324,
                y: 100
              },
              3: {
                x: 1296,
                y: 124
              },
              4: {
                x: 1200,
                y: 100
              },
              5: {
                x: 1200,
                y: 100
              },
              6: {
                x: 1200,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 636,
          sourceNodeId: 148,
          sourcePortId: 1287,
          targetNodeId: 166,
          targetPortId: 1288,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 40
          },
          sourceArrival: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 140
          },
          targetDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 134
          },
          targetArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1442,
                y: 112
              },
              {
                x: 1506,
                y: 112
              },
              {
                x: 1726,
                y: 112
              },
              {
                x: 1790,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 1460,
                y: 124
              },
              1: {
                x: 1488,
                y: 100
              },
              2: {
                x: 1772,
                y: 100
              },
              3: {
                x: 1744,
                y: 124
              },
              4: {
                x: 1616,
                y: 100
              },
              5: {
                x: 1616,
                y: 100
              },
              6: {
                x: 1616,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 637,
          sourceNodeId: 166,
          sourcePortId: 1289,
          targetNodeId: 149,
          targetPortId: 1290,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          sourceArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 134
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 128
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1890,
                y: 112
              },
              {
                x: 1954,
                y: 112
              },
              {
                x: 2174,
                y: 112
              },
              {
                x: 2238,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 1908,
                y: 124
              },
              1: {
                x: 1936,
                y: 100
              },
              2: {
                x: 2220,
                y: 100
              },
              3: {
                x: 2192,
                y: 124
              },
              4: {
                x: 2064,
                y: 100
              },
              5: {
                x: 2064,
                y: 100
              },
              6: {
                x: 2064,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 638,
          sourceNodeId: 149,
          sourcePortId: 1291,
          targetNodeId: 135,
          targetPortId: 1292,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 128
          },
          targetDeparture: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 120
          },
          targetArrival: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 60
          },
          numberOfStops: 0,
          trainrunId: 94,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2338,
                y: 112
              },
              {
                x: 2402,
                y: 112
              },
              {
                x: 2590,
                y: 112
              },
              {
                x: 2654,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 2356,
                y: 124
              },
              1: {
                x: 2384,
                y: 100
              },
              2: {
                x: 2636,
                y: 100
              },
              3: {
                x: 2608,
                y: 124
              },
              4: {
                x: 2496,
                y: 100
              },
              5: {
                x: 2496,
                y: 100
              },
              6: {
                x: 2496,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 639,
          sourceNodeId: 147,
          sourcePortId: 1293,
          targetNodeId: 148,
          targetPortId: 1294,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 54
          },
          sourceArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 126
          },
          targetDeparture: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 120
          },
          targetArrival: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 60
          },
          numberOfStops: 0,
          trainrunId: 97,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1058,
                y: 272
              },
              {
                x: 1122,
                y: 272
              },
              {
                x: 1278,
                y: 272
              },
              {
                x: 1342,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: 1076,
                y: 284
              },
              1: {
                x: 1104,
                y: 260
              },
              2: {
                x: 1324,
                y: 260
              },
              3: {
                x: 1296,
                y: 284
              },
              4: {
                x: 1200,
                y: 260
              },
              5: {
                x: 1200,
                y: 260
              },
              6: {
                x: 1200,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 640,
          sourceNodeId: 148,
          sourcePortId: 1295,
          targetNodeId: 166,
          targetPortId: 1296,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 62
          },
          sourceArrival: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 118
          },
          targetDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          numberOfStops: 0,
          trainrunId: 97,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1442,
                y: 272
              },
              {
                x: 1506,
                y: 272
              },
              {
                x: 1726,
                y: 272
              },
              {
                x: 1790,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: 1460,
                y: 284
              },
              1: {
                x: 1488,
                y: 260
              },
              2: {
                x: 1772,
                y: 260
              },
              3: {
                x: 1744,
                y: 284
              },
              4: {
                x: 1616,
                y: 260
              },
              5: {
                x: 1616,
                y: 260
              },
              6: {
                x: 1616,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 641,
          sourceNodeId: 166,
          sourcePortId: 1297,
          targetNodeId: 149,
          targetPortId: 1298,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          sourceArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetDeparture: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 105
          },
          targetArrival: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 75
          },
          numberOfStops: 0,
          trainrunId: 97,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1890,
                y: 304
              },
              {
                x: 1954,
                y: 304
              },
              {
                x: 2174,
                y: 304
              },
              {
                x: 2238,
                y: 304
              }
            ],
            textPositions: {
              0: {
                x: 1908,
                y: 316
              },
              1: {
                x: 1936,
                y: 292
              },
              2: {
                x: 2220,
                y: 292
              },
              3: {
                x: 2192,
                y: 316
              },
              4: {
                x: 2064,
                y: 292
              },
              5: {
                x: 2064,
                y: 292
              },
              6: {
                x: 2064,
                y: 316
              }
            }
          },
          warnings: null
        },
        {
          id: 642,
          sourceNodeId: 149,
          sourcePortId: 1299,
          targetNodeId: 135,
          targetPortId: 1300,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 75
          },
          sourceArrival: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 105
          },
          targetDeparture: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 98
          },
          targetArrival: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 82
          },
          numberOfStops: 0,
          trainrunId: 97,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2338,
                y: 304
              },
              {
                x: 2402,
                y: 304
              },
              {
                x: 2590,
                y: 304
              },
              {
                x: 2654,
                y: 304
              }
            ],
            textPositions: {
              0: {
                x: 2356,
                y: 316
              },
              1: {
                x: 2384,
                y: 292
              },
              2: {
                x: 2636,
                y: 292
              },
              3: {
                x: 2608,
                y: 316
              },
              4: {
                x: 2496,
                y: 292
              },
              5: {
                x: 2496,
                y: 292
              },
              6: {
                x: 2496,
                y: 316
              }
            }
          },
          warnings: null
        },
        {
          id: 643,
          sourceNodeId: 134,
          sourcePortId: 1301,
          targetNodeId: 146,
          targetPortId: 1302,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 28
          },
          sourceArrival: {
            lock: false,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 272
          },
          targetDeparture: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 265
          },
          targetArrival: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 35
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 208,
                y: -1822
              },
              {
                x: 208,
                y: -1758
              },
              {
                x: 208,
                y: -1474
              },
              {
                x: 208,
                y: -1410
              }
            ],
            textPositions: {
              0: {
                x: 196,
                y: -1804
              },
              1: {
                x: 220,
                y: -1776
              },
              2: {
                x: 220,
                y: -1428
              },
              3: {
                x: 196,
                y: -1456
              },
              4: {
                x: 196,
                y: -1616
              },
              5: {
                x: 196,
                y: -1616
              },
              6: {
                x: 220,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 644,
          sourceNodeId: 146,
          sourcePortId: 1303,
          targetNodeId: 145,
          targetPortId: 1304,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 35
          },
          sourceArrival: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 265
          },
          targetDeparture: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 259
          },
          targetArrival: {
            lock: false,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 41
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 208,
                y: -1342
              },
              {
                x: 208,
                y: -1278
              },
              {
                x: 208,
                y: -994
              },
              {
                x: 208,
                y: -930
              }
            ],
            textPositions: {
              0: {
                x: 196,
                y: -1324
              },
              1: {
                x: 220,
                y: -1296
              },
              2: {
                x: 220,
                y: -948
              },
              3: {
                x: 196,
                y: -976
              },
              4: {
                x: 196,
                y: -1136
              },
              5: {
                x: 196,
                y: -1136
              },
              6: {
                x: 220,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 645,
          sourceNodeId: 145,
          sourcePortId: 1305,
          targetNodeId: 144,
          targetPortId: 1306,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 41
          },
          sourceArrival: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 259
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 253
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 47
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 208,
                y: -862
              },
              {
                x: 208,
                y: -798
              },
              {
                x: 208,
                y: -514
              },
              {
                x: 208,
                y: -450
              }
            ],
            textPositions: {
              0: {
                x: 196,
                y: -844
              },
              1: {
                x: 220,
                y: -816
              },
              2: {
                x: 220,
                y: -468
              },
              3: {
                x: 196,
                y: -496
              },
              4: {
                x: 196,
                y: -656
              },
              5: {
                x: 196,
                y: -656
              },
              6: {
                x: 220,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 646,
          sourceNodeId: 144,
          sourcePortId: 1307,
          targetNodeId: 133,
          targetPortId: 1308,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 47
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 253
          },
          targetDeparture: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 245
          },
          targetArrival: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 55
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: -354
              },
              {
                x: 144,
                y: -290
              },
              {
                x: 144,
                y: 30
              },
              {
                x: 144,
                y: 94
              }
            ],
            textPositions: {
              0: {
                x: 132,
                y: -336
              },
              1: {
                x: 156,
                y: -308
              },
              2: {
                x: 156,
                y: 76
              },
              3: {
                x: 132,
                y: 48
              },
              4: {
                x: 132,
                y: -130
              },
              5: {
                x: 132,
                y: -130
              },
              6: {
                x: 156,
                y: -130
              }
            }
          },
          warnings: null
        },
        {
          id: 647,
          sourceNodeId: 133,
          sourcePortId: 1309,
          targetNodeId: 172,
          targetPortId: 1310,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 58
          },
          sourceArrival: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 242
          },
          targetDeparture: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 235
          },
          targetArrival: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 65
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 62,
                y: 208
              },
              {
                x: -2,
                y: 208
              },
              {
                x: -446,
                y: 208
              },
              {
                x: -510,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: 44,
                y: 196
              },
              1: {
                x: 16,
                y: 220
              },
              2: {
                x: -492,
                y: 220
              },
              3: {
                x: -464,
                y: 196
              },
              4: {
                x: -224,
                y: 196
              },
              5: {
                x: -224,
                y: 196
              },
              6: {
                x: -224,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 648,
          sourceNodeId: 129,
          sourcePortId: 1311,
          targetNodeId: 167,
          targetPortId: 1312,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 94
          },
          sourceArrival: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 206
          },
          targetDeparture: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 188
          },
          targetArrival: {
            lock: true,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2096,
                y: 382
              },
              {
                x: -2096,
                y: 446
              },
              {
                x: -2096,
                y: 574
              },
              {
                x: -2096,
                y: 638
              }
            ],
            textPositions: {
              0: {
                x: -2108,
                y: 400
              },
              1: {
                x: -2084,
                y: 428
              },
              2: {
                x: -2084,
                y: 620
              },
              3: {
                x: -2108,
                y: 592
              },
              4: {
                x: -2108,
                y: 510
              },
              5: {
                x: -2108,
                y: 510
              },
              6: {
                x: -2084,
                y: 510
              }
            }
          },
          warnings: null
        },
        {
          id: 649,
          sourceNodeId: 129,
          sourcePortId: 1313,
          targetNodeId: 167,
          targetPortId: 1314,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 359
          },
          sourceArrival: {
            lock: false,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 61
          },
          targetDeparture: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 43
          },
          targetArrival: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 377
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2064,
                y: 382
              },
              {
                x: -2064,
                y: 446
              },
              {
                x: -2064,
                y: 574
              },
              {
                x: -2064,
                y: 638
              }
            ],
            textPositions: {
              0: {
                x: -2076,
                y: 400
              },
              1: {
                x: -2052,
                y: 428
              },
              2: {
                x: -2052,
                y: 620
              },
              3: {
                x: -2076,
                y: 592
              },
              4: {
                x: -2076,
                y: 510
              },
              5: {
                x: -2076,
                y: 510
              },
              6: {
                x: -2052,
                y: 510
              }
            }
          },
          warnings: null
        },
        {
          id: 650,
          sourceNodeId: 167,
          sourcePortId: 1315,
          targetNodeId: 168,
          targetPortId: 1316,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 114
          },
          sourceArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 186
          },
          targetDeparture: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 178
          },
          targetArrival: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 122
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2096,
                y: 706
              },
              {
                x: -2096,
                y: 770
              },
              {
                x: -2096,
                y: 862
              },
              {
                x: -2096,
                y: 926
              }
            ],
            textPositions: {
              0: {
                x: -2108,
                y: 724
              },
              1: {
                x: -2084,
                y: 752
              },
              2: {
                x: -2084,
                y: 908
              },
              3: {
                x: -2108,
                y: 880
              },
              4: {
                x: -2108,
                y: 816
              },
              5: {
                x: -2108,
                y: 816
              },
              6: {
                x: -2084,
                y: 816
              }
            }
          },
          warnings: null
        },
        {
          id: 651,
          sourceNodeId: 168,
          sourcePortId: 1317,
          targetNodeId: 131,
          targetPortId: 1318,
          travelTime: {
            lock: true,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 124
          },
          sourceArrival: {
            lock: false,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 176
          },
          targetDeparture: {
            lock: false,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 152
          },
          targetArrival: {
            lock: false,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 148
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2014,
                y: 944
              },
              {
                x: -1950,
                y: 944
              },
              {
                x: -1154,
                y: 944
              },
              {
                x: -1090,
                y: 944
              }
            ],
            textPositions: {
              0: {
                x: -1996,
                y: 956
              },
              1: {
                x: -1968,
                y: 932
              },
              2: {
                x: -1108,
                y: 932
              },
              3: {
                x: -1136,
                y: 956
              },
              4: {
                x: -1552,
                y: 932
              },
              5: {
                x: -1552,
                y: 932
              },
              6: {
                x: -1552,
                y: 956
              }
            }
          },
          warnings: null
        },
        {
          id: 652,
          sourceNodeId: 167,
          sourcePortId: 1319,
          targetNodeId: 168,
          targetPortId: 1320,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 379
          },
          sourceArrival: {
            lock: false,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 41
          },
          targetDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 31
          },
          targetArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 389
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2064,
                y: 706
              },
              {
                x: -2064,
                y: 770
              },
              {
                x: -2064,
                y: 862
              },
              {
                x: -2064,
                y: 926
              }
            ],
            textPositions: {
              0: {
                x: -2076,
                y: 724
              },
              1: {
                x: -2052,
                y: 752
              },
              2: {
                x: -2052,
                y: 908
              },
              3: {
                x: -2076,
                y: 880
              },
              4: {
                x: -2076,
                y: 816
              },
              5: {
                x: -2076,
                y: 816
              },
              6: {
                x: -2052,
                y: 816
              }
            }
          },
          warnings: null
        },
        {
          id: 653,
          sourceNodeId: 168,
          sourcePortId: 1321,
          targetNodeId: 132,
          targetPortId: 1322,
          travelTime: {
            lock: true,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 391
          },
          sourceArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 29
          },
          targetDeparture: {
            lock: false,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 4
          },
          targetArrival: {
            lock: false,
            time: 56,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 416
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2096,
                y: 1022
              },
              {
                x: -2096,
                y: 1086
              },
              {
                x: -2096,
                y: 1374
              },
              {
                x: -2096,
                y: 1438
              }
            ],
            textPositions: {
              0: {
                x: -2108,
                y: 1040
              },
              1: {
                x: -2084,
                y: 1068
              },
              2: {
                x: -2084,
                y: 1420
              },
              3: {
                x: -2108,
                y: 1392
              },
              4: {
                x: -2108,
                y: 1230
              },
              5: {
                x: -2108,
                y: 1230
              },
              6: {
                x: -2084,
                y: 1230
              }
            }
          },
          warnings: null
        },
        {
          id: 654,
          sourceNodeId: 132,
          sourcePortId: 1323,
          targetNodeId: 168,
          targetPortId: 1324,
          travelTime: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 149
          },
          sourceArrival: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 151
          },
          targetDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 125
          },
          targetArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 175
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2128,
                y: 1438
              },
              {
                x: -2128,
                y: 1374
              },
              {
                x: -2128,
                y: 1086
              },
              {
                x: -2128,
                y: 1022
              }
            ],
            textPositions: {
              0: {
                x: -2116,
                y: 1420
              },
              1: {
                x: -2140,
                y: 1392
              },
              2: {
                x: -2140,
                y: 1040
              },
              3: {
                x: -2116,
                y: 1068
              },
              4: {
                x: -2140,
                y: 1230
              },
              5: {
                x: -2140,
                y: 1230
              },
              6: {
                x: -2116,
                y: 1230
              }
            }
          },
          warnings: null
        },
        {
          id: 655,
          sourceNodeId: 168,
          sourcePortId: 1325,
          targetNodeId: 167,
          targetPortId: 1326,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 178
          },
          sourceArrival: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 122
          },
          targetDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 114
          },
          targetArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 186
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2128,
                y: 926
              },
              {
                x: -2128,
                y: 862
              },
              {
                x: -2128,
                y: 770
              },
              {
                x: -2128,
                y: 706
              }
            ],
            textPositions: {
              0: {
                x: -2116,
                y: 908
              },
              1: {
                x: -2140,
                y: 880
              },
              2: {
                x: -2140,
                y: 724
              },
              3: {
                x: -2116,
                y: 752
              },
              4: {
                x: -2140,
                y: 816
              },
              5: {
                x: -2140,
                y: 816
              },
              6: {
                x: -2116,
                y: 816
              }
            }
          },
          warnings: null
        },
        {
          id: 656,
          sourceNodeId: 167,
          sourcePortId: 1327,
          targetNodeId: 129,
          targetPortId: 1328,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 188
          },
          sourceArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 112
          },
          targetDeparture: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 94
          },
          targetArrival: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 206
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2128,
                y: 638
              },
              {
                x: -2128,
                y: 574
              },
              {
                x: -2128,
                y: 446
              },
              {
                x: -2128,
                y: 382
              }
            ],
            textPositions: {
              0: {
                x: -2116,
                y: 620
              },
              1: {
                x: -2140,
                y: 592
              },
              2: {
                x: -2140,
                y: 400
              },
              3: {
                x: -2116,
                y: 428
              },
              4: {
                x: -2140,
                y: 510
              },
              5: {
                x: -2140,
                y: 510
              },
              6: {
                x: -2116,
                y: 510
              }
            }
          },
          warnings: null
        },
        {
          id: 657,
          sourceNodeId: 129,
          sourcePortId: 1329,
          targetNodeId: 178,
          targetPortId: 1330,
          travelTime: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 214
          },
          sourceArrival: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 86
          },
          targetDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 83
          },
          targetArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 217
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2014,
                y: 176
              },
              {
                x: -1950,
                y: 176
              },
              {
                x: -1762,
                y: 176
              },
              {
                x: -1698,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: -1996,
                y: 188
              },
              1: {
                x: -1968,
                y: 164
              },
              2: {
                x: -1716,
                y: 164
              },
              3: {
                x: -1744,
                y: 188
              },
              4: {
                x: -1856,
                y: 164
              },
              5: {
                x: -1856,
                y: 164
              },
              6: {
                x: -1856,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 658,
          sourceNodeId: 133,
          sourcePortId: 1331,
          targetNodeId: 144,
          targetPortId: 1332,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 245
          },
          sourceArrival: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 55
          },
          targetDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 47
          },
          targetArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 253
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: 94
              },
              {
                x: 112,
                y: 30
              },
              {
                x: 112,
                y: -290
              },
              {
                x: 112,
                y: -354
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: 76
              },
              1: {
                x: 100,
                y: 48
              },
              2: {
                x: 100,
                y: -336
              },
              3: {
                x: 124,
                y: -308
              },
              4: {
                x: 100,
                y: -130
              },
              5: {
                x: 100,
                y: -130
              },
              6: {
                x: 124,
                y: -130
              }
            }
          },
          warnings: null
        },
        {
          id: 659,
          sourceNodeId: 144,
          sourcePortId: 1333,
          targetNodeId: 145,
          targetPortId: 1334,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 253
          },
          sourceArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 47
          },
          targetDeparture: {
            lock: false,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 41
          },
          targetArrival: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 259
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: -450
              },
              {
                x: 176,
                y: -514
              },
              {
                x: 176,
                y: -798
              },
              {
                x: 176,
                y: -862
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: -468
              },
              1: {
                x: 164,
                y: -496
              },
              2: {
                x: 164,
                y: -844
              },
              3: {
                x: 188,
                y: -816
              },
              4: {
                x: 164,
                y: -656
              },
              5: {
                x: 164,
                y: -656
              },
              6: {
                x: 188,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 660,
          sourceNodeId: 145,
          sourcePortId: 1335,
          targetNodeId: 146,
          targetPortId: 1336,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 259
          },
          sourceArrival: {
            lock: false,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 41
          },
          targetDeparture: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 35
          },
          targetArrival: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 265
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: -930
              },
              {
                x: 176,
                y: -994
              },
              {
                x: 176,
                y: -1278
              },
              {
                x: 176,
                y: -1342
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: -948
              },
              1: {
                x: 164,
                y: -976
              },
              2: {
                x: 164,
                y: -1324
              },
              3: {
                x: 188,
                y: -1296
              },
              4: {
                x: 164,
                y: -1136
              },
              5: {
                x: 164,
                y: -1136
              },
              6: {
                x: 188,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 661,
          sourceNodeId: 146,
          sourcePortId: 1337,
          targetNodeId: 134,
          targetPortId: 1338,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 265
          },
          sourceArrival: {
            lock: false,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 35
          },
          targetDeparture: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 28
          },
          targetArrival: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 272
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: -1410
              },
              {
                x: 176,
                y: -1474
              },
              {
                x: 176,
                y: -1758
              },
              {
                x: 176,
                y: -1822
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: -1428
              },
              1: {
                x: 164,
                y: -1456
              },
              2: {
                x: 164,
                y: -1804
              },
              3: {
                x: 188,
                y: -1776
              },
              4: {
                x: 164,
                y: -1616
              },
              5: {
                x: 164,
                y: -1616
              },
              6: {
                x: 188,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 662,
          sourceNodeId: 129,
          sourcePortId: 1339,
          targetNodeId: 167,
          targetPortId: 1340,
          travelTime: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 368
          },
          sourceArrival: {
            lock: true,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          targetDeparture: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 33
          },
          targetArrival: {
            lock: true,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 387
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2032,
                y: 382
              },
              {
                x: -2032,
                y: 446
              },
              {
                x: -2032,
                y: 574
              },
              {
                x: -2032,
                y: 638
              }
            ],
            textPositions: {
              0: {
                x: -2044,
                y: 400
              },
              1: {
                x: -2020,
                y: 428
              },
              2: {
                x: -2020,
                y: 620
              },
              3: {
                x: -2044,
                y: 592
              },
              4: {
                x: -2044,
                y: 510
              },
              5: {
                x: -2044,
                y: 510
              },
              6: {
                x: -2020,
                y: 510
              }
            }
          },
          warnings: null
        },
        {
          id: 663,
          sourceNodeId: 167,
          sourcePortId: 1341,
          targetNodeId: 168,
          targetPortId: 1342,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 388
          },
          sourceArrival: {
            lock: false,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 32
          },
          targetDeparture: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 22
          },
          targetArrival: {
            lock: true,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 398
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2032,
                y: 706
              },
              {
                x: -2032,
                y: 770
              },
              {
                x: -2032,
                y: 862
              },
              {
                x: -2032,
                y: 926
              }
            ],
            textPositions: {
              0: {
                x: -2044,
                y: 724
              },
              1: {
                x: -2020,
                y: 752
              },
              2: {
                x: -2020,
                y: 908
              },
              3: {
                x: -2044,
                y: 880
              },
              4: {
                x: -2044,
                y: 816
              },
              5: {
                x: -2044,
                y: 816
              },
              6: {
                x: -2020,
                y: 816
              }
            }
          },
          warnings: null
        },
        {
          id: 664,
          sourceNodeId: 168,
          sourcePortId: 1343,
          targetNodeId: 131,
          targetPortId: 1344,
          travelTime: {
            lock: true,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 399
          },
          sourceArrival: {
            lock: true,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 21
          },
          targetDeparture: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 0
          },
          targetArrival: {
            lock: false,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 420
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2014,
                y: 976
              },
              {
                x: -1950,
                y: 976
              },
              {
                x: -1154,
                y: 976
              },
              {
                x: -1090,
                y: 976
              }
            ],
            textPositions: {
              0: {
                x: -1996,
                y: 988
              },
              1: {
                x: -1968,
                y: 964
              },
              2: {
                x: -1108,
                y: 964
              },
              3: {
                x: -1136,
                y: 988
              },
              4: {
                x: -1552,
                y: 964
              },
              5: {
                x: -1552,
                y: 964
              },
              6: {
                x: -1552,
                y: 988
              }
            }
          },
          warnings: null
        },
        {
          id: 665,
          sourceNodeId: 169,
          sourcePortId: 1345,
          targetNodeId: 153,
          targetPortId: 1346,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 48,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 48
          },
          sourceArrival: {
            lock: true,
            time: 12,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 252
          },
          targetDeparture: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 243
          },
          targetArrival: {
            lock: true,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 57
          },
          numberOfStops: 0,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1954,
                y: 1776
              },
              {
                x: 2018,
                y: 1776
              },
              {
                x: 2590,
                y: 1360
              },
              {
                x: 2654,
                y: 1360
              }
            ],
            textPositions: {
              0: {
                x: 1972,
                y: 1788
              },
              1: {
                x: 2000,
                y: 1764
              },
              2: {
                x: 2636,
                y: 1348
              },
              3: {
                x: 2608,
                y: 1372
              },
              4: {
                x: 2304,
                y: 1556
              },
              5: {
                x: 2304,
                y: 1556
              },
              6: {
                x: 2304,
                y: 1580
              }
            }
          },
          warnings: null
        },
        {
          id: 666,
          sourceNodeId: 169,
          sourcePortId: 1347,
          targetNodeId: 153,
          targetPortId: 1348,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 18
          },
          sourceArrival: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 42
          },
          targetDeparture: {
            lock: false,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 32
          },
          targetArrival: {
            lock: false,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 28
          },
          numberOfStops: 0,
          trainrunId: 80,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1954,
                y: 1744
              },
              {
                x: 2018,
                y: 1744
              },
              {
                x: 2590,
                y: 1328
              },
              {
                x: 2654,
                y: 1328
              }
            ],
            textPositions: {
              0: {
                x: 1972,
                y: 1756
              },
              1: {
                x: 2000,
                y: 1732
              },
              2: {
                x: 2636,
                y: 1316
              },
              3: {
                x: 2608,
                y: 1340
              },
              4: {
                x: 2304,
                y: 1524
              },
              5: {
                x: 2304,
                y: 1524
              },
              6: {
                x: 2304,
                y: 1548
              }
            }
          },
          warnings: null
        },
        {
          id: 667,
          sourceNodeId: 169,
          sourcePortId: 1349,
          targetNodeId: 142,
          targetPortId: 1350,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 453
          },
          sourceArrival: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 147
          },
          targetDeparture: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 138
          },
          targetArrival: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 462
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1854,
                y: 1776
              },
              {
                x: 1790,
                y: 1776
              },
              {
                x: 290,
                y: 1776
              },
              {
                x: 226,
                y: 1776
              }
            ],
            textPositions: {
              0: {
                x: 1836,
                y: 1764
              },
              1: {
                x: 1808,
                y: 1788
              },
              2: {
                x: 244,
                y: 1788
              },
              3: {
                x: 272,
                y: 1764
              },
              4: {
                x: 1040,
                y: 1764
              },
              5: {
                x: 1040,
                y: 1764
              },
              6: {
                x: 1040,
                y: 1788
              }
            }
          },
          warnings: null
        },
        {
          id: 668,
          sourceNodeId: 169,
          sourcePortId: 1351,
          targetNodeId: 142,
          targetPortId: 1352,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 273
          },
          sourceArrival: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 87
          },
          targetDeparture: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 78
          },
          targetArrival: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 282
          },
          numberOfStops: 0,
          trainrunId: 75,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1854,
                y: 1744
              },
              {
                x: 1790,
                y: 1744
              },
              {
                x: 290,
                y: 1744
              },
              {
                x: 226,
                y: 1744
              }
            ],
            textPositions: {
              0: {
                x: 1836,
                y: 1732
              },
              1: {
                x: 1808,
                y: 1756
              },
              2: {
                x: 244,
                y: 1756
              },
              3: {
                x: 272,
                y: 1732
              },
              4: {
                x: 1040,
                y: 1732
              },
              5: {
                x: 1040,
                y: 1732
              },
              6: {
                x: 1040,
                y: 1756
              }
            }
          },
          warnings: null
        },
        {
          id: 669,
          sourceNodeId: 170,
          sourcePortId: 1353,
          targetNodeId: 135,
          targetPortId: 1354,
          travelTime: {
            lock: true,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 74
          },
          sourceArrival: {
            lock: true,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 226
          },
          targetDeparture: {
            lock: true,
            time: 35,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 215
          },
          targetArrival: {
            lock: true,
            time: 25,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 85
          },
          numberOfStops: 0,
          trainrunId: 79,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2832,
                y: 734
              },
              {
                x: 2832,
                y: 670
              },
              {
                x: 2832,
                y: 414
              },
              {
                x: 2832,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 2844,
                y: 716
              },
              1: {
                x: 2820,
                y: 688
              },
              2: {
                x: 2820,
                y: 368
              },
              3: {
                x: 2844,
                y: 396
              },
              4: {
                x: 2820,
                y: 542
              },
              5: {
                x: 2820,
                y: 542
              },
              6: {
                x: 2844,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 670,
          sourceNodeId: 170,
          sourcePortId: 1355,
          targetNodeId: 135,
          targetPortId: 1356,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 43
          },
          sourceArrival: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 17
          },
          targetDeparture: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 10
          },
          targetArrival: {
            lock: true,
            time: 50,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 50
          },
          numberOfStops: 0,
          trainrunId: 80,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2800,
                y: 734
              },
              {
                x: 2800,
                y: 670
              },
              {
                x: 2800,
                y: 414
              },
              {
                x: 2800,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 2812,
                y: 716
              },
              1: {
                x: 2788,
                y: 688
              },
              2: {
                x: 2788,
                y: 368
              },
              3: {
                x: 2812,
                y: 396
              },
              4: {
                x: 2788,
                y: 542
              },
              5: {
                x: 2788,
                y: 542
              },
              6: {
                x: 2812,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 671,
          sourceNodeId: 170,
          sourcePortId: 1357,
          targetNodeId: 135,
          targetPortId: 1358,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetDeparture: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 5
          },
          targetArrival: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 355
          },
          numberOfStops: 0,
          trainrunId: 78,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2768,
                y: 734
              },
              {
                x: 2768,
                y: 670
              },
              {
                x: 2768,
                y: 414
              },
              {
                x: 2768,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 2780,
                y: 716
              },
              1: {
                x: 2756,
                y: 688
              },
              2: {
                x: 2756,
                y: 368
              },
              3: {
                x: 2780,
                y: 396
              },
              4: {
                x: 2756,
                y: 542
              },
              5: {
                x: 2756,
                y: 542
              },
              6: {
                x: 2780,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 672,
          sourceNodeId: 170,
          sourcePortId: 1359,
          targetNodeId: 135,
          targetPortId: 1360,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 107
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 13
          },
          targetDeparture: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 5
          },
          targetArrival: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 115
          },
          numberOfStops: 0,
          trainrunId: 76,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2672,
                y: 734
              },
              {
                x: 2672,
                y: 670
              },
              {
                x: 2672,
                y: 414
              },
              {
                x: 2672,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 2684,
                y: 716
              },
              1: {
                x: 2660,
                y: 688
              },
              2: {
                x: 2660,
                y: 368
              },
              3: {
                x: 2684,
                y: 396
              },
              4: {
                x: 2660,
                y: 542
              },
              5: {
                x: 2660,
                y: 542
              },
              6: {
                x: 2684,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 673,
          sourceNodeId: 170,
          sourcePortId: 1361,
          targetNodeId: 140,
          targetPortId: 1362,
          travelTime: {
            lock: true,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 75
          },
          sourceArrival: {
            lock: false,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 285
          },
          targetDeparture: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 238
          },
          targetArrival: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 122
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 752
              },
              {
                x: 2914,
                y: 752
              },
              {
                x: 4574,
                y: 1200
              },
              {
                x: 4638,
                y: 1200
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 764
              },
              1: {
                x: 2896,
                y: 740
              },
              2: {
                x: 4620,
                y: 1188
              },
              3: {
                x: 4592,
                y: 1212
              },
              4: {
                x: 3744,
                y: 964
              },
              5: {
                x: 3744,
                y: 964
              },
              6: {
                x: 3744,
                y: 988
              }
            }
          },
          warnings: null
        },
        {
          id: 674,
          sourceNodeId: 170,
          sourcePortId: 1363,
          targetNodeId: 140,
          targetPortId: 1364,
          travelTime: {
            lock: false,
            time: 61,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 141
          },
          sourceArrival: {
            lock: true,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 279
          },
          targetDeparture: {
            lock: true,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 218
          },
          targetArrival: {
            lock: true,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 202
          },
          numberOfStops: 5,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2850,
                y: 784
              },
              {
                x: 2914,
                y: 784
              },
              {
                x: 4574,
                y: 1232
              },
              {
                x: 4638,
                y: 1232
              }
            ],
            textPositions: {
              0: {
                x: 2868,
                y: 796
              },
              1: {
                x: 2896,
                y: 772
              },
              2: {
                x: 4620,
                y: 1220
              },
              3: {
                x: 4592,
                y: 1244
              },
              4: {
                x: 3744,
                y: 996
              },
              5: {
                x: 3744,
                y: 996
              },
              6: {
                x: 3744,
                y: 1020
              }
            }
          },
          warnings: null
        },
        {
          id: 675,
          sourceNodeId: 142,
          sourcePortId: 1365,
          targetNodeId: 141,
          targetPortId: 1366,
          travelTime: {
            lock: true,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 475
          },
          sourceArrival: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 125
          },
          targetDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 106
          },
          targetArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 494
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: 1726
              },
              {
                x: 144,
                y: 1662
              },
              {
                x: 144,
                y: 1314
              },
              {
                x: 144,
                y: 1250
              }
            ],
            textPositions: {
              0: {
                x: 156,
                y: 1708
              },
              1: {
                x: 132,
                y: 1680
              },
              2: {
                x: 132,
                y: 1268
              },
              3: {
                x: 156,
                y: 1296
              },
              4: {
                x: 132,
                y: 1488
              },
              5: {
                x: 132,
                y: 1488
              },
              6: {
                x: 156,
                y: 1488
              }
            }
          },
          warnings: null
        },
        {
          id: 676,
          sourceNodeId: 141,
          sourcePortId: 1367,
          targetNodeId: 143,
          targetPortId: 1368,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 494
          },
          sourceArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 106
          },
          targetDeparture: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 99
          },
          targetArrival: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 501
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 144,
                y: 1182
              },
              {
                x: 144,
                y: 1118
              },
              {
                x: 144,
                y: 866
              },
              {
                x: 144,
                y: 802
              }
            ],
            textPositions: {
              0: {
                x: 156,
                y: 1164
              },
              1: {
                x: 132,
                y: 1136
              },
              2: {
                x: 132,
                y: 820
              },
              3: {
                x: 156,
                y: 848
              },
              4: {
                x: 132,
                y: 992
              },
              5: {
                x: 132,
                y: 992
              },
              6: {
                x: 156,
                y: 992
              }
            }
          },
          warnings: null
        },
        {
          id: 677,
          sourceNodeId: 143,
          sourcePortId: 1369,
          targetNodeId: 133,
          targetPortId: 1370,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 503
          },
          sourceArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 97
          },
          targetDeparture: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 90
          },
          targetArrival: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 510
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: 734
              },
              {
                x: 112,
                y: 670
              },
              {
                x: 112,
                y: 414
              },
              {
                x: 112,
                y: 350
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: 716
              },
              1: {
                x: 100,
                y: 688
              },
              2: {
                x: 100,
                y: 368
              },
              3: {
                x: 124,
                y: 396
              },
              4: {
                x: 100,
                y: 542
              },
              5: {
                x: 100,
                y: 542
              },
              6: {
                x: 124,
                y: 542
              }
            }
          },
          warnings: null
        },
        {
          id: 678,
          sourceNodeId: 133,
          sourcePortId: 1371,
          targetNodeId: 144,
          targetPortId: 1372,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 32,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 512
          },
          sourceArrival: {
            lock: true,
            time: 28,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 88
          },
          targetDeparture: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 78
          },
          targetArrival: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 522
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 176,
                y: 94
              },
              {
                x: 176,
                y: 30
              },
              {
                x: 176,
                y: -290
              },
              {
                x: 176,
                y: -354
              }
            ],
            textPositions: {
              0: {
                x: 188,
                y: 76
              },
              1: {
                x: 164,
                y: 48
              },
              2: {
                x: 164,
                y: -336
              },
              3: {
                x: 188,
                y: -308
              },
              4: {
                x: 164,
                y: -130
              },
              5: {
                x: 164,
                y: -130
              },
              6: {
                x: 188,
                y: -130
              }
            }
          },
          warnings: null
        },
        {
          id: 679,
          sourceNodeId: 144,
          sourcePortId: 1373,
          targetNodeId: 145,
          targetPortId: 1374,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 522
          },
          sourceArrival: {
            lock: false,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 78
          },
          targetDeparture: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 73
          },
          targetArrival: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 527
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 240,
                y: -450
              },
              {
                x: 240,
                y: -514
              },
              {
                x: 240,
                y: -798
              },
              {
                x: 240,
                y: -862
              }
            ],
            textPositions: {
              0: {
                x: 252,
                y: -468
              },
              1: {
                x: 228,
                y: -496
              },
              2: {
                x: 228,
                y: -844
              },
              3: {
                x: 252,
                y: -816
              },
              4: {
                x: 228,
                y: -656
              },
              5: {
                x: 228,
                y: -656
              },
              6: {
                x: 252,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 680,
          sourceNodeId: 145,
          sourcePortId: 1375,
          targetNodeId: 146,
          targetPortId: 1376,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 527
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 73
          },
          targetDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 532
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 240,
                y: -930
              },
              {
                x: 240,
                y: -994
              },
              {
                x: 240,
                y: -1278
              },
              {
                x: 240,
                y: -1342
              }
            ],
            textPositions: {
              0: {
                x: 252,
                y: -948
              },
              1: {
                x: 228,
                y: -976
              },
              2: {
                x: 228,
                y: -1324
              },
              3: {
                x: 252,
                y: -1296
              },
              4: {
                x: 228,
                y: -1136
              },
              5: {
                x: 228,
                y: -1136
              },
              6: {
                x: 252,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 681,
          sourceNodeId: 146,
          sourcePortId: 1377,
          targetNodeId: 134,
          targetPortId: 1378,
          travelTime: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 532
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetDeparture: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 63
          },
          targetArrival: {
            lock: true,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 537
          },
          numberOfStops: 0,
          trainrunId: 77,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 240,
                y: -1410
              },
              {
                x: 240,
                y: -1474
              },
              {
                x: 240,
                y: -1758
              },
              {
                x: 240,
                y: -1822
              }
            ],
            textPositions: {
              0: {
                x: 252,
                y: -1428
              },
              1: {
                x: 228,
                y: -1456
              },
              2: {
                x: 228,
                y: -1804
              },
              3: {
                x: 252,
                y: -1776
              },
              4: {
                x: 228,
                y: -1616
              },
              5: {
                x: 228,
                y: -1616
              },
              6: {
                x: 252,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 682,
          sourceNodeId: 171,
          sourcePortId: 1379,
          targetNodeId: 128,
          targetPortId: 1380,
          travelTime: {
            lock: false,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 387
          },
          sourceArrival: {
            lock: true,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 153
          },
          targetDeparture: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 104
          },
          targetArrival: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 436
          },
          numberOfStops: 2,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2562,
                y: 336
              },
              {
                x: -2626,
                y: 336
              },
              {
                x: -2910,
                y: 592
              },
              {
                x: -2974,
                y: 592
              }
            ],
            textPositions: {
              0: {
                x: -2580,
                y: 324
              },
              1: {
                x: -2608,
                y: 348
              },
              2: {
                x: -2956,
                y: 604
              },
              3: {
                x: -2928,
                y: 580
              },
              4: {
                x: -2768,
                y: 452
              },
              5: {
                x: -2768,
                y: 452
              },
              6: {
                x: -2768,
                y: 476
              }
            }
          },
          warnings: null
        },
        {
          id: 683,
          sourceNodeId: 171,
          sourcePortId: 1381,
          targetNodeId: 128,
          targetPortId: 1382,
          travelTime: {
            lock: true,
            time: 44,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 414
          },
          sourceArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 126
          },
          targetDeparture: {
            lock: false,
            time: 22,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 82
          },
          targetArrival: {
            lock: false,
            time: 38,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 458
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -2562,
                y: 304
              },
              {
                x: -2626,
                y: 304
              },
              {
                x: -2910,
                y: 560
              },
              {
                x: -2974,
                y: 560
              }
            ],
            textPositions: {
              0: {
                x: -2580,
                y: 292
              },
              1: {
                x: -2608,
                y: 316
              },
              2: {
                x: -2956,
                y: 572
              },
              3: {
                x: -2928,
                y: 548
              },
              4: {
                x: -2768,
                y: 420
              },
              5: {
                x: -2768,
                y: 420
              },
              6: {
                x: -2768,
                y: 444
              }
            }
          },
          warnings: null
        },
        {
          id: 684,
          sourceNodeId: 172,
          sourcePortId: 1383,
          targetNodeId: 178,
          targetPortId: 1384,
          travelTime: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 339
          },
          sourceArrival: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 201
          },
          targetDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 185
          },
          targetArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 355
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -610,
                y: 304
              },
              {
                x: -674,
                y: 304
              },
              {
                x: -1534,
                y: 304
              },
              {
                x: -1598,
                y: 304
              }
            ],
            textPositions: {
              0: {
                x: -628,
                y: 292
              },
              1: {
                x: -656,
                y: 316
              },
              2: {
                x: -1580,
                y: 316
              },
              3: {
                x: -1552,
                y: 292
              },
              4: {
                x: -1104,
                y: 292
              },
              5: {
                x: -1104,
                y: 292
              },
              6: {
                x: -1104,
                y: 316
              }
            }
          },
          warnings: null
        },
        {
          id: 685,
          sourceNodeId: 172,
          sourcePortId: 1385,
          targetNodeId: 174,
          targetPortId: 1386,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 343
          },
          sourceArrival: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 77
          },
          targetDeparture: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 69
          },
          targetArrival: {
            lock: true,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 351
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -610,
                y: 336
              },
              {
                x: -674,
                y: 336
              },
              {
                x: -830,
                y: 368
              },
              {
                x: -894,
                y: 368
              }
            ],
            textPositions: {
              0: {
                x: -628,
                y: 324
              },
              1: {
                x: -656,
                y: 348
              },
              2: {
                x: -876,
                y: 380
              },
              3: {
                x: -848,
                y: 356
              },
              4: {
                x: -752,
                y: 340
              },
              5: {
                x: -752,
                y: 340
              },
              6: {
                x: -752,
                y: 364
              }
            }
          },
          warnings: null
        },
        {
          id: 686,
          sourceNodeId: 172,
          sourcePortId: 1387,
          targetNodeId: 178,
          targetPortId: 1388,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 47,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 347
          },
          sourceArrival: {
            lock: false,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 73
          },
          targetDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 65
          },
          targetArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 355
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -610,
                y: 272
              },
              {
                x: -674,
                y: 272
              },
              {
                x: -1534,
                y: 272
              },
              {
                x: -1598,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: -628,
                y: 260
              },
              1: {
                x: -656,
                y: 284
              },
              2: {
                x: -1580,
                y: 284
              },
              3: {
                x: -1552,
                y: 260
              },
              4: {
                x: -1104,
                y: 260
              },
              5: {
                x: -1104,
                y: 260
              },
              6: {
                x: -1104,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 687,
          sourceNodeId: 172,
          sourcePortId: 1389,
          targetNodeId: 178,
          targetPortId: 1390,
          travelTime: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 337
          },
          sourceArrival: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 83
          },
          targetDeparture: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 66
          },
          targetArrival: {
            lock: true,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 354
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -610,
                y: 240
              },
              {
                x: -674,
                y: 240
              },
              {
                x: -1534,
                y: 240
              },
              {
                x: -1598,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: -628,
                y: 228
              },
              1: {
                x: -656,
                y: 252
              },
              2: {
                x: -1580,
                y: 252
              },
              3: {
                x: -1552,
                y: 228
              },
              4: {
                x: -1104,
                y: 228
              },
              5: {
                x: -1104,
                y: 228
              },
              6: {
                x: -1104,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 688,
          sourceNodeId: 172,
          sourcePortId: 1391,
          targetNodeId: 178,
          targetPortId: 1392,
          travelTime: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 65
          },
          sourceArrival: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 235
          },
          targetDeparture: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 217
          },
          targetArrival: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 83
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -610,
                y: 208
              },
              {
                x: -674,
                y: 208
              },
              {
                x: -1534,
                y: 208
              },
              {
                x: -1598,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: -628,
                y: 196
              },
              1: {
                x: -656,
                y: 220
              },
              2: {
                x: -1580,
                y: 220
              },
              3: {
                x: -1552,
                y: 196
              },
              4: {
                x: -1104,
                y: 196
              },
              5: {
                x: -1104,
                y: 196
              },
              6: {
                x: -1104,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 689,
          sourceNodeId: 172,
          sourcePortId: 1393,
          targetNodeId: 133,
          targetPortId: 1394,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 234
          },
          sourceArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 66
          },
          targetDeparture: {
            lock: true,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 58
          },
          targetArrival: {
            lock: true,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 242
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -510,
                y: 176
              },
              {
                x: -446,
                y: 176
              },
              {
                x: -2,
                y: 176
              },
              {
                x: 62,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: -492,
                y: 188
              },
              1: {
                x: -464,
                y: 164
              },
              2: {
                x: 44,
                y: 164
              },
              3: {
                x: 16,
                y: 188
              },
              4: {
                x: -224,
                y: 164
              },
              5: {
                x: -224,
                y: 164
              },
              6: {
                x: -224,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 690,
          sourceNodeId: 172,
          sourcePortId: 1395,
          targetNodeId: 178,
          targetPortId: 1396,
          travelTime: {
            lock: true,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 377
          },
          sourceArrival: {
            lock: false,
            time: 43,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 163
          },
          targetDeparture: {
            lock: false,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 154
          },
          targetArrival: {
            lock: false,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 386
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -610,
                y: 144
              },
              {
                x: -674,
                y: 144
              },
              {
                x: -1534,
                y: 144
              },
              {
                x: -1598,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: -628,
                y: 132
              },
              1: {
                x: -656,
                y: 156
              },
              2: {
                x: -1580,
                y: 156
              },
              3: {
                x: -1552,
                y: 132
              },
              4: {
                x: -1104,
                y: 132
              },
              5: {
                x: -1104,
                y: 132
              },
              6: {
                x: -1104,
                y: 156
              }
            }
          },
          warnings: null
        },
        {
          id: 691,
          sourceNodeId: 173,
          sourcePortId: 1397,
          targetNodeId: 178,
          targetPortId: 1398,
          travelTime: {
            lock: true,
            time: 10,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 11,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 371
          },
          sourceArrival: {
            lock: true,
            time: 49,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 49
          },
          targetDeparture: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 39
          },
          targetArrival: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 381
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1346,
                y: 368
              },
              {
                x: -1410,
                y: 368
              },
              {
                x: -1534,
                y: 336
              },
              {
                x: -1598,
                y: 336
              }
            ],
            textPositions: {
              0: {
                x: -1364,
                y: 356
              },
              1: {
                x: -1392,
                y: 380
              },
              2: {
                x: -1580,
                y: 348
              },
              3: {
                x: -1552,
                y: 324
              },
              4: {
                x: -1472,
                y: 340
              },
              5: {
                x: -1472,
                y: 340
              },
              6: {
                x: -1472,
                y: 364
              }
            }
          },
          warnings: null
        },
        {
          id: 692,
          sourceNodeId: 174,
          sourcePortId: 1399,
          targetNodeId: 173,
          targetPortId: 1400,
          travelTime: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 352
          },
          sourceArrival: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetDeparture: {
            lock: false,
            time: 51,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 51
          },
          targetArrival: {
            lock: false,
            time: 9,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 369
          },
          numberOfStops: 1,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -994,
                y: 368
              },
              {
                x: -1058,
                y: 368
              },
              {
                x: -1182,
                y: 368
              },
              {
                x: -1246,
                y: 368
              }
            ],
            textPositions: {
              0: {
                x: -1012,
                y: 356
              },
              1: {
                x: -1040,
                y: 380
              },
              2: {
                x: -1228,
                y: 380
              },
              3: {
                x: -1200,
                y: 356
              },
              4: {
                x: -1120,
                y: 356
              },
              5: {
                x: -1120,
                y: 356
              },
              6: {
                x: -1120,
                y: 380
              }
            }
          },
          warnings: null
        },
        {
          id: 693,
          sourceNodeId: 135,
          sourcePortId: 1401,
          targetNodeId: 149,
          targetPortId: 1402,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 300
          },
          sourceArrival: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 60
          },
          targetDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          targetArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 308
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2654,
                y: 80
              },
              {
                x: 2590,
                y: 80
              },
              {
                x: 2402,
                y: 80
              },
              {
                x: 2338,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 2636,
                y: 68
              },
              1: {
                x: 2608,
                y: 92
              },
              2: {
                x: 2356,
                y: 92
              },
              3: {
                x: 2384,
                y: 68
              },
              4: {
                x: 2496,
                y: 68
              },
              5: {
                x: 2496,
                y: 68
              },
              6: {
                x: 2496,
                y: 92
              }
            }
          },
          warnings: null
        },
        {
          id: 694,
          sourceNodeId: 149,
          sourcePortId: 1403,
          targetNodeId: 166,
          targetPortId: 1404,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 308
          },
          sourceArrival: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 52
          },
          targetDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          targetArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 314
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 2238,
                y: 80
              },
              {
                x: 2174,
                y: 80
              },
              {
                x: 1954,
                y: 80
              },
              {
                x: 1890,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 2220,
                y: 68
              },
              1: {
                x: 2192,
                y: 92
              },
              2: {
                x: 1908,
                y: 92
              },
              3: {
                x: 1936,
                y: 68
              },
              4: {
                x: 2064,
                y: 68
              },
              5: {
                x: 2064,
                y: 68
              },
              6: {
                x: 2064,
                y: 92
              }
            }
          },
          warnings: null
        },
        {
          id: 695,
          sourceNodeId: 166,
          sourcePortId: 1405,
          targetNodeId: 148,
          targetPortId: 1406,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 314
          },
          sourceArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 46
          },
          targetDeparture: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 40
          },
          targetArrival: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 320
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1790,
                y: 80
              },
              {
                x: 1726,
                y: 80
              },
              {
                x: 1506,
                y: 80
              },
              {
                x: 1442,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 1772,
                y: 68
              },
              1: {
                x: 1744,
                y: 92
              },
              2: {
                x: 1460,
                y: 92
              },
              3: {
                x: 1488,
                y: 68
              },
              4: {
                x: 1616,
                y: 68
              },
              5: {
                x: 1616,
                y: 68
              },
              6: {
                x: 1616,
                y: 92
              }
            }
          },
          warnings: null
        },
        {
          id: 696,
          sourceNodeId: 148,
          sourcePortId: 1407,
          targetNodeId: 147,
          targetPortId: 1408,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 20,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 320
          },
          sourceArrival: {
            lock: false,
            time: 40,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 40
          },
          targetDeparture: {
            lock: false,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 34
          },
          targetArrival: {
            lock: false,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 326
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1342,
                y: 80
              },
              {
                x: 1278,
                y: 80
              },
              {
                x: 1122,
                y: 80
              },
              {
                x: 1058,
                y: 80
              }
            ],
            textPositions: {
              0: {
                x: 1324,
                y: 68
              },
              1: {
                x: 1296,
                y: 92
              },
              2: {
                x: 1076,
                y: 92
              },
              3: {
                x: 1104,
                y: 68
              },
              4: {
                x: 1200,
                y: 68
              },
              5: {
                x: 1200,
                y: 68
              },
              6: {
                x: 1200,
                y: 92
              }
            }
          },
          warnings: null
        },
        {
          id: 697,
          sourceNodeId: 147,
          sourcePortId: 1409,
          targetNodeId: 144,
          targetPortId: 1410,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 326
          },
          sourceArrival: {
            lock: false,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 34
          },
          targetDeparture: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 27
          },
          targetArrival: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 333
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 958,
                y: 48
              },
              {
                x: 894,
                y: 48
              },
              {
                x: 386,
                y: -432
              },
              {
                x: 322,
                y: -432
              }
            ],
            textPositions: {
              0: {
                x: 940,
                y: 36
              },
              1: {
                x: 912,
                y: 60
              },
              2: {
                x: 340,
                y: -420
              },
              3: {
                x: 368,
                y: -444
              },
              4: {
                x: 640,
                y: -204
              },
              5: {
                x: 640,
                y: -204
              },
              6: {
                x: 640,
                y: -180
              }
            }
          },
          warnings: null
        },
        {
          id: 698,
          sourceNodeId: 144,
          sourcePortId: 1411,
          targetNodeId: 145,
          targetPortId: 1412,
          travelTime: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 33,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 333
          },
          sourceArrival: {
            lock: false,
            time: 27,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 27
          },
          targetDeparture: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 21
          },
          targetArrival: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 339
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: -450
              },
              {
                x: 112,
                y: -514
              },
              {
                x: 112,
                y: -798
              },
              {
                x: 112,
                y: -862
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: -468
              },
              1: {
                x: 100,
                y: -496
              },
              2: {
                x: 100,
                y: -844
              },
              3: {
                x: 124,
                y: -816
              },
              4: {
                x: 100,
                y: -656
              },
              5: {
                x: 100,
                y: -656
              },
              6: {
                x: 124,
                y: -656
              }
            }
          },
          warnings: null
        },
        {
          id: 699,
          sourceNodeId: 145,
          sourcePortId: 1413,
          targetNodeId: 146,
          targetPortId: 1414,
          travelTime: {
            lock: true,
            time: 7,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 339
          },
          sourceArrival: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 21
          },
          targetDeparture: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 14
          },
          targetArrival: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 346
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: -930
              },
              {
                x: 112,
                y: -994
              },
              {
                x: 112,
                y: -1278
              },
              {
                x: 112,
                y: -1342
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: -948
              },
              1: {
                x: 100,
                y: -976
              },
              2: {
                x: 100,
                y: -1324
              },
              3: {
                x: 124,
                y: -1296
              },
              4: {
                x: 100,
                y: -1136
              },
              5: {
                x: 100,
                y: -1136
              },
              6: {
                x: 124,
                y: -1136
              }
            }
          },
          warnings: null
        },
        {
          id: 700,
          sourceNodeId: 146,
          sourcePortId: 1415,
          targetNodeId: 134,
          targetPortId: 1416,
          travelTime: {
            lock: true,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 346
          },
          sourceArrival: {
            lock: false,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 14
          },
          targetDeparture: {
            lock: true,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 6
          },
          targetArrival: {
            lock: true,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 354
          },
          numberOfStops: 0,
          trainrunId: 85,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 112,
                y: -1410
              },
              {
                x: 112,
                y: -1474
              },
              {
                x: 112,
                y: -1758
              },
              {
                x: 112,
                y: -1822
              }
            ],
            textPositions: {
              0: {
                x: 124,
                y: -1428
              },
              1: {
                x: 100,
                y: -1456
              },
              2: {
                x: 100,
                y: -1804
              },
              3: {
                x: 124,
                y: -1776
              },
              4: {
                x: 100,
                y: -1616
              },
              5: {
                x: 100,
                y: -1616
              },
              6: {
                x: 124,
                y: -1616
              }
            }
          },
          warnings: null
        },
        {
          id: 701,
          sourceNodeId: 175,
          sourcePortId: 1417,
          targetNodeId: 130,
          targetPortId: 1418,
          travelTime: {
            lock: true,
            time: 13,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 421
          },
          sourceArrival: {
            lock: true,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 119
          },
          targetDeparture: {
            lock: true,
            time: 46,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 106
          },
          targetArrival: {
            lock: true,
            time: 14,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 434
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: -16
              },
              {
                x: -1762,
                y: -16
              },
              {
                x: -2366,
                y: -16
              },
              {
                x: -2430,
                y: -16
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: -28
              },
              1: {
                x: -1744,
                y: -4
              },
              2: {
                x: -2412,
                y: -4
              },
              3: {
                x: -2384,
                y: -28
              },
              4: {
                x: -2064,
                y: -28
              },
              5: {
                x: -2064,
                y: -28
              },
              6: {
                x: -2064,
                y: -4
              }
            }
          },
          warnings: null
        },
        {
          id: 702,
          sourceNodeId: 137,
          sourcePortId: 1419,
          targetNodeId: 176,
          targetPortId: 1420,
          travelTime: {
            lock: true,
            time: 16,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 245
          },
          sourceArrival: {
            lock: true,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 295
          },
          targetDeparture: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 279
          },
          targetArrival: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 261
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 4738,
                y: 112
              },
              {
                x: 4802,
                y: 112
              },
              {
                x: 5310,
                y: 112
              },
              {
                x: 5374,
                y: 112
              }
            ],
            textPositions: {
              0: {
                x: 4756,
                y: 124
              },
              1: {
                x: 4784,
                y: 100
              },
              2: {
                x: 5356,
                y: 100
              },
              3: {
                x: 5328,
                y: 124
              },
              4: {
                x: 5056,
                y: 100
              },
              5: {
                x: 5056,
                y: 100
              },
              6: {
                x: 5056,
                y: 124
              }
            }
          },
          warnings: null
        },
        {
          id: 703,
          sourceNodeId: 177,
          sourcePortId: 1421,
          targetNodeId: 160,
          targetPortId: 1422,
          travelTime: {
            lock: false,
            time: 30,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: true,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 451
          },
          sourceArrival: {
            lock: true,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 89
          },
          targetDeparture: {
            lock: true,
            time: 59,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 59
          },
          targetArrival: {
            lock: true,
            time: 1,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 481
          },
          numberOfStops: 1,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3522,
                y: 624
              },
              {
                x: -3586,
                y: 624
              },
              {
                x: -3774,
                y: 688
              },
              {
                x: -3838,
                y: 688
              }
            ],
            textPositions: {
              0: {
                x: -3540,
                y: 612
              },
              1: {
                x: -3568,
                y: 636
              },
              2: {
                x: -3820,
                y: 700
              },
              3: {
                x: -3792,
                y: 676
              },
              4: {
                x: -3680,
                y: 644
              },
              5: {
                x: -3680,
                y: 644
              },
              6: {
                x: -3680,
                y: 668
              }
            }
          },
          warnings: null
        },
        {
          id: 704,
          sourceNodeId: 177,
          sourcePortId: 1423,
          targetNodeId: 160,
          targetPortId: 1424,
          travelTime: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 52,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 472
          },
          sourceArrival: {
            lock: false,
            time: 8,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 68
          },
          targetDeparture: {
            lock: true,
            time: 42,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 42
          },
          targetArrival: {
            lock: true,
            time: 18,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 498
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3522,
                y: 560
              },
              {
                x: -3586,
                y: 560
              },
              {
                x: -3774,
                y: 624
              },
              {
                x: -3838,
                y: 624
              }
            ],
            textPositions: {
              0: {
                x: -3540,
                y: 548
              },
              1: {
                x: -3568,
                y: 572
              },
              2: {
                x: -3820,
                y: 636
              },
              3: {
                x: -3792,
                y: 612
              },
              4: {
                x: -3680,
                y: 580
              },
              5: {
                x: -3680,
                y: 580
              },
              6: {
                x: -3680,
                y: 604
              }
            }
          },
          warnings: null
        },
        {
          id: 705,
          sourceNodeId: 177,
          sourcePortId: 1425,
          targetNodeId: 160,
          targetPortId: 1426,
          travelTime: {
            lock: false,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 19,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 499
          },
          sourceArrival: {
            lock: false,
            time: 41,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 41
          },
          targetDeparture: {
            lock: true,
            time: 15,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 15
          },
          targetArrival: {
            lock: true,
            time: 45,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 525
          },
          numberOfStops: 0,
          trainrunId: 87,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -3522,
                y: 592
              },
              {
                x: -3586,
                y: 592
              },
              {
                x: -3774,
                y: 656
              },
              {
                x: -3838,
                y: 656
              }
            ],
            textPositions: {
              0: {
                x: -3540,
                y: 580
              },
              1: {
                x: -3568,
                y: 604
              },
              2: {
                x: -3820,
                y: 668
              },
              3: {
                x: -3792,
                y: 644
              },
              4: {
                x: -3680,
                y: 612
              },
              5: {
                x: -3680,
                y: 612
              },
              6: {
                x: -3680,
                y: 636
              }
            }
          },
          warnings: null
        },
        {
          id: 706,
          sourceNodeId: 178,
          sourcePortId: 1427,
          targetNodeId: 129,
          targetPortId: 1428,
          travelTime: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 21,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 381
          },
          sourceArrival: {
            lock: false,
            time: 39,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 39
          },
          targetDeparture: {
            lock: true,
            time: 36,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 36
          },
          targetArrival: {
            lock: true,
            time: 24,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 384
          },
          numberOfStops: 0,
          trainrunId: 86,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: 336
              },
              {
                x: -1762,
                y: 336
              },
              {
                x: -1950,
                y: 336
              },
              {
                x: -2014,
                y: 336
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: 324
              },
              1: {
                x: -1744,
                y: 348
              },
              2: {
                x: -1996,
                y: 348
              },
              3: {
                x: -1968,
                y: 324
              },
              4: {
                x: -1856,
                y: 324
              },
              5: {
                x: -1856,
                y: 324
              },
              6: {
                x: -1856,
                y: 348
              }
            }
          },
          warnings: null
        },
        {
          id: 707,
          sourceNodeId: 178,
          sourcePortId: 1429,
          targetNodeId: 129,
          targetPortId: 1430,
          travelTime: {
            lock: true,
            time: 4,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 355
          },
          sourceArrival: {
            lock: false,
            time: 5,
            warning: {
              title: "Quelle Ankunft Warnung",
              description: "Quellankunftszeit kann nicht erreicht werden"
            },
            timeFormatter: null,
            consecutiveTime: 185
          },
          targetDeparture: {
            lock: true,
            time: 0,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 180
          },
          targetArrival: {
            lock: true,
            time: 0,
            warning: {
              title: "Ziel Ankunft Warnung",
              description: "Zielankunftszeit kann nicht erreicht werden"
            },
            timeFormatter: null,
            consecutiveTime: 360
          },
          numberOfStops: 0,
          trainrunId: 81,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: 304
              },
              {
                x: -1762,
                y: 304
              },
              {
                x: -1950,
                y: 304
              },
              {
                x: -2014,
                y: 304
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: 292
              },
              1: {
                x: -1744,
                y: 316
              },
              2: {
                x: -1996,
                y: 316
              },
              3: {
                x: -1968,
                y: 292
              },
              4: {
                x: -1856,
                y: 292
              },
              5: {
                x: -1856,
                y: 292
              },
              6: {
                x: -1856,
                y: 316
              }
            }
          },
          warnings: null
        },
        {
          id: 708,
          sourceNodeId: 178,
          sourcePortId: 1431,
          targetNodeId: 129,
          targetPortId: 1432,
          travelTime: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 55,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 355
          },
          sourceArrival: {
            lock: false,
            time: 5,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 65
          },
          targetDeparture: {
            lock: false,
            time: 2,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 62
          },
          targetArrival: {
            lock: false,
            time: 58,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 358
          },
          numberOfStops: 0,
          trainrunId: 90,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: 272
              },
              {
                x: -1762,
                y: 272
              },
              {
                x: -1950,
                y: 272
              },
              {
                x: -2014,
                y: 272
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: 260
              },
              1: {
                x: -1744,
                y: 284
              },
              2: {
                x: -1996,
                y: 284
              },
              3: {
                x: -1968,
                y: 260
              },
              4: {
                x: -1856,
                y: 260
              },
              5: {
                x: -1856,
                y: 260
              },
              6: {
                x: -1856,
                y: 284
              }
            }
          },
          warnings: null
        },
        {
          id: 709,
          sourceNodeId: 178,
          sourcePortId: 1433,
          targetNodeId: 129,
          targetPortId: 1434,
          travelTime: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 354
          },
          sourceArrival: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 66
          },
          targetDeparture: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 63
          },
          targetArrival: {
            lock: true,
            time: 57,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 357
          },
          numberOfStops: 0,
          trainrunId: 89,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: 240
              },
              {
                x: -1762,
                y: 240
              },
              {
                x: -1950,
                y: 240
              },
              {
                x: -2014,
                y: 240
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: 228
              },
              1: {
                x: -1744,
                y: 252
              },
              2: {
                x: -1996,
                y: 252
              },
              3: {
                x: -1968,
                y: 228
              },
              4: {
                x: -1856,
                y: 228
              },
              5: {
                x: -1856,
                y: 228
              },
              6: {
                x: -1856,
                y: 252
              }
            }
          },
          warnings: null
        },
        {
          id: 710,
          sourceNodeId: 178,
          sourcePortId: 1435,
          targetNodeId: 129,
          targetPortId: 1436,
          travelTime: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 83
          },
          sourceArrival: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 217
          },
          targetDeparture: {
            lock: true,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 214
          },
          targetArrival: {
            lock: true,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 86
          },
          numberOfStops: 0,
          trainrunId: 95,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: 208
              },
              {
                x: -1762,
                y: 208
              },
              {
                x: -1950,
                y: 208
              },
              {
                x: -2014,
                y: 208
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: 196
              },
              1: {
                x: -1744,
                y: 220
              },
              2: {
                x: -1996,
                y: 220
              },
              3: {
                x: -1968,
                y: 196
              },
              4: {
                x: -1856,
                y: 196
              },
              5: {
                x: -1856,
                y: 196
              },
              6: {
                x: -1856,
                y: 220
              }
            }
          },
          warnings: null
        },
        {
          id: 711,
          sourceNodeId: 178,
          sourcePortId: 1437,
          targetNodeId: 172,
          targetPortId: 1438,
          travelTime: {
            lock: true,
            time: 17,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 37,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 217
          },
          sourceArrival: {
            lock: false,
            time: 23,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 83
          },
          targetDeparture: {
            lock: false,
            time: 6,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 66
          },
          targetArrival: {
            lock: false,
            time: 54,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 234
          },
          numberOfStops: 0,
          trainrunId: 96,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1598,
                y: 176
              },
              {
                x: -1534,
                y: 176
              },
              {
                x: -674,
                y: 176
              },
              {
                x: -610,
                y: 176
              }
            ],
            textPositions: {
              0: {
                x: -1580,
                y: 188
              },
              1: {
                x: -1552,
                y: 164
              },
              2: {
                x: -628,
                y: 164
              },
              3: {
                x: -656,
                y: 188
              },
              4: {
                x: -1104,
                y: 164
              },
              5: {
                x: -1104,
                y: 164
              },
              6: {
                x: -1104,
                y: 188
              }
            }
          },
          warnings: null
        },
        {
          id: 712,
          sourceNodeId: 178,
          sourcePortId: 1439,
          targetNodeId: 129,
          targetPortId: 1440,
          travelTime: {
            lock: true,
            time: 3,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 1
          },
          sourceDeparture: {
            lock: false,
            time: 26,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 386
          },
          sourceArrival: {
            lock: false,
            time: 34,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 154
          },
          targetDeparture: {
            lock: false,
            time: 31,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 151
          },
          targetArrival: {
            lock: false,
            time: 29,
            warning: null,
            timeFormatter: null,
            consecutiveTime: 389
          },
          numberOfStops: 0,
          trainrunId: 88,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: -1698,
                y: 144
              },
              {
                x: -1762,
                y: 144
              },
              {
                x: -1950,
                y: 144
              },
              {
                x: -2014,
                y: 144
              }
            ],
            textPositions: {
              0: {
                x: -1716,
                y: 132
              },
              1: {
                x: -1744,
                y: 156
              },
              2: {
                x: -1996,
                y: 156
              },
              3: {
                x: -1968,
                y: 132
              },
              4: {
                x: -1856,
                y: 132
              },
              5: {
                x: -1856,
                y: 132
              },
              6: {
                x: -1856,
                y: 156
              }
            }
          },
          warnings: null
        }
      ],
      trainruns: [
        {
          id: 75,
          name: "21",
          categoryId: 1,
          frequencyId: 4,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 76,
          name: "2",
          categoryId: 1,
          frequencyId: 4,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 77,
          name: "26",
          categoryId: 2,
          frequencyId: 5,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 78,
          name: "46",
          categoryId: 2,
          frequencyId: 4,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 79,
          name: "75",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 80,
          name: "70",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 81,
          name: "15",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 82,
          name: "27",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 83,
          name: "26",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 84,
          name: "13",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 85,
          name: "3",
          categoryId: 1,
          frequencyId: 4,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 86,
          name: "35",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 87,
          name: "5",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 88,
          name: "1",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 89,
          name: "8",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 90,
          name: "81",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 91,
          name: "48",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            1,
            9,
            5
          ]
        },
        {
          id: 92,
          name: "",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            1,
            9,
            5
          ]
        },
        {
          id: 93,
          name: "36",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 94,
          name: "3",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 95,
          name: "61",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 96,
          name: "6",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        },
        {
          id: 97,
          name: "37",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [
            3,
            8,
            4
          ]
        }
      ],
      resources: [
        {
          id: 88,
          capacity: 2
        },
        {
          id: 89,
          capacity: 2
        },
        {
          id: 90,
          capacity: 2
        },
        {
          id: 91,
          capacity: 2
        },
        {
          id: 92,
          capacity: 2
        },
        {
          id: 93,
          capacity: 2
        },
        {
          id: 94,
          capacity: 2
        },
        {
          id: 95,
          capacity: 2
        },
        {
          id: 96,
          capacity: 2
        },
        {
          id: 97,
          capacity: 2
        },
        {
          id: 98,
          capacity: 2
        },
        {
          id: 99,
          capacity: 2
        },
        {
          id: 100,
          capacity: 2
        },
        {
          id: 101,
          capacity: 2
        },
        {
          id: 102,
          capacity: 2
        },
        {
          id: 103,
          capacity: 2
        },
        {
          id: 104,
          capacity: 2
        },
        {
          id: 105,
          capacity: 2
        },
        {
          id: 106,
          capacity: 2
        },
        {
          id: 107,
          capacity: 2
        },
        {
          id: 108,
          capacity: 2
        },
        {
          id: 109,
          capacity: 2
        },
        {
          id: 110,
          capacity: 2
        },
        {
          id: 111,
          capacity: 2
        },
        {
          id: 112,
          capacity: 2
        },
        {
          id: 113,
          capacity: 2
        },
        {
          id: 114,
          capacity: 2
        },
        {
          id: 115,
          capacity: 2
        },
        {
          id: 116,
          capacity: 2
        },
        {
          id: 117,
          capacity: 2
        },
        {
          id: 118,
          capacity: 2
        },
        {
          id: 119,
          capacity: 2
        },
        {
          id: 120,
          capacity: 2
        },
        {
          id: 121,
          capacity: 2
        },
        {
          id: 122,
          capacity: 2
        },
        {
          id: 123,
          capacity: 2
        },
        {
          id: 124,
          capacity: 2
        },
        {
          id: 125,
          capacity: 2
        },
        {
          id: 126,
          capacity: 2
        },
        {
          id: 127,
          capacity: 2
        },
        {
          id: 128,
          capacity: 2
        },
        {
          id: 129,
          capacity: 2
        },
        {
          id: 130,
          capacity: 2
        },
        {
          id: 131,
          capacity: 2
        },
        {
          id: 132,
          capacity: 2
        },
        {
          id: 133,
          capacity: 2
        },
        {
          id: 134,
          capacity: 2
        },
        {
          id: 135,
          capacity: 2
        },
        {
          id: 136,
          capacity: 2
        },
        {
          id: 137,
          capacity: 2
        },
        {
          id: 138,
          capacity: 2
        },
        {
          id: 139,
          capacity: 2
        },
        {
          id: 140,
          capacity: 2
        },
        {
          id: 141,
          capacity: 2
        },
        {
          id: 142,
          capacity: 2
        },
        {
          id: 143,
          capacity: 2
        },
        {
          id: 144,
          capacity: 2
        },
        {
          id: 145,
          capacity: 2
        },
        {
          id: 146,
          capacity: 2
        },
        {
          id: 147,
          capacity: 2
        },
        {
          id: 148,
          capacity: 2
        },
        {
          id: 149,
          capacity: 2
        },
        {
          id: 150,
          capacity: 2
        },
        {
          id: 151,
          capacity: 2
        },
        {
          id: 152,
          capacity: 2
        },
        {
          id: 153,
          capacity: 2
        },
        {
          id: 154,
          capacity: 2
        },
        {
          id: 155,
          capacity: 2
        },
        {
          id: 156,
          capacity: 2
        },
        {
          id: 157,
          capacity: 2
        },
        {
          id: 158,
          capacity: 2
        },
        {
          id: 159,
          capacity: 2
        },
        {
          id: 160,
          capacity: 2
        },
        {
          id: 161,
          capacity: 2
        },
        {
          id: 162,
          capacity: 2
        },
        {
          id: 163,
          capacity: 2
        },
        {
          id: 164,
          capacity: 2
        },
        {
          id: 165,
          capacity: 2
        },
        {
          id: 166,
          capacity: 2
        },
        {
          id: 167,
          capacity: 2
        },
        {
          id: 168,
          capacity: 2
        },
        {
          id: 169,
          capacity: 2
        },
        {
          id: 170,
          capacity: 2
        },
        {
          id: 171,
          capacity: 2
        },
        {
          id: 172,
          capacity: 2
        },
        {
          id: 173,
          capacity: 2
        },
        {
          id: 174,
          capacity: 2
        },
        {
          id: 175,
          capacity: 2
        },
        {
          id: 176,
          capacity: 2
        },
        {
          id: 177,
          capacity: 2
        },
        {
          id: 178,
          capacity: 2
        },
        {
          id: 179,
          capacity: 2
        },
        {
          id: 180,
          capacity: 2
        },
        {
          id: 181,
          capacity: 2
        },
        {
          id: 182,
          capacity: 2
        },
        {
          id: 183,
          capacity: 2
        },
        {
          id: 184,
          capacity: 2
        },
        {
          id: 185,
          capacity: 2
        },
        {
          id: 186,
          capacity: 2
        },
        {
          id: 187,
          capacity: 2
        },
        {
          id: 188,
          capacity: 2
        },
        {
          id: 189,
          capacity: 2
        },
        {
          id: 190,
          capacity: 2
        },
        {
          id: 191,
          capacity: 2
        },
        {
          id: 192,
          capacity: 2
        },
        {
          id: 193,
          capacity: 2
        },
        {
          id: 194,
          capacity: 2
        },
        {
          id: 195,
          capacity: 2
        },
        {
          id: 196,
          capacity: 2
        },
        {
          id: 197,
          capacity: 2
        },
        {
          id: 198,
          capacity: 2
        },
        {
          id: 199,
          capacity: 2
        },
        {
          id: 200,
          capacity: 2
        },
        {
          id: 201,
          capacity: 2
        },
        {
          id: 202,
          capacity: 2
        }
      ],
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
