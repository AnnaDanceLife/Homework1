const chooseSeason = () => {
    let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12)'));

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return 'Зима';
    } else if (monthNumber > 2 && monthNumber <= 5) {
        return 'Весна';
    } else if (monthNumber > 5 && monthNumber <= 8) {
        return 'Лето';
    } else if (monthNumber > 8 && monthNumber <= 11) {
        return 'Осень';
    } else {
        return 'Такого номера месяца не существует. Попробуйте еще раз.';
    }
}

console.log(chooseSeason());