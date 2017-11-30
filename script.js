const body = document.querySelector('body');

const title = document.createElement('h1');
body.appendChild(title);
title.style.color = 'black';
title.innerText = "Envelope";

const canvas = document.createElement('canvas');
body.appendChild(canvas);
canvas.width='200';
canvas.height='100';
canvas.style.border='1px'&&'solid';
canvas.style.color='yellow';

let line = canvas.getContext("2d");
line.moveTo(0,0);
line.lineTo(100,100);
line.lineTo(250,-50);
line.stroke();

const titleA = document.createElement('h1');
body.appendChild(titleA);
titleA.innerText = 'Circles in canvas';

const canvas2 = document.createElement('canvas');
body.appendChild(canvas2);
canvas2.width='200';
canvas2.height='100';
canvas2.style.border='1px'&&'solid';
canvas2.style.color='yellow';

let circle = canvas2.getContext("2d");
circle.beginPath();
circle.arc(100,50,20,0,2*Math.PI);
circle.stroke();

let circle2 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(30,25,20,0,2*Math.PI);
circle.stroke();

let circle3 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(170,75,20,0,2*Math.PI);
circle.stroke();

let circle4 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(170,20,10,0,2*Math.PI);
circle.stroke();

let circle5 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(170,80,10,0,2*Math.PI);
circle.stroke();

let circle6 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(50,80,10,0,2*Math.PI);
circle.stroke();

let circle7 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(50,75,20,0,2*Math.PI);
circle.stroke();

let circle8 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(120,80,10,0,2*Math.PI);
circle.stroke();

let circle9 = canvas2.getContext("2d");
circle.beginPath();
circle.arc(140,43,7,0,2*Math.PI);
circle.stroke();

const title3 = document.createElement('h1');
body.appendChild(title3);
title3.innerText = 'Text in canvas';

const canvas3 = document.createElement('canvas');
body.appendChild(canvas3);
canvas3.width='200';
canvas3.height='100';
canvas3.style.border='1px'&&'solid';
canvas3.style.color='yellow';

let textInCanvas = canvas3.getContext('2d');
textInCanvas.font = '25px Times New Roman';
textInCanvas.fillText('This is', 10, 50);
textInCanvas.strokeText('text in canvas', 25, 65);

const title4 = document.createElement('h1');
body.appendChild(title4);
title4.innerText = 'Linear Gradient';

const canvas4 = document.createElement('canvas');
body.appendChild(canvas4);
canvas4.width='200';
canvas4.height='100';
canvas4.style.border='1px'&&'solid';
canvas4.style.color='yellow';

let gradientContext = canvas4.getContext('2d');
let gradient = gradientContext.createLinearGradient(0,0,200,0);
gradient.addColorStop(0,'purple');
gradient.addColorStop(1, 'green');
gradientContext.fillStyle = gradient;
gradientContext.fillRect(10,10,150,80);

const title5 = document.createElement('h1');
body.appendChild(title5);
title5.innerText = 'Circular Gradient';
