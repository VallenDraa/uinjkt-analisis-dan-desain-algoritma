function search(pat: string, txt: string) {
	const M = pat.length;
	const N = txt.length;

	// A loop to slide pat[] one by one
	for (let i = 0; i <= N - M; i++) {
		let j = 0;

		// For current index i, check for pattern match
		while (j < M && txt[i + j] === pat[j]) {
			j++;
		}

		// If pattern matches at index i
		if (j === M) {
			console.log(`Pattern found at index ${i}`);
		}
	}
}

// Example 1
const txt1 = 'AABAACAADAABAABA';
const pat1 = 'AABA';
console.log('Example 1:');
search(pat1, txt1);

// Example 2
const txt2 = 'agd';
const pat2 = 'g';
console.log('\nExample 2:');
search(pat2, txt2);
