/* Strings contest question - Dated 11 Sep */
function isAnagram(str1, str2) {
    if (str1.length != str2.length) return false;
    let map = new Map();
    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1);
    }

    for (let i = 0; i < str2.length; i++) {
        map.set(str2[i], (map.get(str2[i]) || 0) - 1);
    }

    for (let value of map.values()) {
        if (value != 0) return false;
    }
    return true;
}

let words = ["cat", "tca", "tea", "pet", "act", "eat"];
let inputs = ["cat", "tca", "eee", "tea"];

function allAnagrams(words, inputs) {
    for (let i = 0; i < inputs.length; i++) {
        let anagrams = "";
        for (let j = 0; j < words.length; j++) {
            if (isAnagram(inputs[i], words[j])) {
                anagrams += words[j] + " ";
            }
        }
        if (!anagrams.length) console.log(-1);
        else console.log(anagrams);
    }
}

allAnagrams(words, inputs);