/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;

    while(start < end) {
        const tempArea = (end - start) * Math.min(height[start], height[end]);
        maxArea = Math.max(maxArea, tempArea);

        height[start] < height[end] ? start++ : end--;
    }

    return maxArea;
};