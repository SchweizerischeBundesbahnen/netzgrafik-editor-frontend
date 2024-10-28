# Trainrun iterator 

## Sample code 

https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/pull/325

Iterator pattern for iterating through all trainrun parts seperatly
 
```typescript
getForwardTrainrunPartIterator(trainrunSection : TrainrunSection) {
      // find both start nodes ( N1 - N2 - N3 - N4 ) => N1 , N2
      const bothEndNodes =
        this.trainrunService.getBothEndNodesFromTrainrunPart(trainrunSection);
        
      // get start / end node from Top/Left -> Botton / Right 
      const startForwardNode = GeneralViewFunctions.getLeftOrTopNode(
        bothEndNodes.endNode1,
        bothEndNodes.endNode2,
      );
     
      // get start trainrun section -> forward direction/orientation 
      const startTrainrunSection = startForwardNode.getStartTrainrunSection(
        trainrun.getId(),
      );

      // create forward iterator
      const iterator: TrainrunIterator = this.trainrunService.getIterator(
        startForwardNode,
        startTrainrunSection,
      );
  return iterator;
}


simpleTrainrunAllPartsIterator(trainrun: Trainrun) {
    let alltrainrunsections =
      this.trainrunSectionService
        .getAllTrainrunSectionsForTrainrun(trainrun.getId());

    while (alltrainrunsections.length > 0) {
      // traverse over all trainrun parts
       const iterator= getForwardTrainrunPartIterator(alltrainrunsections[0]);

      while (iterator.hasNext()) {
        // move iterator forward
        const currentTrainrunSectionNodePair = iterator.next();

        // get data 
        const trainrunSection = currentTrainrunSectionNodePair.trainrunSection;
        const node = currentTrainrunSectionNodePair.node;

      ...
        user
        defined
        data
        processing
      ...

        // filter all still visited trainrun sections
        alltrainrunsections = alltrainrunsections.filter(ts =>
          ts.getId() !== trainrunSection.getId()
        );
      }


    }
  }
```
