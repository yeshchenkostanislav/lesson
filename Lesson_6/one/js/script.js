let wrapMenu = document.querySelector('.menu '),
  menuItem = document.querySelectorAll('.menu-item'),
  li = document.createElement('li'),
  title = document.getElementById('title'),
  adv = document.getElementsByClassName('adv'),
  div = document.createElement('div'),
  promp = document.querySelector('#prompt'),
  column = document.querySelectorAll('.column');


document.body.style.background = 'url(../img/apple_true.jpg)';
title.innerHTML = "Мы продаем только подлинную технику Apple"; // заменяем текст который находится в диве на тот что в скобках  


li.innerHTML = 'Пятый пункт'; // добавляю текст в созданный элемент
li.classList.add('menu-item'); // добавляю класс к созданному элементу
wrapMenu.appendChild(li); // добавляю созданный элмент в родительнский див

// вот эта жуть чтобы поменять местами два блока на странице
var d11 = menuItem[1].cloneNode(true); // созадю копию элемента
var d22 = menuItem[2].cloneNode(true); // созадю копию элемента
menuItem[1].parentNode.insertBefore(d22, menuItem[1]); // помещаю созданную копию перед элементом котоый хочу заменить
menuItem[2].parentNode.insertBefore(d11, menuItem[2]); // помещаю созданную копию перед элементом котоый хочу заменить
menuItem[1].parentNode.removeChild(menuItem[1]); // удаляю оригинал
menuItem[2].parentNode.removeChild(menuItem[2]); // удаляю оригинал

column[1].removeChild(adv[0]); // удаляем элемент

for (let i = 0; i < 1; i++) {
  let answer = prompt("как вы относитесь к технике Apple", "");
  if (answer !== "" && answer !== null && (typeof (answer)) === "string") {
    div.innerHTML = answer; // присваиваем созданному элементу полученный ответ от пользователя
    promp.appendChild(div); // добавляем как дочерний элемент с присвоенным текстом выше
  } else {
    alert("Прошу вас ответить");
    i--;
  }
};