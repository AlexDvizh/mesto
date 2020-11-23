
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
function checkInputValid(form, input) {
  if (!input.validity.valid) {
    showError(form, input);
  } else {
    hideError(form, input);
  }
}

//функция изменения состояния кнопки при валидности форм
function setButtonState(button, isActive) {
  if (isActive) {
    button.classList.remove('popup__form-save_type_off');
    button.disabled = false;
  } else {
    button.classList.add('popup__form-save_type_off');
    button.disabled = true;
  }
}


//функция сбора всех инпутов в формах
function setEventListeners(form) {
  const inputListValid = form.querySelectorAll('.popup__input');
  const editFormButton = form.querySelector('.popup__form-save');
  
  inputListValid.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValid(form, input);
      setButtonState(editFormButton, form.checkValidity());
    });
  });
}

//функция добавления валидации на все формы сайта 
//и корректное отображение кнопки
function enableValidation() {
  const forms = document.querySelectorAll('.popup__form');
  forms.forEach((form) => {
    setEventListeners(form);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });
}

enableValidation();