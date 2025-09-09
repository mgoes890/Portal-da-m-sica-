// Mensagem de boas-vindas
document.addEventListener("DOMContentLoaded", function() {
  alert("Bem-vindo ao Portal da Música! Explore Samba, Pagode e Funk.");
});

// Lógica do botão de acessibilidade
const btn = document.getElementById("btnAcessibilidade");
let contrasteAtivo = false;
let textoMaior = false;

btn.addEventListener("click", function() {
  if (!contrasteAtivo && !textoMaior) {
    document.body.classList.add("alto-contraste");
    contrasteAtivo = true;
    btn.textContent = "A++";
  } else if (contrasteAtivo && !textoMaior) {
    document.body.classList.add("texto-maior");
    textoMaior = true;
    btn.textContent = "Reset";
  } else {
    document.body.classList.remove("alto-contraste", "texto-maior");
    contrasteAtivo = false;
    textoMaior = false;
    btn.textContent = "A+";
  }
});
