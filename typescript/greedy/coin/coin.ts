function getMinNumberOfCoins(
	N: number,
	Coins: number[],
): { minCoins: number; resultCoins: number[] } {
	const minCoins = new Array(N + 1).fill(Infinity);
	const resultCoins = new Array(N + 1).fill(-1);

	minCoins[0] = 0;

	for (let i = 0; i < Coins.length; i++) {
		for (let j = Coins[i]; j <= N; j++) {
			if (
				minCoins[j - Coins[i]] !== Infinity &&
				minCoins[j - Coins[i]] + 1 < minCoins[j]
			) {
				minCoins[j] = minCoins[j - Coins[i]] + 1;
				resultCoins[j] = Coins[i];
			}
		}
	}

	return {
		minCoins: minCoins[N] === Infinity ? -1 : minCoins[N],
		resultCoins,
	};
}

function getNumberOfWays(N: number, Coins: number[]): number {
	const ways = new Array(N + 1).fill(0);
	ways[0] = 1;

	for (let i = 0; i < Coins.length; i++) {
		for (let j = Coins[i]; j <= N; j++) {
			ways[j] += ways[j - Coins[i]];
		}
	}

	return ways[N];
}

function printFormattedResult(N: number, resultCoins: number[]) {
	const coinsUsed: number[] = [];
	let current = N;
	while (current > 0) {
		coinsUsed.push(resultCoins[current]);
		current -= resultCoins[current];
	}
	coinsUsed.sort((a, b) => a - b); // Optional: sort the coins used for easier reading
	console.log(coinsUsed.join(', '));
}

// Example usage
const Coins = [1, 2, 3, 4, 5, 6, 7];
const N = 75;

const { minCoins, resultCoins } = getMinNumberOfCoins(N, Coins);

if (minCoins !== -1) {
	console.log(`Minimum number of coins to make ${N}: ${minCoins}`);
	console.log('Coins used:');
	printFormattedResult(N, resultCoins);
} else {
	console.log(`It's not possible to make ${N} with the given coins.`);
}

const numberOfWays = getNumberOfWays(N, Coins);
console.log(
	`Number of ways to make ${N} with the given coins: ${numberOfWays}`,
);
