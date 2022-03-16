const ul = document.querySelector('.discover ul');
import './vendor/routie.min.js'

// render data
export async function renderData(data) {
    const results = data.results;
    console.dir(results);
    results.forEach((item) => {
      const html = `
            <li id="${item.id}">
                <div class="book_img" style="background-image: url('${item.coverimages[1]}');"></div>
                <h3>${item.titles[0]}</h3>
            </li>
            `;
      ul.insertAdjacentHTML('beforeend', html);
    });
}  

let hash;

//Set detailID on rendered data
export function getDetailID() {
  let allItems = document.querySelectorAll(".discover li");

  allItems.forEach(function(item) {
      item.addEventListener("click", function() {
          let id = this.id;
          hash = window.location.hash;
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

  let objectData = detailData.record;
  console.log(objectData);
  detailIMG.src = objectData.coverimages[1];
  titel.textContent = objectData.titles[0];
  author.textContent = objectData.authors;
  about.textContent = objectData.summaries;
  taal.textContent = objectData.languages;
  kenmerken.textContent = objectData.description[1];

  const close = document.querySelector(".closeButton");
  close.addEventListener("click", function() {
    routie(`${hash}`)
  });
}