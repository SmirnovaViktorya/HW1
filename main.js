//******************* TASK 1 **********************

function getNumber() {
    return prompt("Введи число");
}

function inputNumber() {
    let num = getNumber();
    while (!isNaN(num)) {
        num = getNumber();
    }
    return num;
}

function calcIterations(num) {
    let i = 0;
    while (num > 10) {
        num = num / 2;
        i++;
    }
    return i;
}

//******************* TASK 2 **********************

function getUserNumber() {
    let num = prompt("Введи число от 1 до 10");
    return num;
}

function checkUserNumber(num) {
    num = Number(num);
    if (Number.isInteger(num) && num >= 1 && num <= 10 && (!isNaN(num))) {
        return true;
    } else {
        alert("Некорректно введены данные, попробуй еще раз");
        return false;
    }
}

function numberInput() {
    let num = getUserNumber();
    while (!checkUserNumber(num)) {
        num = getUserNumber();
    }
    return num;
}

//******************* TASK 3 **********************

function getStr() {
    let str = prompt("Введи строку");
    return str;
}

function getArrayOfWords(str) {
    let words = str.split(" ");
    return words;
}

function upperCaseFirstLetter(word) {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1);
}

function getNewStr(words) {
    let newWords = [];
    for (let i = 0; i <= words.length; i++) {
        newWords.push(upperCaseFirstLetter(words[i]));
    }
    return newWords.join(" ");
}

//******************* TASK 4 **********************

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

//******************* TASK 5 **********************

function sumDigitOfNumber(num = 2021) {
    let sum = 0;
    let n = num;
    for (let i = 0; i < String(num).length; i++) {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }
    if (isNaN(sum) || !Number.isInteger(sum)) {
        alert("Введено не число или не целое число")
    } else {
        alert(`Сумма цифр введенного числа ${sum}`);
    }
}

//******************* TASK 6 **********************

function transformToKebabCase(str) {
    return str.toLowerCase().split(" ").join("-");
}

//******************* TASK 7 **********************

function getArrayOfWords(str) {
    let words = str.split(" ");
    return words;
}

function createAbbrev(words) {
    let abb = [];
    for (let i = 0; i < words.length; i++) {
        abb.push(words[i][0]);
    }
    return abb.join("").toUpperCase();
}

//******************* TASKS **********************

/*1*/alert('Задание 1:\nНапишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.');
/*1*/ alert(`Потребовалось ${calcIterations(inputNumber())} итераций`);

/*2*/ alert('Задание 2:\nНаписать функцию, которая запрашивает у пользователя число от 1 до 10; генерирует рандомное число от 1 до 10; выводит в алерт юзеру сообщение о том, что он угадал число, если числа совпали. и, соответственно - нет, если не угадал');
/*2*/ areNumbersEqual(numberInput, getRandomNumber);

/*3*/ alert('Задание 3:\nНапишите функцию, которая будет принимать строку, нужно вернуть новую строку, которая будет делать заглавным первый символ каждого слова.');
/*3*/ alert(getNewStr(getArrayOfWords(getStr())));

/*4*/ console.log('Задание 4:\nНаписать функцию, которая принимает любое количество чисел и возввращает их сумму.');
/*4*/ console.log(`sum() = ${sum()}`);
/*4*/ console.log(`sum(5, 2.5) = ${sum(5, 2.5)}`);
/*4*/ console.log(`sum(5, 8, 4) = ${sum(5, 8, 4)}`);
/*4*/ console.log(`sum(5, 7, 8, 9, 5, 2, 0) = ${sum(5, 7, 8, 9, 5, 2, 0)}`);

/*5*/ alert('Задание 5:\nНаписать функцию которая будет принимать число ( дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число. Для 2021 это будет 5.');
/*5*/ sumDigitOfNumber(prompt("Введи целое число"));

/*6*/ alert('Задание 6:\nНаписать функцию, которая преобразуем любую строку в строку написанную кебаб кейсом.');
/*6*/ alert(`Преобразованная строка: ${transformToKebabCase(getStr())}`);

/*7*/ alert('Задание 7:\nНаписать функцию, которая из любой фразы сделает и вернёт её аббревиатуру.');
/*7*/ alert(`Аббревиатура: ${createAbbrev(getArrayOfWords(getStr()))}`);
