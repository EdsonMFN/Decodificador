var inputTextarea = document.querySelector("#input-textarea")

var outinput = document.querySelector("#outinput");

function criptografar () {

    var text = inputTextarea.value;

    var cripto = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('outinput').innerHTML = '<div class= "caixa-copy"><textarea readonly neme="text" id="outinput-textarea" cols="30" rows="10" placeholder="Digite o seu texto aqui">'+ cripto + '</textarea></div>' + '<button class = "btn-copy" id= "btn-copy" onclick = "copy()"> Copiar </button>';
    
    document.getElementById('caixaGaroto').hidden=true;

}

function descriptografar () {

    var text = inputTextarea.value;

    var descripto = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('outinput').innerHTML = '<div class= "caixa-copy"><textarea readonly neme="text" id="outinput-textarea" cols="30" rows="10" placeholder="Digite o seu texto aqui">' + descripto + '</textarea></div>' + '<button class = "btn-copy" id = "btn-copy" onclick = "copy()"> Copiar </button>'

}
function copy () {

    var textCopy = document.getElementById('outinput-textarea');

    textCopy.select();

    document.execCommand('copy');
}
