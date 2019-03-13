let start = document.getElementById('start'),
  budget = document.getElementsByClassName('budget-value')[0],
  daybudget = document.getElementsByClassName('daybudget-value')[0],
  level = document.getElementsByClassName('level-value')[0],
  expenses = document.getElementsByClassName('expenses-value')[0],
  optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
  income = document.getElementsByClassName('income-value')[0],
  incom = document.getElementsByClassName('income-value')[1],
  yearsavings = document.getElementsByClassName('yearsavings-value')[0],
  expens = document.querySelectorAll('.expenses-item'),
  buttons = document.querySelectorAll('button'),
  approveButon = document.getElementsByTagName('button')[0],
  approveButonTwo = document.getElementsByTagName('button')[1],
  calculateButon = document.getElementsByTagName('button')[2],
  startButon = document.getElementsByTagName('button')[3],
  input = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('.choose-income '),
  saving = document.querySelector('#savings'),
  sumValue = document.querySelector('#sum'),
  percentValue = document.querySelector('#percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');

let money,
  time,
  appData = {
    moneyBudget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false,
    income: [],
  };
// запрещаем ввод текста в поле с ценой
expens[1].addEventListener('input', (event) => {
  if (!event.target.value.replace(/\D/g, "")) {
    event.target.value = '';
  }
});
expens[3].addEventListener('input', (event) => {
  if (!event.target.value.replace(/\D/g, "")) {
    event.target.value = '';
  }
});


start.addEventListener('click', function () { // присваиваем действие при клике на кнопку которую мы занесли в меременную start
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money === "" || money === null) { // проверяем что введенные данне являются числом, что пользователь не нажал отмену или не пытается отправить пустую строку
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money; // заносим полученные данные в обьект 
  appData.timeData = time; // заносим полученные данные в обьект
  budget.textContent = money.toFixed(); // выводим полученное значение в поле, которое внесли в переменную budget и округляем до целого числа toFixed()
  year.value = new Date(Date.parse(time)).getFullYear(); // получаем от пользователя данные и выводим их в инпут который мы внесли в переменную year
  month.value = new Date(Date.parse(time)).getMonth() + 1; // получаем от пользователя данные и выводим их в инпут который мы внесли в переменную month
  day.value = new Date(Date.parse(time)).getDate(); // получаем от пользователя данные и выводим их в инпут который мы внесли в переменную day

});
// блокируем все кнопки кроме главной начать расчет
buttons.forEach(function (item) {
  item.disabled = true;
});
startButon.disabled = false;
// при нажатии на гравную кнопку запускаем функцию которая отслеживает изменения инпутов, если изменения происходят, разблокируется кнопка
startButon.addEventListener('click', function () {

  for (let i = 0; i < expens.length; i++) {

    if (expens[i] !== "") {
      approveButon.disabled = false;
      calculateButon.disabled = false; // вместе с кнопкой утвердить в обязательных рассходах мы разблокируем кнопку рассчитат
    } else {
      expens[i].addEventListener('input', function () {
        approveButon.disabled = false;
        calculateButon.disabled = false; // вместе с кнопкой утвердить в обязательных рассходах мы разблокируем кнопку рассчитат
      });
    };
  }
});



approveButon.addEventListener('click', function () {

  let sum = 0;

  for (let i = 0; i < expens.length - 1; i++) {
    let spending = expens[i].value,
      howMany = expens[++i].value;

    if (spending.length < 50 && spending !== "" && howMany !== "" && spending !== null && howMany !== null) {

      appData.expenses[spending] = howMany;
      sum += +howMany;
      appData.summa = sum; // сумма обязательных расходов заношу в обьект
    } else {
      i--;
    }
  }
  expenses.textContent = sum;
});

// при нажатии на гравную кнопку запускаем функцию которая отслеживает изменения инпутов, если изменения происходят, разблокируется кнопка
startButon.addEventListener('click', function () {

  for (let i = 0; i < input.length; i++) {

    input[i].addEventListener('change', function () {
      approveButonTwo.disabled = false;
    });
  }
});

// запрещаем ввод цыфры и английские буквы в поле не обязательные расходы
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', (event) => {
    if (!event.target.value.replace(/[a-zA-Z0-9]/g, "")) {
      event.target.value = '';
    }
  });
}

approveButonTwo.addEventListener("click", function () {
  optionalexpenses.innerHTML = ""; //при повторном нажатии на кнопку данные в поле сначала очищаются, только потом записываются новые
  for (let i = 0; i < input.length; i++) {

    let spendingNotRequired = input[i].value;

    if (spendingNotRequired.length < 50 && spendingNotRequired !== "" && spendingNotRequired !== null) {
      appData.optionalExpenses[i] = spendingNotRequired;
      optionalexpenses.textContent += appData.optionalExpenses[i] + '';

    } else {
      i--;
    };
  };
});
// проверяем что пользователь ввел свой бюджет на месяц и обязательные расходы после чего разблокируем кнопку рассчитать


calculateButon.addEventListener('click', function () { // Оформить расчет дневного бюджета  и вывод на экран этого значения

  if (appData.budget !== undefined && appData.summa !== undefined) {
    appData.oneDay = ((appData.budget - appData.summa) / 30).toFixed(); // toFixed() округляем до целого числа
    daybudget.textContent = appData.oneDay;
    // Оформить блок кода с расчетом уровня достатка как отдельную функцию
    if (appData.oneDay < 100) {
      level.textContent = "Вы бомж";
    } else if (appData.oneDay > 100 && appData.oneDay < 300) {
      level.textContent = "Можно поесть!";
    } else {
      level.textContent = "Ни в чем себе не отказывай!";
    };
  } else {
    daybudget.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener('input', function () { // при введении текста в поле доп дохода , информация сразу дублируется в поле с права доп доход

  let item = chooseIncome.value;
  appData.income = item.split(', ');
  income.textContent = appData.income;
});

saving.addEventListener('click', function () {
  if (appData.savings) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    incom.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);

  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    incom.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);

  }
});