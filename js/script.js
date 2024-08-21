/*
1.
*/

// Fase di preparazione

// Lista sorgenti immagini
const sources = ["img/img01.jpg", "img/img02.jpg", "img/img03.jpg", "img/img04.jpg", "img/img05.jpg"];

// Recupero gli elementi dal DOM
const carouselGallery = document.querySelector(".gallery");
console.log(carouselGallery);

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
images[0].classList.add("active");

// Fase di gestione eventi
// Fase di raccolta dati
// Fase di elaborazione
// Fase di produzione