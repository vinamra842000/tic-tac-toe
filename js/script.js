const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".new-game");
const resetGame = document.querySelector(".reset-game");
const winh1 = document.querySelector("#winner");
let isOturn = true;

const posibleWin = [[0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (isOturn) {
            box.innerHTML = "O";
            isOturn = false;
            box.style.color="#B74F6F";
            box.disabled = true;
        }
        else {
            box.innerHTML = "X";
            isOturn = true;
            box.style.color="#9900ff";
            box.disabled = true;
        }

        isWinner();
    });
});

function isWinner(){
    let isWin = false;
    let winSign = "";
    posibleWin.forEach((win)=>{
        let pos1 = boxes[win[0]].innerHTML;
        let pos2 = boxes[win[1]].innerHTML;
        let pos3 = boxes[win[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != "" && pos1 == pos2  && pos2 == pos3){
            isWin = true;
            winSign = boxes[win[0]].innerHTML;
        }
    });

    let isGameDraw = true;
    boxes.forEach((box) => {
        if(box.innerHTML == ""){
            isGameDraw = false;
        }
    });

    if(isWin){
        winh1.innerHTML = "WINNER IS " + winSign;
        disableAll();
    }
    if(isGameDraw){
        winh1.innerHTML = "GAME IS DRAW";
        disableAll();
    }
}


function disableAll(){
    boxes.forEach((box) => {box.disabled = true});
}

newGame.addEventListener("click", () => {
    boxes.forEach((box) => stopGame(box))
});

resetGame.addEventListener("click", () => {
    boxes.forEach((box) => stopGame(box))
});

function stopGame(box) {
    box.innerHTML = "";
    box.disabled = false;
    isOturn = true;
    winh1.innerHTML = "";
}

