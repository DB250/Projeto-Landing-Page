var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaESquerda = window.document.getElementById("seta-esquerda") 

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style = "display:none"
    setaESquerda.style = "display:flex; margin-top:55px"

}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style ="display:flex; margin-top:55px"
    setaESquerda.style ="display:none"

}
