canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(100, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#0085C7";
ctx.lineWidth = 4;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#DF0024";
ctx.lineWidth = 4;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F4C300";
ctx.lineWidth = 4;
ctx.arc(250, 240, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#009F3D";
ctx.lineWidth = 4;
ctx.arc(350, 240, 40, 0, 2*Math.PI);
ctx.stroke();









