let ul = document.querySelector('.discover ul');
import { store } from './store.js';
import { getHash, setHash } from './ui.js';
import './vendor/routie.min.js'

// render data
export async function renderData(data, article) {
    let ul = document.querySelector(`.${article} ul`);
    const results = data.results;
    console.dir(results);
    results.forEach(({id, coverimages, titles}) => {
      const html = `
            <li id="${id}">
                <div class="book_img" style="background-image: url('${coverimages[1]}');"></div>
                <h3>${titles[0]}</h3>
            </li>
            `;
      ul.insertAdjacentHTML('beforeend', html);
    });
}  

//Set detailID on rendered data
export function getDetailID(article) {
  let allItems = document.querySelectorAll(`.${article} li`);

  allItems.forEach(function(item) {
      item.addEventListener("click", function() {
          let id = this.id;
          setHash();
          routie(`collection/${id}`);
      });
  });
}


//Render detail data
export async function renderDetailData(detailData) {
  const detailIMG = document.querySelector(".detail header img");
  const titel = document.querySelector(".detail h2");
  const author = document.querySelector(".detail header p");
  const about = document.querySelector(".detail section > p");
  const taal = document.querySelector(".detail .taal p");
  const kenmerken = document.querySelector(".detail .kenmerken p");
  const bookmarkButton = document.querySelector(".bookmarkButton");

  let objectData = detailData.record;
  console.log(objectData);
  detailIMG.src = objectData.coverimages[1];
  titel.textContent = objectData.titles[0];
  author.textContent = objectData.authors;
  about.textContent = objectData.summaries;
  taal.textContent = objectData.languages;
  kenmerken.textContent = objectData.description[1];
  bookmarkButton.setAttribute("num", `${objectData.id}`);

  const close = document.querySelector(".closeButton");
  close.addEventListener("click", function() {
    routie(`${getHash()}`)
  });

  store();
}


// render data
const ulLibrary = document.querySelector('.library ul');
export async function renderLibraryData(data) {
  console.log(data);
  const results = data.record;
  console.dir(results);
  const html = `
        <li id="${results.id}">
            <div class="book_img" style="background-image: url('${results.coverimages[1]}');"></div>
            <h3>${results.titles[0]}</h3>
        </li>
        `;
  ulLibrary.insertAdjacentHTML('beforeend', html);
}  