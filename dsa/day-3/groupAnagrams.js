const groupAnagrams = (strs) => {
  const result = {};
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!result[sortedStr]) {
      result[sortedStr] = [];
    }
    result[sortedStr].push(str);
  }
  return Object.values(result);
};
strs = ["bat", "stop", "cat", "tab", "tops", "act", "hat", "pots"];
console.log(groupAnagrams(strs));
