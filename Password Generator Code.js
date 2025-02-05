JsOsaDAS1.001.00bplist00�Vscript_�// Password Generator in JavaScript

function generatePassword() {
    console.log("Welcome to the Password Generator!");

    // Ask the user three personal questions
    const question1 = prompt("What is your favorite color?").trim();
    const question2 = prompt("What is your favorite movie?").trim();
    const question3 = prompt("What town is your birthplace?").trim();

    // Take the first letter of each answer
    const firstLetter1 = question1[0].toLowerCase();
    const firstLetter2 = question2[0].toLowerCase();
    const firstLetter3 = question3[0].toLowerCase();

    // Generate random symbols and numbers to append
    const symbols = "!?*";
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomNumber = Math.floor(Math.random() * 90) + 10; // Generates a number between 10 and 99

    // Add a random uppercase letter for extra complexity
    const randomUpper = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z

    // Combine to create the password
    const password = `${randomUpper}${firstLetter1}${firstLetter2}${firstLetter3}${randomSymbol}${randomNumber}`;

    console.log(`Your generated password is: ${password}`);
}

// Run the password generator
generatePassword();
                              �jscr  ��ޭ