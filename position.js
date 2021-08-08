function geoFindMe() {

  const status = document.querySelector('#status');
  status.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.innerHTML = `Latitude: ${latitude} °<br>Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Impossible de retrouver votre position.';
  }

  if(!navigator.geolocation) {
    status.textContent = 'La géolocalisation n\'est pas prise en charge par votre navigateur.';
  } else {
    status.textContent = 'Localisation en cours..';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}