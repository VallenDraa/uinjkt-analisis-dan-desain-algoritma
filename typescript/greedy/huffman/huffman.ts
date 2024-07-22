class HuffmanNode {
	data: string;
	left: HuffmanNode | null;
	right: HuffmanNode | null;

	constructor(
		data: string = '',
		left: HuffmanNode | null = null,
		right: HuffmanNode | null = null,
	) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

function buildHuffmanTree(codes: { [key: string]: string }): HuffmanNode {
	const root = new HuffmanNode();

	const insertCode = (code: string, char: string) => {
		let current = root;
		for (let bit of code) {
			if (bit === '0') {
				if (!current.left) {
					current.left = new HuffmanNode();
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = new HuffmanNode();
				}
				current = current.right;
			}
		}
		current.data = char;
	};

	for (let char in codes) {
		insertCode(codes[char], char);
	}

	return root;
}

function encode(data: string, codes: { [key: string]: string }): string {
	let encodedStr = '';
	for (let char of data) {
		encodedStr += codes[char] + ' ';
	}
	return encodedStr.trim();
}

function decode(root: HuffmanNode, encodedStr: string): string {
	let decodedStr = '';
	let currentNode = root;
	for (let bit of encodedStr.split(' ').join('')) {
		currentNode = bit === '0' ? currentNode.left! : currentNode.right!;
		if (!currentNode.left && !currentNode.right) {
			decodedStr += currentNode.data;
			currentNode = root;
		}
	}
	return decodedStr;
}

const huffmanCodes = {
	E: '010',
	K: '011',
	P: '00',
	A: '10',
	R: '11',
};

const root = buildHuffmanTree(huffmanCodes);
const data = 'PERKARA';
const encodedStr = encode(data, huffmanCodes);
console.log('Encoded string: ', encodedStr);

const decodedStr = decode(root, encodedStr);
console.log('Decoded string: ', decodedStr);

const originalBits = data.length * 8;
const compressedBits = encodedStr.split(' ').join('').length;
const bitsSaved = originalBits - compressedBits;

console.log(`Original bits: ${originalBits}`);
console.log(`Compressed bits: ${compressedBits}`);
console.log(`Bits saved: ${bitsSaved}`);
