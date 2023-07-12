

function main() {
    let testingChoice = prompt("What would you like to do? Add, Subtract, Multiply or Divide?");
    let playerSelection = testingChoice.toLowerCase();

    if (playerSelection == "add") {
        addFunction();
    }

}


console.log(main());