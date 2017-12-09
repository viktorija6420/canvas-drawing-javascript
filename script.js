const body = document.querySelector('body');
const div = document.querySelector('.canvas-samples');
const title = document.createElement('h1');
  div.appendChild(title);
  title.style.color = 'black';
  title.innerText = "Envelope";

const canvas = document.createElement('canvas');
  div.appendChild(canvas);
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
  div.appendChild(titleA);
  titleA.innerText = 'Circles';

const canvas2 = document.createElement('canvas');
  div.appendChild(canvas2);
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
  div.appendChild(title3);
  title3.innerText = 'Text in canvas';

const canvas3 = document.createElement('canvas');
  div.appendChild(canvas3);
  canvas3.width='200';
  canvas3.height='100';
  canvas3.style.border='1px'&&'solid';
  canvas3.style.color='yellow';

let textInCanvas = canvas3.getContext('2d');
  textInCanvas.font = '25px Times New Roman';
  textInCanvas.fillText('This is', 10, 50);
  textInCanvas.strokeText('text in canvas', 25, 65);

const title4 = document.createElement('h1');
  div.appendChild(title4);
  title4.innerText = 'Linear Gradient';

const canvas4 = document.createElement('canvas');
  div.appendChild(canvas4);
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

// Casa Loma starts here

const casaLoma = document.querySelector('.casa-loma');
const casaCanvas = document.createElement('canvas');
  casaLoma.appendChild(casaCanvas);
  casaCanvas.style.border = '1px' && 'solid';
  casaCanvas.style.color = 'yellow';
  casaCanvas.style.width = '1000px';
  casaCanvas.style.length = '1000px';

const casaContext = casaCanvas.getContext('2d');
  casaContext.moveTo(0,100);
  casaContext.lineTo(10,100);
  casaContext.lineTo(10,105);
  casaContext.lineTo(20,105);
  casaContext.lineTo(20,100);
  casaContext.lineTo(30,100);
  casaContext.lineTo(30,105);
  casaContext.lineTo(40,105);
  casaContext.lineTo(40,100);
  casaContext.lineTo(50,100);
  casaContext.lineTo(50,105);
  casaContext.lineTo(60,105);
  casaContext.lineTo(60,100);
  casaContext.lineTo(70,100);
  casaContext.lineTo(70,105);
  casaContext.lineTo(80,105);
  casaContext.lineTo(80,100);
  casaContext.lineTo(90,100);
  casaContext.lineTo(90,105);
  casaContext.lineTo(100,105);
  casaContext.lineTo(100,100);
  casaContext.lineTo(110,100);
  casaContext.lineTo(110,105);
  casaContext.lineTo(120,105);
  casaContext.lineTo(120,100);
  casaContext.lineTo(130,100);
  casaContext.lineTo(130,105);
  casaContext.lineTo(140,105);
  casaContext.lineTo(140,100);
  casaContext.lineTo(150,100);
  casaContext.lineTo(150,105);
  casaContext.lineTo(160,105);
  casaContext.lineTo(160,100);
  casaContext.lineTo(170,100);
  casaContext.lineTo(170,105);
  casaContext.lineTo(180,105);
  casaContext.lineTo(180,100);
  casaContext.lineTo(190,100);
  casaContext.lineTo(190,105);
  casaContext.lineTo(200,105);
  casaContext.lineTo(200,100);
  casaContext.lineTo(210,100);
  casaContext.lineTo(210,105);
  casaContext.lineTo(220,105);
  casaContext.lineTo(220,100);
  casaContext.lineTo(230,100);
  casaContext.lineTo(230,105);
  casaContext.lineTo(240,105);
  casaContext.lineTo(240,100);
  casaContext.lineTo(250,100);
  casaContext.lineTo(250,105);
  casaContext.lineTo(260,105);
  casaContext.lineTo(260,100);
  casaContext.lineTo(270,100);
  casaContext.lineTo(270,105);
  casaContext.lineTo(280,105);
  casaContext.lineTo(280,100);
  casaContext.lineTo(290,100);
  casaContext.lineTo(290,105);
  casaContext.lineTo(300,105);
  casaContext.stroke();

const leftLines = casaCanvas.getContext('2d');
  leftLines.beginPath();
  leftLines.moveTo(10,90);
  leftLines.lineTo(10,60);
  leftLines.stroke();

const leftUpperLine = casaCanvas.getContext('2d');
  leftUpperLine.beginPath();
  leftUpperLine.moveTo(15,40);
  leftUpperLine.lineTo(33,44);
  leftUpperLine.stroke();

const leftRoofArc1 = casaCanvas.getContext('2d');
  leftRoofArc1.beginPath();
  leftRoofArc1.arc(11, 13, 4, 0, Math.PI, false);
  leftRoofArc1.stroke();

const leftRoofArcConnector1 = casaCanvas.getContext('2d');
  leftRoofArcConnector1.beginPath();
  leftRoofArcConnector1.moveTo(8,22);
  leftRoofArcConnector1.lineTo(8,14);
  leftRoofArcConnector1.stroke();

