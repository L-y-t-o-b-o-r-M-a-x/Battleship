let taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};
// let Chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   mileage: 1021
//   };
//   let Fiat = {
//   make: "Fiat",
//   model: "500",
//   year: 1957,
//   color: "Medium Blue",
//   passengers: 2,
//   convertible: false,
//   mileage: 88000
// };
function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}
let worthALook = prequal(taxi);
if (worthALook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Invalid password! No secret for you.";
  }
}
function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}
let superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit.",
};
let secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

// Генератор машин
function makeCar() {
  let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  let years = [1955, 1957, 1948, 1954, 1961];
  let colors = ["red", "blue", "tan", "yellow", "white"];
  let convertible = [true, false];

  let rand1 = Math.floor(Math.random() * makes.length);
  let rand2 = Math.floor(Math.random() * models.length);
  let rand3 = Math.floor(Math.random() * years.length);
  let rand4 = Math.floor(Math.random() * colors.length);
  let rand5 = Math.floor(Math.random() * 5) + 1;
  let rand6 = Math.floor(Math.random() * 2);

  let car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  };
  return car;
}

function displayCar(car) {
  console.log(
    "Your new car is a " + car.year + " " + car.make + " " + car.model
  );
}

let carToSell = makeCar();
displayCar(carToSell);

// Усовершенствование метода drive

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,

  start: function () {
    if(this.fuel == 0) {
      this.started = false;
      alert("The car is on empty, fill up before starting!");
    }else {
      this.started = true;
      alert("starting!");
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if(this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      }
    } else {
      alert("Uh oh, out of fuel.");
      this.stop();
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

// var eightBall = {
//   index: 0,
//   advice: ["yes", "no", "maybe", "not a chance"],
//   shake: function () {
//     this.index = this.index + 1;
//     if (this.index >= this.advice.length) {
//       this.index = 0;
//     }
//   },
//   look: function () {
//     return this.advice[this.index];
//   },
// };
// eightBall.shake();
// console.log(eightBall.look());

// var cadi = {
//   make: "GM",
//   model: "Cadillac",
//   year: 1955,
//   color: "tan",
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
//   started: false,

//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };
// cadi.start();
// cadi.drive();
// cadi.stop();

// var chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
//   started: false,

//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };
// // chevy.start();
// // chevy.drive();
// // chevy.stop();

// for(let prop in chevy) {
//   console.log(prop + chevy[prop]);
// }

