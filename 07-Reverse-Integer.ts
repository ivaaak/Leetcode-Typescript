function reverse(x: number): number {
    if (x === 0) return 0;
    
    // 32-bit integer limits - from hints
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    
    // get sign and convert to positive number
    const sign = x < 0 ? -1 : 1;
    let num = Math.abs(x);
    
    let reversed = 0;
    
    // reverse digits
    while (num > 0) {
        // check constraints before adding new digit
        if (reversed > Math.floor(MAX_INT / 10) || 
            reversed < Math.floor(MIN_INT / 10)) {
            return 0;
        }
        
        const digit = num % 10;
        reversed = (reversed * 10) + digit;
        num = Math.floor(num / 10);
    }
    
    // apply sign - multiplying by 1 or -1
    reversed *= sign;
    
    // check if result is valid
    if (reversed > MAX_INT || reversed < MIN_INT) {
        return 0;
    }
    
    return reversed;
}

// Test
console.log(reverse(123)); // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120)); // Expected: 21
console.log(reverse(0)); // Expected: 0
console.log(reverse(1534236469)); // Expected: 0 (would overflow)