const leftRoofArcConnector2 = casaCanvas.getContext('2d');
  leftRoofArcConnector2.beginPath();
  leftRoofArcConnector2.moveTo(14,22);
  leftRoofArcConnector2.lineTo(14,14);
  leftRoofArcConnector2.stroke();

const leftRoofArcConnectorUp1 = casaCanvas.getContext('2d');
  leftRoofArcConnectorUp1.beginPath();
  leftRoofArcConnectorUp1.moveTo(13,17);
  leftRoofArcConnectorUp1.lineTo(13,10);
  leftRoofArcConnectorUp1.stroke();

const leftRoofArcConnectorUp2 = casaCanvas.getContext('2d');
  leftRoofArcConnectorUp2.beginPath();
  leftRoofArcConnectorUp2.moveTo(9,17);
  leftRoofArcConnectorUp2.lineTo(9,10);
  leftRoofArcConnectorUp2.stroke();

const leftRoofArcConnectorHighest1 = casaCanvas.getContext('2d');
  leftRoofArcConnectorHighest1.beginPath();
  leftRoofArcConnectorHighest1.moveTo(9,10);
  leftRoofArcConnectorHighest1.lineTo(11,0);
  leftRoofArcConnectorHighest1.stroke();

const leftRoofArcConnectorHighest2 = casaCanvas.getContext('2d');
  leftRoofArcConnectorHighest2.beginPath();
  leftRoofArcConnectorHighest2.moveTo(13,10);
  leftRoofArcConnectorHighest2.lineTo(11,0);
  leftRoofArcConnectorHighest2.stroke();

const leftRoofArc2 = casaCanvas.getContext('2d');
  leftRoofArc2.beginPath();
  leftRoofArc2.arc(11, 7, 3, 0, Math.PI, false);
  leftRoofArc2.stroke();

const leftBlockWindow = casaCanvas.getContext('2d');
  leftBlockWindow.beginPath();
  leftBlockWindow.moveTo(18,50);
  leftBlockWindow.lineTo(28,52);
  leftBlockWindow.lineTo(27,65);
  leftBlockWindow.lineTo(18,63);
  leftBlockWindow.lineTo(18,50);
  leftBlockWindow.stroke();

const leftBlockWindowHorizontal = casaCanvas.getContext('2d');
  leftBlockWindowHorizontal.beginPath();
  leftBlockWindowHorizontal.moveTo(18,56);
  leftBlockWindowHorizontal.lineTo(28,58);
  leftBlockWindowHorizontal.stroke();

const leftBlockWindowVertical = casaCanvas.getContext('2d');
  leftBlockWindowVertical.beginPath();
  leftBlockWindowVertical.moveTo(23,50);
  leftBlockWindowVertical.lineTo(23,65);
  leftBlockWindowVertical.stroke();

const leftRoof = casaCanvas.getContext('2d');
  leftRoof.beginPath();
  leftRoof.moveTo(33,25);
  leftRoof.lineTo(27,24);
  leftRoof.lineTo(23,7);
  leftRoof.lineTo(17,23);
  leftRoof.lineTo(15,22);
  leftRoof.lineTo(15,25);
  leftRoof.lineTo(15,60);
  leftRoof.lineTo(5,58);
  leftRoof.lineTo(5,20);
  leftRoof.lineTo(8,22);
  leftRoof.lineTo(8,27);
  leftRoof.lineTo(12,28);
  leftRoof.lineTo(12,21);
  leftRoof.lineTo(15,22);
  leftRoof.stroke();

const leftRoofContinuation = casaCanvas.getContext('2d');
  leftRoof.beginPath();
  leftRoof.moveTo(50,17);
  leftRoof.lineTo(55,17);
  leftRoof.stroke();

const leftBehindRoof = casaCanvas.getContext('2d');
  leftBehindRoof.beginPath();
  leftBehindRoof.moveTo(25,15);
  leftBehindRoof.lineTo(30,15);
  leftBehindRoof.lineTo(30,10);
  leftBehindRoof.lineTo(35,10);
  leftBehindRoof.stroke();

const arcWindowsRoof = casaCanvas.getContext('2d');
  arcWindowsRoof.beginPath();
  arcWindowsRoof.moveTo(36,12);
  arcWindowsRoof.lineTo(36,4);
  arcWindowsRoof.lineTo(39,5);
  arcWindowsRoof.lineTo(39,13);
  arcWindowsRoof.stroke();

const arcWindowsRoofTop = casaCanvas.getContext('2d');
  arcWindowsRoofTop.beginPath();
  arcWindowsRoofTop.moveTo(37.5,4);
  arcWindowsRoofTop.lineTo(37.5,0);
  arcWindowsRoofTop.stroke();

const arcWindowsRoof2 = casaCanvas.getContext('2d');
  arcWindowsRoof2.beginPath();
  arcWindowsRoof2.moveTo(42,13);
  arcWindowsRoof2.lineTo(42,4);
  arcWindowsRoof2.lineTo(45,3);
  arcWindowsRoof2.lineTo(45,13);
  arcWindowsRoof2.stroke();

