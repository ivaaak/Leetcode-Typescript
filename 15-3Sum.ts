function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b); // sort array - handle duplicates
    const result: number[][] = [];
    
    for (let i = 0; i < nums.length - 2; i++) { // take first num and left / right for other 2
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) { // found 'triplet'
                result.push([nums[i], nums[left], nums[right]]);
                
                while (left < right && nums[left] === nums[left + 1]) left++; // skip left duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // skip right duplicates
                
                left++;
                right--;
            } else if (sum < 0) { // sum too small -> increment left -> larger sum
                left++;
            } else { // sum too large -> decrement right -> smaller sum
                right--;
            }
        }
    }
    
    return result;
}

// Test
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]
console.log(threeSum([-2,0,1,1,2])); // Expected: [[-2,0,2],[-2,1,1]]
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])); // Expected: [[-4,0,4],[-4,1,3],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1,0,1,0])); // Expected: [[-1,0,1]]
console.log(threeSum([-2,0,0,2,2])); // Expected: [[-2,0,2]]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])); // Expected: [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]