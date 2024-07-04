import promptSync from 'prompt-sync';
// const prompt = promptSync();

// A utility function to find the
// vertex with minimum distance
// value, from the set of vertices
// not yet included in shortest
// path tree
function minDistance(dist: number[], sptSet: boolean[]): number {
	const verticesLen = dist.length;

	// Initialize min value
	let min = Infinity;
	let min_index = -1;

	for (let v = 0; v < verticesLen; v++) {
		if (sptSet[v] === false && dist[v] <= min) {
			min = dist[v];
			min_index = v;
		}
	}

	return min_index;
}

// A utility function to print
// the constructed distance array
function printSolution(
	dist: number[],
	src: number,
	dest: number,
	prev: number[],
): void {
	const verticesLen = dist.length;

	console.log(`Source Vertex: ${src}`);
	console.log('Vertex \t\t Distance from Source \t Previous Vertex');
	for (let i = 0; i < verticesLen; i++) {
		const previousVertex = prev[i] === -1 ? 'None' : prev[i];
		console.log(`${i} \t\t ${dist[i]} \t\t\t ${previousVertex}`);
	}

	console.log(`\nShortest path from ${src} to ${dest}: ${dist[dest]}`);
}

// Function that implements Dijkstra's
// single source shortest path algorithm
// for a graph represented using adjacency
// matrix representation
function dijkstra(graph: number[][], src: number, dest: number): void {
	const verticesLen = graph.length;

	let dist = new Array(verticesLen).fill(Infinity);
	let sptSet = new Array(verticesLen).fill(false);
	let prev = new Array(verticesLen).fill(-1);

	// Distance of source vertex
	// from itself is always 0
	dist[src] = 0;

	// Find shortest path for all vertices
	for (let count = 0; count < verticesLen - 1; count++) {
		// Pick the minimum distance vertex
		// from the set of vertices not yet
		// processed. u is always equal to
		// src in first iteration.
		let u = minDistance(dist, sptSet);

		// Mark the picked vertex as processed
		sptSet[u] = true;

		// Update dist value of the adjacent
		// vertices of the picked vertex.
		for (let v = 0; v < verticesLen; v++) {
			// Update dist[v] only if is not in
			// sptSet, there is an edge from u
			// to v, and total weight of path
			// from src to v through u is smaller
			// than current value of dist[v]
			if (
				!sptSet[v] &&
				graph[u][v] !== 0 &&
				dist[u] !== Infinity &&
				dist[u] + graph[u][v] < dist[v]
			) {
				dist[v] = dist[u] + graph[u][v];
				prev[v] = u; // Set the previous vertex for vertex v
			}
		}
	}

	// Print the constructed distance array
	printSolution(dist, src, dest, prev);
}

// Driver code
const graph: number[][] = [
	[0, 3.9, Infinity, Infinity, Infinity, 4.3],
	[3.9, 0, 1.7, Infinity, Infinity, 3],
	[Infinity, 1.7, 0, 1.4, Infinity, Infinity],
	[Infinity, Infinity, 1.4, 0, 1.2, 4],
	[Infinity, Infinity, Infinity, 1.2, 0, 4],
	[4.3, 3, Infinity, 4, 4, 0],
];

dijkstra(graph, 0, 4);
