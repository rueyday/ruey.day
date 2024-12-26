function moveCircle() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    const maxX = gameAreaRect.width - 50;
    const maxY = gameAreaRect.height - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

function startGame() {
    if (isPlaying) return;

    isPlaying = true;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;

    // Start smooth circle movement
    const interval = setInterval(() => {
        if (!isPlaying) {
            clearInterval(interval);
            alert(`Game Over! Your final score is ${score}.`);
        } else {
            moveCircle();
        }
    }, 1000);

    setTimeout(() => {
        isPlaying = false;
    }, 30000);
}

circle.addEventListener('click', () => {
    if (isPlaying) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }
});
