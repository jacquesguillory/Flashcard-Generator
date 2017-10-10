// In case I need this
var fs = require("fs");

// constructor function for card objects
function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = function (){
        // checking to see if cloze statement matches full statement
        if (this.fullText.match(this.cloze)){
            // replacing cloze with underscores
            var part = this.fullText.replace(this.cloze, "______");
            console.log(part);
        }
        else {
            console.log('Error: The cloze statement does not match the question.');
        }
    };
}

module.exports = ClozeCard;