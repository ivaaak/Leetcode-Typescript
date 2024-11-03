function myAtoi(s: string): number {
    // 32-bit integer limits - same as 7.
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    
    let inputString = s.trimStart(); // trim whitespace
    if (inputString.length === 0) return 0;
    
    let index = 0;
    let sign = 1;
    let result = 0;
    
    // handle sign and move to number
    if (inputString[index] === '+' || inputString[index] === '-') {
        sign = inputString[index] === '+' ? 1 : -1;
        index++;
    }
    
    // process digits
    while (index < inputString.length && /[0-9]/.test(inputString[index])) {
        const digit = parseInt(inputString[index]);
        
        // check for overflow before multiplying
        if (result > Math.floor(MAX_INT / 10) || 
            (result === Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)) {
            return sign === 1 ? MAX_INT : MIN_INT;
        }
        
        result = (result * 10) + digit;
        index++;
    }
    
    // apply sign - same as 7.
    result *= sign;

    // final bounds check
    if (result > MAX_INT) return MAX_INT;
    if (result < MIN_INT) return MIN_INT;
    
    return result;
}

// Test
console.log(myAtoi("42"));              // Expected: 42
console.log(myAtoi("   -42"));          // Expected: -42
console.log(myAtoi("4193 with words")); // Expected: 4193
console.log(myAtoi("words and 987"));   // Expected: 0
console.log(myAtoi("-91283472332"));    // Expected: -2147483648
console.log(myAtoi("3.14159"));         // Expected: 3
console.log(myAtoi("+-12"));            // Expected: 0
console.log(myAtoi("0-1"));             // Expected: 0
console.log(myAtoi("   +0 123"));       // Expected: 0
console.log(myAtoi("9223372036854775808")); // Expected: 2147483647