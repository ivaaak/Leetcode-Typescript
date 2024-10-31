function longestPalindrome(s: string): string {
    // edge cases
    if (s.length < 2) return s;
    
    let start = 0;
    let maxLength = 1;
    
    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    // all possible center 
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // odd length
        expandAroundCenter(i, i + 1); // even length
    }
    
    return s.substring(start, start + maxLength);
}

// Test
console.log(longestPalindrome("babad"));     // Expected: "bab" or "aba"
console.log(longestPalindrome("cbbd"));      // Expected: "bb"
console.log(longestPalindrome("a"));         // Expected: "a"
console.log(longestPalindrome("ac"));        // Expected: "a" or "c"
console.log(longestPalindrome("racecar"));   // Expected: "racecar"