function pressMe () {
	document.getElementById("clickme").style.display = "none"; // hide clickme button
	document.getElementById("blackLayer").classList.add("fadeBlackLayer"); // add animation for black layer when press
	document.getElementById("horizontalBanner").style.display = "block"; // make HB appear
	document.getElementById("horizontalBanner").classList.add("horizontalBannerAnimation"); // horizontal banner
	document.getElementById("verticalBanner").style.display = "block"; // make VB appear
	document.getElementById("verticalBanner").classList.add("verticalBannerAnimation"); // vertical banner
	document.getElementById("wishtext").style.display = "block"; // make wishtext appear
	document.querySelector("#wishtext > h1").classList.add("delay1"); // delay1 animation
	document.querySelector("#wishtext > div").classList.add("delay2"); // delay2 animation
	playMusic();
}

function playMusic () {
	document.getElementById("backgroundmusic").play();
}

document.getElementById("clickme").addEventListener("click",pressMe);
