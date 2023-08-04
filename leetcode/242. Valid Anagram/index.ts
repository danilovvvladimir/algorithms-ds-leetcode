namespace NS242 {
  function isAnagram(s: string, t: string): boolean {
    const sMap = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
      if (!sMap.has(s[i])) {
        sMap.set(s[i], 0);
      }

      const previousValue = sMap.get(s[i])!;
      sMap.set(s[i], previousValue + 1);
    }

    for (let i = 0; i < t.length; i++) {
      if (!sMap.has(t[i])) {
        return false;
      }

      const previousValue = sMap.get(t[i])!;
      sMap.set(t[i], previousValue - 1);
    }

    const resultArray = Array.from(sMap)
      .map((e) => e[1])
      .filter((e) => {
        if (e !== 0) {
          return e;
        }
      });

    return resultArray.length > 0 ? false : true;
  }

  // OR this
  // function isAnagram(s: string, t: string): boolean {
  //   return s.split("").sort().join("") === t.split("").sort().join("");
  // }

  // console.log(isAnagram("anagram", "nagaram"));
  console.log(isAnagram("aacc", "cacc"));
}
