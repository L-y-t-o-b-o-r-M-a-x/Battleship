let access =
document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
alert(code);

let planet = document.getElementById("code12");
console.log(planet);

function addSongs() {
  let song1 = document.getElementById("song1");
  let song2 = document.getElementById("song2");
  let song3 = document.getElementById("song3");

  song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
  song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
  song3.innerHTML = "I Code the Line, by Johnny JavaScript";
  }
  window.onload = addSongs;

  function init() {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
    }
    window.onload = init;