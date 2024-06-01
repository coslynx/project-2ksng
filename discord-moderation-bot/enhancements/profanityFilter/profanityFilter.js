const profanityFilter = {
  censorProfanity: (message) => {
    const profanityList = ["profanity1", "profanity2", "profanity3"]; // List of profane words to censor
    const censoredMessage = message.content.split(" ").map(word => {
      if (profanityList.includes(word.toLowerCase())) {
        return "*".repeat(word.length);
      } else {
        return word;
      }
    }).join(" ");
    
    return censoredMessage;
  }
};

module.exports = profanityFilter;