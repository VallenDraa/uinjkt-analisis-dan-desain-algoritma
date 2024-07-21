class Item {
	constructor(
		public weight: number,
		public profit: number,
		public index: number,
	) {}
}

function greedyByWeight(
	capacity: number,
	items: Item[],
): { maxProfit: number; selectedItems: Item[] } {
	// Calculate profit-to-weight ratio and sort items by this ratio in descending order
	const sortedItems = items.sort(
		(a, b) => b.profit / b.weight - a.profit / a.weight,
	);

	let totalProfit = 0;
	let remainingCapacity = capacity;
	const selectedItems = [];

	for (const item of sortedItems) {
		if (item.weight <= remainingCapacity) {
			selectedItems.push(item);
			totalProfit += item.profit;
			remainingCapacity -= item.weight;
		}
	}

	return { maxProfit: totalProfit, selectedItems };
}

const items = [
	new Item(14, 30000, 1),
	new Item(12, 80000, 3),
	new Item(15, 30000, 7),
	new Item(20, 50000, 2),
	new Item(30, 40000, 5),
	new Item(10, 60000, 6),
	new Item(6, 75000, 4),
];

const capacity = 91;

const weightRes = greedyByWeight(capacity, items);

console.log('Maximum Profit:', weightRes.maxProfit);
console.log('Selected Items:');
weightRes.selectedItems.forEach(item =>
	console.log(
		`Item ${item.index}: Weight = ${item.weight}, Profit = ${item.profit}`,
	),
);
