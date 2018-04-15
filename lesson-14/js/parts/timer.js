function timer () {

	// Часовой пояс по UTC
	let deadline = '2018-04-20';

	function getTimeRemaining ( endtime ) {
		let t = Date.parse( endtime ) - Date.parse( new Date() ),
		seconds = Math.floor (( t / 1000) % 60 ),
		minutes = Math.floor (( t / 1000 / 60) % 60 ),
		hours = Math.floor (( t / ( 1000 * 60 * 60 )));

		// Проверка на актуальность даты

		if ( t < 0 ) {
			return {
				'total' : 0,
				'hours' : '00',
				'minutes' : '00',
				'seconds' : '00'
			};
		}
		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	// Запускаем часы (Установка таймера) 

	function setClock ( id, endtime ) {
		let timer = document.getElementById( id ),
			hours = timer.querySelector( '.hours' ),
			minutes = timer.querySelector( '.minutes' ),
			seconds = timer.querySelector( '.seconds' ),
			// Ставим интервал для функции 1 секунду
			timeInterval = setInterval( updateClock, 1000 );

		// Обновить часы

		function updateClock () {
			let t = getTimeRemaining( endtime );
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if ( t.total <= 0 ) {
				clearInterval( timeInterval );
			}
		}
		// Вызываем функцию обновления часов
		updateClock();
		
	}
	setClock( 'timer', deadline );
}

module.exports = timer;