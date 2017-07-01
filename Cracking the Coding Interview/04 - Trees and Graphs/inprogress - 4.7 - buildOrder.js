// You are given a list of projects and a list of dependenies (which is a list of pairs of projects, where the second project 
// is dependent on the first project). All of a projects's dependencies must be built before the project is. Find a build 
// order that will allow the projects to be built. If there is no valid buid order, return an error.

let { Node } = require('./4.0 - TreesAndGraphs.js');

let buildOrder = (graph) => {

}


/* Hints: 
- Build a directed graph representing the dependencies. Each node is a project and an edge exists from A to B if 
B depends on A (A must be built before B). You can also build it the other way if it's easier for you.
- Look at this graph. Is there any node you can identify that will definitely be ok to build first?
- If you identify a node witout any incoming edges, then if can definiely be built. Find this node 
(there could be multiple) and add it to the build order. Then, what does this mean for it's outgoing edges?
- Once you decide to build a node, its outgoing edge can be deleted. After you've done this, can you find 
another node that are free and clear to build?
- As a totally different approach: consider doing a depth first search starting from an arbitrary node. What is the 
relationship between this depth first search and a valid build order?
- Pick an arbitrary node and do a depth first serach on it. Once we get to the end of a path, we know that this node 
can be the last one built, since no nodes depend on it. What does this mean about the nodes right before it?
- Topological sort - it is reasonable for your interviewer to expect you to reason this out

*/

