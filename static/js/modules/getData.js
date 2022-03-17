export function setURL(query, article) {
  let h2Discover = document.querySelector(`.${article} h2`);
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = '8854ebaac6d5b76ab5a25a372d249680';
  const detail = 'Default';


  //Titel vullen met zoekterm
  h2Discover.textContent = `Resultaten voor: '${query}'`;

  //In geval geen input zoekbalk, laat discover zien
  if (query == '') {
      console.log('test')
      query = 'Ondernemen';
      h2Discover.textContent = 'Discover';
  }

  //URL instellen
  let apiURL = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  return apiURL;
}


//Get data
export async function getData(url) {
    let data = fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });  

    return data;
}



//Get detail data
export async function getDetailData(id) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/details/?id=';
  const key = '8854ebaac6d5b76ab5a25a372d249680';

  let urlDetail = `${cors}${endpoint}${id}&authorization=${key}&output=json`;

  let data = fetch(urlDetail)
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log(err);
  });  

  return data;
}


export function setBronURL(query) {
  const cors = 'http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=';
  const middle = '+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia';
  const key = '8854ebaac6d5b76ab5a25a372d249680';

  //URL instellen
  let apiURL = `${cors}${query}&authorization=${key}&output=json`;
  return apiURL;
}


//Get data
export async function getBronData(url) {
    let data = fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });  

    return data;
}