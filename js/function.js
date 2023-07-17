function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}
bark("rover", 23);
bark("spot", 13);

function whatShallIWear(temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear t-shirt");
  }
}
whatShallIWear(80);
whatShallIWear(60);
whatShallIWear(50);

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);

// Умная машина
function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}
function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}
function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
thingamajig(2);
thingamajig(0);
console.log(clunkCounter);

var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}
var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");

// Генератор Красивых Фраз
function makePhrases() {
  var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  alert(phrase);
}
makePhrases();

