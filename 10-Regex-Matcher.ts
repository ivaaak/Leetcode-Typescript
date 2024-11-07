function isMatch(text: string, pattern: string): boolean {
    const matchTable: boolean[][] = Array(text.length + 1)
        .fill(false)
        .map(() => Array(pattern.length + 1).fill(false));
    
    // empty pattern matches empty string
    matchTable[0][0] = true;
    
    // handle patterns that can match empty string (a*, a*b*, etc)
    for (let patternIndex = 1; patternIndex <= pattern.length; patternIndex++) {
        if (pattern[patternIndex - 1] === '*') {
            matchTable[0][patternIndex] = matchTable[0][patternIndex - 2];
        }
    }
    
    // fill the match table
    for (let textIndex = 1; textIndex <= text.length; textIndex++) {
        for (let patternIndex = 1; patternIndex <= pattern.length; patternIndex++) {
            const currentChar = pattern[patternIndex - 1];
            const previousPatternChar = pattern[patternIndex - 2];
            const currentTextChar = text[textIndex - 1];

            if (currentChar === '.' || currentChar === currentTextChar) {
                // current characters match directly
                matchTable[textIndex][patternIndex] = matchTable[textIndex - 1][patternIndex - 1];
            } else if (currentChar === '*') {
                // handle zero occurrences of the previous character
                matchTable[textIndex][patternIndex] = matchTable[textIndex][patternIndex - 2];
                
                // handle one or more occurrences if previous character matches
                const previousCharMatches = previousPatternChar === '.' || 
                                          previousPatternChar === currentTextChar;
                
                if (previousCharMatches) {
                    matchTable[textIndex][patternIndex] = 
                        matchTable[textIndex][patternIndex] || 
                        matchTable[textIndex - 1][patternIndex];
                }
            }
        }
    }
    
    return matchTable[text.length][pattern.length];
}

// Test
console.log(isMatch("aa", "a"));       // Expected: false
console.log(isMatch("aa", "a*"));      // Expected: true
console.log(isMatch("ab", ".*"));      // Expected: true
console.log(isMatch("mississippi", "mis*is*p*."));  // Expected: false
console.log(isMatch("aab", "c*a*b"));  // Expected: true
console.log(isMatch("", ".*"));        // Expected: true
console.log(isMatch("ab", ".*c"));     // Expected: false
console.log(isMatch("aaa", "a*a"));    // Expected: true
console.log(isMatch("a", "ab*"));      // Expected: true
console.log(isMatch("bbbba", ".*a*a")); // Expected: true