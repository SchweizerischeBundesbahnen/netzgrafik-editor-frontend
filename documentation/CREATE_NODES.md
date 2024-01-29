## Nodes

### Import nodes from a comma-seperate-value file (CSV)

Nodes can be imported using a predefined semicolon-separated file (CSV). This allows the basis to be
created very quickly. In addition to node properties, such as stopping times per train type, node
positions can also be imported so that the layout comes directly from the import.

![import basedata](./animated_images/29-01-2024-004-import_basedata.gif)

#### Import CSV interface description

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

[>> Demo base data CSV file]29-01-2024-004-Stammdaten_importieren.csv)

### Create new trainrun

Drag-and-drop a new trainrun from a node to another node. Just use the left mouse button, press
mouse button on a node and hold the button pressed while moving to another node. Then release the
pressed button and the trainrun gets created. The trainrun dialog opens - enter all
information about the trainrun. Then click outside the window or press 'ESC' to close the dialog
window. If you like to reopen the dialog just click on the trainrun name in the editor or click any
time (number). The dialog gets shown again. If you click on the trainrun - its gets selected and you
can modify it. Click for a second time the Perlenkette gets opened.

![start creating trainrun](./animated_images/29-01-2024-005-start-creating_trainrun.gif)


For mor details have a look into [create and modifiy trainrun](CREATE_TRAINRUN.md).


### Move nodes

If you move the node - the Netzgrafik routes all trainrun section automatically. The Netzgrafik
recalculates the routing and results in a new well aligned readable layout.

Example 1:
![node move small](./animated_images/29-01-2024-006-move-nodes-reroute_trainrun.gif)

Example 2:
![node move big](./animated_images/29-01-2024-006-move-nodes-reroute_trainrun-big.gif)

Example 3:
![node move big](./animated_images/2024-1-25-Move_nodes_reoute_notes_ports.gif)

