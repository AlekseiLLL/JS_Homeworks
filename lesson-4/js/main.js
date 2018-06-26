let money = prompt ("Ваш бюджет на месяц?");
let magazine = prompt ("Название вашего магазина");
let time = 19;

let mainList = {
    budget: money,
    nameMagazin: magazine,
    shopGoods: [],
    price: [],
    employers: {},
    open: false,
    discount: true
}
for ( let i = 0 ; i < 3 ; i ++ )
{
    let a =  prompt ( "какой тип товаров будем продавать? " );

    if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
        console.log('Все верно');
        mainList.shopGoods[i] = a;
    }
    mainList . price [i] =  prompt ( " Цена товара " );
}

if (time < 0) {
    console.log("Такого просто не может быть");
} else if(time > 8 && time < 20) {
    console.log('Время работать')
} else if(time < 24){
    console.log("Уже слишком поздно");
} else {
    console.log('В сутках только 24 часа');
}
mainList.shopGoods.forEach(function(item ,i ,ot) {
    console.log(i+ ": " + item + "(массив: " + ot.shopGoods + ")")
});
// дисконтная система
function showmainList () {
    for (let i=0;i<3;i++)
    {
    	if (mainList.discount == true) {
        let q = mainList.price[i]*0.8;
        alert (q);

    	}	else {
    		alert ("Скидка отсутствует")
		}
	}
}
showmainList ();

//Нанять сотрудников 3 и 4 задание

let employers = {
    number: [],
    name: []
}

function callname(x) {
    for (let i=1;i<=x;i++) {
        let a = prompt ("Как зовут сотрудника?");
        employers.number['i'] = i;
        employers.name['i'] = a;
        console.log (employers.number["i"]+" - "+employers.name['i']);
    }
}

let x = prompt ("Сколько сотрудников нанять?");
callname (x);



// подсчет бюджета

function  budg () {
        alert ("Бюджет =" + " " + mainList . budget / 30 );
}
budg ();