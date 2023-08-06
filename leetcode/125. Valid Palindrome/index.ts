namespace NS125 {
  function isPalindrome(s: string): boolean {
    const validatedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    for (let i = 0; i < Math.floor(validatedString.length / 2); i++) {
      if (
        validatedString[i] !== validatedString[validatedString.length - 1 - i]
      ) {
        return false;
      }
    }

    return true;
  }

  console.log(isPalindrome("PPA"));
}
