// Function to generate a super-increasing sequence for the public key
function generateSuperIncreasingSequence(n: number): number[] {
	const sequence: number[] = [Math.floor(Math.random() * 100) + 1];
	while (sequence.length < n) {
		const nextElement =
			sequence.reduce((a, b) => a + b, 0) + Math.floor(Math.random() * 10) + 1;
		sequence.push(nextElement);
	}
	return sequence;
}

// Function to generate the private key from the public key
function generatePrivateKey(
	publicKey: number[],
	q: number,
	r: number,
): number[] {
	const privateKey: number[] = publicKey.map(element => (r * element) % q);
	return privateKey;
}

// Function to encrypt the plaintext using the public key
function knapsackEncrypt(plaintext: string, publicKey: number[]): number {
	const encryptedMessage = plaintext.split('').reduce((sum, char, index) => {
		return char === '1' ? sum + publicKey[index] : sum;
	}, 0);
	return encryptedMessage;
}

// Function to decrypt the ciphertext using the private key
function knapsackDecrypt(
	ciphertext: number,
	privateKey: number[],
	q: number,
): string {
	const rInverse = modInverse(3, q); // Modular multiplicative inverse of r
	let decryptedMessage = '';
	privateKey.reverse().forEach(element => {
		if ((ciphertext * rInverse) % q >= element) {
			decryptedMessage = '1' + decryptedMessage;
			ciphertext -= element;
		} else {
			decryptedMessage = '0' + decryptedMessage;
		}
	});
	return decryptedMessage;
}

// Function to calculate modular multiplicative inverse
function modInverse(a: number, m: number): number {
	a = ((a % m) + m) % m;
	for (let x = 1; x < m; x++) {
		if ((a * x) % m == 1) return x;
	}
	return 1;
}

const n = 8; // Number of elements in the super-increasing sequence
const q = 103; // Modulus (should be greater than the sum of the super-increasing sequence)
const r = 3; // Multiplier for generating private key

// Generate the public key and private key
const publicKey = generateSuperIncreasingSequence(n);
const privateKey = generatePrivateKey(publicKey, q, r);

const plaintext = '11001010';
const ciphertext = knapsackEncrypt(plaintext, publicKey);
const decryptedMessage = knapsackDecrypt(ciphertext, privateKey, q);

console.log('Original Message:', plaintext);
console.log('Encrypted Ciphertext:', ciphertext);
console.log('Decrypted Message:', decryptedMessage);
