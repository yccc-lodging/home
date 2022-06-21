var index = 0;

function lastSlide() {
	if (index == 0){
		index = 1;
		document.getElementById("z0").style.display = "none";
		document.getElementById("Text").innerHTML = "Welcome";
		document.getElementById("z1").style.display = "block";
	} else {
		index = 0;
		document.getElementById("z0").style.display = "block";
		document.getElementById("Text").innerHTML = "Events";
		document.getElementById("z1").style.display = "none";
	}
	
}

function nextSlide() {
	if (index == 1){
		index = 0;
		document.getElementById("z0").style.display = "block";
		document.getElementById("Text").innerHTML = "Welcome";
		document.getElementById("z1").style.display = "none";
	} else {
		index = 1;
		document.getElementById("z0").style.display = "none";
		document.getElementById("Text").innerHTML = "Events";
		document.getElementById("z1").style.display = "block";
	}
}