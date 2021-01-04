export default class Popup {
  constructor(popupSelector) {
    this._popupForm = document.querySelector(popupSelector);
    this._closeButton = this._popupForm.querySelector('.popup__close');

    this.setEventListeners();
  }

  _closeButtonClickHandler = () => {
    this.close();
  };

  _overlayClickHandler = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  };

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
        this.close();
    }
  }
  
  open() {
    this._popupForm.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  
  close() {
    this._popupForm.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', this._closeButtonClickHandler);
    this._popupForm.addEventListener('click', this._overlayClickHandler);
  }
}