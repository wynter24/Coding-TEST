/**
 * @param {string} s
 * @return {boolean}
 */
const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
};

var isValid = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        const char = s[i];

        if(brackets[char]) {
            stack.push(char);
        } else {
            let top = stack.pop();
            if(brackets[top] !== char) return false;
        }
    }
    
    return stack.length === 0;
};