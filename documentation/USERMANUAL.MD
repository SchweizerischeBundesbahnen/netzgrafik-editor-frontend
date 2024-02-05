# Netzgrafik-Editor User Documentation

#### Table Of Contents

- [Introduction](#Introduction)
- [Project/Variant](#CreateNewProjectVariant)
- [Advanced editing short-cuts](#BasicFunctions)
- [Nodes](#Nodes)
- [Trainruns](#Trainruns)
- [Connections](#Connections)
- [Filters](#Filter)
- [Graphic timetable (Streckengrafik)](#Streckengrafik)
- [Perlenkette](#Perlenkette)
- [Conclusion](#Conclusion)

Further information can be found under the links provided under [Links](#Links).

<a id="Introduction"></a>

## Introduction

This document provides an overview of its key features and instructions on how to interact with
the editor effectively.

Key Features

1. **Interactive Drawing Interface:** The user can define nodes, trains with their routes and
   attributes to create a comprehensive Netzgrafik. The editor offers an user-friendly drag-and-drop
   interface, allowing the user to easily draw the Netzgrafik and position the nodes. This has a
   direct impact on the edges, such as trainrun sections and transitions. The Netzgrafik always
   remains clear and easy to read. Additionally, connections between trains within a node can be
   defined using drag-and-drop. This intuitive function simplifies the creation and customization of
   the network layout.

2. **Graphic timetable (Streckengrafik):**
   All lines (trainruns) defined in the Netzgrafik can be transferred into a graphical timetable
   representation (Streckengrafik). In addition to displaying the timetable graphically,
   this graphical timetable provides a new track occupancy estimation at the nodes and between the
   nodes (lines). It estimates the required minimum infrastructure, such as the number of tracks.
   This enhances the capability for clear and quick analytics directly through the graphical
   timetable.

3. **Advanced Analytics:**
   Increasing demands are being placed on advanced analytical abilities. Analyzing journey routes
   through the logistics network is crucial. A first version has been implemented that allows users
   to analyze the logistics network based on the timetable representation. It provides insights into
   connection coordination, transfer times and journey times.

4. **Collaboration and Sharing:**
   The Netzgrafik-Editor provides collaboration features, enabling multiple users to work on
   the same Netzgrafik simultaneously. Users can share their work with others, track changes,
   and collaborate seamlessly. Exporting and sharing the designed Netzgrafik is also a useful
   function that improves further processing with third parties.

---
<a id="CreateNewProjectVariant"></a>

## Project/Variant

For mor details have a look into [create a new project](CREATE_PROJECT.md).

<a id="BasicFunctions"></a>

## Advanced editing short-cuts

Users can perform advanced editing operation short-cuts such as copy (ctrl+c), paste (ctrl+v),
duplicate (ctrl+d), delete ('delete') and undo (ctrl+z) in multiple steps - either using the
standard (ctrl+z) key command or with help of the version history. These editing functions make it
easier to manage and edit complex network structures.

> User don't need to explicitly save the latest changes. The system save it automatically. There is
> therefore no shortcut for saving changes.

### Short-cuts

|                                                  Keyboard                                                  |                                                                                            description                                                                                             |
|:----------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                                                            |                                                                                                                                                                                                    |
|                                                  'delete'                                                  |                                                                          Delete nodes, comments, and selected trainruns.                                                                           |
|                                             ctrl+d / 'insert'                                              |                                   Duplicate nodes, comments, and selected trainruns (if multiple nodes are selected, trains including nodes will be duplicated).                                   |
|                                                  'insert'                                                  |                                                                         Add new nodes under the mouse on the drawing area.                                                                         |
|                                                  'escape'                                                  |                                                         Select trainruns / In multi-node move mode, all selected nodes will be unselected.                                                         |
| shift + left mouse button pressed and move (or alternatively with the right mouse button pressed and move) |                                               Multi-select nodes and notes for subsequent moving or delete all selected elements by using "Delete".                                                |
|                                                   ctrl+z                                                   |                                                                                Undo - Reverse the previous action.                                                                                 |
|                                                   ctrl+c                                                   | Copy the currently visible trainruns. The copied content remains in the browser's memory/cache and can be pasted into different variants (even after closing the browser, the data remains saved). |
|                                                   ctrl+v                                                   |                                                                                    Paste the copied trainruns.                                                                                     |
|                                                   ctrl+a                                                   |                                                                                            Select all.                                                                                             |

### Duplicate

To duplicate one or many elements - use *shift + left mouse button pressed* to select several
elements and press (ctrl+d).

If more than one node is selected, all train sections that are
connected to two selected nodes are also duplicated. If further notes are selected, the notes are
duplicated in the same way as the nodes.

> If in the menu the *Knoten-Positionierungswerkzeug* is activated, you can *multi-select* nodes and
> notes by clicking. If you use shift + right mouse press

#### Duplicate trainrun

To duplicate a train in the project, follow these steps:

- Select the train: Use the left mouse click to select the train that you want to duplicate.
- Duplicate the train: Once the train is selected, press (ctrl+d) on your keyboard to duplicate
  it. This action will create an identical copy of the selected train.

  > There are alternative editing path to process duplication: Use the copy-past idea: Select the
  train und press (ctrl+c) then (ctrl+v)

- Edit the train name: Click on the train name with the left mouse button, and a dialog window will
  open, allowing you to edit the train's details. Make the necessary changes to the train name or
  any other relevant information.

![''](./animated_images/compressed/2024-1-25-Duplicate_Trainrun_ctr_d.gif)


> **Optional:** Edit the train in the [Perlenkette](#Perlenkette)

#### Duplicate nodes

To duplicate a node, ensure there is no trainrun selected. Move with the mouse pointer over the node
to duplicate and press (ctrl+d).

#### Duplicate notes

To duplicate a note, ensure there is no trainrun selected. Move with the mouse pointer over the note
to duplicate and press (ctrl+d).

### Delete

To delete one or many elements - use *shift + left mouse button pressed* to select several elements
and press 'delete'.

#### Delete trainrun

To delete a train in the project, follow these steps:

- Select the train: Use the left mouse click to select the train that you want to delete.
- Delete the train: Once the train is selected, press 'delete' on your keyboard to delete
  it. This action will create an identical copy of the selected train.

  > There are alternative editing path to process duplication: Use the copy-past idea: Select
  the train und press (ctrl+c) then (ctrl+v).

#### Delete nodes

To delete a node, ensure there is no trainrun selected. Move with the mouse pointer over the node
to delete and press 'delete'. Deleting a node causes all train sections connected to the node to be
deleted to be deleted.

#### Delete notes

To delete a note, ensure there is no trainrun selected. Move with the mouse pointer over the note
to delete and press 'delete'.


<!--- 

### Copy all visible elements

![''](./animated_images/compressed/2024-1-25-SelectAll_ctrl-a-and-copy-ctrl-c.gif)

### Insert copied elements

![''](./animated_images/compressed/2024-1-25-CtrlV-Insert_copied.gif)

### Delete all visible elements

![''](./animated_images/compressed/2024-1-25-SelectAll-ctrl_a-delete.gif)
--->

---
<a id="Nodes"></a>

## Nodes

For mor details have a look into [create and modifiy nodes](CREATE_NODES.md).

<a id="Trains"></a>

## Trainruns

For mor details have a look into [create and modifiy trainrun](CREATE_TRAINRUN.md).

---
<a id="Connections"></a>

## Connections

![Editing_Connections](./images/Editing_Connections.png)

For mor details have a look into [create and modifiy connections](CREATE_CONNECTIONS.md).


---
<a id="Filter"></a>

## Filters

For mor details have a look into [create and modifiy filters](CREATE_FILTERS.md).

---
<a id="Streckengrafik"></a>

## Graphic timetable (Streckengrafik)

![Overview_Streckengrafik_Screenshot_001](./images/Overview_Streckengrafik_Screenshot_001.PNG)

For mor details have a look into [graphic timetable](Graphic_Timetable.md).


---
<a id="Perlenkette"></a>

## Perlenkette

The Perlenkette allows you to view and edit the entire trainrun from a vertical perspective. It is
displayed on the right-hand side.
In the upper part of the Perlenkette, the train information is displayed.
It can also be expanded to get more information. It also allows to edit the train name, category or
frequency.

Between the title and the train route display, there is a sorted list of all the passed nodes.
These nodes are displayed as buttons, which enable quick synchronization with the Netzgrafik.
If you click on a node button, the viewpoint (center) will automatically be readjusted.
Similarly, clicking on a train section will center that section in the Netzgrafik, allowing for easy
navigation and visualization.

### Show Perlenkette

To access it, select a train first. Then, by clicking on the train again, the Perlenkette will open
on the right side,
displaying the train's route as a vertical chain of nodes and trainrunsections.

![''](./animated_images/compressed/2024-1-25_DeleteConnections-Perlenkette-Show_Connections.gif)




---
<a id="Conclusion"></a>

## Conclusion

By following the instructions in this document, users can effectively create and facilitate the
creation of comprehensive and visually appealing network representations.


---
<a id="Links"></a>

## Links

- [DATA MODEL](DATA_MODEL.md)