let popup = document.querySelector('.popup');
let popupPhotoAdd = document.querySelector('.popup_type_add');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popupCloseButton = document.querySelector('.popup__close');
let popupCloseButtonPhoto = document.querySelector('.popup__close_photo');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameInputPhoto = document.querySelector('.popup__input_type_photo-name');
let linkInputPhoto = document.querySelector('.popup__input_type_link-photo');
let photoTitle = document.querySelector('.element__desc-title');
let photoAdd = document.querySelector('.element__photo');

//создали функцию открытия поп-апа редактирования профиля
function showPopup() {
  popup.classList.add('popup_opened'); 
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;   
}

//создали функцию закрытия поп-апа редактирования профиля
function closePopup() {
  popup.classList.remove('popup_opened');
}

//создали функцию замены текста профиля из поп-апа, исходя из введеных пользователем данных
function submitForm(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  subTitle.textContent = jobInput.value; 
  
  closePopup();
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

function showPopupPhoto() {
  popupPhotoAdd.classList.add('popup_opened');  
}

function closePopupPhoto() {
  popupPhotoAdd.classList.remove('popup_opened');
}

addButton.addEventListener('click', showPopupPhoto);
popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);


let elementsList = document.querySelector('.elements');



function addElement(item) {
  const cardElement = document.querySelector('.element-template').content.cloneNode(true);

  cardElement.querySelector('.element__desc-title').textContent = item.name;
  cardElement.querySelector('.element__photo').src = item.link;

  elementsList.prepend(cardElement);
}

initialCards.forEach((item) => {
  addElement(item);
});