const arcWindowsRoofTop2 = casaCanvas.getContext('2d');
  arcWindowsRoofTop2.beginPath();
  arcWindowsRoofTop2.moveTo(43.5,4);
  arcWindowsRoofTop2.lineTo(43.5,0);
  arcWindowsRoofTop2.stroke();

const arcWindowsRoof3 = casaCanvas.getContext('2d');
  arcWindowsRoof3.beginPath();
  arcWindowsRoof3.moveTo(33,12);
  arcWindowsRoof3.lineTo(33,3);
  arcWindowsRoof3.lineTo(37,3);
  arcWindowsRoof3.stroke();

const arcWindowsRoofTop3 = casaCanvas.getContext('2d');
  arcWindowsRoofTop3.beginPath();
  arcWindowsRoofTop3.moveTo(35,3);
  arcWindowsRoofTop3.lineTo(35,0);
  arcWindowsRoofTop3.stroke();

const arcWindowsRoof4 = casaCanvas.getContext('2d');
  arcWindowsRoof4.beginPath();
  arcWindowsRoof4.moveTo(48.5,12);
  arcWindowsRoof4.lineTo(48.5,3);
  arcWindowsRoof4.lineTo(46,3);
  arcWindowsRoof4.stroke();

const arcWindowsRoofTop4 = casaCanvas.getContext('2d');
  arcWindowsRoofTop4.beginPath();
  arcWindowsRoofTop4.moveTo(46,3);
  arcWindowsRoofTop4.lineTo(46,0);
  arcWindowsRoofTop4.stroke();

const connectorBetweenArcRoofs = casaCanvas.getContext('2d');
  arcWindowsRoofTop4.beginPath();
  arcWindowsRoofTop4.moveTo(38,10);
  arcWindowsRoofTop4.lineTo(42,10);
  arcWindowsRoofTop4.stroke();

const lefArc = casaCanvas.getContext('2d');
  leftLines.beginPath();
  leftLines.moveTo(10,90);
  leftLines.lineTo(15,92);
  leftLines.lineTo(15,77);
  leftLines.lineTo(22,74);
  leftLines.lineTo(29,80);
  leftLines.lineTo(29,95);
  leftLines.lineTo(40,95);
  leftLines.stroke();

const verticalLineArc1 = casaCanvas.getContext('2d');
  verticalLineArc1.beginPath();
  verticalLineArc1.moveTo(33,10);
  verticalLineArc1.lineTo(33,80);
  verticalLineArc1.stroke();

const topLineArc = casaCanvas.getContext('2d');
  topLineArc.beginPath();
  topLineArc.arc(41, 2, 12, 26, 15, false);
  topLineArc.stroke();

const bottomLineArc = casaCanvas.getContext('2d');
  bottomLineArc.beginPath();
  bottomLineArc.arc(41, 70, 12, 26, 15, false);
  bottomLineArc.stroke();

const window1TopArc = casaCanvas.getContext('2d');
  window1TopArc.beginPath();
  window1TopArc.arc(41, 15, 12, 26, 15, false);
  window1TopArc.stroke();

const window1BottomArc = casaCanvas.getContext('2d');
  window1BottomArc.beginPath();
  window1BottomArc.arc(41, 25, 12, 26, 15, false);
  window1BottomArc.stroke();

const window1VerticalLeft = casaCanvas.getContext('2d');                                                                                              window1VerticalLeft.beginPath();
  window1VerticalLeft.moveTo(38, 26);
  window1VerticalLeft.lineTo(38, 36);
  window1VerticalLeft.stroke();

const window1VerticalRight = casaCanvas.getContext('2d');
  window1VerticalRight.beginPath();
  window1VerticalRight.moveTo(44, 26);
  window1VerticalRight.lineTo(44, 36);
  window1VerticalRight.stroke();

const window2TopArc = casaCanvas.getContext('2d');
  window2TopArc.beginPath();
  window2TopArc.arc(41, 33, 12, 26, 15, false);
  window2TopArc.stroke();

const window2BottomArc = casaCanvas.getContext('2d');
  window2BottomArc.beginPath();
  window2BottomArc.arc(41, 43, 12, 26, 15, false);
  window2BottomArc.stroke();

const window2VerticalLeft = casaCanvas.getContext('2d');
  window2VerticalLeft.beginPath();
  window2VerticalLeft.moveTo(38, 44);
  window2VerticalLeft.lineTo(38, 54);
  window2VerticalLeft.stroke();

const window2VerticalRight = casaCanvas.getContext('2d');
  window2VerticalRight.beginPath();
  window2VerticalRight.moveTo(44, 44);
  window2VerticalRight.lineTo(44, 54);
  window2VerticalRight.stroke();

const window3TopArc = casaCanvas.getContext('2d');
  window3TopArc.beginPath();
  window3TopArc.arc(41, 50, 12, 26, 15, false);
  window3TopArc.stroke();

