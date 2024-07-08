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

const txt1 = 'kulit putih';
const pat1 = 'putih';
search(pat1, txt1);
