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
        //ajoute toutes les cellules au plateau board
        for (let i =0; i<size; i++){
            for (let j = 0; j<size; j++){
                this.board.push(new Cell(i,j))
            }
        }
    },

    saveState : function(){
        //permet de freeze le plateau pour s'occuper de l'état suivant
        for (let i=0; i<size*size; i++){
            this.board[i].previousState=this.board[i].state
        }
    },

    getPreviousState : function(i,j){
        //donne l'état précédant 
        if (i<size && j<size && i>=0 && j >=0){
            console.log(i, j)
            return this.board[i*size+j].previousState
        }else{
            return 0
        }
    },

    newState : function(i, j){
        //fonction permettant de trouver les nouveaux états en fonctions des voisins
        let status = this.getPreviousState(i, j)
        let nb_vivante = 0
        for (let k = i-1; k < i+2; k++){ //regarde tous les voisins
            for (let l= j-1; l < j+2; l++){
                if (i != k || j != l && k<size && l<size && k>=0 && l >=0){
                    nb_vivante += this.getPreviousState(k, l)
                }
            }
        }
        if (status == 0){
            if (nb_vivante == 3){
                return 1
            }else{
                return 0
            }
        }
        else{
            if (nb_vivante == 2 || nb_vivante == 3){
                return 1
            }else{
                return 0
            }
        }
    },

    iterate : function(){
        //permet de changer l'état de la grille complète
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
        this.shape=paper.Path.Circle(
            {center : life.coords(this.i, this.j), 
                radius : cellSize/2, 
                fillColor : 'white',
                strokeColor : 'blue', 
                onMouseDown: this.toggleState.bind(this)})
    }
    toggleState(){
        //petit bonus : partie gérant le click souris pour tuer/faire revivre une cellule
        if(this.state == 0){
            this.live();
        }else{
            this.die();
        }
    }
    live() {
        this.state=1
        this.shape.fillColor = 'red'
    }
    die() {
        this.state=0
        this.shape.fillColor = 'white'
    }
        

}


function onFrame(){
    //permet d'iterer à chaque frame
    life.iterate()
}


function onKeyUp(event){
    if(event.key=='g'){
        console.log("Step")
        life.iterate()
    }
    //petit bonus on peut cliquer sur des ronds pour les live/die puis cliquer sur p pour lancer l'animation
    if(event.key=='p'){
        paper.view.setOnFrame(onFrame)
    }
}
window.addEventListener("keyup",onKeyUp);

window.addEventListener("load",
    function(){
        let canvas = document.getElementById("myCanvas")
        paper.setup(canvas)
        //paper.view.setOnFrame(onFrame)
        life.init() //init toutes nos cellules à dead

        //config de base
        life.board[5*size+4].live();
        life.board[5*size+5].live();
        life.board[5*size+6].live();
        life.board[5*size+7].live();
        life.board[5*size+8].live();
    
        life.board[9*size+4].live();
        life.board[9*size+5].live();
        life.board[9*size+6].live();
        life.board[9*size+7].live();
        life.board[9*size+8].live();
    
        life.board[7*size+8].live();
        life.board[7*size+4].live();
        // Placer le code à exécuter ici pour qu'il le soit une fois la page 
        // chargée dans son intégralité

    }
)