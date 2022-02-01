const themes = ["light", "dark"];

let theme = localStorage.getItem("theme");
if (themes.indexOf(theme) === -1) {
	theme = themes[0];
}
document.body.classList.add(theme);

document.getElementById("profile-picture").onclick = () => {
	const idx = themes.indexOf(theme);
	const nextTheme = themes[(idx + 1) % themes.length];
	document.body.classList.replace(theme, nextTheme);
	localStorage.setItem("theme", nextTheme);
	theme = nextTheme;
}

