function solution(nums) {
    let newArr = new Set(nums);
    return newArr.size > nums.length/2 ? nums.length/2 : newArr.size;
}