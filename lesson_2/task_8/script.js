// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), 
// где val – заданное число, pow – степень.


let val = +prompt('Введите число для возведения в степень: '),
    pow = +prompt('Введите степень числа: ');


function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val *= power(val, pow - 1); 
    }
}

alert(power(val, pow));
