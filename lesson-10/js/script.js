/*jshint esversion: 6 */

// Табы

window.addEventListener( 'DOMContentLoaded',  function () {
	 
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent (a) {
		for ( let i = a; i < tabContent.length; i++ ) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);


	function showTabContent (b) {
		if ( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if ( target.className == 'info-header-tab' ) {
			for (let i = 0; i < tab.length; i++ ) {
				if ( target == tab[i] ) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Таймер

	// Часовой пояс по UTC
	let deadline = '2018-04-09';

	function getTimeRemaining (endtime) {
		let t = Date.parse( endtime ) - Date.parse( new Date() ),
		seconds = Math.floor (( t / 1000) % 60 ),
		minutes = Math.floor (( t / 1000 / 60) % 60 ),
		hours = Math.floor (( t / ( 1000 * 60 * 60 )));


		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	// Запускаем часы (Установка таймера) 

	function setClock (id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		// Обновить часы

		function updateClock () {
			let t = getTimeRemaining( endtime );
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			//console.log(t);

			if ( t.total <= 0 ) {
				clearInterval(timeInterval);
			}
		}
		// Вызываем функцию обновления часов
		updateClock();
		// Ставим интервал для функции 1 секунду
		let timeInterval = setInterval( updateClock, 1000 );
	}
	setClock( 'timer', deadline );


	// Создаем модальное окно

	let more = document.querySelector('.more'),
		moreBtns = document.querySelectorAll('.description-btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';

	});
	moreBtns[0].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[1].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[2].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[3].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	console.log(moreBtns);


	// Создаем класс свойства

	class Options {
		// Передаем параметры в функцию-конструктор 
		constructor( height, width, bg, fontSize, textAlign ) {
			// this - для нового объекта
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		// Метод для создания нового div на странице
		newDiv( text, style ) {
			// Создаем новый div
			let div = document.createElement( 'div' );
			// Присваиваем ему текст с 1го аргумента 
			div.textContent = text;
			// Присваиваем ему стили с 2го аргумента
			div.style.cssText = style;

			// Возвращаем этот div
			return div;
		}
	}

	// Создаем новый объект через класс
	const block = new Options(200, 200, "red", 18, "center");
	// Вызваем его метод и получаем элемент на странице
	document.body.insertBefore(block.newDiv("Hello world!!!", "color: white;" +
	"border-radius: 5px; height: 30px; width: 150px; background: darkcyan; " + 
	"margin: 30px; padding: 30px 0; text-align: center;"), document.body.children[0]);

});