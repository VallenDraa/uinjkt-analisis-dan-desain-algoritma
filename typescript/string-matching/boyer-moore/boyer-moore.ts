const NO_OF_CHARS = 256;

// A utility function to get the maximum of two integers
function max(a: number, b: number): number {
	return a > b ? a : b;
}

// The preprocessing function for Boyer Moore's bad character heuristic
function badCharHeuristic(
	pattern: string[],
	patternLength: number,
	badCharTable: number[],
): void {
	// Initialize all occurrences as -1
	for (let i = 0; i < NO_OF_CHARS; i++) {
		badCharTable[i] = -1;
	}

	// Fill the actual value of last occurrence of a character
	// (indices of table are ASCII values and values are index of occurrence)
	for (let i = 0; i < patternLength; i++) {
		badCharTable[pattern[i].charCodeAt(0)] = i;
	}
}

/* A pattern searching function that uses Bad Character Heuristic of Boyer Moore Algorithm */
function search(text: string[], pattern: string[]): void {
	const patternLength = pattern.length;
	const textLength = text.length;

	const badCharTable = new Array(NO_OF_CHARS);

	// Fill the bad character array by calling the preprocessing function badCharHeuristic() for given pattern
	badCharHeuristic(pattern, patternLength, badCharTable);

	let shift = 0; // shift is the shift of the pattern with respect to text

	// There are textLength - patternLength + 1 potential alignments
	while (shift <= textLength - patternLength) {
		let patternIndex = patternLength - 1;

		/* Keep reducing index patternIndex of pattern while characters of pattern and text are matching at this shift */
		while (
			patternIndex >= 0 &&
			pattern[patternIndex] === text[shift + patternIndex]
		) {
			patternIndex--;
		}

		/* If the pattern is present at the current shift, then index patternIndex will become -1 after the above loop */
		if (patternIndex < 0) {
			console.log(`Pattern occurs at shift = ${shift}`);

			/* Shift the pattern so that the next character in text aligns with the last occurrence of it in pattern.
               The condition shift + patternLength < textLength is necessary for the case when pattern occurs at the end of text */
			// text[shift + patternLength] is the character after the pattern in the text
			shift +=
				shift + patternLength < textLength
					? patternLength -
					  badCharTable[text[shift + patternLength].charCodeAt(0)]
					: 1;
		} else {
			/* Shift the pattern so that the bad character in text aligns with the last occurrence of it in pattern.
               The max function is used to make sure that we get a positive shift.
               We may get a negative shift if the last occurrence of the bad character in pattern is on the right side of the current character. */
			shift += max(
				1,
				patternIndex - badCharTable[text[shift + patternIndex].charCodeAt(0)],
			);
		}
	}
}

const text = 'makan tomat'.split('');
const pattern = 'tomat'.split('');
search(text, pattern);
