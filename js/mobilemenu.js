function mobileMenu() {
	var x = document.getElementById('top-nav');
	if (x.className === "menu") {
		x.className += "_mobile";
	} else {
		x.className = "menu";
	}
}
function menuClose() {
	var x = document.getElementById('icon');
	if (x.className === "menu-icon") {
		x.className += "_close";
	} else {
		x.className = "menu-icon";
	}
}