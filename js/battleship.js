// Объект Представления
let view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// let view = {
//   displayMessage: function (msg) {
//     let messageArea = document.getElementById("messageArea");
//     messageArea.innerHTML = msg;
//   },
//   displayHit: function (location) {
//     let cell = document.getElementById(location);
//     cell.innerHTML = "X"; // Отображение попадания
//     cell.setAttribute("class", "hit");
//   },
//   displayMiss: function (location) {
//     let cell = document.getElementById(location);
//     cell.innerHTML = "O"; // Отображение промаха
//     cell.setAttribute("class", "miss");
//   }
// };

// Объект Модель

let model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
  ],

  fire: function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Есть пробитие!");

        if (this.isSunk(ship)) {
          view.displayMessage("<< Линкор потоплен!!! >>");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("Вы промахнулись!");
    return false;
  },

  isSunk: function (ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function () {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },

  generateShip: function () {
    let direction = Math.floor(Math.random() * 2);
    let row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  },

  collision: function (locations) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = model.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

// // Объект Контроллер

// let controller = {
//   guesses: 0,

//   processGuess: function (guess) {
//     let location = parseGuess(guess);
//     if (location) {
//       this.guesses++;
//       let hit = model.fire(location);

//       if (hit && model.shipsSunk === model.numShips) {
//         view.displayMessage(
//           "Ты потопил все мои линкоры, в " + this.guesses + " выстрелов"
//         );
//       }
//     }
//   },
// };

let controller = {
  guesses: 0,
  previousGuesses: [],

  processGuess: function (guess) {
    let location = parseGuess(guess);
    if (location && !this.isDuplicateGuess(location)) {
      this.guesses++;
      this.previousGuesses.push(location);
      let hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "Ты потопил все мои линкоры, в " + this.guesses + " выстрелов"
        );
      }
    }
  },
  //  Функция для хранения всех предыдущих выстрелов

  isDuplicateGuess: function (guess) {
    view.displayMessage("Вы уже стреляли по этим координатам!");
    return this.previousGuesses.includes(guess);
  },
};

// Функция - обработка выстрела

function parseGuess(guess) {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("«Ой, пожалуйста, введите букву и цифру на доске».");
  } else {
    firstChart = guess.charAt(0); // Метод charAt() возвращает указанный символ из строки.
    let row = alphabet.indexOf(firstChart); // Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("«Ой, этого нет на доске».");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("«Ой, это не по правилам!»");
    } else {
      return row + column;
    }
  }
  return null;
}

// Функция - обработчик события нажатия

function handleFireButton() {
  let guessInput = document.getElementById("guessInput");
  let guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = "";
}

//  Обработчик нажатий клавиш;

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");

  e = e || window.event;

  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;

// Функция - обработчик

function init() {
  let fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;

  let guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}
