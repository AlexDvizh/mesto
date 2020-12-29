

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupForm = document.querySelector('.popup__form');
export const addPlaceForm = document.querySelector('.popup__form_add-place');
export const POPUP_TYPE_ADD_SELECTOR = '.popup_type_add';
export const POPUP_TYPE_EDIT_SELECTOR = '.popup_type_edit';

export const initialCards = [ 
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

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-save',
  buttonInvalidClass: 'popup__form-save_type_off'
}; 