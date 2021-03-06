module.exports = Phrase;

// Adds 'reverse' to all string.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}


// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    
    // Makes the phrase LOUDER.
    this.louder = function() {
        return this.content.toUpperCase();
    }
    
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent(){
        return this.letters().toLowerCase();
    }
    
    // Returns the letters in the content.
    // for eaxample:
    //   new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
        //return Array.from(this.content).filter( c => c.match(/[a-z]/i) ).join("");
        return (this.content.match(/[a-z]/gi) || []).join("");
    }
    
    // Returns 'true' for a palindrome, 'false' otherwise.
    this.palindrome = function palindrome() {
        if (this.processedContent()) {
            return this.processedContent() === this.processedContent().reverse();
        } else {
            return false;
        }
    }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent(){
        return this.translation.toLowerCase();
    }
}

TranslatedPhrase.prototype = new Phrase();

