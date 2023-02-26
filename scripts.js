let index = 0;
showSlides();

// función para mostrar las imágenes de forma aleatoria cada 3 segundos 
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// función para obtener el ancho de la barra de scroll
const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width

// funcion para asignar ese valor a una variable css
const cssScrollBarWidth = () => document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`)

// asignar la variable css al cargar la página
addEventListener('load', cssScrollBarWidth)

// reasignar la variable css al redimensionar la ventana
addEventListener('resize', cssScrollBarWidth)



