### Split / Combine two trainruns 

#### Split two trainruns 

To split a train into two separate ones, you first have to select the train. Then you navigate to the node where you like to split the trainrun. Inside the node
the trainrun has to have a transition. Press **CTRL key** and click with the mouse the "stop / non-stop toggle button". The trainrun gets split into two trains.

[chrome-capture-2024-3-27.webm](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/assets/10423646/8acabf0e-fdb1-445b-af40-1ec4b6875c0c)


#### Combine two trainruns 

To combine two trainruns, you have to select one of the two trains. Then you have to navigate to the node where the trainrun ends (or starts). Now you can draw
the new transition similar to creating a connection - but you have to press **CTRL key** and it must be hold pressed as long you are drawing a new transition. 
Once you finish drawing the new transition, both trains will be combined to one single trainrun.
Please have as well a look into [Create Connections](CREATE_CONNECTIONS.md). 

[chrome-capture-2024-3-27 (1).webm](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/assets/10423646/526408d6-0d22-4cf7-ada7-9f45442aab8e)


### Merge two independent Netzgrafik

To merge two Netzgrafik, you can use the split/combine technique. For example, if you have a Netzgrafik for the eastern part of Switzerland and one for the western part, you can merge the western into the eastern part by using copy-paste and trainrun combine techniques. First, copy the western part (all trains that need to be integrated into the eastern part). Then, insert the copied trainruns and nodes into the eastern part. After inserting, the resulting Netzgrafik will have all trainruns included, but the eastern and western parts of the trainruns are not yet combined. The eastern and western trainrun parts are still independent trainruns. Now, use the combine method to connect the trainruns. Once all trainruns are combined, the resulting Netzgrafik will be the merged one.

To merge two independent Netzgrafik, you can follow these steps:

- Identify the two Netzgrafik that you want to merge.
- Determine the trains and nodes that you want to combine.
- (Optional) Create a new variant.
- Copy the necessary elements from one Netzgrafik and paste them into the other Netzgrafik.
- As long as complete trainruns are copied, i.e. including all trainrun sections from start to destination, there is no need to merge trainruns. If the Netzgrafiks to be merged consists of regions (or partial corridors) 
  or just trainrun sections that actually represent partial trainrun, these must be merged manually using the Combine function at the nodes where the parts of the trainrun meet.
 
By following these steps, you can successfully merge two independent Netzgrafik.

[Merge_East_West_Trainruns.webm](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/assets/10423646/74277415-b522-4dc3-b2da-2f93e7fb5411)


