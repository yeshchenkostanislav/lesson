str = "это очень очень очень длинный текст аж на 50 символов бла бла бла";

function arbitrary(str) {

    if ((typeof (str)) === "string") { // проверяем что в переменной передана строка

        /*      str = str.replace(/\s+/g, ''); // удаляем все пробелы с строки */
        /*   console.log(str); */


        console.log(str.trim());