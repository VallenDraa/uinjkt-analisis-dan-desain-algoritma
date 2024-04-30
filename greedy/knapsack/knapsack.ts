class Item {
	constructor(public weight: number, public profit: number) {}
}

function getKnapSack(capacity: number, items: Item[]): number {
	const arr = new Array(items.length + 1);

	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(capacity + 1).fill(0);
	}

	for (let i = 1; i <= items.length; i++) {
		for (let j = 0; j <= capacity; j++) {
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

console.time('getKnapSack1');
const result1 = getKnapSack(10, [
	new Item(5, 36),
	new Item(2, 16),
	new Item(3, 21),
	new Item(6, 57),
	new Item(4, 28),
	new Item(3, 24),
	new Item(2, 13),
]);
console.timeEnd('getKnapSack1');

console.time('getKnapSack2');
const result2 = getKnapSack(9, [
	new Item(5, 32),
	new Item(2, 59),
	new Item(3, 30),
	new Item(2, 17),
	new Item(6, 81),
	new Item(2, 16),
	new Item(4, 39),
	new Item(3, 25),
]);
console.timeEnd('getKnapSack2');

console.log(result1);
console.log(result2);
