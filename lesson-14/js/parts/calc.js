function calc () {
	
	let peopleField = document.getElementsByClassName( 'counter-block-input' )[0],
		dayField = document.getElementsByClassName( 'counter-block-input' )[1],
		base =  document.getElementById( 'select' ),
		total = document.getElementById( 'total' ),
		// Для большей гибкости калькулятора
		// Минимальное колличество людей
		minPeopleAmount = 1,
		// Минимальное колличество дней
		minDaysAmount = 2,
		// Максимальное колличество людей
		maxPeopleAmount = 100,
		// Максимальное колличество дней
		maxDaysAmount = 100,
		// Стоимость одного дня поездки для одного человека
		costOfOneDayTripForOnePerson = 3000,
		inputs = document.querySelectorAll('.counter input');

	for ( let i = 0; i < inputs.length; i++ ) {
		inputs[i].value = '';
		// Очищаем поля ввода каклькулятора
	}

	// Функция расчета суммы поездки
	// Передаем в неё аргументы колличества людей, дней и выбранную базу
	function calculateTotal ( persons, days, base ) {
		// Условие срабатывает если, колличество людей и дней поездки в заданом диапазоне
		if (( peopleField.value >= minPeopleAmount && peopleField.value <= maxPeopleAmount ) && ( dayField.value >= minDaysAmount && dayField.value <= maxDaysAmount )) {
			// Проверка на 0001
			if ( peopleField.value.charAt( 0 ) == 0 || dayField.value.charAt( 0 ) == 0 ) {
				total.textContent = 0;
			} else {
				// Переводим значения в числа и записываем их в соответсвующие переменные
				let a = peopleField.value - 0;
				let b = dayField.value - 0;
				// Проверка целосности чисел
				if (( a ^ 0 ) === a && ( b ^ 0 ) === b ) {
					// Коефициент перемножения стоимости в зависимости от выбраной базы
					if ( base == 1 ) {
						total.textContent = ((( a * b ) * 1 ) * costOfOneDayTripForOnePerson ).toFixed( 0 );
						total.classList.toggle( 'bounceInRight' );
					} else if ( base == 1.5 ) {
						total.textContent = ((( a * b ) * 1.5 ) * costOfOneDayTripForOnePerson ).toFixed( 0 );
						total.classList.toggle( 'bounceInRight' );
					} else if ( base == 1.8 ) {
						total.textContent = ((( a * b ) * 1.8 ) * costOfOneDayTripForOnePerson ).toFixed( 0 );
						total.classList.toggle( 'bounceInRight' );
					}
				} else {
					total.textContent = 0;
				}
			}
		} else {
			total.textContent = 0;
		}	
	}

	// При изменении значений передаем эти значения в функцию
	peopleField.addEventListener( 'change', function () {
		calculateTotal( peopleField.value, dayField.value, base.value );
	});
	dayField.addEventListener( 'change', function () {
		calculateTotal( peopleField.value, dayField.value, base.value );
	});
	base.addEventListener( 'change', function () {
		calculateTotal( peopleField.value, dayField.value, base.value );
	});
}

module.exports = calc;