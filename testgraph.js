
load("Graph.js");
g = new Graph(10);
g.addEdge(1,3);
g.addEdge(2,3);
g.addEdge(2,5);
g.addEdge(2,6);
g.addEdge(3,4);
g.addEdge(4,7);
g.addEdge(5,8);
g.addEdge(6,10);
g.addEdge(7,10);
g.addEdge(8,9);
g.addEdge(9,10);
g.addEdge(2,4);


g.showGraph();
print('Test');
var vertex = 10;
var source = 2;
var paths = g.pathTo(source,vertex);
g.showPath(paths);

