const fs = require("fs");

const readfileFrom = async (filePath) => {
  try {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const cleanedContent = fileContent
      .split(" ")
      .filter((content) => content)
      .join(" ");

    fs.writeFileSync(filePath, cleanedContent, "utf-8");

    return "File cleaned Successfully!";
  } catch (err) {
    console.log(err);
  }
};

console.log(readfileFrom("dummyData.txt"));
