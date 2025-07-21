// recupero gli elementi del dom
const galleryPhoto = document.getElementById('gallery');

// creo una costante per l'api

const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/'

// html per aggiungere i dati dell'api
const generatePhoto = function (photo) {
  const photoTrip = `<div class="col-12 col-md-6 col-lg-4 mb-3 my-5 ">
          <div class="bg-white p-2 text-center">
            <div>
              <img src="js/img/pin.svg" alt="" class="">
            </div>
            <img src="${photo.url}" class="img-fluid mb-2" alt="...">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
  `;
  return photoTrip;
};

// prendo l'api con axios
const loadPhoto = function () {
  //svuoto il contenitore per mettere le url
  galleryPhoto.innerHTML = ' ';
  axios.get(apiUrl).then(function (response) {
    response.data.forEach(function (photo) {
      galleryPhoto.innerHTML += generatePhoto(photo);
    });
  })
};
// richiamo la funzione per mostrare i dati
loadPhoto();