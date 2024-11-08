function maxArea(height: number[]): number {
    let leftSide = 0;
    let rightSide = height.length - 1;
    let maxWaterArea = 0;
    
    while (leftSide < rightSide) {
        // current container width
        const width = rightSide - leftSide;
        
        // container height (limited by shorter line)
        const containerHeight = Math.min(height[leftSide], height[rightSide]);
        
        // update max area - width * shorter side
        const currentArea = width * containerHeight;
        maxWaterArea = Math.max(maxWaterArea, currentArea);
        
        // move the shorter line inward
        if (height[leftSide] < height[rightSide]) {
            leftSide++;
        } else {
            rightSide--;
        }
    }
    
    return maxWaterArea;
}

// Test
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1
console.log(maxArea([4,3,2,1,4])); // Expected: 16
console.log(maxArea([1,2,1])); // Expected: 2
console.log(maxArea([1,8,6,2,5,4,8,25,7])); // Expected: 49
console.log(maxArea([1,2,4,3])); // Expected: 4
console.log(maxArea([2,3,4,5,18,17,6])); // Expected: 17