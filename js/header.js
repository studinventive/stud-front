/* Desktop nav "Formation" dropdown initializer */
if (window.matchMedia("(min-width: 1024px)").matches) {
	document.addEventListener("DOMContentLoaded", function () {
		var elems = document.querySelectorAll(".dropdown-trigger");
		var instances = M.Dropdown.init(elems, {
			hover: true,
			coverTrigger: false,
			autoTrigger: false,
		});
	});
}

/* Mobile sidenav initializer */
if (window.matchMedia("(max-width: 1023px)").matches) {
	document.addEventListener("DOMContentLoaded", function () {
		var elems = document.querySelectorAll(".sidenav");
		var instances = M.Sidenav.init(elems, {
			edge: "right",
		});
	});
}

/* Collapsible accordions initializer */
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".collapsible");
	var instances = M.Collapsible.init(elems);
});
