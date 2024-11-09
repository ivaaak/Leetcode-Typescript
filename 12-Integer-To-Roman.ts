function intToRoman(num: number): string {
    const valueSymbols: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    
    let result = "";
    
    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}

// Test
console.log(intToRoman(3749)); // Expected: MMMDCCXLIX
console.log(intToRoman(58)); // Expected: LVIII
console.log(intToRoman(1994)); // Expected: MCMXCIV
console.log(intToRoman(3)); // Expected: III
console.log(intToRoman(4)); // Expected: IV
console.log(intToRoman(9)); // Expected: IX
console.log(intToRoman(49)); // Expected: XLIX
console.log(intToRoman(3999)); // Expected: MMMCMXCIX