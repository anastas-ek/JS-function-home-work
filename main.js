// 1)Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
// чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function compare(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return -1;
    } else {
        return 0;
    }
}
// console.log(`${compare(95, 8)}`);


// 2)писать функцию, которая вычисляет факториал переданного ей числа.

function fac(num1) {
    if (!isFinite(num1)) {
        return `Вы ввели не число. Вы ввели: ${num1}`;
    } else if (num1 <= 0) {
        return `Для чисел <=0 факториал не вычисляеться! Ваше число : ${num1}`;
    } else if (num1 % 1 !== 0) {
        return `Для дробных чисел факториал не вычисляеться! Ваше число: ${num1}`;
    } else {
        let sum = 1;
        for (let k = num1; k > 0; k--) {
            sum = sum * k;
        }
        return sum;
    }
}

// console.log(fac(5));





// 3)Написать функцию, которая принимает три отдельные цифры
//  и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function stick(num1, num2, num3) {
    if (!isFinite(num1) || !isFinite(num2) || !isFinite(num3)) {
        return `Вы ввели не число. Вы ввели: ${num1}; ${num2}; ${num3}`;
    } else if (num1 % 1 !== 0 || num2 % 1 !== 0 || num3 % 1 !== 0 || num1 < 0 || num2 < 0 || num3 < 0) {
        return `Нужно было ввести целые цифры от 1 до 9! Вы ввели: ${num1}; ${num2}; ${num3}`;
    } else {
        return `${num1}${num2}${num3}`;
    }
}
// console.log(stick(1, 4, 8));





// 4)Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//  Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


function area(a, b) {
    if (!isFinite(a) || !isFinite(b) || b <= 0 || a <= 0) {
        return `Вы ввели не коректные числа. Вы ввели: ${a}; ${b}`;
    } else {
        return `Площадь прямоугольника с сторонами ${a}см и ${b}см равна ${a * b}см.кв`;
    }
}
// console.log(area(5, 8));




// 5)Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//  Совершенное число – это число, равное сумме всех своих собственных делителей.

function cool_number(num) {
    if (!isFinite(num) || num <= 0 || num % 1 !== 0) {
        return `Вы ввели не коректное числа. Вы ввели: ${num}`;
    } else {
        let divisor = '';
        let sum = 0;
        for (let k = 1; k < num; k++) {
            if (num % k == 0) {
                divisor = divisor + '' + k + ' ;';
                sum = sum + k;
            }
        }
        if (sum == num) {
            return `Данное число ${num} явл. совершенным числом.\nВсе его делители : ${divisor} \nРавны в сумме этому же числу ${sum}`;
        } else {
            return `Данное число ${num} НЕявл. совершенным числом.\nВсе его делители : ${divisor} \nНЕРавны в сумме этому же числу, а равны ${sum}`;
        }
    }
}

// console.log(cool_number(6));





// 6)писать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными.
//  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
function cool_number2(num) {
    let sum = 0;
    for (let k = 1; k < num; k++) {
        if (num % k == 0) {
            sum = sum + k;
        }
    }
    if (sum == num) {
        return num;
    } else {
        return;
    }

}
function check(min, max) {

    for (let i = min; i <= max; i++) {
        if (isFinite(cool_number2(i))) {
            console.log(cool_number2(i));
        }

    }
}

// check(3, 1000);


// 7)Написать функцию, которая принимает время (часы, минуты, секунды)
//  и выводит его на экран в формате «чч:мм:сс».Если при вызове функции 
//  минуты и/или секунды не были переданы, то выводить их как 00.

function data(hour, minute, second) {
    hour = hour + '';
    minute = minute + '';
    second = second + '';
    let data;
    if (!isFinite(hour) || hour % 1 !== 0 || hour < 0 || hour > 24 || hour.length > 2 || minute.length > 2 || second.length > 2 || minute < 0 || minute > 60 || second > 60 || second < 0 || minute % 1 !== 0 || second % 1 !== 0 || (!isFinite(minute) && minute !== '0' && minute !== '00' && minute !== '') || (!isFinite(second) && second !== '0' && second !== '00' && second !== '')) {
        return `Вы ввели некоректные данные \n<<чч:мм:сс>>\n<<${hour} ; ${minute} ; ${second}) >>`;
    } else {
        if (hour.length == 2) {
            data = hour;
        } else if (hour.length == 1) {
            data = `0${hour}`;
        }
        if (minute.length == 2) {
            data = `${data} : ${minute}`;
        } else if (minute.length == 1) {
            data = `${data} : 0${minute}`;
        } else {
            data = `${data} : 00`;
        }
        if (second.length == 2) {
            data = `${data} : ${second}`;
        } else if (second.length == 1) {
            data = `${data} : 0${second}`;
        } else {
            data = `${data} : 00`;
        }
        return `<< ${data} >>`;
    }

}
//  console.log(data(23, '', 8));


// 8) Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


function data_in_sec(h, m, s) {
    let data_new;
    data_new = data(h, m, s);
    let num1 = +data_new.substr(3, 2);
    let num2 = +data_new.substr(8, 2);
    let num3 = +data_new.substr(13, 2);
    if (isFinite(num1) && isFinite(num2) && isFinite(num3)) {
        let sum = num1 * 3600 + num2 * 60 + num3;
        return sum;
    } else {
        return (data(h, m, s));
    }

}
// console.log(data_in_sec(12, '', 55));



// 9)Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function sec_in_data(sec) {
    let hour = '00';
    let minute = '00';
    let second = '00';
    if (!isFinite(sec) || sec < 0 || sec % 1 !== 0) {
        return (`Вы ввели некоректные данные!\nВы ввели :\n${sec}`);
    }
    if (sec >= 3600) {
        hour = Math.floor(sec / 3600);
        sec = sec - hour * 3600;
    }
    if (sec >= 60) {
        minute = Math.floor(sec / 60);
        sec = sec - minute * 60;
    }
    if (sec < 60) {
        second = sec;
    }

    return data(hour, minute, second);

}

// console.log(sec_in_data(3661));





// 10)Написать функцию, которая считает разницу между датами.
//  Функция принимает 6 параметров, которые описывают 2 даты,
//   и возвращает результат в виде строки «чч:мм:сс». При выполнении 
//   задания используйте функции из предыдущих 2-х заданий: сначала обе даты 
//   переведите в секунды, узнайте разницу в секундах, а потом разницу 
//   переведите обратно в «чч:мм:сс»



function dates(hour1, minute1, second1, hour2, minute2, second2) {
    let sec1 = data_in_sec(hour1, minute1, second1);
    let sec2 = data_in_sec(hour2, minute2, second2);
    if (!isFinite(sec1)) {
        return data_in_sec(hour1, minute1, second1);
    }
    if (!isFinite(sec2)) {
        return data_in_sec(hour2, minute2, second2);
    }

    let sec3 = Math.abs(sec1 - sec2);
    return sec_in_data(sec3);
}
// console.log(dates(12, 00, 12, 08, 00, ''));