import { getDetailID, renderData, renderDetailData, renderLibraryData } from './renderData.js'
import { setURL, getData, getDetailData } from './getData.js'
import { deleteResults, emptyField, hideDetail, navToggle, showDetail } from './ui.js'
import './vendor/routie.min.js'


export function handleRoutes() {
    routie(
      {
      '': () => {
          deleteResults();
          navToggle(1);
          hideDetail();

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
        hideDetail();
        deleteResults();
        navToggle(2);
        emptyField();

        let allFav = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log(allFav);
        allFav.forEach(fav => {
          getDetailData(fav)
          .then(data => {
            renderLibraryData(data);
          })
        });
      },
      'search/:query': query => {
          deleteResults();
          hideDetail();

          let searchURL = setURL(query);

          getData(searchURL)
          .then(data => {
            renderData(data)
              .then(getDetailID())
          })
          .then(emptyField())
      },
      'collection/:id': id => {
          showDetail();

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