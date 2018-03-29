/*jshint esversion: 6 */

//  Переменные

let budget,
	shopName,
	time,
	price = 1000;


// Функции

// Функция для запрашивания у пользователя Бюджета (budget) 
// и Названия магазина (shopName) и проверка правильности ввода

function start() {
	
	budget = prompt("Ваш бюджет?");
	
	while (isNaN(budget) || budget === "" || budget === null) {
		budget = prompt("Ваш бюджет?");
	} 

	shopName = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

// Функция записи в массив Типа товаров (shopGoods) и проверка правильности ввода

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");

		if (( typeof(a)) === 'string' && ( typeof(a)) !== null && a !== '' && a.length < 50 ) {
			console.log('Все верно! ');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}

// Функция проверки времени работы магазина (time), время передаем при вызове 
// функции

function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
	} else if (time > 0 && time < 20) {
			console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
				}
}

// Функция расчета дневного бюджета (mainList.budget)

function dailyBudget() {
	alert( mainList.budget / 30 );
}

// Функция дисконтной системы (mainList.discount)

function discountSystem() {
	if ( mainList.discount ) {
		price *= 0.8;
		alert ('Цена за товар: ' + price);
	}
}

// Функция найма сотрудников (mainList.employers)

function employersHire() {
	for (let i = 0; i < 4; i++) {
		
		let employeeName = prompt("Введите имя сотрудника");
		
		if (( typeof(employeeName)) === 'string' && ( typeof(employeeName)) !== null && employeeName !== '' && employeeName.length < 60 ) {
			mainList.employers[i + 1] = employeeName;
			console.log( 'Сотрудник добавлен! ' );
		} else {
			i = i - 1;

			console.log( 'Ошибка при вводе имени сотрудника!' );
		}
	}
}

// Вызов функции для запрашивания у пользователя Бюджета (budget) 
// и Названия магазина (shopName)

start();

// Объект mainList 

let mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {
		1: "Имя" 
	},
	open: true,
	discount : true
};


// Вызываем функции

// Вызов функции записи в массив Типа товаров (shopGoods) 

chooseGoods();

// Вызов функция проверки времени работы магазина (time) с параметром времени 

workTime(18);

// Вызов функции расчета дневного бюджета (mainList.budget)

dailyBudget();

// Вызов функции системы дистонта (mainList.discount)

discountSystem();

// Вызов функции найма сотрудников (mainList.employers)

employersHire();

// Вывод

console.log(mainList);