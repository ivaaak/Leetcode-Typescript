function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    
    // initial prefix (first string)
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) { // compare prefix to each string
        while (strs[i].indexOf(prefix) !== 0) { // string doesn't start with prefix
            // shorten prefix by removing last character
            // checking goes backwards from longest to shortest
            prefix = prefix.substring(0, prefix.length - 1);
            
            if (prefix === "") return ""; //common prefix doesnt exist
        }
    }

    return prefix;
}

// Test
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Expected: ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Expected: "inters"
console.log(longestCommonPrefix(["throne", "throne"])); // Expected: "throne"
console.log(longestCommonPrefix([""])); // Expected: ""
console.log(longestCommonPrefix(["a"])); // Expected: "a"
console.log(longestCommonPrefix(["", "b"])); // Expected: ""
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); // Expected: "flower"