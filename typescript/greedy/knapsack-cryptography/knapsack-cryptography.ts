// knapsackCipher.ts

function encryptBlock(block: string, publicKey: number[]): number {
	let encryptedValue = 0;
	for (let i = 0; i < block.length; i++) {
		if (block[i] === '1') {
			encryptedValue += publicKey[i];
		}
	}
	return encryptedValue;
}

function gcdExtended(
	a: number,
	b: number,
): { g: number; x: number; y: number } {
	if (a === 0) {
		return { g: b, x: 0, y: 1 };
	}
	const { g, x, y } = gcdExtended(b % a, a);
	return { g: g, x: y - Math.floor(b / a) * x, y: x };
}

function modInverse(a: number, m: number): number {
	const { g, x } = gcdExtended(a, m);
	if (g !== 1) {
		throw new Error('Modular inverse does not exist');
	}
	return ((x % m) + m) % m;
}

function decryptBlock(
	encryptedValue: number,
	privateKey: number[],
	modulus: number,
	modInverseN: number,
): string {
	const decryptedValue = (encryptedValue * modInverseN) % modulus;
	const binaryBlock = Array(privateKey.length).fill('0');

	let remainingValue = decryptedValue;
	for (let i = privateKey.length - 1; i >= 0; i--) {
		if (remainingValue >= privateKey[i]) {
			remainingValue -= privateKey[i];
			binaryBlock[i] = '1';
		}
	}

	return binaryBlock.join('');
}

const privateKey = [2, 5, 11, 23, 47, 95, 191, 378];
const modulus = 479;
const n = 73;

// Calculate public key
const publicKey = privateKey.map(key => (key * n) % modulus);

const binaryBlocks = [
	'01010011', // S
];

console.log('binaryBlocks:', binaryBlocks);

// Encrypt
const encryptedBlocks = binaryBlocks.map(block =>
	encryptBlock(block, publicKey),
);

const ciphertext = encryptedBlocks.join('');
console.log('Ciphertext: ', ciphertext);

// Decrypt
const modInverseN = modInverse(n, modulus);

const decryptedBinaryBlocks = encryptedBlocks.map(block =>
	decryptBlock(block, privateKey, modulus, modInverseN),
);
console.log('Decrypted Binary Blocks: ', decryptedBinaryBlocks);
