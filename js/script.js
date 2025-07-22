// recupero gli elementi del dom
const galleryPhoto = document.getElementById('gallery');
const pageOverlay = document.getElementById('overlay');
const buttonOverlay = document.getElementById('button');
const overlayImage = document.getElementById('overlayImage');
// creo una costante per l'api

const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/'

// html per aggiungere i dati dell'api
const generatePhoto = function (photo) {
  return `<div class="col-12 col-md-6 col-lg-4 mb-3 my-5 ">
          <div class="bg-white p-2 text-center">
            <div>
              <img src="js/img/pin.svg" alt="" class="">
            </div>
            <img src="${photo.url}" class="img-fluid mb-2 clickableImage" alt="...">
               <data>${photo.date}</data>
            <p>${photo.title}</p>
          </div>
        </div>
  `;
};

const loadPhoto = function () {
  galleryPhoto.innerHTML = '';
  axios.get(apiUrl).then(function (response) {
    response.data.forEach(function (photo) {
      galleryPhoto.innerHTML += generatePhoto(photo);
    });
    const clickableImages = document.querySelectorAll('.clickableImage');
    clickableImages.forEach(function (image) {
      image.addEventListener('click', function () {
        overlayImage.src = image.src;
        pageOverlay.classList.remove('d-none');
      });
    });
  });
};

buttonOverlay.addEventListener('click', function () {
  pageOverlay.classList.add('d-none');
});

// richiamo la funzione per mostrare i dati
loadPhoto();