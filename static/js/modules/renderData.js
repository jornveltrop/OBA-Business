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

//Set detailID on rendered data
export function getDetailID() {
  let allItems = document.querySelectorAll(".discover li");

  allItems.forEach(function(item) {
      item.addEventListener("click", function() {
          let id = this.id;
          routie(`collection/${id}`);
      });
  });
}


//Render detail data
export async function renderDetailData(detailData) {
  const detailIMG = document.querySelector(".detail img");
  const titel = document.querySelector(".detail h2");
  const author = document.querySelector(".detail p:nth-child(1)");

  let objectData = detailData.record;
  console.log(objectData);
  detailIMG.src = objectData.coverimages[1];
  titel.textContent = objectData.titles[0];
}