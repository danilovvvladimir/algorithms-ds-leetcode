namespace NS8 {
  function lengthOfLastWord(s: string): number {
    const trimmedString = s.trim();
    if (trimmedString.lastIndexOf(" ") === -1) return trimmedString.length;

    return trimmedString.slice(trimmedString.lastIndexOf(" ")).length - 1;
  }

  console.log(lengthOfLastWord("a"));
  console.log(lengthOfLastWord("Hello World"));
  console.log(lengthOfLastWord("   fly me   to   the moon  "));
  console.log(lengthOfLastWord("luffy is still joyboy"));
}

// "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
