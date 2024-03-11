


function wordFrequencyCounter(string) {

    // Formatted and Splitted String
    const formattedString = string.toLowerCase()
                                  .split(' ');

    const wordFrequency = new Map();

    for (const word of formattedString) {

        // If we have repeated word increase counter by 1
        if(wordFrequency.has(word)){
            wordFrequency.set(word, wordFrequency.get(word) + 1);
        } else {
            wordFrequency.set(word, 1)
        }
    }

    return wordFrequency
}


module.exports = wordFrequencyCounter;
