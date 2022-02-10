window.onload=function(){

function bouton1(){
    var elem = document.getElementById('contents')
    elem.style.backgroundColor='yellow'
}

function bouton2(){
    var elem =document.getElementById('introduction')
    if(elem.style.color=='red'){
        elem.style.color='#66f'
    }else{
        elem.style.color='red'
    }
}

function bouton3(){
    var elemList = document.querySelectorAll("p")
    let i =0;
    while(i<elemList.length){ //pour tous les paragraphes p
        if(elemList[i].style.fontStyle != "italic"){ //si pas déja en italic
            elemList[i].style.fontStyle = "italic";
            i=elemList.length //permet de sortir de la boucle 
        }else{
            i++
        }
        
    }

}


document.getElementById('b1').addEventListener("click", bouton1, false)
document.getElementById('b2').addEventListener("click", bouton2, false)
document.getElementById('b3').addEventListener("click", bouton3, false)
}