const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const areaJogo = document.querySelector('.game-board')
const botaoComecar = document.querySelector('.botão-start')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const tamanhoTela = window.innerWidth;

function restart() {
    pipe.src = ""
}

botaoComecar.addEventListener('click', () => {

    document.addEventListener('keydown', jump);
    areaJogo.addEventListener('touchstart', jump); 

    restart()

    mario.src = './image/mario.gif'
    pipe.src = './image/pipe.png'

    if(tamanhoTela <= 580) {
        pipe.style.animation = 'pipe-animation 800ms infinite linear';
        mario.style.width ='75px';
        pipe.style.width = '40px'
    } else {
        pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    }
    
    botaoComecar.style.display = 'none'

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        console.log(marioPosition)
    
        if(tamanhoTela <= 580) {
    
            
            if(pipePosition <= 80 && pipePosition > 0 && marioPosition < 40) {
    
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;
        
                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;
        
                mario.src = './image/game-over.png'
                mario.style.width = '35px'
                mario.style.marginLeft = '50px'
        
                clearInterval(loop);
    
                botaoComecar.style.display = "";
            }
        } else {
    
            if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;
        
                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;
        
                mario.src = './image/game-over.png'
                mario.style.width = '75px'
                mario.style.marginLeft = '50px'
        
                clearInterval(loop);
    
                botaoComecar.style.display = "";
    
            }
        }
    }, 10)

    mario.src ='./image/mario.gif'
})






