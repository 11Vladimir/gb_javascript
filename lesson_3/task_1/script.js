// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


function startScript() {
    var i = 0,
        maxNumber = 100,
        j,
        simpleNumber,
        result = '<b>Ответ:</b> ';

    do {
        j = 1;

        while (j < i) {
            if (i % j == 0 && j != 1) {
                simpleNumber = false;
                break;
            } else {
                simpleNumber = true;
            }
            j++;
        }

        if (simpleNumber) {
            result += i + '; ';
        }
    } while (++i <= maxNumber);
}
document.write(startScript());
