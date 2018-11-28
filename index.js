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
        return this.content.toLowerCase();
    }
    
    // Returns 'true' for a palindrome, 'false' otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
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

