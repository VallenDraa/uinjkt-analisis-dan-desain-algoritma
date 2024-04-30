// node class is the basic structure
// of each node present in the Huffman - tree.
class HuffmanNode {
	data: number;
	c: string;
	left: HuffmanNode | null;
	right: HuffmanNode | null;

	constructor() {
		this.data = 0;
		this.c = '';
		this.left = null;
		this.right = null;
	}
}

// recursive function to print the
// huffman-code through the tree traversal.
// Here s is the huffman - code generated.
function printCode(root: HuffmanNode | null, s: string) {
	// base case; if the left and right are null
	// then its a leaf node and we print
	// the code s generated by traversing the tree.
	if (
		root?.left === null &&
		root?.right === null &&
		root?.c.toLowerCase() !== root?.c.toUpperCase()
	) {
		// c is the character in the node
		console.log(`${root?.c}: ${s}`);
		return;
	}

	// if we go to left then add "0" to the code.
	// if we go to the right add"1" to the code.

	// recursive calls for left and
	// right sub-tree of the generated tree.
	printCode(root?.left ?? null, `${s}0`);
	printCode(root?.right ?? null, `${s}1`);
}

// main function
// number of characters.
let n = 6;
let charArray = ['a', 'b', 'c', 'd', 'e', 'f'];
let charfreq = [1, 2, 3, 4, 5, 6];

// creating a priority queue q.
// makes a min-priority queue(min-heap).
let q: HuffmanNode[] = [];

console.time('huffman');
for (let i = 0; i < n; i++) {
	// creating a Huffman node object
	// and add it to the priority queue.
	let hn = new HuffmanNode();

	hn.c = charArray[i];
	hn.data = charfreq[i];

	hn.left = null;
	hn.right = null;

	// add functions adds
	// the huffman node to the queue.
	q.push(hn);
}

// create a root node
let root: HuffmanNode | null = null;
q.sort((a, b) => a.data - b.data);

// Here we will extract the two minimum value
// from the heap each time until
// its size reduces to 1, extract until
// all the nodes are extracted.
while (q.length > 1) {
	// first min extract.
	let x = q[0];
	q.shift();

	// second min extract.
	let y = q[0];
	q.shift();

	// new node f which is equal
	let f = new HuffmanNode();

	// to the sum of the frequency of the two nodes
	// assigning values to the f node.
	f.data = x.data + y.data;
	f.c = '-';

	// first extracted node as left child.
	f.left = x;

	// second extracted node as the right child.
	f.right = y;

	// marking the f node as the root node.
	root = f;

	// add this node to the priority-queue.
	q.push(f);
	q.sort((a, b) => a.data - b.data);
}

// print the codes by traversing the tree
printCode(root, '');
console.timeEnd('huffman');