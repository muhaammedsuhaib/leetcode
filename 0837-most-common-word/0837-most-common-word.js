/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().match(/\w+/g) || [];
    const banword = new Set(banned);
    const wc = {};

    words.forEach(word => {
        if (!banword.has(word)) {
            wc[word] = (wc[word] || 0) + 1;
        }
    });
    let mf = '';
    let maxc = 0;

    for (const word in wc) {
        if (wc[word] > maxc) {
            mf = word;
            maxc = wc[word];
        }
    }

    return mf;

};