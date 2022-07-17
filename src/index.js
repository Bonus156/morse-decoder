const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letter = '';
    let point = '';
    let forDecoder = '';
    let text = '';
    for (let i = 0; i < expr.length; i += 10 ) {
        letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            text += ' ';
            continue;
        }
        forDecoder = '';
        for (let j = 0; j < letter.length; j += 2 ) {
            point = letter.slice(j, j + 2);
            if (point === '10') forDecoder += '.';
            if (point === '11') forDecoder += '-';
        } text += MORSE_TABLE[forDecoder];
    } return text;
}

module.exports = {
    decode
}
