var setaEsquerda = window.document.getElementById("setaEsquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("setaDireita")

function RolarParaDireita(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaEsquerda.style ="display:flex"
    setaDireita.style ="display:none"
}

function RolarParaEsquerda(){
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
    Leonardo.style ="display:flex"
    Bruna.style="display:none"

}