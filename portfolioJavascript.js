$(document).mousemove(function(e) {
    $('.Player').offset({
        left: e.pageX,
        top: e.pageY
    });
});
var player = document.getElementById("Player");
var Enemies = document.getElementsByClassName("Enemy");
var isAlive = true;
var restartButton = document.getElementById("restartButton");
var leftStaircase = document.getElementById("leftStaircase");
var centerStaircase = document.getElementById("centerStaircase");
var rightStaircase = document.getElementById("rightStaircase");
var colliders = document.getElementsByClassName("collider");

for(var i = 0; i < Enemies.length; i++){
	Enemies[i].addEventListener("mouseover", function(){
		player.style.opacity = 0.0;
		restartButton.style.opacity = 1.0;
		isAlive = false;
	});
}
for(var j = 0; j < colliders.length; j++){
	colliders[j].addEventListener("mouseover", function(){
		player.style.opacity = 0.0;
		restartButton.style.opacity = 1.0;
		isAlive = false;
	});
}
if(isAlive){
	restartButton.style.opacity = 0.0;
}
restartButton.addEventListener("mousedown", function(){
	player.style.opacity = 1.0;
	restartButton.style.opacity = 0.0;
	isAlive = true;
});
leftStaircase.addEventListener("mouseover", function(){
	if(isAlive){
		window.location.href = "portfolioAboutPage.html";
	}
});
centerStaircase.addEventListener("mouseover", function(){
	if(isAlive){
		window.location.href = "portfolioProjectsPage.html";
	}
});
rightStaircase.addEventListener("mouseover", function(){
	if(isAlive){
		window.location.href = "portfolioLanguagesPage.html";
	}
});