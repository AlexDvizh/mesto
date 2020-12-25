import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

// TODO: создать отдельный модуль с константами и импортировать здесь
import * as constants from './constants.js';

const popupProfile = document.querySelector('.popup_type_edit');
const popupPhotoAdd = document.querySelector('.popup_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelectorAll('.popup__close');
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
// const inputTypePhotoName = document.querySelector('.popup__input_type_photo-name');
// const inputTypePhotoLink = document.querySelector('.popup__input_type_link-photo');
// const elementTemplate = document.querySelector('.element-template');


addButton.addEventListener('click', () => {
  const popup = new PopupWithForm(
    {
      handleFormSubmit(formValue) {
        const cardConfig = {
          name: formValue.namePhoto,
          link: formValue.linkPhoto
        };
        const placeCard = createCard(cardConfig);
        cardsList.addItem(placeCard);
      },
      popupSelector: constants.POPUP_TYPE_ADD_SELECTOR
    }
  );
  popup.open();
});

editButton.addEventListener('click', () => {
  const popup = new PopupWithForm(
    {
      handleFormSubmit: (formValue) => {
        userProfile.setUserInfo(
          formValue.userName,
          formValue.userJob
        );
      },
      popupSelector: constants.POPUP_TYPE_EDIT_SELECTOR
    }
  );
  popup.open();
});

const initialCards = [ 
  { 
    name: 'Архыз', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
  }, 
  { 
    name: 'Йосемитская долина', 
    link: 'https://images.unsplash.com/photo-1516001511917-f504ed8149af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80' 
  }, 
  { 
    name: 'Озеро Минневанка', 
    link: 'https://images.unsplash.com/photo-1510711789248-087061cda288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80' 
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

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-save',
  buttonInvalidClass: 'popup__form-save_type_off'
}; 


const profileFormValidator = new FormValidator(validationConfig, popupForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationConfig, addPlaceForm);
placeFormValidator.enableValidation();



function createCard(item) {
  const card = new Card({
    title: item.name,
    link: item.link,
    templateSelector: '.element-template',
    handleCardClick: (event) => {
      const objImg = {};
      objImg.link = event.target.src;
      objImg.name = event.target.closest('.element').querySelector('.element__desc-title').textContent;

      const popupWithImage = new PopupWithImage(objImg , '.popup_type_open');
      popupWithImage.open();
    }
  });

  return card.generateCard();
}

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const placeCard = createCard(item);
    
    cardsList.addItem(placeCard);
  },
}, '.elements');

cardsList.renderItems();


const userProfile = new UserInfo({
  name: '.profile__title',
  info: '.profile__subtitle',
});


