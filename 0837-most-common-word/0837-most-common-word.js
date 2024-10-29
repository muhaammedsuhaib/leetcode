/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().match(/\w+/g) || [];
    const bannedSet = new Set(banned);
    const wordCount = {};

    words.forEach(word => {
        if (!bannedSet.has(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });
    let mostFrequent = '';
    let maxCount = 0;

    for (const word in wordCount) {
        if (wordCount[word] > maxCount) {
            mostFrequent = word;
            maxCount = wordCount[word];
        }
    }

    return mostFrequent;

};