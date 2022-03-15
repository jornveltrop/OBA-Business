const secret = '34dd0c6e69370e1b0d2b06fb8343c17f';
const config = {
  Authorization: `Bearer ${secret}`
};

export function setURL(query) {
  const h2Discover = document.querySelector(".discover h2");
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = '8854ebaac6d5b76ab5a25a372d249680';
  const detail = 'Default';


  //Titel vullen met zoekterm
  h2Discover.textContent = `Resultaten voor: '${query}'`;

  //In geval geen input zoekbalk, laat discover zien
  if (query == 0) {
      query = 'Ondernemen';
      h2Discover.textContent = 'Discover';
  }

  //URL instellen
  let apiURL = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  return apiURL;
}


//Get data
export async function getData(url) {
    let data = fetch(url, config)
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

  let data = fetch(urlDetail, config)
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log(err);
  });  

  return data;
}
