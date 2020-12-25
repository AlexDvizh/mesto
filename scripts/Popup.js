const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupForm = document.querySelector(this._popupSelector);
    this._closeButton = this._popupForm.querySelector('.popup__close');
    this._handlerEsc = this._handleEscClose.bind(this);
    this.setEventListeners();
  }
  //открытие поп-апов
  open() {
    this._popupForm.classList.add('popup_opened');

    document.addEventListener("keydown", this._handlerEsc);
  }
  //закрытие поп-апов
  close() {
    this._popupForm.classList.remove('popup_opened');

    document.removeEventListener("keydown", this._handlerEsc);
  }
  //закрытие на кнопку ESC
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
        this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
        this.close();
      });
    editButton.addEventListener('click', () => {
      this.open();
    });
    addButton.addEventListener('click', () => {
      this.open();
    });
    this._popupForm.addEventListener("click", (evt) =>{
      if (evt.target.classList.contains("popup")) {
          this.close();
      }      
    });
  }
}