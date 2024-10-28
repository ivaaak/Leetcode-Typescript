function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map<string, number>();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charMap.has(currentChar) && charMap.get(currentChar)! >= start) {
            start = charMap.get(currentChar)! + 1;
        }

        charMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
console.log(lengthOfLongestSubstring(""));         // Expected: 0
console.log(lengthOfLongestSubstring("dvdf"));     // Expected: 3