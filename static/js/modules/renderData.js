const ul = document.querySelector('.discover ul');

// render data
export function renderData(data) {
    const results = data.results;
    console.dir(results);
    results.forEach((item) => {
      const html = `
            <li>
                <div class="book_img" style="background-image: url('${item.coverimages}');"></div>
                <h3>${item.titles}</h3>
            </li>
            `;
      ul.insertAdjacentHTML('beforeend', html);
    });
}  