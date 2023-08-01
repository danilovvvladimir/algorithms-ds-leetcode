"use strict";
function isValid(s) {
    const bracketPairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    let latestOpenedBrackets = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            latestOpenedBrackets.push(s[i]);
            continue;
        }
        if (bracketPairs[s[i]] !==
            latestOpenedBrackets[latestOpenedBrackets.length - 1]) {
            return false;
        }
        else {
            latestOpenedBrackets.pop();
        }
    }
    return latestOpenedBrackets.length === 0 ? true : false;
}
