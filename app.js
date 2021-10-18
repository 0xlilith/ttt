let music = new Audio("sauce/cozy.mp3")
let click = new Audio("sauce/click.wav")
let gameover = false;
let turn = 'X';

const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '') ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " - WON"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
            
        }
    })
}

// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            click.play();
            checkWin();
            if (gameover == false) {
                document.getElementsByClassName("info")[0].innerText = turn + "'s - TURN";
            } 
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = 'X';
    gameover == false;
    document.getElementsByClassName("info")[0].innerText = turn + "'s - TURN";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})