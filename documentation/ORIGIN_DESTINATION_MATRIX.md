## Origin Destination Matrix

The Origin Destination Matrix shows the optimized travel time (total cost) between each pair of nodes.

The optimized travel time includes a fixed penalty (5 minutes) for each connection, but the Origin Destination Matrix also shows the corresponding effective travel time and number of connections.

### Filtering

If some nodes are selected, then the Origin Destination Matrix will only show results between these nodes (but other nodes may be used to compute paths).

The Origin Destination Matrix will only show results between visible nodes (but other nodes may be used to compute paths).

The Origin Destination Matrix will only use visible trainruns to compute paths.

### Caveats

Split trainruns are not supported at the moment: https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/285.
As a simplification, we currently consider trains run at their frequency for a fixed schedule duration (10 hours).
