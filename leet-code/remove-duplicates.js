function removeDuplicates(nums) {
  nums.splice(0, nums.length, ...new Set(nums));

// const nums = [1, 1, 2];
// console.log(removeDuplicates(nums));
