function getSumNumber(num) {
    let sum = 1, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum *= tmp;
    }
    return sum;
}



var test = getSumNumber(33721);
console.log("Умножение всех цыфр в числе 33721, равно " + test);

// ВОЗВЕДЕНИЕ ЧИСЛА В СТЕПЕНЬ

var result = test**3;
console.log(result);

/*var result = 1;
var cnt = 0;
while(cnt < 3) {
	result *= test;
	cnt++;
}
console.log(result);*/


var num = result;
var digits = [];
while (num > 0) {
    digits[digits.length] = num % 10;
    num = parseInt(num / 10);
}
digits.reverse();
alert(digits.slice(0, 2));




/*var num = result;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits);*/