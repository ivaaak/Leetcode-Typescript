function isPalindrome(x: number): boolean {
    // handle negative numbers and numbers ending with 0
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    // handle single digit numbers
    if (x < 10) {
        return true;
    }
    
    let reversed = 0;
    let original = x;
    
    // reverse only half of the number to avoid overflow
    while (x > reversed) {
        const digit = x % 10;
        reversed = (reversed * 10) + digit;
        x = Math.floor(x / 10);
    }
    
    // for even length numbers: x === reversed
    // for odd length numbers: x === Math.floor(reversed / 10)
    return x === reversed || x === Math.floor(reversed / 10);
}

// Test
console.log(isPalindrome(121));      // Expected: true
console.log(isPalindrome(-121));     // Expected: false
console.log(isPalindrome(10));       // Expected: false
console.log(isPalindrome(0));        // Expected: true
console.log(isPalindrome(1234321));  // Expected: true
console.log(isPalindrome(1000021));  // Expected: false