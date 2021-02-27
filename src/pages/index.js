import './index.css';
import {
  editButton,
  addButton,
  popupAvatarEditButton,
  popupForm,
  addPlaceForm,
  popupAvatarForm,
  POPUP_TYPE_ADD_SELECTOR,
  POPUP_TYPE_EDIT_SELECTOR,
  POPUP_TYPE_AVATAR,
  POPUP_TYPE_DELETE,
  avatar,
  validationConfig,
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    token: '4a3cde67-2515-4699-b4fa-4d09b066c717',
    'Content-Type': 'application/json'
  }
});

const userProfile = new UserInfo({
  name: '.profile__title',
  info: '.profile__subtitle',
  avatar: '.profile__avatar'
})

//получение карточек от сервера и добавление новой карточки на сервер
api
  .getCards()
  .then((data) => {
    const cardsList = new Section({
      items: data,
      renderer: (item) => {
        const card = createCard(item);
        cardsList.addItemAppend(card);
      },
    }, '.elements', api);   
    cardsList.renderItems();

    return cardsList;
  })
  .then((cardsList) => {
      const popupCardAddForm = new PopupWithForm({
        handleFormSubmit: (data) => {
          const cardConfig = {
            name: data.namePhoto,
            link: data.linkPhoto,
          };
          
          api.addNewCard(cardConfig);

          const placeCard = createCard(cardConfig);
          cardsList.addItem(placeCard);
        },
        popupSelector: POPUP_TYPE_ADD_SELECTOR
      });
      addButton.addEventListener('click', () => {
        popupCardAddForm.open();
      });
  })
  .catch((err) => {
    console.log(err);
});

//получение данных пользователя с сервера и редактирование профиля
api
  .getUserInfoFromServer()
  .then((data) => {
    userProfile.setUserInfo({
      userName: data.name,
      userInfo: data.about
    });
    avatar.src = data.avatar;

    return data;
  })
  .then(() => {
    const popupProfileForm = new PopupWithForm({
    handleFormSubmit: (formValue) => {
      userProfile.setUserInfo({
        userName: formValue.userName,
        userInfo: formValue.userJob
      });
      api.setUserInfoFromServer(formValue);
    }, popupSelector: POPUP_TYPE_EDIT_SELECTOR,
  });

  editButton.addEventListener('click', () => {
  popupProfileForm.open();
  });
})

//редактирование аватара профиля
const popupAvatar = new PopupWithForm({
  handleFormSubmit: (data) => {
    const textOnButton = popupAvatar.hideLoadingText();
    popupAvatar.showLoadingText('Сохранение...');
    api
      .setUserAvatar(data)
      .then((res) => {
        userProfile.setUserAvatar(res.avatar);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatar.showLoadingText(textOnButton);
    });
  },
  popupSelector: POPUP_TYPE_AVATAR
});

function popupAvatarOpen() {
  popupAvatar.open()
}

popupAvatarEditButton.addEventListener('click', popupAvatarOpen);

//подтверждение удаления карточки
const popupDeleteConfirm = new PopupWithForm({
  handleFormSubmit: () => {
    api
      .deleteCard(popupDeleteConfirm.cardObject._cardId)
      .then(() => {
        popupDeleteConfirm.cardObject.delCard();
        popupDeleteConfirm.close();
      })
      .catch((err) => {
        console.log(err);
    });
  },
  popupSelector: POPUP_TYPE_DELETE
});

//валидация формы редактирования профиля
const profileFormValidator = new FormValidator(validationConfig, popupForm);
profileFormValidator.enableValidation();

//валидация формы добавления карточки
const placeFormValidator = new FormValidator(validationConfig, addPlaceForm);
placeFormValidator.enableValidation();

//валидация формы редактировация аватара
const avatarFormValidator = new FormValidator(validationConfig, popupAvatarForm);
avatarFormValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_open');

//функция создания карточки
function createCard(item) {
  const card = new Card({
    title: item.name,
    link: item.link,
    likes: item.likes,
    cardId: item._id,
    ownerId: item.owner._id,
    templateSelector: '.element-template',
    handleCardClick: (event) => {
     
      const objImg = {};
      objImg.link = event.target.src;
      objImg.name = event.target.closest('.element').querySelector('.element__desc-title').textContent;

      popupWithImage.open(objImg);
    },
    handleDeleteClick: (cardObject) => {
      popupDeleteConfirm.cardObject = cardObject;
      popupDeleteConfirm.open();
    },
    handleLikeClick: (cardId) => {
      api
        .likeCard(cardId)
        .then((res) => {
          card.updateLikeCard(res.likes);
          // console.log(res.likes)
        })
        .catch((err) => {
          console.log(err);
      });

      api
        .deleteLikeCard(cardId)
        .then((res) => {
          card.updateLikeCard(res.likes);
        })
        .catch((err) => {
          console.log(err);
      });
    }
  });
  return card.generateCard();
}