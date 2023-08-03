const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", function () {
    if (!aba.classList.contains("selecionado")) { 
     selecionaraba(aba)
     mostrarInformacoesDaAba(aba) 
    }
  });
});

function selecionaraba(aba){
  const abaselecionada = document.querySelector(".aba.selecionado");
  abaselecionada.classList.remove("selecionado");

  aba.classList.add("selecionado");

}

function mostrarInformacoesDaAba(aba){
  const informacaoselecionada = document.querySelector(".informacao.selecionado");
      informacaoselecionada.classList.remove("selecionado");

      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
      const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
      informacaoAserMostrada.classList.add("selecionado");
}