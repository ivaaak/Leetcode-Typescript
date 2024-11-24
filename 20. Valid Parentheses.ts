function isValid(s: string): boolean {
    const stack: string[] = []; // opening brackets
    const bracketPairs: { [key: string]: string } = { // map of opening and closing brackets
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char in bracketPairs) { // if closing bracket
            // stack is empty or top of stack doesn't match
            if (stack.length === 0 ||
                stack.pop() !== bracketPairs[char]) {
                return false;
            }
        } else { // push opening bracket
            stack.push(char);
        }
    }
    
    // valid only if stack is empty (all brackets matched)
    // closing is added then opening is added and both are removed
    return stack.length === 0;
}

// Test
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true
console.log(isValid("((()))")); // Expected: true
console.log(isValid("((")); // Expected: false
console.log(isValid(")(")); // Expected: false
console.log(isValid("")); // Expected: true
console.log(isValid("{{}[][[[]]]}")); // Expected: true
console.log(isValid("[](){{{}}}")); // Expected: true
console.log(isValid("[([]])")); // Expected: false