const window3BottomArc = casaCanvas.getContext('2d');
  window3BottomArc.beginPath();
  window3BottomArc.arc(41, 60, 12, 26, 15, false);
  window3BottomArc.stroke();

const window3VerticalLeft = casaCanvas.getContext('2d');
  window3VerticalLeft.beginPath();
  window3VerticalLeft.moveTo(38, 61);
  window3VerticalLeft.lineTo(38, 71);
  window3VerticalLeft.stroke();

const window3VerticalRight = casaCanvas.getContext('2d');
  window3VerticalRight.beginPath();
  window3VerticalRight.moveTo(44, 61);
  window3VerticalRight.lineTo(44, 71);
  window3VerticalRight.stroke();

const LineTopSecondBlock = casaCanvas.getContext('2d');
  LineTopSecondBlock.beginPath();
  LineTopSecondBlock.moveTo(50,35);
  LineTopSecondBlock.lineTo(70,27);
  LineTopSecondBlock.lineTo(69,18);
  LineTopSecondBlock.stroke();

const LineBottomSecondBlock = casaCanvas.getContext('2d');
  LineBottomSecondBlock.beginPath();
  LineBottomSecondBlock.moveTo(40,95);
  LineBottomSecondBlock.lineTo(40,95);
  LineBottomSecondBlock.lineTo(70,85);
  LineBottomSecondBlock.lineTo(90,85);
  LineBottomSecondBlock.stroke();

const roofSecondBlock = casaCanvas.getContext('2d');
  LineBottomSecondBlock.beginPath();
  LineBottomSecondBlock.moveTo(50,25);
  LineBottomSecondBlock.lineTo(56,23);
  LineBottomSecondBlock.lineTo(59,3);
  LineBottomSecondBlock.lineTo(64,19);
  LineBottomSecondBlock.lineTo(70,17);
  LineBottomSecondBlock.stroke();

const middleLineMiddleBlock1 = casaCanvas.getContext('2d');
  middleLineMiddleBlock1.beginPath();
  middleLineMiddleBlock1.moveTo(72,45);
  middleLineMiddleBlock1.lineTo(88,45);
  middleLineMiddleBlock1.lineTo(99,55);
  middleLineMiddleBlock1.lineTo(130,55);
  middleLineMiddleBlock1.lineTo(140,45);
  middleLineMiddleBlock1.lineTo(150,45);
  middleLineMiddleBlock1.lineTo(160,55);
  middleLineMiddleBlock1.lineTo(190,55);
  middleLineMiddleBlock1.lineTo(200,45);
  middleLineMiddleBlock1.lineTo(215,45);
  middleLineMiddleBlock1.stroke();

const windowSecondBlockTopAndRight = casaCanvas.getContext('2d');
  windowSecondBlockTopAndRight.beginPath();
  windowSecondBlockTopAndRight.moveTo(55,44);
  windowSecondBlockTopAndRight.lineTo(68,39);
  windowSecondBlockTopAndRight.lineTo(68,80);
  windowSecondBlockTopAndRight.stroke();

const windowSecondBlockBottomAndLeft = casaCanvas.getContext('2d');
  windowSecondBlockBottomAndLeft.beginPath();
  windowSecondBlockBottomAndLeft.moveTo(55,44);
  windowSecondBlockBottomAndLeft.lineTo(55,85);
  windowSecondBlockBottomAndLeft.lineTo(68,80);
  windowSecondBlockBottomAndLeft.stroke();

const windowSecondBlockMiddleVertical = casaCanvas.getContext('2d');
  windowSecondBlockMiddleVertical.beginPath();
  windowSecondBlockMiddleVertical.moveTo(62,41);
  windowSecondBlockMiddleVertical.lineTo(62,83);
  windowSecondBlockMiddleVertical.stroke();

const windowSecondBlockMiddleHorizontal = casaCanvas.getContext('2d');
  windowSecondBlockMiddleHorizontal.beginPath();
  windowSecondBlockMiddleHorizontal.moveTo(54,65);
  windowSecondBlockMiddleHorizontal.lineTo(69,59);
  windowSecondBlockMiddleHorizontal.stroke();

const middleBlockLeftWindowTop = casaCanvas.getContext('2d');
  middleBlockLeftWindowTop.beginPath();
  middleBlockLeftWindowTop.moveTo(91,39);
  middleBlockLeftWindowTop.lineTo(99,48);
  middleBlockLeftWindowTop.lineTo(130,48);
  middleBlockLeftWindowTop.lineTo(138,39);
  middleBlockLeftWindowTop.stroke();

const middleBlockLeftWindowBottom = casaCanvas.getContext('2d');
  middleBlockLeftWindowBottom.beginPath();
  middleBlockLeftWindowBottom.moveTo(90,86);
  middleBlockLeftWindowBottom.lineTo(99,97);
  middleBlockLeftWindowBottom.lineTo(129,97);
  middleBlockLeftWindowBottom.lineTo(140,85);
  middleBlockLeftWindowBottom.stroke();

