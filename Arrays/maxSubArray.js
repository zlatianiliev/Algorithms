/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let currMaxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
        maxSum = Math.max(currMaxSum, maxSum);
    }

    return maxSum;
};


const test = () => {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    console.log(result) // 6 [4, -1, 2, 1]
};