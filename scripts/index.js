import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popupProfile = document.querySelector('.popup_type_edit');
const popupPhotoAdd = document.querySelector('.popup_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelector('.popup__close');
const popupCloseButtonPhoto = document.querySelector('.popup__close_photo');
const profileTitle = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const elementsList = document.querySelector('.elements');
const addPlaceForm = document.querySelector('.popup__form_add-place');
const popupTypeOpen = document.querySelector('.popup_type_open');
const popupCloseImg = document.querySelector('.popup__close-img');
const popupAddButton = document.querySelector('.popup__form-save_type_add');
const inputTypePhotoName = document.querySelector('.popup__input_type_photo-name');
const inputTypePhotoLink = document.querySelector('.popup__input_type_link-photo');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-save',
  buttonInvalidClass: 'popup__form-save_type_off'
}; 


//функция открытия поп-апов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  
  document.addEventListener('keydown', closePopupOnButton);
}

//открытие поп-апа профиля
editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = subTitle.textContent; 
  
  new FormValidator(validationConfig, popupForm).enableValidation();
});
//открытие поп-апа добавления карточки
addButton.addEventListener('click', () => {
  openPopup(popupPhotoAdd);
  addPlaceForm.reset(); 
  popupAddButton.classList.add('popup__form-save_type_off');

  new FormValidator(validationConfig, addPlaceForm).enableValidation();
});
//открытие поп-апа увеличенной картинки
export default function showPopupPhoto(event) {
  openPopup(popupTypeOpen);

  const cardElement = event.target.closest('.element');
  const photo = cardElement.querySelector('.element__photo');
  const title = cardElement.querySelector('.element__desc-title');
  const image = popupTypeOpen.querySelector('.popup__image');
  
  image.src = photo.src;
  image.alt = title.textContent;
  popupTypeOpen.querySelector('.popup__img-title').innerHTML = title.textContent;
}


//функция закрытия поп-апов
function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupOnButton);
}

//закрытие поп-апа профиля
popupCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});
//закрытие поп-апа добавления карточки
popupCloseButtonPhoto.addEventListener('click', () => {
  closePopup(popupPhotoAdd);
});
//закрытие поп-апа увеличенной картинки
popupCloseImg.addEventListener('click', () => {
  closePopup(popupTypeOpen);
});


//создали функцию замены текста профиля из поп-апа, исходя из введеных пользователем данных
function submitForm(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  subTitle.textContent = jobInput.value; 
  
  closePopup(popupProfile);
}

popupForm.addEventListener('submit', submitForm);


//функция добавления новой карточки на страницу
function handleSubmitAddPlaceForm(event) {
  event.preventDefault();

  const name = inputTypePhotoName.value;
  const link = inputTypePhotoLink.value;
  const placeCard = new Card(name, link);
  const cardElement = placeCard.generateCard();

  elementsList.prepend(cardElement);

  closePopup(popupPhotoAdd);
}

addPlaceForm.addEventListener('submit', handleSubmitAddPlaceForm);


//функция закрытия поп-апов при клике за пределами поп-апа
function closePopupOnClick (event) {
  if (event.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  }
}

popupProfile.addEventListener('mousedown', closePopupOnClick );
popupPhotoAdd.addEventListener('mousedown', closePopupOnClick );
popupTypeOpen.addEventListener('mousedown', closePopupOnClick );


//функция закрытия поп-апов при клике на кнопку ESC
function closePopupOnButton(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  };
}
