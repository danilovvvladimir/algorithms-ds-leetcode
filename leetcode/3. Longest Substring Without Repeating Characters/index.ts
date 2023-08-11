namespace NS3 {
  function lengthOfLongestSubstring(s: string): number {
    const charIndexMap: Record<string, number> = {};

    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      if (charIndexMap[char] !== undefined) {
        left = Math.max(left, charIndexMap[char] + 1);
      }

      charIndexMap[char] = right;
      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }
}
