const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 50, size: 20, speed: 5 };

function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

function updatePlayer() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") player.x += player.speed;
        if (e.key === "ArrowLeft") player.x -= player.speed;
        if (e.key === "ArrowUp") player.y -= player.speed;
        if (e.key === "ArrowDown") player.y += player.speed;
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

updatePlayer();
gameLoop();