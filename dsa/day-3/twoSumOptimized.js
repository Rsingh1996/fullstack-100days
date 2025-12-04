const twoSumOptimized = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]; // 6, 4, 5, 3
    if (map[diff] !== undefined) {
      return [map[diff], i]; // [1, 3]
    }
    map[arr[i]] = i;
  }
};

const arr = [1, 3, 2, 4, 2, 5];
const target = 7;
console.log(twoSumOptimized(arr, target));
//map = { 1 -> 0, 3 -> 1, 2 -> 2,  }
