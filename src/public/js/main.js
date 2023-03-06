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
  showCursor: false,
  contentType: "html",
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

const inicio = document.getElementById("inicio");

const sobreMi = document.getElementById("sobre-mi");

const servicios = document.getElementById("servicios");

const contacto = document.getElementById("contacto");

const zona1 = document.getElementById("zona1");

const zona2 = document.getElementById("zona2");

const zona3 = document.getElementById("zona3");

const zona4 = document.getElementById("zona4");

window.addEventListener("scroll", function () {
  inicio.classList.toggle(
    "star",
    window.scrollY > 0 && this.window.scrollY < 220
  );

  sobreMi.classList.toggle(
    "star",
    this.window.scrollY > 220 && this.window.scrollY < 1050
  );

  servicios.classList.toggle(
    "star",
    this.window.scrollY > 1050 && this.window.scrollY < 1850
  );

  contacto.classList.toggle("star", this.window.scrollY > 1850);
});

inicio.addEventListener("click", () => {
  zona1.scrollIntoView({
    behavior: "smooth",
  });
});

sobreMi.addEventListener("click", () => {
  scrollTo({
    top: 780,
    behavior: "smooth",
  });
});

servicios.addEventListener("click", () => {
  scrollTo({
    top: 1450,
    behavior: "smooth",
  });
});

contacto.addEventListener("click", () => {
  scrollTo({
    top: 1986,
    behavior: "smooth",
  });
});

console.log(scrollY);
