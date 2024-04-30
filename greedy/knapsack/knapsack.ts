class Item {
	constructor(public weight: number, public profit: number) {}
}

function getKnapSack(capacity: number, items: Item[]): number {
	// Create array
	const arr = new Array(items.length + 1);

	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(capacity + 1).fill(0);
	}

	// choose all weights from 0 to maximum capacity
	for (let i = 1; i <= items.length; i++) {
		for (let j = 0; j <= capacity; j++) {
			console.log(`j: ${j}, ${items[i - 1].weight} ${items[i - 1].weight > j}`);

			// Don't pick i-th element if j-weights[i-1] is negative
			if (items[i - 1].weight > j) {
				arr[i][j] = arr[i - 1][j];
			}

			// Store the max value that we get by picking or leaving the i-th item
			else {
				arr[i][j] = Math.max(
					arr[i - 1][j],
					arr[i - 1][j - items[i - 1].weight] + items[i - 1].profit,
				);
			}
		}
	}

	// Return maximum value
	return arr[items.length][capacity];
}

console.time('getKnapSack');
const items: Item[] = [
	new Item(1, 60),
	new Item(2, 100),
	new Item(5, 120),
	new Item(4, 200),
];
const capacity: number = 6;

const result = getKnapSack(capacity, items);
console.timeEnd('getKnapSack');

console.log(result);
