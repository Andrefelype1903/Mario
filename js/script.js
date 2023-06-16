const mario = document.querySelector('.mario');
const areaJogo = document.querySelector('.game-board')


const jump = () => {
    mario.classList.add('jump');
}


document.addEventListener('keydown', jump);
areaJogo.addEventListener('touchstart', jump);