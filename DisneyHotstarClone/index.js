let movies = [
  {
    name: "falcon and the winter soldier",
    genre:"Marvel · Superhero · Action · Science Fiction",
    des:
      "Falcon y Winter Soldier, Falcon y el Soldado de Invierno en España, sigue la historia de Sam Wilson y Bucky Barnes tras los acontecimientos de Vengadores: Endgame, donde deben lidiar con el legado de poder llegar a ser el nuevo Capitán América.",
    image: "images/slider2.png"
  },
  {
    name: "loki",
    genre:"Marvel · Superhero · Action ",
    des:
      "Loki se une a una misión de la AVT al sitio de un ataque en 1985 en Oshkosh, Wisconsin, donde se detiene e intenta negociar para encontrarse...",
    image: "images/slider1.png"
  },
  {
    name: "wanda vision",
    genre:"Marvel · English · Superhero · Action · Science Fiction",
    des:
      "Combinando el estilo clásico de las sitcoms con el Universo Cinematográfico de Marvel, Wandavision, cuenta la historia Wanda Maximoff y Vision, dos seres con superpoderes que viven una vida idílica en las afueras de una ciudad hasta que un día comienzan a sospechar que no todo es lo que parece.",
    image: "images/slider3.png"
  },
  {
    name: "raya and the last dragon",
    genre:"Animation · Fantasy · Adventure · Kids",
    des:
      "En el fantástico mundo de Kumandra, humanos y dragones vivieron juntos en perfecta armonía. Sin embargo, cuando unas fuerzas del mal amenazaron el territorio, los dragones se sacrificaron para salvar a la humanidad. Cerca de 500 años después, esas mismas fuerzas malignas han regresado y Raya, una guerrera solitaria, tendrá que encontrar al último y legendario dragón para reconstruir un mundo destruido y volver a unir a su pueblo.",
    image: "images/slider4.png"
  },
  {
    name: "luca",
    genre:"Animation · Fantasy · Adventure · Kids",
    des:
      "En un hermoso pueblo en la Riviera italiana, Luca y Alberto disfrutan del verano mientras intentan ocultar su gran secreto: ambos son monstruos marinos que se convierten en humanos cuando están secos.",
    image: "images/slider5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let genre = document.createElement("p");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  genre.appendChild(document.createTextNode(movies[slideIndex].genre));
  content.appendChild(h1);
  content.appendChild(genre);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  genre.className = "movie-gen"
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
