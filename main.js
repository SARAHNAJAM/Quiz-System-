#!/usr/bin/env node
// Project 09 "Quiz System"
import inquirer from "inquirer";
const Quiz = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "question 1: What is the correct way to check if the values are not equal?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        type: "list",
        name: "question_2",
        message: "which of the character is commomly allowed in variables names in typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        type: "list",
        name: "question_3",
        message: "which operator is commonly used for string concatenation in ",
        choices: ["+", "-", "*", "/"]
    },
    {
        type: "list",
        name: "question_4",
        message: "what is the correct way to declare a variable in typescript?",
        choices: ["var", "let", "const"]
    },
    {
        type: "list",
        name: "question_5",
        message: "what is the correct way to declare a function in typescript?",
        choices: ["function", "def", "var", "let"]
    }
]);
let score = 0;
switch (Quiz.question_1) {
    case "a !== b":
        console.log("1.Correct");
        ++score;
        break;
    default:
        console.log("1. InCorrect");
}
{
    switch (Quiz.question_2) {
        case "$":
            console.log("2.Correct");
            ++score;
            break;
        default:
            console.log("2. InCorrect");
    }
    switch (Quiz.question_3) {
        case "+":
            console.log("3.Correct");
            ++score;
            break;
        default:
            console.log("3. InCorrect");
    }
    switch (Quiz.question_4) {
        case "let":
            console.log("4.Correct");
            ++score;
            break;
        default:
            console.log("4. InCorrect");
    }
    switch (Quiz.question_5) {
        case "function":
            console.log("5.Correct");
            ++score;
            break;
        default:
            console.log("5. InCorrect");
    }
}
console.log(`Score: ${score}`);
