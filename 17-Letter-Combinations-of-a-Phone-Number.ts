function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    
    const digitMap: { [key: string]: string } = { // map digits to letters
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result: string[] = [];
    
    function checkLettersBackwards(current: string, remainingDigits: string) {
        if (remainingDigits.length === 0) {
            result.push(current);
            return;
        }
        
        const digit = remainingDigits[0]; // get first digit 
        const letters = digitMap[digit]; // get corresponding letters
        
        for (const letter of letters) { // test each letter for the digit
            checkLettersBackwards(current + letter, remainingDigits.slice(1));
        }
    }
    
    checkLettersBackwards('', digits);
    return result;
}

// Test
console.log(letterCombinations("23")); // Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // Expected: []
console.log(letterCombinations("2")); // Expected: ["a","b","c"]
console.log(letterCombinations("9")); // Expected: ["w","x","y","z"]
