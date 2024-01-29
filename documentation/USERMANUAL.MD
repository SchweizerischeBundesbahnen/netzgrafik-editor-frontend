# Netzgrafik-Editor User Documentation

#### Table Of Contents

- [Introduction](#Introduction)
- [Project/Variant](#CreateNewProjectVariant)
- [Advanced editing operations](#BasicFunctions)
- [Nodes](#Nodes)
- [Trainruns](#Trainruns)
- [Connections](#Connections)
- [Graphic timetable (Streckengrafik)](#Streckengrafik)
- [Pearls view (Perlenkette)](#Perlenkette)
- [Filter](#Filter)
- [Conclusion](#Conclusion)

<a id="Introduction"></a>

## Introduction

This document provides an overview of its key features and instructions on how to interact with
the editor effectively.

Key Features

1. **Creation:**
   The user can define nodes, trains with their routes and attributes to create a comprehensive
   Netzgrafik.

2. **Drag-and-Drop Interface:**
   The editor offers a user-friendly drag-and-drop interface. This interface allows the user to
   easily draw the Netzgrafik and position the nodes, which has a direct impact to the edges, e.g.
   trainrun sections and transitions. The Netzgrafik always remains clear and
   easy to read. In addition, even the connections within the node between trains can be defined
   using drag-and-drop. This intuitive function simplifies the creation and customisation of the
   network layout.

3. **Node and Trainrun Customization:**
   Users can customize nodes, trainrun with its sections and connections in the Netzgrafik just
   using the left mouse button. This includes changing the general appearance (trainrun category,
   frequency) and additional information such as connections or filterable labels.

4. **Advanced Editing Short-cuts:**
   Users can perform advanced editing operations such as copy (Ctrl+C), paste (Ctrl+V),
   duplicate (Ctrl+D), delete (Del) and undo (Ctrl+Z) in multiple steps - either using the
   standard Ctrl+z key command or with help of the version history. These editing functions make it
   easier to manage and edit complex network structures. User don't need to
   explicitly save the latest changes. The system save it automatically.

5. **Collaboration and Sharing:**
   The Netzgrafik-Editor provides collaboration features, enabling multiple users to work on the  
   same Netzgrafik simultaneously. Users can share their work with others, track changes,
   and collaborate seamlessly. Exporting and sharing the designed Netzgrafik is also a useful
   function that improves further processing with third parties.

---
<a id="CreateNewProjectVariant"></a>

## Project/Variant

For mor details have a look into [create a new project](CREATE_PROJECT.md).

<a id="BasicFunctions"></a>

## Advanced editing operations

Please also have a look at the [Introduction](#Introduction) chapter, where some general information
is provided.

|                               Keyboard                                |                                                                                             description                                                                                             |
|:---------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                       |                                                                                                                                                                                                     |
|                               'delete'                                |                                                                          Delete nodes, comments, and selected train runs.                                                                           |
|                          ctrl + d / 'insert'                          |                                   Duplicate nodes, comments, and selected train runs (if multiple nodes are selected, trains including nodes will be duplicated).                                   |
|                               'insert'                                |                                                                         Add new nodes under the mouse on the drawing area.                                                                          |
|                               'Escape'                                |                                                         Select train runs / In multi-node move mode, all selected nodes will be unselected.                                                         |
| Shift + Mouse (or alternatively with the right mouse button and drag) |                                                Multi-select nodes and notes for subsequent moving or delete all selected elements by using "Delete".                                                |
|                               ctrl + z                                |                                                                                 Undo - Reverse the previous action.                                                                                 |
|                               ctrl + c                                | Copy the currently visible train runs. The copied content remains in the browser's memory/cache and can be pasted into different variants (even after closing the browser, the data remains saved). |
|                               ctrl + v                                |                                                                                    Paste the copied train runs.                                                                                     |
|                               ctrl + a                                |                                                                                             Select all.                                                                                             |

### Duplicate trainrun

To duplicate a train in the project, follow these steps:

- Select the train: Use the left mouse click to select the train that you want to duplicate.
- Duplicate the train: Once the train is selected, press "Ctrl + D" on your keyboard to duplicate
  it. This action will create an identical copy of the selected train.
- Edit the train name: Click on the train name with the left mouse button, and a dialog window will
  open, allowing you to edit the train's details. Make the necessary changes to the train name or
  any other relevant information.

> **Optional:** Edit the train in the pearls view: If you click on the selected train again, the
> pearls view will open on the right side. At the top, there is an option to edit the train
> similarly
> to the dialog window. Use this option to make any additional edits to the train.

<p align="left" width="100%" height="100%" >
    <img width="1000px" height="478px"  src="./animated_images/2024-1-25-Duplicate_Trainrun_ctr_d.gif"></p>

<!--- 
### Copy all visible elements

<p align="left" width="100%" height="100%" >
    <img width="1000px" height="478px"  src="./animated_images/2024-1-25-SelectAll_ctrl-a-and-copy-ctrl-c.gif"></p>

### Insert copied elements

<p align="left" width="100%" height="100%" >
    <img width="1000px" height="478px"  src="./animated_images/2024-1-25-CtrlV-Insert_copied.gif"></p>

### Delete all visible elements

<p align="left" width="100%" height="100%" >
    <img width="1000px" height="478px"  src="./animated_images/2024-1-25-SelectAll-ctrl_a-delete.gif"></p>
--->

---
<a id="Nodes"></a>

## Nodes

For mor details have a look into [create and modifiy nodes](CREATE_NODES.md).

<a id="Trains"></a>

## Trainruns

For mor details have a look into [create and modifiy trainrun](CREATE_TRAINRUN.md).


---
<a id="Perlenkette"></a>

## Pearls view (Perlenkette)

The pearls view allows you to view and edit the entire trainrun from a vertical perspective. It is
displayed on the right-hand side.
In the upper part of the pearls view, the train information is displayed.
It can also be expanded to get more information. It also allows to edit the train name, category or
frequency.

Between the title and the train route display, there is a sorted list of all the passed nodes.
These nodes are displayed as buttons, which enable quick synchronization with the Netzgrafik.
If you click on a node button, the viewpoint (center) will automatically be readjusted.
Similarly, clicking on a train section will center that section in the Netzgrafik, allowing for easy
navigation and visualization.

### Show pearls view

To access it, select a train first. Then, by clicking on the train again, the pearls view will open
on the right side,
displaying the train's route as a vertical chain of nodes and trainrunsections.

<p align="left" width="100%" height="100%" >
    <img width="1000px" height="478px"  src="./animated_images/2024-1-25_DeleteConnections-Perlenkette-Show_Connections.gif"></p>


---
<a id="Connections"></a>

## Connections

For mor details have a look into [create and modifiy connections](CREATE_CONNECTIONS.md).


---
<a id="Filter"></a>

## Filters

For mor details have a look into [create and modifiy filters](CREATE_FILTERS.md).



---
<a id="Conclusion"></a>

## Conclusion

By following the instructions in this document, users can effectively create and facilitate the
creation of comprehensive and visually appealing network representations.