window.onload=function(){

    function switchMenu(){
        //permet d'afficher le menu déroulant quand on click sur menu
        var elem = document.getElementById("menu")
        var bouton = document.getElementById("showMenu")
        if (bouton.checked ==true){ //case cochée
            elem.style.display="block"
        }else{
            elem.style.display="none"
        }
    }

    function switchTheme(){
        var theme = document.getElementById("ltheme").selectedIndex
        var menu= document.getElementById("showMenu")
        if(theme==0){
            document.body.className="theme1" //on chosit le theme 1

            //pour le thème 1 on n'affiche pas le menu
            menu.style.display="none"
            menu.nextElementSibling.style.display="none"
            document.getElementById("showMenu").checked=false
        }else if (theme==1){
            document.body.className="theme2"
            //permet de bien afficher le bouton du menu si il a été enlevé
            menu.style.display="initial"
            menu.nextElementSibling.style.display="initial"
        }else{
            document.body.className="theme3"
            //permet d'afficher le bouton du menu si il a été enlevé
            menu.style.display="initial"
            menu.nextElementSibling.style.display="initial"
        }
    }

    
    document.getElementById("showMenu").addEventListener("click", switchMenu, false)
    document.getElementById("ltheme").addEventListener("click", switchTheme, false)
}

function initialize(){
    //initialise au chargement au theme 1 et n'affiche pas le menu
    document.getElementById("showMenu").checked = false
    document.getElementById("menu").style.display = "none"
    document.body.className="theme1"
    var menu= document.getElementById("showMenu")
    menu.style.display="none"
    menu.nextElementSibling.style.display="none"
}

window.addEventListener("load", initialize, false)