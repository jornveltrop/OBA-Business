/*** Fetching data -> refactor into module later ***/
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'ondernemen';
const key = 'd7519ea81ad4e06ab5e5dac46ddeb63a';
const secret = '274658a302d1cfe874e73aed9d6ccef5';
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

