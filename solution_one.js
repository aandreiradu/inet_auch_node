/* 

    The initial code snippet was not handling any errors that could occur(missing input file; error thrown at writting, etc). 
    For example, if an error occurs on readFile, next the error obj will be passed as an argument to the callback fn, 
    who will try to make an upperCase to an ERROR - this obviously will result intro an error
    
    Solution:
    This solution is handling any erros that could be thrown either by readFile / writeFile.
*/

const fs = require("fs");

function readFile(path, callback) {
  fs.readFile(path, "utf8", (err, data) => {
    try {
      if (err) {
        throw err;
      } else {
        callback(data);
      }
    } catch (error) {
      console.log("error catched here", error);
      return error;
    }
  });
}

function writeFile(path, data, callback) {
  try {
    fs.writeFile(path, data, "utf8", (err) => {
      if (err) {
        console.log("error while writting the file", err);
        throw new Error("An error occured while writting the file");
      } else {
        callback();
      }
    });
  } catch (error) {
    console.log("error handled here", error);
    return error;
  }
}

readFile("input.txt", (data) => {
  const newData = data.toUpperCase();

  writeFile("output.txt", newData, () => {
    console.log("written successfully");
  });
});
