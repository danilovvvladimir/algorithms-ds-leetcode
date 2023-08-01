function romanToInt(s: string): number {
  const romanLetters: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let resultNumber = 0;

  const romanLettersKeys = Object.keys(romanLetters);

  for (let i = 0; i < s.length; i++) {
    const indexIntegerCurrent = romanLettersKeys.indexOf(s[i]);
    const indexIntegerCurrentPlusOne = romanLettersKeys.indexOf(s[i + 1]);

    if (
      indexIntegerCurrentPlusOne - indexIntegerCurrent === 1 ||
      indexIntegerCurrentPlusOne - indexIntegerCurrent === 2
    ) {
      resultNumber += romanLetters[s[i + 1]] - romanLetters[s[i]];
      i++;
    } else {
      resultNumber += romanLetters[s[i]];
    }
  }

  return resultNumber;
}

romanToInt("III");
romanToInt("IV");
romanToInt("LVIII");
romanToInt("MCMXCIV");
