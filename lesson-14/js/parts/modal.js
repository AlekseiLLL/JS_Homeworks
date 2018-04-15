function modal () {

	let more = document.querySelector( '.more' ),
		moreBtns = document.querySelectorAll( '.description-btn' ),
		overlay = document.querySelector( '.overlay' ),
		close = document.querySelector( '.popup-close' ),
		statusMessage = document.createElement( 'div' );

	more.addEventListener( 'click', function() {
		this.classList.add( 'bounceInLeft' );
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[0].addEventListener( 'click', function() {
		this.classList.add( 'bounceInLeft' );
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[1].addEventListener( 'click', function() {
		this.classList.add( 'bounceInLeft' );
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[2].addEventListener( 'click', function() {
		this.classList.add( 'bounceInLeft' );
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	moreBtns[3].addEventListener( 'click', function() {
		this.classList.add( 'bounceInLeft' );
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener( 'click', function() {
		overlay.style.display = 'none';
		more.classList.remove( 'bounceInLeft' );
		document.body.style.overflow = '';
		statusMessage.classList.add( 'hide' );
	});

	// Form

	let modalWindow = document.getElementsByClassName('popup')[0],
		form = modalWindow.getElementsByTagName('form')[0],
		input = form.getElementsByTagName('input'),
		contactForm = document.getElementById('form'),
		inputContactForm = contactForm.getElementsByTagName('input');
	
	statusMessage.classList.add( 'status' );


	modalWindow.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild( statusMessage );
		statusMessage.classList.remove( 'hide' );

		// AJAX

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function () {
			if ( request.readyState < 4 ) {
				statusMessage.style.backgroundImage = 'url(https://image.ibb.co/jzR3Rc/ajax_loader.gif)';
				statusMessage.style.width = '550px';
			} else if ( request.readyState === 4 ) {
				if ( request.status == 200 && request.status < 300 ) {
					statusMessage.style.backgroundImage = 'url(https://image.ibb.co/jKVmex/success.png)';
					statusMessage.style.width = '50px';
					// Добавляем информацию об отправке на страницу
				} else {
					statusMessage.style.backgroundImage = 'url(https://image.ibb.co/iH0mex/failure.png)';
					statusMessage.style.width = '50px';
				}
			}
		};
		for ( let i = 0; i < input.length; i++ ) {
			input[i].value = '';
			// Очищаем поля ввода
		}
	});


	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild( statusMessage );
		statusMessage.style.display = 'block';

		// AJAX

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function () {
			if ( request.readyState < 4 ) {
				statusMessage.style.backgroundImage = 'url(https://image.ibb.co/jzR3Rc/ajax_loader.gif)';
				statusMessage.style.width = '550px';
			} else if ( request.readyState === 4 ) {
				if ( request.status == 200 && request.status < 300 ) {
					statusMessage.style.backgroundImage = 'url(https://image.ibb.co/jKVmex/success.png)';
					statusMessage.style.width = '50px';
					// Добавляем контент на страницу
				} else {
					statusMessage.style.backgroundImage = 'url(https://image.ibb.co/iH0mex/failure.png)';
					statusMessage.style.width = '50px';
				}
			}
		};
		for ( let i = 0; i < inputContactForm.length; i++ ) {
			inputContactForm[i].value = '';
			// Очищаем поля ввода
		}
	});
}

module.exports = modal;