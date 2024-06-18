const d = 256; // Number of characters in the input alphabet

/**
 * Function to search for a pattern in a given text using the Rabin-Karp algorithm
 * @param pattern - The pattern to search for
 * @param text - The text in which to search for the pattern
 * @param prime - A prime number used in hashing
 */
function search(pattern: string, text: string, prime: number): void {
	const patternLength = pattern.length;
	const textLength = text.length;
	let patternHash = 0; // Hash value for pattern
	let textHash = 0; // Hash value for text
	let hashBase = 1; // The value of hashBase would be "pow(d, patternLength-1)%prime"

	// Precompute hashBase
	for (let i = 0; i < patternLength - 1; i++) {
		hashBase = (hashBase * d) % prime;
	}

	// Calculate the hash value of the pattern and first window of the text
	for (let i = 0; i < patternLength; i++) {
		patternHash = (d * patternHash + pattern.charCodeAt(i)) % prime;
		textHash = (d * textHash + text.charCodeAt(i)) % prime;
	}

	// Slide the pattern over text one by one
	for (let i = 0; i <= textLength - patternLength; i++) {
		// Check the hash values of the current window of text and pattern
		if (patternHash === textHash) {
			// Check for characters one by one if hash values match
			let j;
			for (j = 0; j < patternLength; j++) {
				if (text[i + j] !== pattern[j]) {
					break;
				}
			}

			// If the pattern matches the current window of the text
			if (j === patternLength) {
				console.log(`Pattern found at index ${i}`);
			}
		}

		// Calculate hash value for the next window of text: Remove leading digit, add trailing digit
		if (i < textLength - patternLength) {
			textHash =
				(d * (textHash - text.charCodeAt(i) * hashBase) +
					text.charCodeAt(i + patternLength)) %
				prime;

			// We might get a negative value of textHash, converting it to positive
			if (textHash < 0) {
				textHash = textHash + prime;
			}
		}
	}
}

// Driver code
const text = 'GEEKS FOR GEEKS';
const pattern = 'GEEK';
const prime = 101; // A prime number

// Function call
search(pattern, text, prime);
