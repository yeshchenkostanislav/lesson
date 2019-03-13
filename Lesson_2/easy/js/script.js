let money = +prompt('Ваш бюджет на месяц?', ''),
				time = +prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
  moneyBudget: money,
  timeData: time,
  expenses: {},
		optionalExpenses: {},
  savings: false,
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

for (let i = 0; i < 2; i++) {
let spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
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

appData.oneDay = appData.moneyBudget/30;

alert('Ваш бюджет на один день составляет' +  '' + appData.oneDay);