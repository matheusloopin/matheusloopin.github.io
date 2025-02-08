//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
};

parametros.forEach(ativarProduto);

//---------------------------------------------------------

// evento para perguntas e respostas


// seleciona todos os botões do descendentes do elemento ".perguntas"
const botoes = document.querySelectorAll(".perguntas button");

// apresentar e esconder conteúdo de perguntas
function ativarClass(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarClass)
}

botoes.forEach(eventosPerguntas);

/*
-----------------------------------------------------
evento de galeria
*/
const galeria = document.querySelectorAll(".bicicletas-imagens img");
const galeriaConteiner = document.querySelector(".bicicletas-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if(media) {
    galeriaConteiner.prepend(img);
  }
}

function eventoGaleria(img){
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

//---------------------------------------------------------
// Animação

if(window.SimpleAnime) {
  new SimpleAnime();
}
