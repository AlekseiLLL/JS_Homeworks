// Функция проверки загрузки страницы
jQuery( document ).ready( function( $ ) {
	// Обращаемся к заданым элементам через групповой селектор
	// Присваиваем им событие 'click'
	$( '.main_btna, .main_btn, nav ul li:eq(1) ' ).on( 'click', function () {
		// Плавное появление подлложки
		$(' .overlay ').fadeToggle( 'slow' );
		// Плавное появление модального окна
		$(' .modal ').slideToggle( 'slow' );
	});
	// Обращаемся к крестику и присваиваем событие 'click'
	$( '.close' ).on( 'click', function () {
		// Плавное исчезновение подлложки
		$(' .overlay ').fadeToggle( 'slow' );
		// Плавное исчезновение модального окна
		$(' .modal ').slideToggle( 'slow' );
	});
});