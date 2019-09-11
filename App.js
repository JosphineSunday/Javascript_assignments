
var div = document.getElementById("hello");
div.style.backgroundColor  = "blue"; div.style.height = "1000px";
div.style.width = "180px";
div.style.height = "180px";
div.style.padding = "50px 50px 50px 10px";
div.style.borderRadius = "20px";
div.style.boxShadow = "white 5px 5px 10px ";
var p = document.createElement("p");
p.style.fontStyle = "italic"
p.style.color = "white"
p.style.fontSize = "20px"
var text ="Javascript and html is a great combination";
p.innerHTML = text;
div.appendChild(p);
console.log(p)