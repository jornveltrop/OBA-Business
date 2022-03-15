import { getDetailID, renderData, renderDetailData } from './renderData.js'
import { setURL, getData, getDetailData } from './getData.js'
import { deleteResults, emptyField, navToggle } from './ui.js'
import './vendor/routie.min.js'


export function handleRoutes() {
    routie(
      {
      '': () => {
          deleteResults();
          navToggle(1);

          let discover = '';
          let searchURL = setURL(discover);

          getData(searchURL)
          .then(data => {
            renderData(data)
            .then(getDetailID())
          })
          .then(emptyField())
      },
      'library': () => {
        deleteResults();
        navToggle(2);
        emptyField();
      },
      'search/:query': query => {
          deleteResults();

          let searchURL = setURL(query);

          getData(searchURL)
          .then(data => {
            renderData(data)
              .then(getDetailID())
          })
          .then(emptyField())
      },
      'collection/:id': id => {
          deleteResults();

          getDetailData(id)
          .then(data => {
            renderDetailData(data);
          })
      }
    })
}

//Set Routing on Input value
function searchField(event) {
  event.preventDefault();

  let searchValue = document.querySelector('input').value;
  routie(`search/${searchValue}`);
}

const form = document.querySelector('form');
form.addEventListener('submit', searchField);