// Fase di preparazione

// Lista sorgenti immagini
const sources = ["img/img01.jpg", "img/img02.jpg", "img/img03.jpg", "img/img04.jpg", "img/img05.jpg"];

// Recupero gli elementi dal DOM
const prevElement = document.getElementById("prev");
console.log(prevElement);

const carouselGallery = document.querySelector(".gallery");
console.log(carouselGallery);

const nextElement = document.getElementById("next");
console.log(nextElement);

// Genero le immagini dinamicamente
for (let i = 0; i < sources.length; i++) {
    const currentSource = sources[i];
    const img = document.createElement("img");
    img.src = currentSource;
    img.alt = `img0${i + 1}`;
    carouselGallery.appendChild(img);
}

const images = document.querySelectorAll("#carousel img");
console.log(images);

// Aggiungo la classe "active" alla prima immagine per renderla visibile
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add("active");

// Fase di gestione eventi

// Reazione al prev
prevElement.addEventListener("click", function () {
    // Rimuovo la classe "active" all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove("active");
    // Decremento l'indice
    currentActiveIndex--;
    // Controllo l'uscita dall'array
    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }
    // Aggiungo la classe "active" all'immagine precedente
    images[currentActiveIndex].classList.add("active");
});

// Reazione al next
nextElement.addEventListener("click", function () {
    // Rimuovo la classe "active" all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove("active");
    // Incremento l'indice
    currentActiveIndex++;
    // Controllo l'uscita dall'array
    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }
    // Aggiungo la classe "active" all'immagine successiva
    images[currentActiveIndex].classList.add("active");
});

// Fase di raccolta dati
// Fase di elaborazione
// Fase di produzione