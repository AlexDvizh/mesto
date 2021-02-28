import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  submitFormHandler = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }

  constructor({handleFormSubmit, popupSelector}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._element = this._popupForm.querySelector('.popup__form');
    this._submitButton = this._element.querySelector('.popup__form-save');

    this._setEventListeners();
  }
  //закрытие поп-апа и сброс формы
  close() {
    this._element.reset();
    super.close();
  }
  //сбор данных всех полей формы
  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._inputsValue = {};
    this._inputList.forEach(input => {
      this._inputsValue[input.name] = input.value;
    });

    return this._inputsValue;
  }
  //обработчик кнопки сабмита формы
  _setEventListeners() {
    this._element.addEventListener('submit', this.submitFormHandler);
  }

  showLoadingText(text) {
    this._submitButton.textContent = text;
  }

  hideLoadingText() {
    return this._submitButton.textContent;
  }
}