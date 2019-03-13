// первая часть задания 

let str = "урок-3-был слишком легким";

// меняю первую букву на большую
str = str.charAt(0).toUpperCase() + str.slice(1); // отделяем первый символ str.slice(1) и возвращаем остаток 

// меняю все элементы в строке - на пробел ""
let strong = str.replace(/\-/g, " ");
console.log(strong);


let word = strong.split(' ')[4]; // Разделить по пробелу, взять последнюю часть
let chanch = word.replace(/и|м/g, "о"); // с помощью символа | получилось заменить несколько букв

console.log(chanch);


// вторая часть задания

let arr = [20, 33, 1, "Человек", 2, 3],
    hombre = arr.splice(3, 1); // удаляем текст с массива

let ght = 0;
for (let i = 0; i < arr.length; i++) {
    ght += arr[i];
};
ght = Math.sqrt(ght); // вычисляем квадратный корень числа
console.log(ght);


// третья часть задания

str = "   это очень очень очень длинный текст аж на 50 символов бла бла бла   ";

function arbitrary(str) {

    if ((typeof (str)) === "string") { // проверяем что в переменной передана строка

        /*      str = str.replace(/\s+/g, ''); // удаляем все пробелы с строки */
        /*   console.log(str); */

        str = str.trim();


        if (str.length > 50) {
            let trimmedString = str.substring(0, 50); // высчитываем в строке с 0 до 50 символа и все остальное удаляем
            console.log(trimmedString + "...");
        }

    } else {
        alert("Вы ввели не строку");
    };

};

arbitrary(str);