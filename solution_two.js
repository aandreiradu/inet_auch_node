/* 
 
    The initial code snippet was not handling any errors that could occur(missing input file; error thrown at writting, etc). 
    For example, if an error occurs on readFile, next the error obj will be passed as an argument to the callback fn, 
    who will try to make an upperCase to an ERROR - this obviously will result intro an error
    
    Solution:
    Extend readFile to accept 2 arugments for the callback fn (err,data). If an error occurs in the following methods,
    the error object will not be passed as an arrgument to the cb. 
    Extend writeFile to accept 1 argument for the callback fn (err). If this arg is passed, it means that an error occured while 
    writting the file.
*/

const fs = require("fs");

function readFile(path, callback) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
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

readFile("input.txt", (err, data) => {
  if (err) {
    console.log("error readFile", err);
    return;
  }

  /* At this point, the content from file was read successfully */
  const newData = data.toUpperCase();
  writeFile("output.txt", newData, (err) => {
    if (err) {
      console.log("error writeFile", err);
      return;
    }

    /* At this point, no errors were thrown from the writeFile method */
    console.log("File written successfully");
  });
});
