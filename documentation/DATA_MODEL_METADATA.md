## Netzgrafik-Editor data export/import (JSON) 
The complete data export can be used for data exchange between different network graphics/variants, merging network graphics, or for user-specific customization, 
including metadata such as colors and train categories, among others.

By exporting or importing data in JSON format, information can be efficiently and flexibly exchanged or connected between 
different systems or applications. JSON format is a widely used format for exchanging structured data and allows for easy 
integration and processing of information in third-party applications. Additionally, it provides a readable and easily 
understandable representation of data, which facilitates manual editing.

## JSON Description (structures)

```json
{
  "nodes": [],
  "trainrunsections": [],
  "trainruns": [],
  "resources": [],
  "metadata": {},
  "freeFloatingTexts": [],
  "labels": [],
  "labelGroups": [],
  "filterData": {}
}
```

- **nodes**: Represents the nodes in the Netzgrafik.
- **trainrunsections**: Contains the sections of trainruns.
- **trainruns**: Represents the trainruns in the Netzgrafik.
- **resources**: Contains an abstraction for resources related to the Netzgrafik (between nodes - edges) *not yet implemented*.
- **metadata**: Stores metadata information such as colors, train categories, etc.
- **freeFloatingTexts**: Contains any freely placed texts in the Netzgrafik, notes.
- **labels**: Represents labels associated with nodes or trainruns.
- **labelGroups**: Groups labels together for easier management and to classify the labels into trainrun labels, node labels and note labes,.
- **filterData**: Contains data related to filtering the Netzgrafik.

This is a basic structure to represent the various elements in a JSON description. You can populate each element with the specific data relevant to your scenario.

### META Data

```json
{
  "metadata": {
    "netzgrafikColors": [],
    "trainrunCategories": [],
    "trainrunFrequencies": [],
    "trainrunTimeCategories": []
  }
}
```

- **netzgrafikColors**: Represents the user defined colors which can be used in the Netzgrafik.
- **trainrunCategories**: Contains the categories of train runs.
- **trainrunFrequencies**: Represents the frequencies at which trainruns operates.
- **trainrunTimeCategories**: Contains the time categories for trainruns, such as all weekdays, only weekend and so on.

#### netzgrafikColors

#### trainrunCategories
