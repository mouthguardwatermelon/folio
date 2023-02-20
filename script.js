window.onscroll = function() {
	var background = document.querySelector('.background');
	var scroll = window.scrollY;
	if (scroll > 0) {
		background.classList.add('fade');
	} else {
		background.classList.remove('fade');
	}
};
