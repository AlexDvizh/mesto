
//отменяем стандартное поведение при нажатии на submit


//функция, которая показывает ошибку
function showError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
}

//функция, которая скрывает ошибку
function hideError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
}

//функция, которая проверяет валидность формы
function checkInputValid(form, input, config) {
  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}

//функция изменения состояния кнопки при валидности форм
function setButtonState(button, isActive, config) {
  if (isActive) {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}


//функция сбора всех инпутов в формах
function setEventListeners(form, config) {
  const inputListValid = form.querySelectorAll(config.inputSelector);
  const editFormButton = form.querySelector(config.submitButtonSelector);
  
  inputListValid.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValid(form, input, config);
      setButtonState(editFormButton, form.checkValidity(), config);
    });
  });
}

//функция включения валидации на все формы сайта 
//и корректное отображение кнопки
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });
}

//преобразование классов в объект
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-save',
  buttonInvalidClass: 'popup__form-save_type_off'
}; 

enableValidation(validationConfig);

