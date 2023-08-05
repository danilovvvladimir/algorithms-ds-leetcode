namespace NS49 {
  function groupAnagrams(strs: string[]): string[][] {
    const result = new Map<string, string[]>();

    for (let i = 0; i < strs.length; i++) {
      const count: number[] = new Array(26).fill(0);
      for (let j = 0; j < strs[i].length; j++) {
        count[strs[i][j].charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }

      if (!result.has(JSON.stringify(count))) {
        result.set(JSON.stringify(count), [strs[i]]);
      } else {
        result.set(JSON.stringify(count), [
          ...result.get(JSON.stringify(count))!,
          strs[i],
        ]);
      }
    }

    return [...result.values()];
  }

  const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  console.log(result);
}
