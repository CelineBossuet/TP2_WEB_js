function modif(){
    let corps = document.querySelector('body')
    let liste = document.createElement("ul")
    let point1 = document.createElement("li")
    let point2 = document.createElement("li")
    let point3 = document.createElement("li")
    
    let one = document.createTextNode("one")
    let two = document.createTextNode("two")
    let three = document.createTextNode("three")

    point1.appendChild(one)
    point2.appendChild(two)
    point3.appendChild(three)
    point3.className ="last"

    liste.appendChild(point1)
    liste.appendChild(point2)
    liste.appendChild(point3)
    
    corps.appendChild(liste)
}
window.addEventListener("load", modif, false);