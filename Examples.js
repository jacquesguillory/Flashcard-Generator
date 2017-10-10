// for asking the trivia
var inquirer = require("inquirer");

// for getting constructors
var fs = require("fs");


// Getting basic card constructor
var BasicCard = require("./BasicCard.js");

// Creating new basic card
var b1 = new BasicCard("Which hockey team most recently won back-to-back Stanley Cups?", "Pittsburgh Penguins");

// displaying newly created question and answer
console.log(b1.front);
console.log(b1.back);





// Getting cloze card constructor
var ClozeCard = require("./ClozeCards.js");

// Creating new cloze card
var c1 = new ClozeCard("The Pittsburgh Penguins are the most recent team to win back-to-back Stanley Cups", "Pittsburgh Penguins");

console.log("");
console.log("Full Text: " + c1.fullText);
console.log("Cloze: " + c1.cloze);
// Running function to display partial question
console.log("Partial Text:");
c1.partial();
