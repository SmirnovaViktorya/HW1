function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function areNumbersEqual(userNum, randomNum) {
    let userNum = userNum();
    let randomNum = randomNum();
    if (userNum == randomNum) {
        alert(`Угадал !!! Число ${userNum}!`)
    } else {
        alert(`Не угадал :( \nТвое число ${userNum}, а рандомное число ${randomNum}`)
    }
}

