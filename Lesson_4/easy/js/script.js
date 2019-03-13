let money, time;


function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = +prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
};

start();

let appData = {
	moneyBudget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	savings: true,
	income: [],
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
				howMany = +prompt('Во сколько обойдется?', '');

			if (spending.length < 50 && spending != "" && howMany != "" && spending != null && howMany != null) {

				console.log('done');
				appData.expenses[spending] = howMany;

			} else {
				i--;
			};
		};
	},
	detectDayBudget: function () { // Оформить расчет дневного бюджета  и вывод на экран этого значения
		appData.oneDay = (appData.moneyBudget / 30).toFixed(); // toFixed() округляем до целого числа

		alert('Ваш бюджет на один день составляет' + '' + appData.oneDay);
	},
	detectLevel: function () { // Оформить блок кода с расчетом уровня достатка как отдельную функцию
		if (appData.oneDay < 100) {
			alert("Вы бомж");
		} else if (appData.oneDay > 100 && appData.oneDay < 300) {
			alert("Можно поесть!");
		} else {
			alert("Ни в чем себе не отказывай!");
		};
	},
	chooseOptExpenses: function () { // расчет не обязательных расходов
		for (let i = 1; i < 4; i++) {

			let spendingNotRequired = prompt('Введите не обязательную статью расходов в этом месяце', '');

			if (spendingNotRequired.length < 50 && spendingNotRequired != "" && spendingNotRequired != null) {

				console.log('done');
				appData.optionalExpenses[i] = spendingNotRequired;

			} else {
				i--;
			};
		};
	},
	checkSaving: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений", ""),
				percent = +prompt("Под какой процент", "");

			appData.monthIncome = save / 100 / 12 * percent;
			alert("Ваш доход в месяц: " + appData.monthIncome);
		};
	},
	chooseIncome: function () {

		for (let i = 0; i < 1; i++) {

			let item = prompt("Что принмесет дополнительный доход? (перечислите через запятую)", "");
			if (item != "" && item != null && (typeof (item)) === "string" && isNaN(item)) {
				appData.income = item.split(', ');
				appData.income.push(prompt("Может что-то еще?", ""));
				appData.income.sort();
			} else {
				alert("Введенное вами значение не является строкой, прошу повторить ввод");
				i--;
			};
		};
		appData.income.forEach(function (item, i) {
			alert("Способы доп.заработка" + ": " + (i + 1) + ": " + item);
		});
	}
};

appData.chooseIncome();

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}