$(document).mousemove(function(e) {
    $('.Player').offset({
        left: e.pageX,
        top: e.pageY
    });
});

var me = document.getElementById("Me");
var staircase = document.getElementById("aboutStaircase");
var statement = document.getElementById("aboutMeStatement");

me.addEventListener("mouseover", function(){
	statement.style.opacity = 1.0;
});
staircase.addEventListener("mouseover", function(){
	window.location.href = "index.html";
});