## Data model

The data model consists of the following key elements: **Trainrun**, **TrainrunSection**,
**Transition**, **Pin** and **Node**.

- TrainrunSection corresponds to the edges between nodes in an undirected graph.
- Nodes represent the points in the graph, allowing the connection of TrainrunSections.
- A Pin represents a point in the graph where a TrainrunSection is connected to a Node.
- The Transition extends the graph within the Node. A Transition corresponds to an edge that
  connects two Pins within the Node, thereby
  connecting two TrainrunSections.

Together, these elements form an undirected graph consisting of edges (TrainrunSections,
Transitions) and nodes (Pins).

The last key element is the Trainrun. The Trainrun consists of an ordered sequence of
TrainrunSections and Transitions. This ordered sequence defines the route of the Trainrun and
establishes a direction in the undirected graph. This direction corresponds to the exact path of the
train.

This model enables the representation and analysis of complex relationships.

![Data model](./images/DataMoel_Sketch_KeyElement_001.jpg)



