const canvas= document.getElementById("miCanvas");
const ctx= canvas.getContext("2d");

//Texto
ctx.letterSpacing="10px";
ctx.font="bold 25px serif";
ctx.strokeText("un texto en mi canvas", 2, 200);


ctx.letterSpacing="10px";
ctx.font="italic 25px serif";
ctx.fillText("otro texto en mi canvas", 5, 240);

//circulo
ctx.beginPath();
ctx.arc(320, 100, 30, 0, 2*Math.PI);
ctx.stroke();

//rombo
ctx.transform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);