import { renderData } from './renderData.js'
import { setURL, getData } from './getData.js'
import { deleteResults, emptyField } from './ui.js'
import './vendor/routie.min.js'


export function handleRoutes() {
    routie(
      {
      '': () => {
          deleteResults();

          let discover = '';
          let searchURL = setURL(discover);

          getData(searchURL)
          .then(data => {
            renderData(data)
          })
          .then(emptyField())
      },
      ':id': inputField => {
          deleteResults();

          let searchURL = setURL(inputField);

          getData(searchURL)
          .then(data => {
            renderData(data)
          })
          .then(emptyField())
      }
    })
}

//Set Routing on Input value
function searchField(event) {
  event.preventDefault();

  let searchValue = document.querySelector('input').value;
  window.location.hash = searchValue;
}

const form = document.querySelector('form');
form.addEventListener('submit', searchField);