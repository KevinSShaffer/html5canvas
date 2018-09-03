
let circles = [];

window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    canvas.onclick = event => {
        const pos = getCursorPosition(canvas, event);
        const found = circles.find(circle => {
            return isInsideCircle(pos.x, pos.y, circle);
        });

        if (found) {
            context.fillStyle = 'green';
            drawCircle(context, found);
        } else {
            const circle = { x: pos.x, y: pos.y, radius: 25 };
            
            context.fillStyle = 'black';
            drawCircle(context, circle); 
            circles.push(circle);
        }
    };
};

function isInsideCircle(x, y, circle) {
    x = Math.abs(x - circle.x);
    if (x > circle.radius) return false;
    y = Math.abs(y - circle.y);
    if (y > circle.radius) return false;

    return circle.radius >= Math.sqrt(x * x + y * y);
}

function drawCircle(context, circle) {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fill();
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return { 
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}