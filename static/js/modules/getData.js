/*** Fetching data -> refactor into module later ***/
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'ondernemen';
const key = 'f60b69054b02f50180d9c088e06270ea';
const secret = '34dd0c6e69370e1b0d2b06fb8343c17f';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
console.log(url);
const config = {
  Authorization: `Bearer ${secret}`
};


//Get data
export async function getData() {
    let data = fetch(url, config)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });  

    return data;
}

