## Nodes

### Import nodes from a comma-seperate-value file (CSV)

Nodes can be imported using a predefined semicolon-separated file (CSV). This allows the basis to be
created very quickly. In addition to node properties, such as stopping times per train type, node
positions can also be imported so that the layout comes directly from the import.

![import basedata](./animated_images/compressed/29-01-2024-004-import_basedata.gif)

<details>
<summary>Import CSV interface description
</summary>

|                  |                      BP                      |                     Bahnhof                      |   Kategorie    |    Region     |              Fahrgastwechselzeit_IPV               |               Fahrgastwechselzeit_A                |               Fahrgastwechselzeit_B                |               Fahrgastwechselzeit_C                |               Fahrgastwechselzeit_D                |      ZAZ      |           Umsteigezeit           |              Labels              |         X         |          Y          |                            Erstellen                            |
|:----------------:|:--------------------------------------------:|:------------------------------------------------:|:--------------:|:-------------:|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:-------------:|:--------------------------------:|:--------------------------------:|:-----------------:|:-------------------:|:---------------------------------------------------------------:|
|     Datatype     |                    string                    |                      string                      |     string     |   nummeric    |                      nummeric                      |                      nummeric                      |                      nummeric                      |                      nummeric                      |                      nummeric                      |   nummeric    |             nummeric             |             nummeric             |     nummeric      |      nummeric       |                          'JA' or empty                          |
|   Description    |                      id                      |                    full name                     | category label | region number | if <= 0 -> non stop, otherwise > default stop time | if <= 0 -> non stop, otherwise > default stop time | if <= 0 -> non stop, otherwise > default stop time | if <= 0 -> non stop, otherwise > default stop time | if <= 0 -> non stop, otherwise > default stop time | no implemened | min. connectiontime - Default: 2 | comma separated filerable labels | vertical position | horizontal position | if 'JA' missing nodes gets created, otherwise just updated (ID) |
| More information | this is a unique identifier <br/>(non-empty) | full name of the station (node) <br/>(non-empty) | empty allowed  | empty allowed |                   empty allowed                    |                   empty allowed                    |                   empty allowed                    |                   empty allowed                    |                   empty allowed                    | empty allowed |          empty allowed           |          empty allowed           |   empty allowed   |    empty allowed    |                          empty allowed                          |

**category label:** If the node gets created or updated the category labels gets added as filterable
label. The label template ist "Kategorie:" + value. Comma separated values allows to add more than
one category label.
**region number:** If the node gets created or updated the region number gets added as filterable
label. The label template ist "Region:" + value. Comma separated values allows to add more than one
region label.

</details>

<details>
<summary> Example data  
</summary>

| BP   | Bahnhof           | Region | Kategorie | Fahrgastwechselzeit_IPV | Fahrgastwechselzeit_A | Fahrgastwechselzeit_B | Fahrgastwechselzeit_C | Fahrgastwechselzeit_D | Umsteigezeit | ZAZ | Labels | Erstellen | X            | Y            |
|------|-------------------|--------|-----------|-------------------------|-----------------------|-----------------------|-----------------------|-----------------------|--------------|-----|--------|-----------|--------------|--------------|
| AA   | Aarau             | Mitte  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            | 0.2 | SBB    | JA        | -209.4991625 | -427.021373  |
| GD   | Arth-Goldau       | Sud    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 951.9866035  | 758.834056   |
| BEL  | Bellinzona        | Sud    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 2121.053433  | 3728.103892  |
| BR   | Brig              | Ouest  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | -329.3652    | 3328.39752   |
| BUE  | Bülach            | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 898.8887195  | -904.009981  |
| CHI  | Chiasso           | Sud    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 7            |     |        | JA        | 2150.55564   | 5000         |
| CH   | Chur              | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 3235.226062  | 1397.129247  |
| FRI  | Fribourg/Freiburg | Ouest  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | -2286.192724 | 1637.608378  |
| GE   | Genève            | Ouest  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | -4663.358198 | 3689.447021  |
| GEAP | Genève aéroport   | Ouest  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 1            |     |        | JA        | -4733.658091 | 3610.022432  |
| IO   | Interlaken Ost    | Mitte  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 5            |     |        | JA        | -656.2338255 | 2058.391723  |
| LQ   | Landquart         | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 3283.056782  | 995.1229965  |
| LG   | Lugano            | Sud    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 1939.473284  | 4397.116645  |
| OL   | Olten             | Mitte  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 5            |     |        | JA        | -538.742579  | -286.602732  |
| SG   | St. Gallen        | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 5            |     |        | JA        | 2818.572081  | -589.3046175 |
| TH   | Thun              | Mitte  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | -1173.572842 | 1807.484374  |
| VI   | Visp              | Ouest  | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | -578.900898  | 3418.974947  |
| WIL  | Wil               | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 2060.435379  | -709.0873575 |
| W    | Winterthur        | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 1330.339474  | -828.050963  |
| ZG   | Zug               | Ost    | 2         | 2                       | 2                     | 2                     | 2                     | 2                     | 4            |     |        | JA        | 866.6159235  | 323.4007965  |
| ZFH  | Zürich Flughafen  | Ost    | 2         | 3                       | 3                     | 3                     | 3                     | 3                     | 4            |     |        | JA        | 962.4904855  | -647.2111605 |

[Demo base data CSV file](29-01-2024-004-Stammdaten_importieren.csv)
</details>

### Move nodes

If you move the node - the Netzgrafik routes all trainrun section automatically. The Netzgrafik
recalculates the routing and results in a new well aligned readable layout.

#### Trainrun sorting heuristics

##### Single trainrun

This example shows how a trainrun is connected to a node and aligned. The outgoing/incoming edge
depends on the position of the node.

![node move small](./animated_images/compressed/29-01-2024-006-move-nodes-reroute_trainrun.gif)

##### Multiple trainruns

This example shows how several trainrun are connected to each other and aligned to a node. The
outgoing/incoming edge depends on the position of the node.

If two or more trainrun have at least one identical node (start/end does not matter), the
trainrun are sorted according to the position of the branching node: (from top to bottom or
from left to right or vice versa).

If two or more trainrun have the same neighbouring nodes, they are sorted by train journey
category and name. If the name is the same, they are further sorted according to the order of the
drawing - first drawn, first aligned (from top to bottom or from left to right or vice versa).

> **Sorting heuristic**
> - (1) Position Alignment (Top > Bottom > Left > Right)
> - (2) Left - Right | Top - Down
> - (3) Category Order
> - (4) Trainrun name (alphabetically)
> - (5) Trainrun (drawing order)
> - (6) Trainrun section (drawing order)

![node move big](./animated_images/compressed/29-01-2024-006-move-nodes-reroute_trainrun-big.gif)

##### Inserting new trainruns

Inserting and deleting trainrun sections affects the pin orders (edge ordering) and the node size (height, width).

![node move big](./animated_images/compressed/2024-1-25-Move_nodes_reoute_notes_ports.gif)

