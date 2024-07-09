interface Edge {
	source: number;
	destination: number;
	weight: number;
}

function primAlgo(numberOfNodes: number, edges: Edge[]): void {
	// Create an adjacency list from the edges
	const adjList: Map<number, { node: number; weight: number }[]> = new Map();
	for (let i = 0; i < numberOfNodes; i++) {
		adjList.set(i, []);
	}
	edges.forEach(edge => {
		adjList
			.get(edge.source)
			?.push({ node: edge.destination, weight: edge.weight });
		adjList
			.get(edge.destination)
			?.push({ node: edge.source, weight: edge.weight });
	});

	// To keep track of vertices included in MST
	const inMST: boolean[] = new Array(numberOfNodes).fill(false);

	// Array to store constructed MST
	const parent: number[] = new Array(numberOfNodes).fill(-1);

	// Key values used to pick minimum weight edge in cut
	const key: number[] = new Array(numberOfNodes).fill(Infinity);
	key[0] = 0; // Make key 0 so that this vertex is picked as first vertex

	// Priority queue to pick the minimum weight edge at every step
	const pq: { key: number; node: number }[] = [];
	pq.push({ key: 0, node: 0 });

	let minimumCost = 0;

	while (pq.length > 0) {
		// Extract the vertex with minimum key value
		pq.sort((a, b) => a.key - b.key); // Min-Heap like behavior
		const { key: currentKey, node: u } = pq.shift()!;

		if (inMST[u]) continue;
		inMST[u] = true;
		minimumCost += currentKey;

		// Iterate through all the adjacent vertices of the dequeued vertex u
		for (const neighbor of adjList.get(u)!) {
			const { node: v, weight } = neighbor;
			if (!inMST[v] && key[v] > weight) {
				key[v] = weight;
				pq.push({ key: weight, node: v });
				parent[v] = u;
			}
		}
	}

	// Print the constructed MST
	console.log('Following are the edges in the constructed MST:');
	for (let i = 1; i < numberOfNodes; i++) {
		if (parent[i] !== -1) {
			console.log(`${parent[i]} -- ${i} == ${key[i]}`);
		}
	}
	console.log('Minimum Cost Spanning Tree:', minimumCost);
}

// Adjusted edges based on the image provided
const edges: Edge[] = [
	{ source: 0, destination: 1, weight: 10 }, // a-b
	{ source: 0, destination: 3, weight: 15 }, // a-d
	{ source: 0, destination: 2, weight: 20 }, // a-c
	{ source: 1, destination: 4, weight: 13 }, // b-e
	{ source: 2, destination: 4, weight: 5 }, // c-e
	{ source: 2, destination: 5, weight: 12 }, // c-f
	{ source: 3, destination: 4, weight: 11 }, // d-e
	{ source: 3, destination: 5, weight: 16 }, // d-f
	{ source: 4, destination: 5, weight: 21 }, // e-f
];

primAlgo(6, edges);
