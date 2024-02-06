var month = parseInt(prompt("Введите месяц рождения (например, январь - 1):"));
var day = parseInt(prompt("Введите день рождения ( день только! ): "));

if ((month === 1 && day >= 20 && day <= 31) || (month === 2 && day >= 1 && day <= 18)) {
    alert("Ваш знак зодиака - Водолей");
} else if ((month === 2 && day >= 19 && day <= 28) || (month === 3 && day >= 1 && day <= 20)) {
    alert("Ваш знак зодиака - Рыбы");
} else if ((month === 3 && day >= 21 && day <= 31) || (month === 4 && day >= 1 && day <= 19)) {
    alert("Ваш знак зодиака - Овен");
} else if ((month === 4 && day >= 20 && day <= 30) || (month === 5 && day >= 1 && day <= 20)) {
    alert("Ваш знак зодиака - Телец");
} else if ((month === 5 && day >= 21 && day <= 31) || (month === 6 && day >= 1 && day <= 20)) {
    alert("Ваш знак зодиака - Близнецы");
} else if ((month === 6 && day >= 21 && day <= 30) || (month === 7 && day >= 1 && day <= 22)) {
    alert("Ваш знак зодиака - Рак");
} else if ((month === 7 && day >= 23 && day <= 31) || (month === 8 && day >= 1 && day <= 22)) {
    alert("Ваш знак зодиака - Лев");
} else if ((month === 8 && day >= 23 && day <= 31) || (month === 9 && day >= 1 && day <= 22)) {
    alert("Ваш знак зодиака - Дева");
} else if ((month === 9 && day >= 23 && day <= 30) || (month === 10 && day >= 1 && day <= 22)) {
    alert("Ваш знак зодиака - Весы");
} else if ((month === 10 && day >= 23 && day <= 31) || (month === 11 && day >= 1 && day <= 21)) {
    alert("Ваш знак зодиака - Скорпион");
} else if ((month === 11 && day >= 22 && day <= 30) || (month === 12 && day >= 1 && day <= 21)) {
    alert("Ваш знак зодиака - Стрелец");
} else if ((month === 12 && day >= 22 && day <= 31) || (month === 1 && day >= 1 && day <= 19)) {
    alert("Ваш знак зодиака - Козерог");
} else {
    alert("Произошла ошибка!");
}