function mcm(p: number[], i: number, j: number): number {
	if (i === j) {
		return 0;
	}

	let min = Infinity;

	for (let k = i; k < j; k++) {
		const count = mcm(p, i, k) + mcm(p, k + 1, j) + p[i - 1] * p[k] * p[j];

		if (count < min) {
			min = count;
		}
	}

	return min;
}

let arr = [10, 30, 5, 60];

console.log(
	'Minimum number of multiplications is ' + mcm(arr, 1, arr.length - 1),
);
