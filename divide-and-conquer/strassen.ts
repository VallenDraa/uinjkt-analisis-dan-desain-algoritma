type Matrix = number[][];

function multiplyMatrix(matrixA: Matrix, matrixB: Matrix): Matrix {
	const n = matrixA.length;
	const resultMatrix = new Array(n).fill(null).map(() => new Array(n).fill(0));

	if (n === 1) {
		resultMatrix[0][0] = matrixA[0][0] * matrixB[0][0];
		return resultMatrix;
	}

	const splitIndex = n / 2;

	const a00 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));
	const a01 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));
	const a10 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));
	const a11 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));

	const b00 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));
	const b01 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));
	const b10 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));
	const b11 = new Array(splitIndex)
		.fill(null)
		.map(() => new Array(splitIndex).fill(0));

	for (let i = 0; i < splitIndex; i++) {
		for (let j = 0; j < splitIndex; j++) {
			a00[i][j] = matrixA[i][j];
			a01[i][j] = matrixA[i][j + splitIndex];
			a10[i][j] = matrixA[splitIndex + i][j];
			a11[i][j] = matrixA[i + splitIndex][j + splitIndex];

			b00[i][j] = matrixB[i][j];
			b01[i][j] = matrixB[i][j + splitIndex];
			b10[i][j] = matrixB[splitIndex + i][j];
			b11[i][j] = matrixB[i + splitIndex][j + splitIndex];
		}
	}

	const resultMatrix00 = addMatrix(
		multiplyMatrix(a00, b00),
		multiplyMatrix(a01, b10),
		splitIndex,
	);
	const resultMatrix01 = addMatrix(
		multiplyMatrix(a00, b01),
		multiplyMatrix(a01, b11),
		splitIndex,
	);
	const resultMatrix10 = addMatrix(
		multiplyMatrix(a10, b00),
		multiplyMatrix(a11, b10),
		splitIndex,
	);
	const resultMatrix11 = addMatrix(
		multiplyMatrix(a10, b01),
		multiplyMatrix(a11, b11),
		splitIndex,
	);

	for (let i = 0; i < splitIndex; i++) {
		for (let j = 0; j < splitIndex; j++) {
			resultMatrix[i][j] = resultMatrix00[i][j];
			resultMatrix[i][j + splitIndex] = resultMatrix01[i][j];
			resultMatrix[splitIndex + i][j] = resultMatrix10[i][j];
			resultMatrix[i + splitIndex][j + splitIndex] = resultMatrix11[i][j];
		}
	}

	return resultMatrix;
}

function addMatrix(matrixA: Matrix, matrixB: Matrix, n: number): Matrix {
	const resultMatrix = new Array(n).fill(null).map(() => new Array(n).fill(0));

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
		}
	}

	return resultMatrix;
}
const matrixA = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
	[2, 2, 2, 2],
];
console.log('Array A =>');
console.log(matrixA);
const matrixB = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
	[2, 2, 2, 2],
];
console.log('Array B =>');
console.log(matrixB);
const resultMatrix = multiplyMatrix(matrixA, matrixB);

console.log('Result Array =>');
console.log(resultMatrix);
