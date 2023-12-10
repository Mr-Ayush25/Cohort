const fs = require("fs");

let data = "This is Shubham";

fs.writeFileSync("dummyText.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("dummyText.txt", "utf8"));
