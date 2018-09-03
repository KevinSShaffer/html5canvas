
window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    canvas.onclick = e => {
        const pos = getCursorPosition(canvas, e);

        context.beginPath();
        context.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
        context.fill();
    };

    const grades = [80, 90, 70, 100, 60, 80, 90];
    const width = 45;
    const startPos = { x: 50, y: 350 };

    context.strokeStyle = 'white';
    context.lineWidth = 2;

    grades.forEach((grade, i) => {
        let x = (i + 1) * startPos.x;

        context.fillStyle = 'green';
        context.fillRect(x, startPos.y, width, -grade);

        context.fillStyle = 'red';
        context.beginPath();
        context.arc(x + (width / 2), startPos.y - grade, width / 2, 0, 1 * Math.PI, true);
        context.fill();
        //context.stroke();
    });
};

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return { 
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}