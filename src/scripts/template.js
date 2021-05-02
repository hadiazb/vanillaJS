const template = (key, imagen, name, lastName, email) => {
  const view = `
    <div class="template" key=${key}>
      <img class="template__img" src=${
        imagen ? imagen : 'https://reqres.in/img/faces/1-image.jpg'
      } alt="imagen"/>
      <h4 class="template__name">${name ? name : 'George'}</h4>
      <h4 class="template__lastname">${lastName ? lastName : 'Bluth'}</h4>
      <p class="template__email">${email ? email : 'george.bluth@reqres.in'}</p>
    </div>
  `;
  return view;
};

export default template;
