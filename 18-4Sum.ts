function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b); // sort array - same as 15. and 16.

    const result: number[][] = [];

    if (nums.length < 4) return result;

    // solution idea: fix 2 numbers and iterate the remaining 2 left/right
    // each for loop fixes one number, while loop moves left and right "pointers"
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates for i
        
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip duplicates for j
            
            let left = j + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    while (left < right && nums[left] === nums[left + 1]) left++; // skip duplicates for left
                    while (left < right && nums[right] === nums[right - 1]) right--; // skip duplicates for right
                    
                    left++;
                    right--;
                } else if (sum < target) { // adjust "pointers" based on result - works because array is sorted
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
}

// Test
console.log(fourSum([1,0,-1,0,-2,2], 0)); // Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // Expected: [[2,2,2,2]]
console.log(fourSum([0,0,0,0], 0)); // Expected: [[0,0,0,0]]
console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11)); // Expected: [[-5,-4,-3,1]]
console.log(fourSum([-1,0,1,2,-1,-4], -1)); // Expected: [[-4,-1,1,2],[-1,-1,0,1]]
console.log(fourSum([1,2,3,4,5], 10)); // Expected: [[1,2,3,4]]
console.log(fourSum([-2,-1,-1,1,1,2,2], 0)); // Expected: [[-2,-1,1,2],[-1,-1,1,1]]