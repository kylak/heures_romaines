function geoFindMe() {

  const status = document.querySelector('#status');
  const lat = document.querySelector('#lat');
  const lon = document.querySelector('#lon');

  lat.href = '';
  lat.textContent = '';
  lon.href = '';
  lon.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    lat.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    lon.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    lat.textContent = `Latitude: ${latitude} °`;
    lon.textContent = `Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Impossible de retrouver votre position';
  }

  if(!navigator.geolocation) {
    status.textContent = 'La géolocalisation n\'est pas prise en charge par votre navigateur';
  } else {
    status.textContent = 'Localisation en cours..';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}