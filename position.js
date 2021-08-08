function geoFindMe() {

  const status = document.querySelector('#status');
  const plan = document.querySelector('#plan');

  plan.href = '';
  plan.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    plan.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    plan.innerHTML = `<p>Latitude: ${latitude} °<br>Longitude: ${longitude} °`;
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