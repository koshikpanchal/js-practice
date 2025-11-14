const string = "hello";
let counter = {};
function isAnagram(str1, str2) {
  if (str1.length !== str2.legth) return false;

  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let items of str2) {
    if (!counter[items]) return false;

    counter[items] -= 1;
  }
  return true;
}

const isAnagramStr = isAnagram(string, "llheo");
console.log(isAnagramStr);
