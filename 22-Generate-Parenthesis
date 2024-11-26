function generateParentheses(n: number): string[] {
   const result: string[] = [];
   
   // backwards-iterative solution idea from hint
   function backtrack(current: string, open: number, close: number) {
       if (current.length === 2 * n) { // valid combination - since they go in 2s (%2 dpesnt work*)
           result.push(current);
           return;
       }
       
       if (open < n) { // add opening parenthesis ( n not used )
           backtrack(current + "(", open + 1, close);
       }
       
       if (close < open) { // add closing parenthesis if we have more open than closed
           backtrack(current + ")", open, close + 1);
       }
   }
   
   backtrack("", 0, 0);
   return result;
}

// Test cases
console.log(generateParentheses(3));
console.log(generateParentheses(1));