const middleBlockLeftWindowLineLeft = casaCanvas.getContext('2d');
  middleBlockLeftWindowLineLeft.beginPath();
  middleBlockLeftWindowLineLeft.moveTo(100,48);
  middleBlockLeftWindowLineLeft.lineTo(100,97);
  middleBlockLeftWindowLineLeft.stroke();

const middleBlockLeftWindowLineRight = casaCanvas.getContext('2d');
  middleBlockLeftWindowLineRight.beginPath();
  middleBlockLeftWindowLineRight.moveTo(130,48);
  middleBlockLeftWindowLineRight.lineTo(130,97);
  middleBlockLeftWindowLineRight.stroke();

const middleBlockRightWindowTop = casaCanvas.getContext('2d');
  middleBlockRightWindowTop.beginPath();
  middleBlockRightWindowTop.moveTo(151,39);
  middleBlockRightWindowTop.lineTo(159,48);
  middleBlockRightWindowTop.lineTo(189,48);
  middleBlockRightWindowTop.lineTo(198,39);
  middleBlockRightWindowTop.stroke();

const middleBlockRightWindowBottom = casaCanvas.getContext('2d');
  middleBlockRightWindowBottom.beginPath();
  middleBlockRightWindowBottom.moveTo(150,86);
  middleBlockRightWindowBottom.lineTo(159,97);
  middleBlockRightWindowBottom.lineTo(189,97);
  middleBlockRightWindowBottom.lineTo(199,86);
  middleBlockRightWindowBottom.stroke();

const middleBlockRightWindowLineLeft = casaCanvas.getContext('2d');
  middleBlockRightWindowLineLeft.beginPath();
  middleBlockRightWindowLineLeft.moveTo(160,48);
  middleBlockRightWindowLineLeft.lineTo(160,97);
  middleBlockRightWindowLineLeft.stroke();

const middleBlockRightWindowLineRight = casaCanvas.getContext('2d');
  middleBlockRightWindowLineRight.beginPath();
  middleBlockRightWindowLineRight.moveTo(189,48);
  middleBlockRightWindowLineRight.lineTo(189,97);
  middleBlockRightWindowLineRight.stroke();

const circleWindow1 = casaCanvas.getContext("2d");
  circleWindow1.beginPath();
  circleWindow1.arc(115,70,10,0,2*Math.PI);
  circleWindow1.stroke();

const circleWindow1Vertical = casaCanvas.getContext('2d');
  circleWindow1Vertical.beginPath();
  circleWindow1Vertical.moveTo(115,61);
  circleWindow1Vertical.lineTo(115,79);
  circleWindow1Vertical.stroke();

const circleWindow1Horizontal = casaCanvas.getContext('2d');
  circleWindow1Horizontal.beginPath();
  circleWindow1Horizontal.moveTo(106,70);
  circleWindow1Horizontal.lineTo(125,70);
  circleWindow1Horizontal.stroke();

const circleWindow2 = casaCanvas.getContext("2d");
  circleWindow2.beginPath();
  circleWindow2.arc(175,70,10,0,2*Math.PI);
  circleWindow2.stroke();

const circleWindow2Vertical = casaCanvas.getContext('2d');
  circleWindow2Vertical.beginPath();
  circleWindow2Vertical.moveTo(175,61);
  circleWindow2Vertical.lineTo(175,80);
  circleWindow2Vertical.stroke();

const circleWindow2Horizontal = casaCanvas.getContext('2d');
  circleWindow2Horizontal.beginPath();
  circleWindow2Horizontal.moveTo(166,70);
  circleWindow2Horizontal.lineTo(185,70);
  circleWindow2Horizontal.stroke();

const middleBlockRoof = casaCanvas.getContext('2d');
  middleBlockRoof.beginPath();
  middleBlockRoof.moveTo(70,29);
  middleBlockRoof.lineTo(110,29);
  middleBlockRoof.stroke();

const middleBlockRoof2 = casaCanvas.getContext('2d');
  middleBlockRoof2.beginPath();
  middleBlockRoof2.moveTo(120,29);
  middleBlockRoof2.lineTo(170,29);
  // middleBlockRoof.lineTo(215,12);
  middleBlockRoof2.stroke();

const middleBlockRoof3 = casaCanvas.getContext('2d');
  middleBlockRoof3.beginPath();
  middleBlockRoof3.moveTo(180,29);
  middleBlockRoof3.lineTo(215,29);
  middleBlockRoof3.stroke();

const thirdBlockLine1 = casaCanvas.getContext('2d');
  thirdBlockLine1.beginPath();
  thirdBlockLine1.moveTo(215,33);
  thirdBlockLine1.lineTo(215,95);
  thirdBlockLine1.lineTo(220,99)
  thirdBlockLine1.stroke();

