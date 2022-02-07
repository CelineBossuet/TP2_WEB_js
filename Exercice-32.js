window.onload=function(e){

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
    while(i<elemList.length){
        if(elemList[i].style.fontStyle != "italic"){
            elemList[i].style.fontStyle = "italic";
            i=elemList.length
        }else{
            i++
        }
        
    }

}


document.getElementById('b1').addEventListener("click", bouton1, false)
document.getElementById('b2').addEventListener("click", bouton2, false)
document.getElementById('b3').addEventListener("click", bouton3, false)
}