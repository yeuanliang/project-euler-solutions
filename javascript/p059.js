"use strict";

// the ASCII values for commonly used english letters
// is in the range of 32 - 90 and 97 - 122.

const helper = require("./helper");

// https://www.mathblog.dk/project-euler-59-xor-encryption/
// frequency analysis: https://en.wikipedia.org/wiki/Frequency_analysis
// https://en.wikipedia.org/wiki/Letter_frequency

const cryptAnalysis = function (message, keyLength) {
  let maxSize = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] > maxSize) {
      maxSize = message[i];
    }
  }
  const aMessage = [];
  const key = [];
  for (let i = 0; i < keyLength; i++) {
    aMessage.push([]);
    for (let j = 0; j < maxSize + 1; j++) {
      aMessage[i].push(0);
    }
    key.push(0);
  }
  for (let i = 0; i < message.length; i++) {
    let j = i % keyLength;
    aMessage[j][message[i]]++;
    if (aMessage[j][message[i]] > aMessage[j][key[j]]) {
      key[j] = message[i];
    }
  }
  const spaceAscii = 32;
  for (let i = 0; i < keyLength; i++) {
    key[i] = key[i] ^ spaceAscii;
  }
  return key;
};

const decrypt = function (message, key) {
  const original = [];
  const length = key.length;
  for (let i = 0; i < message.length; i++) {
    let remainder = i % length;
    original.push(message[i] ^ key[remainder]);
  }
  return original;
};

const p059Solution = function () {
  const cipher = helper
    .readFile("p059_cipher.txt")
    .split(",")
    .map((item) => +item);
  // a-z ascii: 0110 0001 - 0111 1010
  // A-Z ascii: 0100 0001 - 0101 1010
  // 0-9 ascii: 0011 0000 - 0011 1001
  // 95 graphic ASCII characters, 0010 0000 - 0111 1110(32-126)
  // the key consists of three lower case characters
  for (let i = 97; i <= 122; i++) {
    for (let j = 97; j <= 122; j++) {
      for (let k = 97; k <= 122; k++) {
        let original = decrypt(cipher, [i, j, k]);
        let text = original.map((item) => String.fromCharCode(item)).join("");
        // https://en.wikipedia.org/wiki/Most_common_words_in_English
        if (text.includes(" and ")) {
          return {
            sum: original.reduce((x, y) => x + y),
            key: [i, j, k].map((item) => String.fromCharCode(item)).join(""),
          };
        }
      }
    }
  }
};

console.log(p059Solution());
