const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const carbohydrates = 0.23;
const proteins = 0.0;
const fats = 0.0;

const fullRadius = canvas.width/2 - 10;

//begin of drawing
carbohydratesRadius = (carbohydrates/0.33) * fullRadius;
proteinsRadius = (proteins/0.33) * fullRadius;
fatsRadius = (fats/0.33) * fullRadius;

middleOfCanvasX = canvas.width / 2;
middleOfCanvasY = canvas.height / 2;

function drawFilledArc(x, y, radius, initialAngle, finalAngle, color) {
    // Convert angles to radians
    var startAngle = initialAngle * (Math.PI / 180);
    var endAngle = finalAngle * (Math.PI / 180);

    // Draw the arc
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawStrokedArc(x, y, radius, initialAngle, finalAngle, text) {
    // Convert angles to radians
    var startAngle = initialAngle * (Math.PI / 180);
    var endAngle = finalAngle * (Math.PI / 180);

    // Draw the arc
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.strokeColor = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Draw text in the center of the arc
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var textX = x + (radius/2 * Math.cos((startAngle + endAngle) / 2));
    var textY = y + (radius/2 * Math.sin((startAngle + endAngle) / 2));
    ctx.fillText(text, textX, textY);
}

function percentageToText(percentage) {
    // Ensure the input is between 0 and 1
    percentage = Math.max(0, Math.min(1, percentage));
  
    // Convert decimal to percentage and concatenate "%"
    var text = (percentage * 100).toFixed(0) + '%';
  
    return text;
}

drawFilledArc(middleOfCanvasX, middleOfCanvasY, fatsRadius, -90, 30, '#FFBF00');
drawFilledArc(middleOfCanvasX, middleOfCanvasY, proteinsRadius, 30, 150, '#E3242B');
drawFilledArc(middleOfCanvasX, middleOfCanvasY, carbohydratesRadius, 150, 270, '#03AC13');

drawStrokedArc(middleOfCanvasX, middleOfCanvasY, fullRadius, -90, 30, percentageToText(fats));
drawStrokedArc(middleOfCanvasX, middleOfCanvasY, fullRadius, 30, 150, percentageToText(proteins));
drawStrokedArc(middleOfCanvasX, middleOfCanvasY, fullRadius, 150, 270, percentageToText(carbohydrates));