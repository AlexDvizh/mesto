const popupFormValid = document.querySelector('.popup__form');
const inputListValid = popupForm.querySelectorAll('.popup__input');
const editFormButton = popupForm.querySelector('.popup__form-save');

//отменяем стандартное поведение при нажатии на submit
popupFormValid.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

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


inputListValid.forEach((input) => {
  input.addEventListener('input', () => {
    checkInputValid(popupFormValid, input);
    setButtonState(editFormButton, popupFormValid.checkValidity());
  });
});