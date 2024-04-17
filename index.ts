#! /usr/bin/env node
import inquirer from "inquirer";
async function wordCounter(){
const answers:{
    Sentence:string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count your words: ",
  },
]);
const words = answers.Sentence.trim().split(/\s+/);
    console.log(words); 
    console.log(`Your word count is ${words.length}`);
}
wordCounter();

