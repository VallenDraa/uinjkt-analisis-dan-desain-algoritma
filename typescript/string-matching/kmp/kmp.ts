function computeLPSArray(
	pattern: string,
	patternLength: number,
	longestPrefixSuffix: number[],
): void {
	let lengthOfPreviousLPS = 0; // Length of the previous longest prefix suffix
	let currentIndex = 1;
	longestPrefixSuffix[0] = 0; // longestPrefixSuffix[0] is always 0

	// The loop calculates longestPrefixSuffix[currentIndex] for currentIndex = 1 to patternLength-1
	while (currentIndex < patternLength) {
		if (pattern.charAt(currentIndex) === pattern.charAt(lengthOfPreviousLPS)) {
			lengthOfPreviousLPS++;
			longestPrefixSuffix[currentIndex] = lengthOfPreviousLPS;
			currentIndex++;
		} else {
			if (lengthOfPreviousLPS !== 0) {
				lengthOfPreviousLPS = longestPrefixSuffix[lengthOfPreviousLPS - 1];
			} else {
				longestPrefixSuffix[currentIndex] = 0;
				currentIndex++;
			}
		}
	}
}

function KMPSearch(pattern: string, text: string): void {
	const patternLength = pattern.length;
	const textLength = text.length;

	// Create longestPrefixSuffix[] that will hold the longest prefix suffix values for the pattern
	const longestPrefixSuffix: number[] = [];
	let patternIndex = 0; // Index for pattern[]

	// Preprocess the pattern to calculate longestPrefixSuffix[] array
	computeLPSArray(pattern, patternLength, longestPrefixSuffix);

	let textIndex = 0; // Index for text[]
	while (textLength - textIndex >= patternLength - patternIndex) {
		if (pattern.charAt(patternIndex) === text.charAt(textIndex)) {
			patternIndex++;
			textIndex++;
		}
		if (patternIndex === patternLength) {
			console.log('Found pattern at index ' + (textIndex - patternIndex));
			patternIndex = longestPrefixSuffix[patternIndex - 1];
		} else if (
			textIndex < textLength &&
			pattern.charAt(patternIndex) !== text.charAt(textIndex)
		) {
			if (patternIndex !== 0) {
				patternIndex = longestPrefixSuffix[patternIndex - 1];
			} else {
				textIndex++;
			}
		}
	}
}

const text = 'auditor auditee';
const pattern = 'auditee';
KMPSearch(pattern, text);
