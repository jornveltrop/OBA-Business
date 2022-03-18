import { getDetailID, renderData, renderDetailData, renderLibraryData } from './renderData.js'
import { setURL, getData, getDetailData } from './getData.js'
import { deleteResults, emptyField, hideDetail, hideLibrary, navToggle, showDetail, showLibrary, showSearch, hideSearch } from './ui.js'
import './vendor/routie.min.js'
import { setLoading, stopLoading } from './states.js'


export function handleRoutes() {
    routie(
      {
      '': () => {
          deleteResults('discover');
          setLoading();
          navToggle(1);

          let discoverField = '';
          let searchURL = setURL(discoverField, 'discover');

          getData(searchURL)
          .then(data => {
            renderData(data, 'discover')
            .then(getDetailID('discover'))
            .then(
              stopLoading(),
              hideDetail(),
              hideLibrary(),
              hideSearch()
            )
          })
          .then(emptyField())
      },
      'library': () => {
        deleteResults('library');
        setLoading();
        navToggle(2);
        emptyField();
  
        let allFav = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log(allFav);
        allFav.forEach(fav => {
          getDetailData(fav)
          .then(data => {
            renderLibraryData(data)
              .then(getDetailID('library'))
              .then(
                stopLoading(),
                showLibrary(),
                hideSearch()
              )
          })
        });
      },
      'search/:query': query => {
          deleteResults('search');
          setLoading();

          let searchURL = setURL(query, 'search');

          getData(searchURL)
          .then(data => {
            renderData(data, 'search')
              .then(getDetailID('search'))
              .then(
                stopLoading(),
                hideDetail(),
                hideLibrary(),
                showSearch()
              )
          })
          .then(emptyField())
      },
      'collection/:id': id => {
          setLoading();

          getDetailData(id)
          .then(data => {
            renderDetailData(data)
            .then(
              stopLoading(),
              showDetail()
            )
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