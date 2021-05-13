function twoSum(nums, target) {
  const diffs = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (diffs[currentNumber] >= 0) {
      return [diffs[currentNumber], i];
    }
    diffs[target - currentNumber] = i;
  }
}
