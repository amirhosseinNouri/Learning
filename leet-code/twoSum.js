function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const diffIndex = nums.indexOf(diff);
    if (diffIndex !== -1 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
}
