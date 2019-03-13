var now = new Date(),
  day = now.getDay();


var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];


function formatDate(date) {

  var dd = now.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = now.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = now.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


var options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timezone: 'UTC'

};

formatDate(now);

alert(now.toLocaleString("ru", options));
alert(days[day]);
alert('Введите дату в формате YYYY-MM-DD');

function someFunc() {
  var inputOne = document.getElementById('input').value; // получаем значение с инпута и присваиваем переменной
  var inputTwo = document.getElementById('input-2').value; // получаем значение с инпута и присваиваем переменной


  var date1 = new Date(Date.parse(inputOne)).getTime();
  var date2 = new Date(Date.parse(inputTwo)).getTime();

  var html = (+date2 - +date1) / 86400000; // математический расчет полученных данных выше с инпутов

  document.getElementById('input-3').value = html; // выводим значение в третий инпут

}

document.getElementById('enumerate').addEventListener('click', someFunc); // событие при клике на кнопку запускается функция