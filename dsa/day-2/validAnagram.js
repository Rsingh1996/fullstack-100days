const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let sortedStr1 = Array.from(str1).sort().join("");
  let sortedStr2 = Array.from(str2).sort().join("");
  return sortedStr1 === sortedStr2;
};

const str1 = "racecar";
const str2 = "carrace";
console.log(isAnagram(str1, str2));
