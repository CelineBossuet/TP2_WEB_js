const cellSize = 20 
const size = 30

const life = {
    board : [],
    borderX : function (){
        return (paper.view.size.width - size * cellSize) / 2
    },
    borderY : function(){
        return (paper.view.size.height - size * cellSize) / 2
    },
    coords : function(i, j){
        return [this.borderX() + i*cellSize, this.borderY() + j*cellSize]
    },
    init : function(){
        for (let i =0; i<size; i++){
            for (let j = 0; j<size; j++){
                this.board.push(new Cell(i,j))
            }
        }
    },

    saveState : function(){
        for (let i=0; i<size*size; i++){
            this.board[i].previousState=this.board[i].state
        }
    },

    getPreviousState : function(i,j){
        if (i<size && j<size && i>=0 && j >=0){
            console.log(i, j)
            return this.board[i*size+j].previousState
        }else{
            return 0
        }
    },

    newState : function(i, j){
        let status = this.getPreviousState(i, j)
        let nb_vivante = 0
        console.log("i , j", i, j)
        for (let k = i-1; k < i+2; k++){
            for (let l= j-1; l < j+2; l++){
                console.log(k,l)
                if (i != k || j != l && k<size && l<size && k>=0 && l >=0){
                    console.log("on rentre dans le if !")
                    nb_vivante += this.getPreviousState(k, l)
                }
            }
        }
        if (status == 0){
            if (nb_vivante == 3){
                return 1
            }
            else{
                return 0
            }
        }
        else{
            if (nb_vivante == 2 || nb_vivante == 3){
                return 1
            }
            else{
                return 0
            }
        }
    },

    iterate : function(){
        this.saveState()
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                this.board[i*size + j].state = this.newState(i, j)
                if (this.board[i*size + j].state == 0){
                    this.board[i*size + j].die()
                }
                else{
                    this.board[i*size + j].live()
                }
            }
        }
    }
}

class Cell {
    constructor(i, j){
        this.i=i
        this.j=j
        this.state=0
        this.previousState=0
        this.draw('white', 'blue')
    }
    live() {
        this.state=1
        this.draw('cyan', 'blue')
    }
    die() {
        this.state=0
        this.draw('white', 'blue')
    }
    draw(color, stroke){
        this.shape=paper.Path.Circle(
            {center : life.coords(this.i, this.j), 
                radius : cellSize/2, 
                fillColor : color,
                strokeColor : stroke})
    }

}
function onKeyUp(event){
    if(event.key=='g'){
        console.log("Step")
        life.iterate()
    }
}
window.addEventListener("keyup",onKeyUp);

function onFrame(){
    life.iterate()
}

window.addEventListener("load",
    function(){
        let canvas = document.getElementById("myCanvas")
        paper.setup(canvas)
        paper.view.setOnFrame(onFrame)
        life.init()
        life.board[5*size+4].live();
        life.board[5*size+5].live();
        life.board[5*size+6].live();
        // Placer le code à exécuter ici pour qu'il le soit une fois la page 
        // chargée dans son intégralité
    }
)