function convert(s: string, numRows: number): string {
    // edge cases
    if (numRows === 1 || numRows >= s.length) return s;
    
    // initialize rows
    const rows: string[] = Array(numRows).fill('');
    
    let currentRow = 0;
    let step = 1;  // 1 for moving down, -1 for moving up
    
    // iterate through characters
    for (let char of s) {
        // add character to row
        rows[currentRow] += char;
        
        // change direction if we hit the first or last row
        if (currentRow === 0) {
            step = 1;
        } else if (currentRow === numRows - 1) {
            step = -1;
        }
        
        // move to next row
        currentRow += step;
    }
    
    // combine all rows into final string
    return rows.join('');
}

// Test
console.log(convert("PAYPALISHIRING", 3));    // Expected: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4));    // Expected: "PINALSIGYAHRPI"
console.log(convert("A", 1));                 // Expected: "A"
console.log(convert("AB", 1));                // Expected: "AB"
console.log(convert("ABC", 2));               // Expected: "ACB"