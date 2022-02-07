function modif(){
    corps = document.querySelector('body')
    liste = document.createElement("ul")
    point1 = document.createElement("li")
    point2 = document.createElement("li")
    point3 = document.createElement("li")

    one = document.createTextNode("one")
    two = document.createTextNode("two")
    three = document.createTextNode("three")

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