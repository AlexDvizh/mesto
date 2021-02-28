export default class FormValidator {
  constructor(config, checkingForm) {
    this._config = config;
    this._checkingForm = checkingForm;
  }

  _checkInputValid = (form, input) => {
    if (!input.validity.valid) {
      this._showError(form, input);
    } else {
      this._hideError(form, input);
    }
  }

  //функция изменения состояния кнопки при валидности форм
  _setButtonState = (button, isActive, config) => {
    if (isActive) {
      button.classList.remove(config.buttonInvalidClass);
      button.disabled = false;
    } else {
      button.classList.add(config.buttonInvalidClass);
      button.disabled = true;
    }
  }


  //функция, которая показывает ошибку
  _showError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
  }

  //функция, которая скрывает ошибку
  _hideError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
  }
  
  //функция сбора всех инпутов в формах
  _setEventListeners = (form, config) => {
    const inputListValid = form.querySelectorAll(config.inputSelector);
    const editFormButton = form.querySelector(config.submitButtonSelector);

    this._setButtonState(editFormButton, form.checkValidity(), config);
    
    inputListValid.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValid(form, input, config);
        this._setButtonState(editFormButton, form.checkValidity(), config);
      });
    });
  }

  //функция включения валидации форм сайта 
  enableValidation = () => {
    const config = this._config;
    const forms = document.querySelectorAll(config.formSelector);

    forms.forEach(() => {
      this._setEventListeners(this._checkingForm, this._config);

      this._checkingForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    });
  }
}
