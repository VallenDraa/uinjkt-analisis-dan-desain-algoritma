class Edge {
	constructor(public src: number, public dest: number, public weight: number) {}
}

class Graph {
	V: number;
	E: number;
	edge: Edge[];

	constructor(V: number, E: number) {
		this.V = V;
		this.E = E;
		this.edge = [];
	}
}

function createGraph(V: number, E: number): Graph {
	const graph = new Graph(V, E);
	for (let i = 0; i < E; i++) {
		graph.edge[i] = new Edge(0, 0, 0);
	}
	return graph;
}

function printArr(dist: number[], V: number): void {
	console.log('Vertex \t\t Distance from Source');
	for (let i = 0; i < V; i++) {
		console.log(`${i} \t\t ${dist[i].toFixed(2)}`);
	}
}

function BellmanFord(graph: Graph, src: number): void {
	const V = graph.V;
	const E = graph.E;
	const dist: number[] = new Array(V).fill(Number.MAX_SAFE_INTEGER);
	dist[src] = 0;

	for (let i = 1; i <= V - 1; i++) {
		for (let j = 0; j < E; j++) {
			const u = graph.edge[j].src;
			const v = graph.edge[j].dest;
			const weight = graph.edge[j].weight;
			if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
				dist[v] = dist[u] + weight;
			}
		}
	}

	for (let i = 0; i < E; i++) {
		const u = graph.edge[i].src;
		const v = graph.edge[i].dest;
		const weight = graph.edge[i].weight;
		if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
			console.log('Graph contains negative weight cycle');
			return;
		}
	}

	printArr(dist, V);
}

const V = 10; // Number of vertices in graph
const E = 10; // Number of edges in graph
const graph = createGraph(V, E);

graph.edge[0] = new Edge(0, 1, 1.4);
graph.edge[1] = new Edge(0, 6, 1.5);
graph.edge[2] = new Edge(1, 2, 0.2);
graph.edge[3] = new Edge(2, 3, 0.5);
graph.edge[4] = new Edge(3, 4, 0.6);
graph.edge[5] = new Edge(6, 7, 3.4);
graph.edge[6] = new Edge(7, 8, 1.1);
graph.edge[7] = new Edge(8, 5, 2);
graph.edge[8] = new Edge(5, 9, 1.5);
graph.edge[9] = new Edge(4, 5, 2.3);

BellmanFord(graph, 0); // Run Bellman-Ford algorithm from vertex 0 (A)
