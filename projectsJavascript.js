$(document).mousemove(function(e) {
    $('.Player').offset({
        left: e.pageX,
        top: e.pageY
    });
});
var staircase = document.getElementById("aboutStaircase");
var bacteria = document.getElementById("bacteria");
var pig = document.getElementById("pig");
var pigtathlonText = document.getElementById("pigtathlonDescription");
var error404Text = document.getElementById("error404Description");

staircase.addEventListener("mouseover", function(){
	window.location.href = "index.html";
});
pig.addEventListener("mouseover", function(){
	pigtathlonText.style.opacity = 1.0;
});
pig.addEventListener('mousedown', function(){
	window.location.href = "https://pigtathlon.claytondoesthings.xyz/w/home";
});
pig.addEventListener('mouseout', function(){
	pigtathlonText.style.opacity = 0.0;
});
bacteria.addEventListener("mouseover", function(){
	error404Text.style.opacity = 1.0;
});
bacteria.addEventListener('mousedown', function(){
	window.location.href = "https://lunarlessstudios.itch.io/error-404";
});
bacteria.addEventListener('mouseout', function(){
	error404Text.style.opacity = 0.0;
});