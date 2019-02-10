/**
 *
 * breadth-first search BFS 广度优先搜索
 *
 * O(V+E) V: 顶点数, E: 边数
 *
 * 解决最短路劲问题
 *
 * 从出发点开始。 遍历， ， 利用 队列
 *
 */

class Graph {
  constructor() {
    this.neighbors = {};
  }
  addEdge(u, v) {
    if (this.neighbors[u] === undefined) {
      this.neighbors[u] = [];
    }
    this.neighbors[u].push(v);
    if (this.neighbors[v] === undefined) {
      this.neighbors[v] = [];
    }
    this.neighbors[v].push(u);
  }
}

function bfs(graph, source) {
  let queue = [{ vertex: source, count: 0 }];
  let visited = { source: true };
  let tail = 0;

  while (tail < queue.length) {
    let u = queue[tail].vertex;
    let count = queue[tail].count;
    console.log(`distance from ${source} to ${u} : ${count}`);
    graph.neighbors[u].forEach(function(v) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push({ vertex: v, count: count + 1 });
      }
    });
    tail++;
  }
}

function shortestPath(graph, source, target) {
  if (source === target) {
    console.log(source);
  } else {
    let queue = [source],
      visited = { source: true },
      predecessor = {},
      tail = 0;

    while (tail < queue.length) {
      let u = queue[tail++];
      neighbors = graph.neighbors[u];
      for (let i = 0; i < neighbors.length; i++) {
        let v = neighbors[i];
        if (visited[v]) {
          continue;
        }
        visited[v] = true;
        if (v === target) {
          let path = [v];
          while (u !== source) {
            path.push(u);
            u = predecessor[u];
          }
          path.push(u);
          path.reverse();
          console.log(path.join(" -> "));
          return;
        }
        predecessor[v] = u;
        queue.push(v);
      }
    }
    console.log(`there is no way from ${source} to ${target} \n`);
  }
}

// ------------------
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "E");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("C", "G");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

bfs(graph, "A");

shortestPath(graph, "B", "G");

shortestPath(graph, "G", "A");
