let scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

function printAndGetHighScore(scores) {  // Параметр scores в функции printAndGetHighScore используется для получения и сохранения значения, которое передается в качестве аргумента при вызове функции. Он служит заполнителем для массива результатов, который будет предоставлен.
  let highScore = 0;
  let output;
  for (let i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score:" + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

function getBestResults(scores, highScore) {
  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

let bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

let costs = [.25, .27, .25, .25, .25, .25,
  .33, .31, .25, .29, .27, .22,
  .31, .25, .25, .33, .21, .25,
  .25, .25, .28, .25, .24, .22,
  .20, .25, .30, .25, .24, .25,
  .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(scores, costs, highScore) {
  let cost = 100;
  let index;
  for(let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if(cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");



// let hasBubbleGum = [false, false, false, true];
// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// // let i = 0;

// // while (i < hasBubbleGum.length) {
// //   if (hasBubbleGum[i]) {
// //     console.log(products[i] + " contains bubble gum");
// //   }
// //   i = i + 1;
// // }
// for (let a = 0; a < hasBubbleGum.length; a++) {
//   if (hasBubbleGum[a]) {
//     console.log(products[a] + " contains bubble gum");
//   }
// }
