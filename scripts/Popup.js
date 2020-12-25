export default class Popup {

  eventListeners = [];

  _closeButtonClickHandler = () => {
    this.close();
  };

  _overlayClickHandler = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  };

  //закрытие на кнопку ESC
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
        this.close();
    }
  }

  constructor(popupSelector) {
    this._popupForm = document.querySelector(popupSelector);
    this._closeButton = this._popupForm.querySelector('.popup__close');

    this.setEventListeners();
  }
  //открытие поп-апов
  open() {
    this._popupForm.classList.add('popup_opened');
  }
  //закрытие поп-апов
  close() {
    this._popupForm.classList.remove('popup_opened');
    this._removeListeners();
  }

  setEventListeners() {
    this.addListener(this._closeButton, 'click', this._closeButtonClickHandler);
    this.addListener(this._popupForm, 'click', this._overlayClickHandler);
    this.addListener(document, 'keydown', this._handleEscClose);
  }

  addListener(element, eventType, handlerFn) {
    element.addEventListener(eventType, handlerFn);
    this.eventListeners.push({
      element,
      eventType,
      handlerFn
    });
  }

  _removeListeners() {
    this.eventListeners.forEach(item => {
      item.element.removeEventListener(item.eventType, item.handlerFn);
    })
  }
}