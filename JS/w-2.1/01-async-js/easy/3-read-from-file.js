const fs = require("fs");

fs.readFile("dummyText.txt", "utf8", function (err, data) {
  // Display the file content
  JSON.parse(data);
});

let trial = 1;
for (let index = 0; index < 1000000000; index++) {
  trial += index;
}
// It will get Printed first
console.log(trial);
