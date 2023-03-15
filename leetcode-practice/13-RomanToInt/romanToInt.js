function romanToInt(romanString) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;
  let prev = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < romanString.length; i++) {
    const romanInt = romanMap[romanString[i]];
    if (romanInt > prev) {
      answer -= 2 * prev;
    }
    answer += romanInt;
    prev = romanInt;
  }
  return answer;
}
