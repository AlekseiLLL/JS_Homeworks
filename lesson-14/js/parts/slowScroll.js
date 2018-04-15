function slowScroll () {

	// Передаем в функцию параметры анимации и времени выполнения анимации 
	function animate( draw, duration ) {
		// Получаем текущее время
		let start = performance.now();
		// Передаем анимацию браузеру
		requestAnimationFrame( function animate( time ) {
			// Вычисляем прошедшее время
			let timePassed = time - start;
			// Если прошедшее время > длительности 
			if ( timePassed > duration ) {
				// То останавливаем выполнение анимации
				timePassed = duration;
			}
			// Рисуем анимацию
			draw( timePassed );
			// Если анимация не закончилась, то вызываем requestAnimationFrame повторно 
			if ( timePassed < duration ) {
				requestAnimationFrame( animate );
			}
		});
	}


	let navigation = document.getElementsByTagName( 'nav' )[0];

	navigation.addEventListener('click', function ( event ) {
		// Отменяем стандартный скрипт браузера
		event.preventDefault();
		// Описываем анимацию
		animate( /*Параметр draw*/ function( timePassed ) {
			// Элемент навигации, на который кликнули
			let target = event.target;
			// Получаем элемент, на который ссылается элемент навигации 
			let section = document.getElementById( target.getAttribute( 'href' ).slice( 1 ) );
			// Изменяем к-во пикселей от потолка страницы согласно нужному элементу навигации
			window.scrollBy( 0, section.getBoundingClientRect().top / 20 - 3 ); 
		}/*Параметр draw*/, /*Параметр duration*/1200/*Параметр duration*/);
	});
}

module.exports = slowScroll;