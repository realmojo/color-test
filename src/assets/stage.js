export const boardWidth = 480;

export const totalSpan = 24;

export let timer = 20;

const getRandomNumber = (max) => {
  max = max * max - 1;
  return Math.floor(Math.random() * (max - 0 + 1));
};

// tileNumber: 2, 3, 4, 6, 8, 12
export const stages = [
  {
    level: 1,
    tileNumber: 2,
    normalColor: "#ffeaa7",
    answerColor: "#fdcb6e",
    answerKey: getRandomNumber(2),
  },
  {
    level: 2,
    tileNumber: 2,
    normalColor: "#ffeaa7",
    answerColor: "#fdcb6e",
    answerKey: getRandomNumber(2),
  },
  {
    level: 3,
    tileNumber: 3,
    normalColor: "#ffeaa7",
    answerColor: "#fdcb6e",
    answerKey: getRandomNumber(3),
  },
  // {
  //   level: 1,
  //   tileNumber: 4,
  //   span: 6, // 24가 가로 길이
  //   normalColor: "#ffeaa7",
  //   answerColor: "#fdcb6e",
  //   answerKey: 2,
  //   marginTop: 20,
  // },
];
