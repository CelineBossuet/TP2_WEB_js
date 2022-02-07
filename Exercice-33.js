window.onload=function(e){

    function switchMenu(){
        var elem = document.getElementById("menu")
        var bouton = document.getElementById("showMenu")
        if (bouton.checked ==true){
            elem.style.display="block"
        }else{
            elem.style.display="none"
        }
    }

    function switchTheme(){
        var elem = document.getElementById("ltheme").selectedIndex
        if(elem==0){
            document.body.className="theme1"
        }else if (elem==1){
            document.body.className="theme2"
        }else{
            document.body.className="theme3"
        }
    }

    
    document.getElementById("showMenu").addEventListener("click", switchMenu, false)
    document.getElementById("ltheme").addEventListener("click", switchTheme, false)
}

function initialize(){
    document.getElementById("showMenu").checked = false
    document.getElementById("menu").style.display = "none"
    document.body.className="theme1"
}

window.addEventListener("load", initialize, false)