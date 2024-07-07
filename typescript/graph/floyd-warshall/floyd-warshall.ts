class FloydWarshall {
	V: number;

	constructor() {
		this.V = 4;
	}

	execute(graph: number[][]): void {
		const dist: number[][] = Array.from(Array(this.V), () =>
			new Array(this.V).fill(0),
		);
		let i: number, j: number, k: number;

		// Initialize the solution matrix same as input graph matrix
		for (i = 0; i < this.V; i++) {
			for (j = 0; j < this.V; j++) {
				dist[i][j] = graph[i][j];
			}
		}

		// Add all vertices one by one to the set of intermediate vertices
		for (k = 0; k < this.V; k++) {
			// Pick all vertices as source one by one
			for (i = 0; i < this.V; i++) {
				// Pick all vertices as destination for the above picked source
				for (j = 0; j < this.V; j++) {
					// If vertex k is on the shortest path from i to j, then update the value of dist[i][j]
					if (dist[i][k] + dist[k][j] < dist[i][j]) {
						dist[i][j] = dist[i][k] + dist[k][j];
					}
				}
			}
		}

		// Print the shortest distance matrix
		this.printSolution(dist);
	}

	printSolution(dist: number[][]): void {
		console.log('Shortest distances between every pair of vertices');
		for (let i = 0; i < this.V; ++i) {
			let row = '';
			for (let j = 0; j < this.V; ++j) {
				if (dist[i][j] === Infinity) {
					row += 'INF\t';
				} else {
					row += dist[i][j].toFixed(2) + '\t';
				}
			}
			console.log(row);
		}
	}
}

const graph: number[][] = [
	[0, 7.5, 3.8, 4.2],
	[Infinity, 0, Infinity, 3.4],
	[Infinity, 4.8, 0, Infinity],
	[Infinity, Infinity, 1.9, 0],
];

new FloydWarshall().execute(graph);
