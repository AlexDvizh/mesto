let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let formSave = document.querySelector('.popup__form-save');

function showPopup() {
  popup.classList.add('popup_opened'); 
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;   
}

function closePopup() {
popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);


function submitForm(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  subTitle.textContent = jobInput.value; 
  
  closePopup();
}

popupForm.addEventListener('submit', submitForm);