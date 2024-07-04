function getNumberOfWays(N: number, Coins: number[]) {
	// Create the ways array to 1 plus the amount
	// to stop overflow
	let ways = new Array(N + 1);
	for (let i = 0; i < N + 1; i++) {
		ways[i] = 0;
	}
	// Set the first way to 1 because its 0 and
	// there is 1 way to make 0 with 0 coins
	ways[0] = 1;

	// Go through all of the coins
	for (let i = 0; i < Coins.length; i++) {
		// Make a comparison to each index value
		// of ways with the coin value.
		for (let j = 0; j < ways.length; j++) {
			if (Coins[i] <= j) {
				// Update the ways array
				ways[j] += ways[j - Coins[i]];
			}
		}
	}

	// return the value at the Nth position
	// of the ways array.
	return ways[N];
}

let Coins = [1, 5, 10];
console.log(getNumberOfWays(12, Coins));
