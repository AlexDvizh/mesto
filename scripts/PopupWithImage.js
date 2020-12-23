import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({item}, popupSelector) {
    super(popupSelector);
    this._photo = this._popupForm.querySelector('.element__photo');
    this._title = this._popupForm.querySelector('.element__desc-title');
    this._src = item.src;
    this._alt = item.textContent;
  }

  open() {
    this._photo.src = this._src;
    this._title.textContent = this._alt;

    super.open();
  }

}