// Переменные 

var budget = prompt("Ваш бюджет?", "");
var shopName = prompt("Название вашего магазина?", "");

//Объект mainList 

var mainList = {
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

for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "");
}

// Вывод в коноль

console.log(mainList.budget = mainList.budget / 30 + " руб. в день.");

console.log('Название магазина: ' + mainList.shopName);