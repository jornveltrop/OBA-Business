import { getDetailID, renderData, renderDetailData, renderLibraryData } from './renderData.js'
import { setURL, getData, getDetailData } from './getData.js'
import { deleteResults, emptyField, hideDetail, hideLibrary, navToggle, showDetail, showLibrary, showSearch, hideSearch } from './ui.js'
import './vendor/routie.min.js'


export function handleRoutes() {
    routie(
      {
      '': () => {
          deleteResults('discover');
          navToggle(1);
          hideDetail();
          hideLibrary();
          hideSearch();

          let discoverField = '';
          let searchURL = setURL(discoverField, 'discover');

          getData(searchURL)
          .then(data => {
            renderData(data, 'discover')
            .then(getDetailID('discover'))
          })
          .then(emptyField())
      },
      'library': () => {
        showLibrary();
        deleteResults('library');
        navToggle(2);
        emptyField();
        hideSearch();

        let allFav = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log(allFav);
        allFav.forEach(fav => {
          getDetailData(fav)
          .then(data => {
            renderLibraryData(data)
              .then(getDetailID('library'))
          })
        });
      },
      'search/:query': query => {
          deleteResults('search');
          hideDetail();
          hideLibrary();
          showSearch();

          let searchURL = setURL(query, 'search');

          getData(searchURL)
          .then(data => {
            renderData(data, 'search')
              .then(getDetailID('search'))
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