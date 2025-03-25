/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let prev = 0;
    let subString = [];

    for(const str of s.split('')) {
        if(subString.includes(str)) {
            subString = [];
            prev = Math.max(prev, count);
            count = 0;
        }
        subString.push(str);
        count++;
    }

    return Math.max(prev, count);
};