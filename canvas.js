function init() {
    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = '#4444CC';
    ctx.fillRect(250, 25, 500, 200);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(560, 90, 80, 40);

    ctx.fillStyle = 'red';
    ctx.fillRect(470, 225, 50, 60);

    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(400, 100, 50, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    // ctx.fillStyle = 'black';
    // ctx.beginPath();
    // ctx.arc(495, 350, 90, 0, 2 * Math.PI);
    // ctx.closePath();
    // ctx.fill();

    ctx.fillStyle = '#4444CC';
    ctx.fillRect(425, 285, 140, 150);
}

document.addEventListener('DOMContentLoaded', init)