const thirdBlockLine2 = casaCanvas.getContext('2d');
  thirdBlockLine2.beginPath();
  thirdBlockLine2.moveTo(215,37);
  thirdBlockLine2.lineTo(215,34);
  thirdBlockLine2.lineTo(232,45);
  thirdBlockLine2.lineTo(285,45);
  thirdBlockLine2.lineTo(285,35);
  thirdBlockLine2.lineTo(275,35);
  thirdBlockLine2.lineTo(275,42);
  thirdBlockLine2.lineTo(265,42);
  thirdBlockLine2.lineTo(265,35);
  thirdBlockLine2.lineTo(255,35);
  thirdBlockLine2.lineTo(255,42);
  thirdBlockLine2.lineTo(245,42);
  thirdBlockLine2.lineTo(245,35);
  thirdBlockLine2.lineTo(231,35);
  thirdBlockLine2.lineTo(231,42);
  thirdBlockLine2.lineTo(222,36);
  thirdBlockLine2.lineTo(222,30);
  thirdBlockLine2.lineTo(215,26);
  thirdBlockLine2.lineTo(215,33);
  thirdBlockLine2.lineTo(210,33);
  thirdBlockLine2.lineTo(210,39);
  thirdBlockLine2.lineTo(205,39);
  thirdBlockLine2.lineTo(205,33);
  thirdBlockLine2.lineTo(197,33);
  thirdBlockLine2.lineTo(197,39);
  thirdBlockLine2.lineTo(193,44);
  thirdBlockLine2.lineTo(193,36);
  thirdBlockLine2.lineTo(189,41);
  thirdBlockLine2.lineTo(189,48);
  thirdBlockLine2.lineTo(183,48);
  thirdBlockLine2.lineTo(183,40);
  thirdBlockLine2.lineTo(175,40);
  thirdBlockLine2.lineTo(175,47);
  thirdBlockLine2.lineTo(168,47);
  thirdBlockLine2.lineTo(168,40);
  thirdBlockLine2.lineTo(160,40);
  thirdBlockLine2.lineTo(160,48);
  thirdBlockLine2.lineTo(155,44);
  thirdBlockLine2.lineTo(155,37);
  thirdBlockLine2.lineTo(150,32);
  thirdBlockLine2.lineTo(150,39);
  thirdBlockLine2.lineTo(139,39);
  thirdBlockLine2.lineTo(139,32);
  thirdBlockLine2.lineTo(135,35);
  thirdBlockLine2.lineTo(135,43);
  thirdBlockLine2.lineTo(129,48);
  thirdBlockLine2.lineTo(129,40);
  thirdBlockLine2.lineTo(120,40);
  thirdBlockLine2.lineTo(120,47);
  thirdBlockLine2.lineTo(111,47);
  thirdBlockLine2.lineTo(111,40);
  thirdBlockLine2.lineTo(100,40);
  thirdBlockLine2.lineTo(100,48);
  thirdBlockLine2.lineTo(95,43);
  thirdBlockLine2.lineTo(95,36);
  thirdBlockLine2.lineTo(92,33);
  thirdBlockLine2.lineTo(92,40);
  thirdBlockLine2.lineTo(84,40);
  thirdBlockLine2.lineTo(84,33);
  thirdBlockLine2.lineTo(78,33);
  thirdBlockLine2.lineTo(78,40);
  thirdBlockLine2.lineTo(72,40);
  thirdBlockLine2.stroke();

const thirdBlockLine2Continuation = casaCanvas.getContext('2d');
  thirdBlockLine2Continuation.beginPath();
  thirdBlockLine2Continuation.moveTo(33,29);
  thirdBlockLine2Continuation.lineTo(24,27);
  thirdBlockLine2Continuation.lineTo(24,32);
  thirdBlockLine2Continuation.lineTo(17,31);
  thirdBlockLine2Continuation.lineTo(18,27);
  thirdBlockLine2Continuation.lineTo(15,25);
  thirdBlockLine2Continuation.stroke();

const thirdBlockUpperLine1 = casaCanvas.getContext('2d');
  thirdBlockUpperLine1.beginPath();
  thirdBlockUpperLine1.moveTo(220,29);
  thirdBlockUpperLine1.lineTo(220,15);
  thirdBlockUpperLine1.stroke();

const thirdBlockUpperLine2 = casaCanvas.getContext('2d');
  thirdBlockUpperLine2.beginPath();
  thirdBlockUpperLine2.moveTo(234,35);
  thirdBlockUpperLine2.lineTo(234,19);
  thirdBlockUpperLine2.stroke();

const thirdBlockUpperLine3 = casaCanvas.getContext('2d');
  thirdBlockUpperLine3.beginPath();
  thirdBlockUpperLine3.moveTo(240,20);
  thirdBlockUpperLine3.lineTo(229,21);
  thirdBlockUpperLine3.lineTo(215,15);
  thirdBlockUpperLine3.lineTo(220,15);
  thirdBlockUpperLine3.lineTo(215,15);
  thirdBlockUpperLine3.lineTo(230,0);
  thirdBlockUpperLine3.lineTo(230,20);
  thirdBlockUpperLine3.lineTo(240,20);
  thirdBlockUpperLine3.lineTo(230,0);
  thirdBlockUpperLine3.stroke();

