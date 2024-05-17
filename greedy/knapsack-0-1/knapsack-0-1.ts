// Returns the value of maximum profit
function knapSackRec(
	W: number,
	wt: number[],
	val: number[],
	n: number,
	dp: number[][],
): number {
	// Base condition
	if (n == 0 || W == 0) {
		return 0;
	}

	if (dp[n][W] != -1) {
		return dp[n][W];
	}

	if (wt[n - 1] > W) {
		// Store the value of function call
		// stack in table before return
		return (dp[n][W] = knapSackRec(W, wt, val, n - 1, dp));
	}
	// Return value of table after storing
	else {
		return (dp[n][W] = Math.max(
			val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp),
			knapSackRec(W, wt, val, n - 1, dp),
		));
	}
}

function knapSack(W: number, wt: number[], val: number[], N: number): number {
	// Declare the dp table dynamically
	// Intializing dp tables(row and cols) with -1 below
	const dp: number[][] = Array.from({ length: N + 1 }, () =>
		Array(W + 1).fill(-1),
	);
	return knapSackRec(W, wt, val, N, dp);
}

const profit: number[] = [60, 100, 120];
const weight: number[] = [10, 20, 30];

const W: number = 50;
const N: number = profit.length;

console.log(knapSack(W, weight, profit, N));
