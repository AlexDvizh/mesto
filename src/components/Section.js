export default class Section {
  constructor({ items, renderer }, containerSelector, api) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._api = api;
  
    this._container = document.querySelector(containerSelector);
  }
  //перебор массива карточек
  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item))
  }
  //добавление карточки на страницу(в начало)
  addItem(element) {
    this._container.prepend(element);
  }

  //добавление карточки на страницу(в конец)
  addItemAppend(element) {
    this._container.append(element);
  }

  //сохранение данных карточки, которые пришли от сервера
  saveCard = (data) => {
    this._api.addNewCard(data)
    .then((data) => {
      this.addItem(data);
    })
    .catch((err) => {
      console.log(err);
    })
    
  }
}
