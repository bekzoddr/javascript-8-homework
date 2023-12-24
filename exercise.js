// string-1

// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// let n = 17;

// if (n < 1 || n > 26) {
//     console.log("error");
// } else {
//     let letters = alphabet.slice(0, n);
    
//     console.log(letters);
// }


// string-2

// let str = "l";

// let lotin = /[A-Za-z]/;

// if (/^\d+$/.test(str)) { 
//     console.log("digit");
// } else if (lotin.test(str)) {
//     console.log("lotin");
// } else {
//     console.log("Nol");
// }

// string-3

// let str = "Bekzod";

// let start = str.charCodeAt(0);
// console.log(start);

// let end = str.charCodeAt(str.length - 1);
// console.log(end);

// string-4

// let N = 5;
// let belgi = "A";
// let res = belgi.repeat(N)

// console.log(res);

// String-5

// let str = "Bekzod"

// let reversed = str.split('').reverse().join('');

// console.log(reversed);

// String-6

// STRING-7

// let satr = "Bekzod";

// let son = "";
// for (let belgi of satr) {
//     if (!isNaN(belgi)) {
//         son += belgi;
//     }
// }

// if (son.length > 0) {
//     console.log("Satrdagi raqamlar soni: " + son);
// } else {
//     console.log("Satrda raqam yo'q.");
// }

// string-8

// let satr = "kjdcnjdnjkdncdnjcnjkn";

// let overall = 0;

// for (let belgi of satr) {
//     let kod = belgi.charCodeAt(0);

//     if ((kod >= 97 && kod <= 122) || (kod >= 1072 && kod <= 1103)) {
//         overall++;
//     }
// }

// console.log("Satrdagi kichik lotin va kirill harflarining umumiy soni: " + overall);


// string-9

// let str = "BEKZOD"
// let res = str.toLowerCase();

// console.log(res);

// string-10

// let satr = "bekzod";

// let changes = "";
// for (let belgi of satr) {
//     if (belgi === belgi.toUpperCase()) {
//         changes += belgi.toLowerCase();
//     } else {
//         changes += belgi.toUpperCase();
//     }
// }

// console.log(changes);

// integer-11

// let satr = 12.87377;

// let changes = parseFloat(satr);

// let result =
//   !isNaN(changes) && Number.isInteger(changes) ? 1 :
//   !isNaN(changes) ? 2 :
//   0;

// console.log(result);

// integer-12

// function getInverseNumber(n) {
//     if (typeof n !== 'number' || isNaN(n)) {
//         console.log("error");
//         return;
//     }

//     let reversed = parseInt(n.toString().split('').reverse().join(''));

//     return reversed;
// }

// let n = 12345; 
// let natija = getInverseNumber(n);
// console.log(natija);

// integer-13

// let expression = "7 + 3 - 2";
// let result = eval(expression);
// console.log(result);

// integer-14

// let N1 = 3;
// let N2 = 4;
// let S1 = "ABC";
// let S2 = "DEF";
// let newString = S1.slice(0, N1) + S2.slice(-N2);
// console.log(newString);

// integer-15

// let C = 'a';
// let S = "abcabc";
// let doubledString = S.split(C).join(C + C);
// console.log(doubledString);


// // String16
// let C = 'a';
// let S1 = "abc";
// let S2 = "123";
// let modifiedString = S1.replace(new RegExp(C, 'g'), S2);
// console.log(modifiedString);

// // String17
// let S1 = "ababab";
// let S2 = "ab";
// let count = (S1.match(new RegExp(S2, 'g')) || []).length;
// console.log(count);

// // String18
// let S1 = "abcabc";
// let S2 = "ab";
// let modifiedString = S1.replace(new RegExp(S2, ''), '');
// console.log(modifiedString);

// // String19
// let S1 = "abcabca";
// let S2 = "ab";
// let modifiedString = S1.replace(new RegExp(S2, 'g'), '');
// console.log(modifiedString);

// // String20
// let S1 = "abcabc";
// let S2 = "ab";
// let S3 = "123";
// let modifiedString = S1.replace(new RegExp(S2), S3);
// console.log(modifiedString);

// // String21
// let S1 = "abcabc";
// let S2 = "ab";
// let S3 = "123";
// let modifiedString = S1.replace(new RegExp(S2 + '$'), S3);
// console.log(modifiedString);

// // String22
// let sentence = "Salom, Dunyo! Xayrli kun!";
// let words = sentence.split(' ');
// let filteredWords = words.filter(word => /^[A-Z]/.test(word) && /[A-Z]$/.test(word));
// console.log(filteredWords);

// // String23
// let sentence = "Salom, Dunyo! Xayrli kun!";
// let words = sentence.split(' ');
// let filteredWords = words.filter(word => (word.match(/A/g) || []).length === 2);
// console.log(filteredWords);                                                                                                                                                                                                                                                                                                                                                   

// String28

// let filePath = "D:/Qudrat_c++/books/My_book.exe";
// let fileExtension = filePath.split('.').pop();
// console.log("Faylning nomi: " + fileName);


// // String29

// let filePath = "D:/Qudrat_c++/books/My_book.exe";
// let fileExtension = filePath.split('.').pop();
// console.log("Faylning kengaytmasi: " + fileExtension);


// // String30

// let filePath = "D:/Qudrat_c++/books/My_book.exe";
// let pathComponents = filePath.split('/');
// let lastFolderName = pathComponents[pathComponents.length - 2];
// console.log("Oxirgi papka nomi: " + (lastFolderName === "" ? "/" : lastFolderName));
