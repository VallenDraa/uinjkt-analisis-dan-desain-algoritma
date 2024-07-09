interface Edge {
	source: number;
	destination: number;
	weight: number;
}

function makeSet(
	parent: number[],
	rank: number[],
	numberOfNodes: number,
): void {
	for (let i = 0; i < numberOfNodes; i++) {
		parent[i] = i;
		rank[i] = 0;
	}
}

function findParent(parent: number[], node: number): number {
	if (parent[node] === node) {
		return node;
	}
	return (parent[node] = findParent(parent, parent[node]));
}

function unionSet(
	node1: number,
	node2: number,
	parent: number[],
	rank: number[],
): void {
	node1 = findParent(parent, node1);
	node2 = findParent(parent, node2);

	if (rank[node1] < rank[node2]) {
		parent[node1] = node2;
	} else if (rank[node1] > rank[node2]) {
		parent[node2] = node1;
	} else {
		parent[node2] = node1;
		rank[node1]++;
	}
}

function kruskalAlgo(numberOfNodes: number, edges: Edge[]): void {
	// Sort the edges array in ascending order by weight
	edges.sort((a, b) => a.weight - b.weight);

	const parent: number[] = new Array(numberOfNodes);
	const rank: number[] = new Array(numberOfNodes);

	makeSet(parent, rank, numberOfNodes);

	let minimumCost = 0;

	console.log('Following are the edges in the constructed MST:');
	for (let i = 0; i < edges.length; i++) {
		const sourceParent = findParent(parent, edges[i].source);
		const destinationParent = findParent(parent, edges[i].destination);
		const edgeWeight = edges[i].weight;

		if (sourceParent !== destinationParent) {
			unionSet(sourceParent, destinationParent, parent, rank);
			minimumCost += edgeWeight;
			console.log(
				`${edges[i].source} -- ${edges[i].destination} == ${edgeWeight}`,
			);
		}
	}

	console.log('Minimum Cost Spanning Tree:', minimumCost);
}

const edges: Edge[] = [
	{ source: 3, destination: 0, weight: 15 },
	{ source: 3, destination: 4, weight: 11 },
	{ source: 4, destination: 2, weight: 5 },
	{ source: 4, destination: 5, weight: 21 },
	{ source: 2, destination: 5, weight: 12 },
	{ source: 1, destination: 4, weight: 13 },
	{ source: 1, destination: 0, weight: 10 },
	{ source: 2, destination: 0, weight: 20 },
];

kruskalAlgo(6, edges);
