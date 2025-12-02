const hasDuplicate1 = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}; // time complexity - O(n^2)

console.log(hasDuplicate1([1, 2, 3, 5, 5]));
console.log(hasDuplicate1([1, 2, 3, 4, 5]));

const hasDuplicate2 = (nums) => {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}; // time complexity - O(n)
console.log(hasDuplicate2([1, 2, 3, 5, 5]));
console.log(hasDuplicate2([1, 2, 3, 4, 5]));
