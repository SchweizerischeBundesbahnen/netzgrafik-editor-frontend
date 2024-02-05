## Data model

The data model consists of the following key elements: *trainrun*, *trainrun section*,
*transition*, *trainrun connection*, *port* and *node*.

![Data model](./images/DataMoel_Sketch_KeyElement_001.jpg)

### Business orientated description

The nodes in the data model represent the specific locations, such as stations or stops, where a
trainrun can have different actions or events associated with it. These nodes serve as key points in
the trainrun's route, determining where it stops, passes through, or starts and ends.

On the other hand, the trainrun section represents a specific segment or portion of a trainrun that
connects two nodes. It encapsulates all the relevant information related to that particular section,
including temporal details like departure and arrival times. Additionally, it also stores the travel
time, which indicates the duration it takes for the trainrun to move from one node to another.

The trainrun connection signifies the point in the logistic network where two trains need to
coordinated to ensure a smooth connection between them.

In addition, a train journey has references to behaviour-related abstractions such as
category, frequency and time category, which define the behaviour of a train journey.

- ***Category*** specifies the type of train journey, e.g. a regional train, an intercity train or a
  goods train.
- ***Frequency*** defines the frequency with which the train journey is carried out, e.g. 1/4h, 1/2h
  or every hour.
- ***TimeCategory*** defines the time categorisation of the train journey, e.g. peak times or
  off-peak times or occasional.

By combining the nodes and trainrun sections in this data model, we can create a representation of
the trainrun network, mapping out the connections and relationships between the different stations
and the time it takes to traverse between them. This enables us to analyze and visualize complex
trainrun routes and schedules.

### Technically orientated description

Thus, the data model, consisting of TrainrunSection and nodes, forms a network of edges and nodes,
similar to an undirected graph. The TrainrunSections represent the connections between the nodes and
enable the representation and analysis of complex relationships in the model.

- ***TrainrunSection*** corresponds to the edges between nodes in an undirected graph.
- ***Nodes*** represent the points in the graph, allowing the connection of trainrun section .
- A *pin* represents a ***port*** (point) in the graph where a trainrun section is connected to a
  Node.
- The ***transition*** extends the graph within the node. A transition corresponds to an edge that
  connects two pins within the Node, thereby connecting two trainrun section.
- If two trainruns should make a connection at a station, this can be defined using a
  ***connection***. The trainrun connection links two pins, each have to be associated with a
  different train.

Together, these elements form an undirected graph consisting of edges (TrainrunSections,
Transitions) and nodes (Ports).

The last key element is the ***trainrun***. The trainrun consists of an ordered sequence of
trainrun sections and transitions. This ordered sequence defines the route of the Trainrun and
establishes a direction in the undirected graph. This direction corresponds to the exact path of the
train.

```mermaid
classDiagram
    Node *-- Port
    Node *-- Transition
    Node *-- Connection
    
    Trainrun *-- TrainrunSection
    TrainrunSection --* Port
    
    Transition -- Port
    Connection -- Port 

    class Node {
           betriebspunktName : string
           fullName : string
           ...
           ports: Port[]
           transitions: Transition[]
           connections: Connection[]
    }

    class Trainrun {
            name : string
           ...
            trainrunCategory: TrainrunCategory
            trainrunFrequency: TrainrunFrequency
            trainrunTimeCategory: TrainrunTimeCategory
    }

    class TrainrunSection {
           ...
           trainrun : Trainrun
           sourceNode : Node
           targetNode : Node
    }

    class Port {
           ... 
           trainrunSection : TrainrunSection
    }

    class Transition {
        ...
        port1 : Port
        port2 : Port
    }

    class Connection {
        ...
        port1 : Port
        port2 : Port
    }
```


