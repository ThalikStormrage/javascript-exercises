const palindromes = function (words) {
    const lowerCaseWords = words.toLowerCase()
    const noSpacesWords = lowerCaseWords.replaceAll(' ', '');
    const splitWords = noSpacesWords.split('');
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const noPunctuation = splitWords.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
    });
    const plainWords = noPunctuation.join();
    const reversedWords = noPunctuation.reverse();
    const joinedWords = reversedWords.join();
    
    if (joinedWords === plainWords){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;