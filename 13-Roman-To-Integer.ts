function romanToInt(s: string): number {
    // map of roman numerals values
    const romanValues: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues[s[i]];
        const nextValue = i + 1 < s.length ? romanValues[s[i + 1]] : 0;
        
        // If current value is less than next value, subtract current value
        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    
    return result;
}

// Test
console.log(romanToInt("III")); // Expected: 3
console.log(romanToInt("LVIII")); // Expected: 58
console.log(romanToInt("MCMXCIV")); // Expected: 1994
console.log(romanToInt("IV")); // Expected: 4
console.log(romanToInt("IX")); // Expected: 9
console.log(romanToInt("XL")); // Expected: 40
console.log(romanToInt("XC")); // Expected: 90
console.log(romanToInt("CD")); // Expected: 400
console.log(romanToInt("CM")); // Expected: 900
console.log(romanToInt("MMMCMXCIX")); // Expected: 3999