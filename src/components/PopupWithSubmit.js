import Popup from './Popup.js';

const deleteButton = document.querySelector('.element__delete');

export default class PopupWithSubmit extends Popup {
  constructor({handleFormSubmit, popupSelector}) {
    
    super(popupSelector);
    this._element = this._popupForm.querySelector('.popup__form');

    this._setEventListeners();
  }

  _setEventListeners() {
  //   const deleteButton = document.querySelector('.element__delete');

  //   deleteButton.forEach((button) => {
  //     button.addEventListener('click', () => {
  //       super.open();
  //     });
  //   });
  };
}