let numberObject = {};


function numberToObject() {
    numberObject['Сотни'] = 0;
    numberObject['Десятки'] = 0;

    let userInput = document.getElementById('inputNumber').value,
        userNumber = +userInput,
        numberSplit = userInput.split('').reverse(),
        numberStringLen = numberSplit.length;

    if (isNaN(userInput) || userNumber > 999 || userNumber < 0) {
        console.log('Введенное число не соответствует условию. Повторите ввод.');
    } else {
        if ( userNumber > 2) {
			numberObject['Сотни'] = +numberSplit[2];
        }
		if (numberStringLen > 1 && (numberSplit[0] != numberSplit[1])) {
		        numberObject['Десятки'] = +numberSplit[1];
        }
		numberObject['Единицы'] = +numberSplit[0];
		console.log(numberObject);
    }
}
