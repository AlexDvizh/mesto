import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(item, popupSelector) {
    super(popupSelector);
    this._item = item;
    this._photo = this._popupForm.querySelector('.popup__image');
    this._title = this._popupForm.querySelector('.popup__img-title');
  }
  //открытие поп-апа большой картинки
  open() {
    this._photo.src = this._item.link;
    this._title.textContent = this._item.name;

    super.open();
  }

}