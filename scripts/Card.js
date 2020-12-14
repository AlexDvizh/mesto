import {showPopupPhoto} from './utils.js';


export default class Card {
  constructor(title, link, templateSelector) {
    this._name = title;
    this._link = link;
    this._elementTemplate = document.querySelector(templateSelector);
  }

  //добавление карточки в DOM
  _getTemplate() {
    const cardElement = this._elementTemplate.content.querySelector('.element').cloneNode(true);

    return cardElement;
  }
  
  //создание DOM елемента карточки
  generateCard() {
    this._element = this._getTemplate();
    const photo = this._element.querySelector('.element__photo')

    this._element.querySelector('.element__desc-title').textContent = this._name;
    photo.src = this._link;
    photo.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  //удаление карточки
  _deleteClickHandler = () => {
    this._element.remove();
    this._element = null;
  }

  //лайк карточки
  _likeClickHandler = () => {
    this._element.querySelector('.element__desc-like').classList.toggle('element__desc-like_type_off');
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', this._deleteClickHandler);
    this._element.querySelector('.element__desc-like').addEventListener('click', this._likeClickHandler);
    this._element.querySelector('.element__photo').addEventListener('click', (evt) => {
      showPopupPhoto(evt);
    });
  }
}
