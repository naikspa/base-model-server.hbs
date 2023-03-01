const typed = new Typed(".typed", {
  strings: [
    '<i class="iconos">Programador</i>',
    '<i class="iconos">Desarrollador</i>',
    '<i class="iconos">Coder</i>',
    '<i class="iconos">Developer</i>',
  ],
  stringsElement: "#cadenas-texto",
  typeSpeed: "9",
  startDelay: "300",
  backSpeed: "9",
  smartBackspace: true,
  shuffle: false,
  backDelay: "1300",
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: "|",
  contentType: "html",
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

const inicio = document.getElementById("inicio");

const sobreMi = document.getElementById("sobre-mi");

const servicios = document.getElementById("servicios");

window.addEventListener("scroll", function () {
  inicio.classList.toggle(
    "star",
    window.scrollY > 0 && this.window.scrollY < 220
  );

  sobreMi.classList.toggle(
    "star",
    this.window.scrollY > 220 && this.window.scrollY < 1050
  );

  servicios.classList.toggle("star", this.window.scrollY > 1050);
});

inicio.addEventListener("click", {
  function() {
    window.scrollY = 220;
  },
});

console.log(scrollY);
