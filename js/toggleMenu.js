function toggleMenu() {
	var x = document.getElementById("divListaLinksNavBurguer");
	var body = document.getElementById("divBody");
	var burger = document.getElementById("iconBurguer");

	burger.addEventListener('click', () => {
		x.classList.toggle('show');
	});
}