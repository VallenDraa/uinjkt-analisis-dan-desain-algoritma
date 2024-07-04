const INF = 99999;

class AllPairShortestPath {
	V: number;

	constructor() {
		this.V = 4;
	}

	floydWarshall(graph: number[][]): void {
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
		console.log(
			'Following matrix shows the shortest distances between every pair of vertices',
		);
		for (let i = 0; i < this.V; ++i) {
			let row = '';
			for (let j = 0; j < this.V; ++j) {
				if (dist[i][j] === INF) {
					row += 'INF\t';
				} else {
					row += dist[i][j] + '\t';
				}
			}
			console.log(row);
		}
	}
}

// Driver code
/* Let us create the following weighted graph
      10
  (0)------->(3)
  |         /|\
  5 |         |
  |         | 1
  \|/         |
  (1)------->(2)
      3             */
const graph: number[][] = [
	[0, 5, INF, 10],
	[INF, 0, 3, INF],
	[INF, INF, 0, 1],
	[INF, INF, INF, 0],
];

const a = new AllPairShortestPath();

// Print the solution
a.floydWarshall(graph);
