function knapSackRec(
	W: number,
	wt: number[],
	val: number[],
	n: number,
	dp: number[][],
): number {
	if (n == 0 || W == 0) {
		return 0;
	}

	if (dp[n][W] != -1) {
		return dp[n][W];
	}

	if (wt[n - 1] > W) {
		return (dp[n][W] = knapSackRec(W, wt, val, n - 1, dp));
	} else {
		return (dp[n][W] = Math.max(
			val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp),
			knapSackRec(W, wt, val, n - 1, dp),
		));
	}
}

function knapSack(W: number, wt: number[], val: number[], N: number): number {
	const dp: number[][] = Array.from({ length: N + 1 }, () =>
		Array(W + 1).fill(-1),
	);
	return knapSackRec(W, wt, val, N, dp);
}

// Extracted data
const weight: number[] = [
	80, 82, 85, 70, 72, 70, 66, 50, 55, 25, 50, 55, 40, 48, 50, 32, 22, 60, 30,
	32, 40, 38, 35, 32, 25, 28, 30, 22, 50, 30, 45, 30, 60, 50, 20, 65, 20, 25,
	30, 10, 20, 25, 15, 10, 10, 10, 4, 4, 2, 1,
];
const profit: number[] = [
	220, 208, 198, 192, 180, 180, 165, 162, 160, 158, 155, 130, 125, 122, 120,
	118, 115, 110, 105, 101, 100, 100, 98, 96, 95, 90, 88, 82, 80, 77, 75, 73, 72,
	70, 69, 66, 65, 63, 60, 58, 56, 50, 30, 20, 15, 10, 8, 5, 3, 1,
];
const W: number = 1000;
const N: number = profit.length;

console.log(knapSack(W, weight, profit, N));
