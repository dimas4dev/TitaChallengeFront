const divImages = document.querySelector(".Main__Container--Images");
const AllButton = document.querySelector("#buttonAll");
const BrandingButton = document.querySelector("#buttonBranding");
const WebButton = document.querySelector("#buttonWeb");
const PhotoButton = document.querySelector("#buttonPhoto");
const AppButton = document.querySelector("#buttonApp");

async function getImages() {
  const jsonPromise = await fetch("http://localhost:3000/images");
  const data = await jsonPromise.json();
  return data;
}

let data;
(async () => {
  data = await getImages();
})();

function addImages() {
  setTimeout(
    () =>
      data.forEach((element) => {
        const img = document.createElement("img");
        img.setAttribute("src", element.url);
        divImages.appendChild(img);
      }),
    1000
  );
}

async function buttonAll() {
  while (divImages.hasChildNodes()) {
    divImages.removeChild(divImages.firstChild);
  }
  const getJsonAllImges = await fetch(
    "http://localhost:3000/images"
  ).then((response) => response.json());

  const imagenes = getJsonAllImges.forEach((element) => {
    const img = document.createElement("img");
    img.setAttribute("src", element.url);
    divImages.appendChild(img);
  });
  return imagenes;
}
async function buttonBranding() {
  while (divImages.hasChildNodes()) {
    divImages.removeChild(divImages.firstChild);
  }
  const getJsonAllImges = await fetch(
    "http://localhost:3000/brandingSec"
  ).then((response) => response.json());

  const imagenes = getJsonAllImges.forEach((element) => {
    const img = document.createElement("img");
    img.setAttribute("src", element.url);
    divImages.appendChild(img);
  });
  return imagenes;
}
async function ButtonPhoto() {
  while (divImages.hasChildNodes()) {
    divImages.removeChild(divImages.firstChild);
  }
  const getJsonAllImges = await fetch(
    "http://localhost:3000/PhotographySec"
  ).then((response) => response.json());

  const imagenes = getJsonAllImges.forEach((element) => {
    const img = document.createElement("img");
    img.setAttribute("src", element.url);
    divImages.appendChild(img);
  });
  return imagenes;
}
async function ButtonWeb() {
  while (divImages.hasChildNodes()) {
    divImages.removeChild(divImages.firstChild);
  }
  const getJsonAllImges = await fetch(
    "http://localhost:3000/WebSec"
  ).then((response) => response.json());

  const imagenes = getJsonAllImges.forEach((element) => {
    const img = document.createElement("img");
    img.setAttribute("src", element.url);
    divImages.appendChild(img);
  });
  return imagenes;
}
async function ButtonApp() {
  while (divImages.hasChildNodes()) {
    divImages.removeChild(divImages.firstChild);
  }
  const getJsonAllImges = await fetch(
    "http://localhost:3000/AppSec"
  ).then((response) => response.json());

  const imagenes = getJsonAllImges.forEach((element) => {
    const img = document.createElement("img");
    img.setAttribute("src", element.url);
    divImages.appendChild(img);
  });
  return imagenes;
}
AllButton.addEventListener("click", buttonAll);
BrandingButton.addEventListener("click", buttonBranding);
WebButton.addEventListener("click", ButtonWeb);
PhotoButton.addEventListener("click", ButtonPhoto);
AppButton.addEventListener("click", ButtonApp);

addImages();
