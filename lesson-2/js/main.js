/*jshint esversion: 6 */

// Переменные 

let budget = prompt("Ваш бюджет?", "");
let shopName = prompt("Название вашего магазина?", "");
let time = 19;

//Объект mainList 

let mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {
		name: "Василий",
		age: 25,
		gender: "male",
	},
	open: true,
};

//Запись в массив shopGoods

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if (( typeof(a)) === 'string' && ( typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно! ');
		mainList.shopGoods[i] = a;
	} else {
<<<<<<< HEAD
		i--;
=======
	    i--;
>>>>>>> 65dc8b32a9b2783ec4dd07d5debe7b055910a083
	}
}

//Цикл While

/*while (mainList.shopGoods.length < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if (( typeof(a)) === 'string' && ( typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно! ');
		mainList.shopGoods[mainList.shopGoods.length] = a;
	} else {
		alert('Неправильнно введенный тип товаров!!!');
		console.log('Неверно!!!');
	}
}*/

//Цикл do While

/*do {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if (( typeof(a)) === 'string' && ( typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно! ');
		mainList.shopGoods[mainList.shopGoods.length] = a;
	} else {
		alert('Неправильнно введенный тип товаров!!!');
		console.log('Неверно!!!');
	}
} 
while (mainList.shopGoods.length < 5);*/

//Проверка времени работы магазина

if (time < 0) {
	console.log('Такого просто не может быть!');
} else if (time > 0 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
			}

// Вывод

alert( mainList.budget / 30 );

console.log(mainList);

<<<<<<< HEAD
//console.log('Название магазина: ' + mainList.shopName);
=======
console.log('Название магазина: ' + mainList.shopName);
>>>>>>> 65dc8b32a9b2783ec4dd07d5debe7b055910a083
