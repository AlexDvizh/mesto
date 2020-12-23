import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({handleFormSubmit, popupSelector}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._element = this._popupForm.querySelector('.popup__form');

    this.setEventListeners();
  }
  //закрытие поп-апа и сброс формы
  close() {
    this._element.reset();
    super.close();
  }
  //сбор данных всех полей формы
  _getInputValues() {
    this._inputList = this._element.querySelector('.popup__input');
    this._inputsValue = {};
    this._inputList.forEach(input => {
      this._inputsValue[input.name] = input.value;
    });

    return this._inputsValue;
  }
  //обработчик кнопки сабмита формы
  setEventListeners() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });
  }
}