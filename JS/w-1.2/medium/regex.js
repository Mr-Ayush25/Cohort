function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

// Example usage:
const inputString = "Hello, 123! How are you?";
const result = removeNonAlphanumeric(inputString);
console.log(result);
