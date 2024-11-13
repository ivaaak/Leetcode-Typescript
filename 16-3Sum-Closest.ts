function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b); // same approach as in 15.
    
    let closestSum = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            if (currentSum === target) { // exact match found -> return
                return currentSum;
            }
            
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum; // update closestSum if current sum is closer to target
            }
            
            if (currentSum < target) { // adjust left or right
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
}

// Test
console.log(threeSumClosest([-1,2,1,-4], 1)); // Expected: 2
console.log(threeSumClosest([0,0,0], 1)); // Expected: 0
console.log(threeSumClosest([1,1,1,0], 100)); // Expected: 3
console.log(threeSumClosest([-1,2,1,-4,3,-3], 1)); // Expected: 1
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2)); // Expected: -2
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82)); // Expected: 82
console.log(threeSumClosest([-100,-98,-2,-1], -101)); // Expected: -101
console.log(threeSumClosest([-1,0,1,1,55], 3)); // Expected: 2