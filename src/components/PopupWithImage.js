import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photo = this._popupForm.querySelector('.popup__image');
    this._title = this._popupForm.querySelector('.popup__img-title');
  }

  open({ link, name }) {
    this._photo.src = link;
    this._photo.alt = name;
    this._title.textContent = name;
    super.open();
  } 

}