function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // ensure nums1 is smaller
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    
    let low = 0;
    let high = m;
    
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        
        const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // correct partition
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw new Error("arrays not sorted");
}

// Test
console.log(findMedianSortedArrays([1, 3], [2]));          // Expected: 2
console.log(findMedianSortedArrays([1, 2], [3, 4]));       // Expected: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0]));       // Expected: 0
console.log(findMedianSortedArrays([], [1]));              // Expected: 1
console.log(findMedianSortedArrays([2], []));              // Expected: 2