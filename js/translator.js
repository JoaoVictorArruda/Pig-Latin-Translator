function calculate(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let words = str.split(' ');
    let prefix = '';
    let stem = '';
    let isUpperCase = false;
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if(hasJustNumbers(words[i])) {
            result.push(words[i]);
            continue;
        }
        prefix = '';
        stem = '';
        isUpperCase = words[i][0] === words[i][0].toUpperCase();
        let word = words[i].toLowerCase();
        let foundVowel = false;
        let punctuation = '';
        if(!isCharacterALetter(word.substr(word.length - 1))) {
            punctuation = word.substr(word.length - 1);
            word = word.slice(0, -1);
        }
        for (let j = 0; j < word.length; j++) {
            if(vowels.includes(word[j])) {
                foundVowel = true;
            }
            if(!foundVowel) {
                prefix += word[j];
            } else {
                stem += word[j];
            }
        }
        if(hasNoConsonants(word)) {
            prefix += 'y';
        }
        stem = isUpperCase ? capitalizeFirstLetter(stem) : stem;
        result.push(stem + prefix + 'ay' + punctuation);
    }
    return result.join(' ');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

function hasJustNumbers(string) {
    return (/[0-9]/).test(string)
}

function hasNoConsonants(string) {
    return !(/[bcdfghjklmnpqrstvwxyz]/gi).test(string)
}

const strings = [
    ['Stop', ['Opstay']],
    ['No littering', ['Onay itteringlay']],
    ['No shirts, no shoes, no service', ['Onay irtsshay, onay oesshay, onay ervicesay']],
    ['No persons under 14 admitted', ['Onay ersonspay underay 14 admitteday']],
    ['Hey buddy, get away from my car!', ['Eyhay uddybay, etgay awayay omfray ymay arcay!']],
    ['I would be!', ['Iyay ouldway ebay!']],
];

strings.forEach(([str, cor]) => {
    const elem = document.createElement('div')
    const ans = calculate(str)
    const isCor = cor.includes(ans)
    elem.innerHTML = `${isCor ? "OK" : "FAILED"} ${str} --> ${ans} ${isCor ? "" : "expected " + cor}`
    document.body.appendChild(elem)
});