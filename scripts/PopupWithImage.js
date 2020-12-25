import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(item, popupSelector) {
    super(popupSelector);
    this._photo = this._popupForm.querySelector('.element__photo');
    this._title = this._popupForm.querySelector('.element__desc-title');
  }
  //открытие поп-апа большой картинки
  open(item) {
    this._photo.src = item.src;
    this._title.textContent = item.alt;

    super.open();
  }

}