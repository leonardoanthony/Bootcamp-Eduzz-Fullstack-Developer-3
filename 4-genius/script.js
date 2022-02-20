let score = 0;
let nivel = 1;
let highscore = 0;
let colorSelected = [];
let orderColor = [];

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const colors = [green, red, yellow, blue];

//* Inicia o jogo
const playGame = () => {
    selectOrder();
    nivelGame.textContent = nivel;
    scoreGame.textContent = score;
}

const gameOver = () => {
    alert('você perdeu');
    score = 0;
    nivel = 1;
    colorSelected = [];
    orderColor = [];
    playGame();
}

const nextLevel = () => {
    score++;
    nivel++;
    nivelGame.textContent = nivel;
    scoreGame.textContent = score;
    checkHighscore();
    highscoreGame.textContent = highscore;
    selectOrder();
}  

//* Seleciona a ordem da cor a ser exibida
const selectOrder = () => {
    const corID = Math.floor(Math.random() * 4);
    orderColor.push(corID);
    colorSelected = [];
    // console.log(orderColor);
    orderColor.forEach((order, index) => {
        lightColor(order, index+1);
    })
    
}

//* exibe as cores na ordem da lista
const lightColor = (order, index) => {
    let time = index * 2000;
    setTimeout(() => {
        colors[order].classList.add('selected');
    }, time)
    
    setTimeout(() => {
        colors[order].classList.remove('selected');
    },time + 1000);
}

//* click do jogador

colors.forEach((color, index) => {
    color.onclick = () => click(index);
})

const click = (colorID) => {
    colorSelected[colorSelected.length] = colorID;
    colors[colorID].classList.add('selected');

    setTimeout(() => {
        colors[colorID].classList.remove('selected');
        checkOrder();
    }, 250);
}

const checkOrder = () => {
    for(let key in colorSelected){
        if(orderColor[key] != colorSelected[key]){
            gameOver();
        }
    }

    if(colorSelected.length == orderColor.length){
        nextLevel();
    }
}

const checkHighscore = () => {
    if(score > highscore){
        highscore++;
    }
}





playGame();



