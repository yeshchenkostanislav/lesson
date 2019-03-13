let money, time;


function start() {
		money = +prompt('Ваш бюджет на месяц?', '');
		time = +prompt('Введите дату в формате YYYY-MM-DD', '');

	while ( isNaN(money) || money == "" || money == null) {
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
  income: []
};		

/*let i = 0;
while (i < 2) {
		let spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
						howMany = +prompt('Во сколько обойдется?', '');

						appData.expenses[spending] = howMany;
  i++;
};*/

/*let i = 0;
do {
  let spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
						howMany = +prompt('Во сколько обойдется?', '');

						appData.expenses[spending] = howMany;
  i++;
} while (i < 2);	*/	

let spending, howMany;

function chooseExpenses() {

for (let i = 0; i < 2; i++) {
				spending = prompt('Введите обязательную статью расходов в этом месяце', '');
				howMany = +prompt('Во сколько обойдется?', '');

				if ( spending.length < 50 && spending != "" && howMany != "" && spending != null && howMany != null)  {

					console.log('done');
					appData.expenses[spending] = howMany;

			} else {

				i--;
/*				let	spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
								howMany = +prompt('Во сколько обойдется?', '');

								appData.expenses[spending] = howMany;*/

			};
};

}

chooseExpenses(); 

// Оформить расчет дневного бюджета  и вывод на экран этого значения
function detectDayBudget() {

	appData.oneDay = (appData.moneyBudget/30).toFixed(); // toFixed() округляем до целого числа

	alert('Ваш бюджет на один день составляет' +  '' + appData.oneDay);

};

detectDayBudget();

// Оформить блок кода с расчетом уровня достатка как отдельную функцию

function detectLevel() {

	if (appData.oneDay < 100) {
			alert("Вы бомж");
	} else if (appData.oneDay > 100 && appData.oneDay < 300) {
		alert("Можно поесть!");
	} else {
		alert("Ни в чем себе не отказывай!");
	};

};

detectLevel();

// расчет не обязательных расходов 
function chooseOptExpenses() {

for (let i = 1; i < 4; i++) {

				let spendingNotRequired = prompt('Введите не обязательную статью расходов в этом месяце', '');

				if ( spendingNotRequired.length < 50 && spendingNotRequired != "" && spendingNotRequired != null )  {

					console.log('done');
					appData.optionalExpenses[i] = spendingNotRequired;

			} else {

				i--;
/*				let	spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
								howMany = +prompt('Во сколько обойдется?', '');

								appData.expenses[spending] = howMany;*/

			};
};

}

chooseOptExpenses();

function checkSaving() {
	if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений", ""),
							percent = +prompt("Под какой процент", "");

							appData.monthIncome = save/100/12*percent;
							alert("Ваш доход в месяц: " + appData.monthIncome);
	};

};

checkSaving();