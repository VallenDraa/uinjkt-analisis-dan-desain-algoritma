const dp: number[][] = Array.from({ length: 100 }, () => Array(2).fill(-1));

// Function for matrix chain multiplication
function matrixChainMemoised(p: number[], i: number, j: number): number {
	if (i === j) {
		return 0;
	}

	if (dp[i][j] !== -1) {
		return dp[i][j];
	}

	dp[i][j] = Number.MAX_VALUE;

	for (let k = i; k < j; k++) {
		dp[i][j] = Math.min(
			dp[i][j],
			matrixChainMemoised(p, i, k) +
				matrixChainMemoised(p, k + 1, j) +
				p[i - 1] * p[k] * p[j],
		);
	}

	return dp[i][j];
}

function MatrixChainOrder(p: number[], n: number): number {
	const i = 1;
	const j = n - 1;

	return matrixChainMemoised(p, i, j);
}

// Driver code
const arr = [1, 2, 3, 4];
const n = arr.length;

// Initializing dp array
for (let i = 0; i < dp.length; i++) {
	for (let j = 0; j < dp[i].length; j++) {
		dp[i][j] = -1;
	}
}

console.log('Minimum number of multiplications is ' + MatrixChainOrder(arr, n));
