const secret = '34dd0c6e69370e1b0d2b06fb8343c17f';
const config = {
  Authorization: `Bearer ${secret}`
};

export function setURL(inputField) {
  const h2Discover = document.querySelector(".discover h2");
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'f60b69054b02f50180d9c088e06270ea';
  const detail = 'Default';


  //Titel vullen met zoekterm
  h2Discover.textContent = `Resultaten voor: '${inputField}'`;

  //In geval geen input zoekbalk, laat discover zien
  if (inputField == 0) {
      inputField = 'Ondernemen';
      h2Discover.textContent = 'Discover';
  }

  //URL instellen
  let query = inputField;
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

