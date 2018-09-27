const fs = require("fs");

//write out data
function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput) {
 //parses the user input to understand which command was typed
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];
  switch (command) {
   case "echo":
    //we will add the functionality of echo next within the object commandLibrary
     commandLibrary.echo(userInputArray.slice(1).join(" "));
     break;
     case "cat":
       commandLibrary.cat(userInputArray.slice(1));
       break;
     default "err":
     commandLibrary.err(userInputArray.slice(1));
 }
}

//where we will store the logic of our commands
const commandLibrary = {
  "echo": function(userInput) {
       done(userInput);

   },

  "err": function(useInput) {
    fs.readFile('a file that does not exist', (err, data) => {
      if (err) {
        console.error('There was an error reading the file!', err);
        return;
      }
    },

"cat": function(fullPath) {
      const fileName = fullPath[0];
      fs.readFile(fileName, (err, data) => {
          if (err) throw err;
          done(data);
      });
    }
   };


module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
