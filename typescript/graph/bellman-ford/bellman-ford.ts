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

const graph = createGraph(10, 11);

// Define edges (source, destination, weight)
graph.edge[0] = new Edge(0, 2, 1.4); // A->C
graph.edge[1] = new Edge(0, 7, 1.5); // A->H
graph.edge[2] = new Edge(2, 3, 0.2); // C->D
graph.edge[3] = new Edge(7, 8, 3.4); // H->I
graph.edge[4] = new Edge(3, 4, 0.5); // D->E
graph.edge[5] = new Edge(8, 9, 1.1); // I->J
graph.edge[6] = new Edge(4, 5, 0.6); // E->F
graph.edge[7] = new Edge(4, 9, 1.7); // E->J
graph.edge[8] = new Edge(5, 6, 2.3); // F->G
graph.edge[9] = new Edge(9, 6, 2.3); // J->G
graph.edge[10] = new Edge(6, 1, 1.5); // G->B

BellmanFord(graph, 0);
