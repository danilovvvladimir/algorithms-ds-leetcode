namespace NSGraph {
  class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
      this.adjacencyList = new Map();
    }

    addNode(node: string) {
      if (!this.adjacencyList.has(node)) {
        this.adjacencyList.set(node, []);
      }
    }

    addEdge(fromNode: string, toNode: string) {
      if (
        !this.adjacencyList.has(fromNode) ||
        !this.adjacencyList.has(toNode)
      ) {
        throw new Error("Both nodes should exist in the graph.");
      }

      this.adjacencyList.get(fromNode)?.push(toNode);
    }

    getNeighbors(node: string): string[] | undefined {
      return this.adjacencyList.get(node);
    }

    getAll() {
      return this.adjacencyList;
    }

    printAdjacencyList() {
      for (const [node, neighbors] of this.adjacencyList) {
        console.log(`${node} -> ${neighbors.join(", ")}`);
      }
    }

    printDFS(sourceNodeValue: string) {
      const stack = [sourceNodeValue];

      while (stack.length > 0) {
        const current = stack.pop()!;
        console.log(current);

        const neighbors = this.getNeighbors(current);
        if (neighbors) {
          for (let i = 0; i < neighbors.length; i++) {
            stack.push(neighbors[i]);
          }
        }
      }
    }

    printBFS(sourceNodeValue: string) {
      const queue = [sourceNodeValue];

      while (queue.length > 0) {
        const current = queue.shift()!;
        console.log(current);

        const neighbors = this.getNeighbors(current);

        if (neighbors) {
          for (let i = 0; i < neighbors.length; i++) {
            queue.push(neighbors[i]);
          }
        }
      }
    }

    hasPath(sourceNodeValue: string, destinationNodeValue: string): boolean {
      if (sourceNodeValue === destinationNodeValue) return true;

      const neighbors = this.getNeighbors(sourceNodeValue);

      if (neighbors) {
        for (let i = 0; i < neighbors.length; i++) {
          if (this.hasPath(neighbors[i], destinationNodeValue)) {
            return true;
          }
        }
      }

      return false;
    }
  }

  const myGraph = new Graph();
  myGraph.addNode("A");
  myGraph.addNode("B");
  myGraph.addNode("C");
  myGraph.addNode("D");
  myGraph.addNode("E");
  myGraph.addNode("F");

  myGraph.addEdge("A", "C");
  myGraph.addEdge("A", "B");
  myGraph.addEdge("C", "F");
  myGraph.addEdge("D", "E");
  myGraph.addEdge("B", "D");

  console.log(myGraph.getAll());
  // myGraph.printDFS("A");
  // myGraph.printBFS("A");
  console.log(myGraph.hasPath("B", "D"));
}
