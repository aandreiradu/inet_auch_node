const fs = require("fs");
function readFile(path, callback) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
}
function writeFile(path, data, callback) {
  fs.writeFile(path, data, "utf8", (err) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
}

readFile("input.txt", (data) => {
  const newData = data.toUpperCase();
  writeFile("output.txt", newData, () => {
    console.log("File written successfully");
  });
});
