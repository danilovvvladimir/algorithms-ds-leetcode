function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = "";

  while (a.length < b.length) {
    a = "0" + a;
  }

  while (b.length < a.length) {
    b = "0" + b;
  }

  console.log(a, b);

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}

console.log(addBinary("11", "11"));
