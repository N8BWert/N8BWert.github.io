$(document).mousemove(function(e) {
    $('.Player').offset({
        left: e.pageX,
        top: e.pageY
    });
});
var staircase = document.getElementById("aboutStaircase");

var cSharp = document.getElementById("cs");
var cSharpText = document.getElementById("csharpspeach");

var unity = document.getElementById("unity");
var unityText = document.getElementById("unityspeach");

var github = document.getElementById("github");
var githubText = document.getElementById("githubspeach");

var python = document.getElementById("python");
var pythonText = document.getElementById("pythonspeach");

var html = document.getElementById("html");
var css = document.getElementById("css");
var javascript = document.getElementById("javascript");
var htmlspeach = document.getElementById("htmlspeach");

staircase.addEventListener("mouseover", function(){
	window.location.href = "index.html";
});
cSharp.addEventListener("mouseover", function(){
	cSharpText.style.opacity = 1.0;
});
cSharp.addEventListener('mouseout', function(){
	cSharpText.style.opacity = 0.0;
});
unity.addEventListener("mouseover", function(){
	unityText.style.opacity = 1.0;
});
unity.addEventListener('mouseout', function(){
	unityText.style.opacity = 0.0;
});
github.addEventListener("mouseover", function(){
	githubText.style.opacity = 1.0;
});
github.addEventListener('mouseout', function(){
	githubText.style.opacity = 0.0;
});
python.addEventListener("mouseover", function(){
	pythonText.style.opacity = 1.0;
});
python.addEventListener('mouseout', function(){
	pythonText.style.opacity = 0.0;
});
html.addEventListener("mouseover", function(){
	htmlspeach.style.opacity = 1.0;
});
html.addEventListener('mouseout', function(){
	htmlspeach.style.opacity = 0.0;
});
css.addEventListener("mouseover", function(){
	htmlspeach.style.opacity = 1.0;
});
css.addEventListener('mouseout', function(){
	htmlspeach.style.opacity = 0.0;
});
javascript.addEventListener("mouseover", function(){
	htmlspeach.style.opacity = 1.0;
});
javascript.addEventListener('mouseout', function(){
	htmlspeach.style.opacity = 0.0;
});