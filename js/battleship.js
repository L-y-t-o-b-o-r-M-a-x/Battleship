let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 2;
let isSunk = false; // потоплен корабль или нет
let hits = 0; // количества попаданий
let guesses = 0; // количества попыток
let guess; // номера текущей попытки


while (isSunk == false) {  // ЦИКЛ: пока корабль не будет потоплен
    guess = prompt("Готовь, целься, стреляй! (введите число 0-6):"); // ПОЛУЧИТЬ координаты выстрела
    if (guess < 0 || guess > 6) {  // Проверяем предположение пользователя...
        alert("Пожалуйста, введите число 0-6!");
    } else {
        guesses = guesses + 1; // Похоже, введенное значение корректно; увеличиваем переменную guesses на 1.

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("«Есть пробитие!»");
            hits = hits + 1;  // Если выстрел пришелся в одну из клеток корабля, увеличиваем счетчик hits.
            if (hits == 3) {
                isSunk = true;
                alert("«Ты потопил мой линкор!»");
            }
        } else {
            alert("«Промах!»");
        }
    }
}
let stats = "Ты использовал " + guesses + " попытки чтобы потопить линкор, " + "значит ваша точность стрельбы равна " + (3/guesses);
alert(stats);
