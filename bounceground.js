const logos = document.querySelectorAll(".logo");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let dx = [];
let dy = [];
let x = [];
let y = [];

for (let i = 0; i < logos.length; i++) {
	x[i] = Math.random() * (screenWidth - logos[i].offsetWidth);
	y[i] = Math.random() * (screenHeight - logos[i].offsetHeight);
	console.log(x[i]);
	console.log(y[i]);
	dx[i] = 2;
	dy[i] = 2;
}

function moveLogo(index) {
	x[index] += dx[index];
	y[index] += dy[index];

	if (x[index] + logos[index].offsetWidth >= screenWidth || x[index] <= 0) {
		dx[index] = -dx[index];
		x[index] += dx[index];
	}
	if (y[index] + logos[index].offsetHeight >= screenHeight || y[index] <= 0) {
		dy[index] = -dy[index];
		y[index] += dy[index];
	}

	for (let i = 0; i < logos.length; i++) {
		if (i !== index) {
			if (
				x[index] < x[i] + logos[i].offsetWidth &&
				x[index] + logos[index].offsetWidth > x[i] &&
				y[index] < y[i] + logos[i].offsetHeight &&
				y[index] + logos[index].offsetHeight > y[i]
			) {
				dx[index] = -dx[index];
				dy[index] = -dy[index];
				dx[i] = -dx[i];
				dy[i] = -dy[i];
			}
		}
	}

	logos[index].style.left = x[index] + "px";
	logos[index].style.top = y[index] + "px";
	requestAnimationFrame(() => moveLogo(index));
}

for (let i = 0; i < logos.length; i++) {
	moveLogo(i);
}
