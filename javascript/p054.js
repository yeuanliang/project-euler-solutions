"use strict";

const fs = require("fs");
const path = require("path");
const cardOrder = "23456789TJQKA";
const cardRanks = "bcdefghijklmn";

const handleHandRank = function (suitsSet, cardsInfo) {
  const rankInfo = {};
  const cardsRanks = Object.keys(cardsInfo).sort();
  const cardsCount = Object.values(cardsInfo).sort();
  const isStraight =
    cardsRanks.length === 5 &&
    cardRanks.indexOf(cardsRanks[4]) - cardRanks.indexOf(cardsRanks[0]) === 4;
  const isFlush = suitsSet.size === 1;
  if (cardsRanks.length === 5) {
    if (isFlush && isStraight) {
      // Straight Flush
      rankInfo.rank = 8;
      rankInfo.name = "Straight Flush";
    } else if (isFlush && !isStraight) {
      // Flush
      rankInfo.rank = 5;
      rankInfo.name = "Flush";
      // 'A5432' is straight flush
      if (cardsRanks[4] === "n" && cardsRanks[3] === "e") {
        rankInfo.rank = 8;
        rankInfo.name = "Straight Flush";
      }
    } else if (!isFlush && isStraight) {
      // Straight
      rankInfo.rank = 4;
      rankInfo.name = "Straight";
    } else if (cardsRanks[4] === "n" && cardsRanks[3] === "e") {
      // 'A5432' is straight
      rankInfo.rank = 4;
      rankInfo.name = "Straight";
    } else {
      // High Card
      rankInfo.rank = 0;
      rankInfo.name = "High Cards";
    }
  } else if (cardsRanks.length === 4) {
    // One Pair
    rankInfo.rank = 1;
    rankInfo.name = "One Pair";
  } else if (cardsRanks.length === 3) {
    if (cardsCount[2] === 3) {
      // Three of a Kind
      rankInfo.rank = 3;
      rankInfo.name = "Three of a Kind";
    } else {
      // Two Pairs
      rankInfo.rank = 2;
      rankInfo.name = "Two Pairs";
    }
  } else if (cardsRanks.length === 2) {
    if (cardsCount[1] === 4) {
      // Four of a Kind
      rankInfo.rank = 7;
      rankInfo.name = "Four of a Kind";
    } else {
      // Full House
      rankInfo.rank = 6;
      rankInfo.name = "Full House";
    }
  }
  return rankInfo;
};

const resortPair = function (s) {
  if (s.charAt(0) === s.charAt(1)) {
    return s;
  } else if (s.charAt(1) === s.charAt(2)) {
    return s.slice(1, 3) + s.charAt(0) + s.slice(3);
  } else if (s.charAt(2) === s.charAt(3)) {
    return s.slice(2, 4) + s.slice(0, 2) + s.charAt(4);
  } else {
    return s.slice(3, 5) + s.slice(0, 3);
  }
};

const resortTwoPairs = function (s) {
  if (s.charAt(4) !== s.charAt(3)) {
    return s;
  } else if (s.charAt(0) !== s.charAt(1)) {
    return s.slice(1) + s.charAt(0);
  } else {
    return s.slice(0, 2) + s.slice(3, 5) + s.charAt(2);
  }
};

const resortThreeAKind = function (s) {
  if (s.charAt(0) === s.charAt(1)) {
    return s;
  } else if (s.charAt(4) === s.charAt(3)) {
    return s.slice(2, 5) + s.slice(0, 2);
  } else {
    return s.slice(1, 4) + s.charAt(0) + s.charAt(4);
  }
};

const resortFullHouse = function (s) {
  if (s.charAt(0) === s.charAt(1) && s.charAt(0) === s.charAt(2)) {
    return s;
  } else {
    return s.slice(2, 5) + s.slice(0, 2);
  }
};

const resortFourAKind = function (s) {
  if (s.charAt(0) !== s.charAt(1)) {
    return s;
  } else {
    return s.slice(1, 5) + s.charAt(0);
  }
};

const resortStraight = function (s) {
  if (s.charAt(0) === "n" && s.charAt(1) === "e") {
    return s.slice(1, 5) + "a";
  } else {
    return s;
  }
};

const handleHand = function (hand) {
  const suitsSet = new Set();
  const cardsInfo = {};
  let result = [];
  for (const card of hand) {
    const cardInfo = card.split("");
    const cardRank = cardRanks[cardOrder.indexOf(cardInfo[0])];
    suitsSet.add(cardInfo[1]);
    result.push(cardRank);
    if (cardsInfo[cardRank]) {
      cardsInfo[cardRank] += 1;
    } else {
      cardsInfo[cardRank] = 1;
    }
  }
  let s = result.sort().reverse().join("");
  let rankInfo = handleHandRank(suitsSet, cardsInfo);
  if (rankInfo.rank === 1) {
    s = resortPair(s);
  } else if (rankInfo.rank === 2) {
    s = resortTwoPairs(s);
  } else if (rankInfo.rank === 3) {
    s = resortThreeAKind(s);
  } else if (rankInfo.rank === 6) {
    s = resortFullHouse(s);
  } else if (rankInfo.rank === 7) {
    s = resortFourAKind(s);
  } else if (rankInfo.rank === 4 || rankInfo.rank === 8) {
    s = resortStraight(s);
  }

  return { value: rankInfo.rank + s, rankName: rankInfo.name };
};
const p054Solution = function () {
  const file = fs.readFileSync(
    path.resolve(__dirname, "../assets/p054_poker.txt")
  );
  const hands = file.toString().split("\n");
  let winHands = 0;
  for (const hand of hands) {
    if (hand !== "") {
      const cards = hand.split(" ");
      const player1 = cards.slice(0, 5);
      const player2 = cards.slice(5, 10);
      if (handleHand(player1).value > handleHand(player2).value) {
        winHands += 1;
      }
    }
  }
  return winHands;
};

console.log(p054Solution());
