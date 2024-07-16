type Matrix = number[][];

function split(matrix: Matrix): [Matrix, Matrix, Matrix, Matrix] {
	const row = matrix.length;
	const col = matrix[0].length;
	const row2 = Math.floor(row / 2);
	const col2 = Math.floor(col / 2);

	return [
		matrix.slice(0, row2).map(x => x.slice(0, col2)),
		matrix.slice(0, row2).map(x => x.slice(col2)),
		matrix.slice(row2).map(x => x.slice(0, col2)),
		matrix.slice(row2).map(x => x.slice(col2)),
	];
}

function add(a: Matrix, b: Matrix): Matrix {
	return a.map((x, i) => x.map((y, j) => y + b[i][j]));
}

function sub(a: Matrix, b: Matrix): Matrix {
	return a.map((x, i) => x.map((y, j) => y - b[i][j]));
}

function strassen(x: Matrix, y: Matrix): Matrix {
	if (x.length === 1) {
		return [[x[0][0] * y[0][0]]];
	}

	const [a, b, c, d] = split(x);
	const [e, f, g, h] = split(y);

	const p1 = strassen(a, sub(f, h));
	const p2 = strassen(add(a, b), h);
	const p3 = strassen(add(c, d), e);
	const p4 = strassen(d, sub(g, e));
	const p5 = strassen(add(a, d), add(e, h));
	const p6 = strassen(sub(b, d), add(g, h));
	const p7 = strassen(sub(a, c), add(e, f));

	const c11 = add(sub(add(p5, p4), p2), p6);
	const c12 = add(p1, p2);
	const c21 = add(p3, p4);
	const c22 = sub(sub(add(p1, p5), p3), p7);

	const top = c11.map((x, i) => x.concat(c12[i]));
	const bottom = c21.map((x, i) => x.concat(c22[i]));
	return top.concat(bottom);
}

// Driver's code
const A: Matrix = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
	[2, 2, 2, 2],
];

const B: Matrix = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
	[2, 2, 2, 2],
];

const C = strassen(A, B);
console.log('Array A =>');
console.table(A);
console.log('Array B =>');
console.table(B);
console.log('Result Array =>');
console.table(C);
