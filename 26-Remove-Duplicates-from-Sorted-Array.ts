function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
}

// Test examples
console.log(removeDuplicates([1, 1, 2]), [1, 1, 2]); // 2, [1,2,_]
const test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(test2), test2); // 5, [0,1,2,3,4,_,_,_,_,_]
const test3: number[] = [];
console.log(removeDuplicates(test3), test3); // 0, []
const test4 = [1];
console.log(removeDuplicates(test4), test4); // 1, [1]
const test5 = [1, 1, 1];
console.log(removeDuplicates(test5), test5); // 1, [1,_,_]