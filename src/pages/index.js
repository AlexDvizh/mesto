
import './index.css';
import {
  editButton,
  addButton,
  popupForm,
  addPlaceForm,
  POPUP_TYPE_ADD_SELECTOR,
  POPUP_TYPE_EDIT_SELECTOR,
  initialCards,
  validationConfig,
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const popupCardAddForm = new PopupWithForm(
  {
    handleFormSubmit(formValue) {
      const cardConfig = {
        name: formValue.namePhoto,
        link: formValue.linkPhoto
      };
      const placeCard = createCard(cardConfig);
      cardsList.addItem(placeCard);
    },
    popupSelector: POPUP_TYPE_ADD_SELECTOR
  }
);

addButton.addEventListener('click', () => {
  popupCardAddForm.open();
});

const popupProfileForm = new PopupWithForm(
  {
    handleFormSubmit: (formValue) => {
      userProfile.setUserInfo(
        formValue.userName,
        formValue.userJob
      );
    },
    popupSelector: POPUP_TYPE_EDIT_SELECTOR
  }
);

editButton.addEventListener('click', () => {
  popupProfileForm.open();
});

const profileFormValidator = new FormValidator(validationConfig, popupForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationConfig, addPlaceForm);
placeFormValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_open');

function createCard(item) {
  const card = new Card({
    title: item.name,
    link: item.link,
    templateSelector: '.element-template',
    handleCardClick: (event) => {
      const objImg = {};
      objImg.link = event.target.src;
      objImg.name = event.target.closest('.element').querySelector('.element__desc-title').textContent;

      popupWithImage.open(objImg);
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
