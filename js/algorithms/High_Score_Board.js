function createScoreBoard() {
  let highScoreBoard = {
    "The Best Ever": 1000000,
  };

  return highScoreBoard;
}
// console.log(createScoreBoard());

function addPlayer(scoreBoard, newPlayer, newScore) {
  scoreBoard[newPlayer] = newScore;
  return scoreBoard;
}
// console.log(addPlayer({ 'The Best Ever': 1000000 }, 'José Valim', 486373));

function removePlayer(scoreBoard, playerName) {
  //find if the desired player exists
  //if it exists, remove it
  //if not,
  //return updated project
  if (scoreBoard.hasOwnProperty(playerName)) {
    delete scoreBoard[playerName];
  }
  return scoreBoard;
}
// console.log(removePlayer({ 'Dave Thomas': 0 }, 'Jocelyn Flowers'));

function updateScore(scoreBoard, playerName, pointsToAdd) {
  //find the player
  //add the points
  //return the object
  let holder = scoreBoard[playerName];
  scoreBoard[playerName] = holder + pointsToAdd;

  return scoreBoard;
}
// console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73));

function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    let holder = scoreBoard[key];
    scoreBoard[key] = holder + 100;
  }

  return scoreBoard;
}

const params = {
  score: 45,
  normalizeFunction: function (score) {
    return score * 3 - 10;
  },
};

function normalizeScore(obj) {
  return obj.normalizeFunction(obj["score"]);
}
// console.log(normalizeScore(params));

// const obj = {
//   name: "Ali",
//   age: 65,
// };

// if(scoreBoard1.hasOwnProperty('age')){
//     return console.log(scoreBoard1[1]);
// }

// console.log(scoreBoard1.hasOwnProperty('age'));

// for (let key in scoreBoard) {
//   console.log(key, scoreBoard[key]);
// }
