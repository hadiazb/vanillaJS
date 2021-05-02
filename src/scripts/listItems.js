import getData from './getData.js';
import template from './template.js';

const mapInfo = (arr) => {
  const app = document.getElementById('app');
  const listItems = arr.map((item) =>
    template(item.id, item.avatar, item.first_name, item.last_name, item.email)
  );
  app.innerHTML += listItems;
};

const listItems = () => {
  const boton = document.getElementById('ver');
  let page = 1;
  boton.onclick = () => {
    getData(page).then((data) => {
      boton.innerHTML = 'Loading...';
      mapInfo(data.data);
      boton.innerHTML = 'Ver más';
    });
    if (page === 2) {
      boton.style.display = 'none';
    }
    page++;
  };
};

export default listItems;