const thirdBlockUpperLine4 = casaCanvas.getContext('2d');
  thirdBlockUpperLine2.beginPath();
  thirdBlockUpperLine2.moveTo(240,18);
  thirdBlockUpperLine2.lineTo(240,10);
  thirdBlockUpperLine2.lineTo(247,10);
  thirdBlockUpperLine2.lineTo(247,5);
  thirdBlockUpperLine2.lineTo(255,5);
  thirdBlockUpperLine2.lineTo(255,0);
  thirdBlockUpperLine2.lineTo(262,0);
  thirdBlockUpperLine2.lineTo(262,5);
  thirdBlockUpperLine2.lineTo(270,5);
  thirdBlockUpperLine2.lineTo(270,10);
  thirdBlockUpperLine2.lineTo(277,10);
  thirdBlockUpperLine2.lineTo(277,18);
  thirdBlockUpperLine2.lineTo(285,18);
  thirdBlockUpperLine2.stroke();

const windowThirdBlockLeft = casaCanvas.getContext('2d');
  windowThirdBlockLeft.beginPath();
  windowThirdBlockLeft.rect(250,49,10,16);
  windowThirdBlockLeft.stroke();

const windowThirdBlockRight = casaCanvas.getContext('2d');
  windowThirdBlockLeft.beginPath();
  windowThirdBlockRight.rect(270,49,10,16);
  windowThirdBlockRight.stroke();

const windowThirdBlockLeftHorizontalLine = casaCanvas.getContext('2d');
  windowThirdBlockLeftHorizontalLine.beginPath();
  windowThirdBlockLeftHorizontalLine.moveTo(249,57);
  windowThirdBlockLeftHorizontalLine.lineTo(261,57);
  windowThirdBlockLeftHorizontalLine.stroke();

const windowThirdBlockLeftVerticalLine = casaCanvas.getContext('2d');
  windowThirdBlockLeftVerticalLine.beginPath();
  windowThirdBlockLeftVerticalLine.moveTo(255,50);
  windowThirdBlockLeftVerticalLine.lineTo(255,65);
  windowThirdBlockLeftVerticalLine.stroke();

const windowThirdBlockRightHorizontalLine = casaCanvas.getContext('2d');
  windowThirdBlockRightHorizontalLine.beginPath();
  windowThirdBlockRightHorizontalLine.moveTo(269,57);
  windowThirdBlockRightHorizontalLine.lineTo(281,57);
  windowThirdBlockRightHorizontalLine.stroke();

const windowThirdBlockRightVerticalLine = casaCanvas.getContext('2d');
  windowThirdBlockRightVerticalLine.beginPath();
  windowThirdBlockRightVerticalLine.moveTo(275,48);
  windowThirdBlockRightVerticalLine.lineTo(275,65);
  windowThirdBlockRightVerticalLine.stroke();

const middleBlockBottomLine = casaCanvas.getContext('2d');
  middleBlockBottomLine.beginPath();
  middleBlockBottomLine.moveTo(138,86);
  middleBlockBottomLine.lineTo(150,86);
  middleBlockBottomLine.stroke();

const rightBlockBottomLine = casaCanvas.getContext('2d');
  rightBlockBottomLine.beginPath();
  rightBlockBottomLine.moveTo(199,86);
  rightBlockBottomLine.lineTo(215,86);
  rightBlockBottomLine.stroke();

const rightestBlockBottomLine = casaCanvas.getContext('2d');
  rightestBlockBottomLine.beginPath();
  rightestBlockBottomLine.moveTo(235,105);
  rightestBlockBottomLine.lineTo(235,85);
  rightestBlockBottomLine.stroke();

const lineBeforeCurvies = casaCanvas.getContext('2d');
  lineBeforeCurvies.beginPath();
  lineBeforeCurvies.moveTo(215,65);
  lineBeforeCurvies.lineTo(225,71);
  lineBeforeCurvies.stroke();

const arcBeforeCurvies = casaCanvas.getContext('2d');
  arcBeforeCurvies.beginPath();
  arcBeforeCurvies.moveTo(220,99);
  arcBeforeCurvies.lineTo(220,85);
  arcBeforeCurvies.lineTo(225,83);
  arcBeforeCurvies.lineTo(230,89);
  arcBeforeCurvies.lineTo(230,100);
  arcBeforeCurvies.stroke();

const curvies = casaCanvas.getContext('2d');
  curvies.beginPath();
  curvies.arc(235, 65, 11, 0, Math.PI, false);
  curvies.stroke();
const curvies1 = casaCanvas.getContext('2d');
  curvies1.beginPath();
  curvies1.arc(235, 68, 10, 0, Math.PI, false);
  curvies1.stroke();
const curvies2 = casaCanvas.getContext('2d');
  curvies2.beginPath();
  curvies2.arc(235, 70, 10, 0, Math.PI, false);
  curvies2.stroke();
