/*** Fetching data -> refactor into module later ***/
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'ondernemen';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
console.log(url);
const config = {
  Authorization: `Bearer ${secret}`
};


//Get data
export async function getData() {
    fetch(url, config)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });  
}

