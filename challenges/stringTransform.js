function transformString(str) {
  const length = str.length;

  // Check if the length of the string is divisible by both 3 and 5 (i.e:15)
  if (length % 15 === 0 ) {
      // reverse the string
      let reversedStr = str.split('').reverse().join('');
      // replace each character with its ASCII code
      return reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
  }
  
  // Check if the length of the string is divisible by 3
  if (length % 3 === 0) {
      // Reverse the entire string
      return str.split('').reverse().join('');
  }
  
  // Check if the length of the string is divisible by 5
  if (length % 5 === 0) {
      // Replace each character with its ASCII code
      return str.split('').map(char => char.charCodeAt(0)).join(' ');
  }

  // If none of the conditions are met, return the original string
  return str;
}

// Example usage
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"