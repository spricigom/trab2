// Detecta a rolagem da página e adiciona/remova uma classe no menu conforme necessário
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  