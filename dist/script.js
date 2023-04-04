// задание 1
var n = Number(prompt('Введите число'));
var i = 2;
while (i <= n) {
    if (i % 2 == 1)
        n -= 1;
    alert(i);
    i += 2;
}
// задание 2
var n2 = Number(prompt('Введите число'));
while (1 <= n2) {
    if (n2 % 2 == 0)
        n2 -= 1;
    alert(n2);
    n2 -= 2;
}
// задание 3
var n3 = Number(prompt('Введите число'));
var i3 = 1;
while (i3 <= n3) {
    if (n3 % i3 == 0)
        alert(i3);
    i3 += 1;
}
// задание 4
var procent = Number(prompt('Введите годовую ставку'));
var years = 0;
i = 0;
while (i < 200) {
    i += procent;
    years++;
}
alert("\u0427\u0435\u0440\u0435\u0437 " + years + " \u043B\u0435\u0442 \u0432\u043A\u043B\u0430\u0434 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u0441\u044F \u0432\u0434\u0432\u043E\u0435");
// задание 5
for (var i_1 = 0; i_1 < 10;) {
    var random = Math.floor(Math.random() * 20);
    if (random % 4 == 0)
        continue;
    console.log(random);
    i_1++;
}
// задание 6
var volume = Number(prompt('Введите объём воды'));
var days = 0;
while (volume > 10) {
    volume -= volume * 0.1;
    days++;
    console.log("\u0447\u0435\u0440\u0435\u0437 " + days + " \u0434\u043D\u0435\u0439 \u043E\u0431\u044A\u0451\u043C \u0440\u0430\u0432\u0435\u043D " + volume);
}
alert("\u0422\u0430\u043A\u043E\u0433\u043E \u043E\u0431\u044A\u0451\u043C\u0430 \u0432\u043E\u0434\u044B \u0445\u0432\u0430\u0442\u0438\u0442 \u043D\u0430 " + (days - 1) + " \u0434\u043D\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B ");
