// LEITURA E ESCRITA JSON

var request = new XMLHttpRequest();
    request.open("GET", "./assets/duvidas.json", false);
    request.send(null)
    var duvidas = JSON.parse(request.responseText);
     
    for (let i = 0; i < (Object.keys(duvidas.lista_tarefas).length); i++){
        const node = document.createTextNode(duvidas.lista_tarefas[i].titulo);
        const node1 = document.createTextNode(duvidas.lista_tarefas[i].descricao);

        const duvida = document.createElement("div");
        duvida.setAttribute("id", "duvida"+i);
        document.getElementById("containerDuvidas").appendChild(duvida);

        const tituloDuvida = document.createElement("div");
        tituloDuvida.setAttribute("id", "tituloDuvida"+i);
        tituloDuvida.setAttribute("class", "tituloDuvida");
        document.getElementById("duvida"+i).appendChild(tituloDuvida);

        const titulo = document.createElement("h3");
        titulo.appendChild(node);
        document.getElementById("tituloDuvida"+i).appendChild(titulo);

        const divisoria = document.createElement("div");
        divisoria.setAttribute("id", "divisoria");
        document.getElementById("tituloDuvida"+i).appendChild(divisoria);

        const img = document.createElement("img");
        img.src = "./assets/icons/seta.png";
        document.getElementById("tituloDuvida"+i).appendChild(img);

        const descricaoDuvida = document.createElement("div");
        descricaoDuvida.setAttribute("id", "descricaoDuvida"+i);
        descricaoDuvida.setAttribute("class", "descricaoDuvida");
        document.getElementById("duvida"+i).appendChild(descricaoDuvida)

        const descricao = document.createElement("h4");
        descricao.appendChild(node1);
        document.getElementById("descricaoDuvida"+i).appendChild(descricao);
    }


// MENU LATERAL

function abrir() {
    document.getElementById("menuLateral").style.width = "100vw";
    document.getElementById("menuLateral").style.display = "flex";
    }
    
    function fechar() {
    document.getElementById("menuLateral").style.display = "none";
}


// ANIMAÇÃO MENU HAMBUGUER

function anima(x) {
  x.classList.toggle("anima");
}


// SANFONA DÚVIDAS

var acc = document.getElementsByClassName("tituloDuvida");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    }else{
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
});
}

    