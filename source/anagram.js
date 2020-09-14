'use strict';

/**
 * Searches anagrams in array of words 
 * @param {string[]} words array of words to search anagrams in
 * @returns {string[][]} array of anagrams
 */
const anagram = (words) => {
    const mapByCharList = words.reduce((map, word) => {
        const charList = word.toLowerCase().split('').sort().join('');
        (map[charList]) ? (map[charList].push(word)) : (map[charList] = [word]);
        return map;
    }, {});

    return Object.values(mapByCharList).filter(element => {
        return (element.length > 1) ? element.sort() : null;
    }).sort();
};