const curvies3 = casaCanvas.getContext('2d');
  curvies3.beginPath();
  curvies3.arc(235, 72, 10, 0, Math.PI, false);
  curvies3.stroke();

const curvies4 = casaCanvas.getContext('2d');
  curvies4.beginPath();
  curvies4.arc(235, 75, 9, 0, Math.PI, false);
  curvies4.stroke();

const curvies5 = casaCanvas.getContext('2d');
  curvies5.beginPath();
  curvies5.arc(235, 77, 9, 0, Math.PI, false);
  curvies5.stroke();


const lineAfterCurvies = casaCanvas.getContext('2d');
  lineAfterCurvies.beginPath();
  lineAfterCurvies.moveTo(225,68);
  lineAfterCurvies.lineTo(225,60);
  lineAfterCurvies.lineTo(231,67);
  lineAfterCurvies.lineTo(231,58);
  lineAfterCurvies.lineTo(239,58);
  lineAfterCurvies.lineTo(239,67);
  lineAfterCurvies.lineTo(245,61);
  lineAfterCurvies.lineTo(245,72);
  lineAfterCurvies.lineTo(255,71);
  lineAfterCurvies.lineTo(255,78);
  lineAfterCurvies.lineTo(265,77);
  lineAfterCurvies.lineTo(265,70);
  lineAfterCurvies.lineTo(275,69);
  lineAfterCurvies.lineTo(275,76);
  lineAfterCurvies.lineTo(285,75);
  lineAfterCurvies.lineTo(285,68);
  lineAfterCurvies.lineTo(295,67);
  lineAfterCurvies.lineTo(295,74);
  lineAfterCurvies.lineTo(305,73);
  lineAfterCurvies.stroke();

const arc1 = casaCanvas.getContext('2d');
  arc1.beginPath();
  arc1.moveTo(245,100);
  arc1.lineTo(245,90);
  arc1.lineTo(252,87);
  arc1.lineTo(259,90);
  arc1.lineTo(259,100);
  arc1.stroke();

const arc2 = casaCanvas.getContext('2d');
  arc1.beginPath();
  arc1.moveTo(269,100);
  arc1.lineTo(269,89);
  arc1.lineTo(276,86);
  arc1.lineTo(283,89);
  arc1.lineTo(283,99);
  arc1.stroke();

const arc3 = casaCanvas.getContext('2d');
  arc3.beginPath();
  arc3.moveTo(289,99);
  arc3.lineTo(289,88);
  arc3.lineTo(296,85);
  arc3.lineTo(303,88);
  arc3.lineTo(303,98);
  arc3.stroke();

const finalCurves = casaCanvas.getContext('2d');
  finalCurves.beginPath();
  finalCurves.arc(297, 45, 10, 0, Math.PI, false);
  finalCurves.stroke();

const finalCurves2 = casaCanvas.getContext('2d');
  finalCurves2.beginPath();
  finalCurves2.arc(297, 20, 10, 0, Math.PI, false);
  finalCurves2.stroke();

const finalCurves3 = casaCanvas.getContext('2d');
  finalCurves3.beginPath();
  finalCurves3.arc(295, 6, 10, 0, Math.PI, false);
  finalCurves3.stroke();

const finalCurves4 = casaCanvas.getContext('2d');
  finalCurves4.beginPath();
  finalCurves4.arc(297, 0, 5, 0, Math.PI, false);
  finalCurves4.stroke();

const lineConnectingFinalCurves = casaCanvas.getContext('2d');
  lineConnectingFinalCurves.beginPath();
  lineConnectingFinalCurves.moveTo(287,68);
  lineConnectingFinalCurves.lineTo(287,20);
  lineConnectingFinalCurves.lineTo(282,15);
  lineConnectingFinalCurves.lineTo(284,7);
  lineConnectingFinalCurves.lineTo(291,7);
  lineConnectingFinalCurves.lineTo(291,1);
  lineConnectingFinalCurves.stroke();

const circleRoof = casaCanvas.getContext("2d");
  circleRoof.beginPath();
  circleRoof.arc(115,19,3,0,2*Math.PI);
  circleRoof.stroke();

const circleRoof2 = casaCanvas.getContext("2d");
  circleRoof2.beginPath();
  circleRoof2.arc(175,19,3,0,2*Math.PI);
  circleRoof2.stroke();

const circleRoofAdd = casaCanvas.getContext('2d');
  circleRoofAdd.beginPath();
  circleRoofAdd.moveTo(105,40);
  circleRoofAdd.lineTo(115,20);
  circleRoofAdd.lineTo(125,40)
  circleRoofAdd.stroke();

const circleRoofAdd2 = casaCanvas.getContext('2d');
  circleRoofAdd2.beginPath();
  circleRoofAdd2.moveTo(163,41);
  circleRoofAdd2.lineTo(175,20);
  circleRoofAdd2.lineTo(188,47)
  circleRoofAdd2.stroke();
