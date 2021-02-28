

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupAvatarEditButton = document.querySelector('.profile__avatar-button');
export const popupFormProfile = document.querySelector('.popup__form_profile');
export const addPlaceForm = document.querySelector('.popup__form_add-place');
export const popupAvatarForm = document.querySelector('.popup__form_change-avatar');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputJob = document.querySelector('.popup__input_type_job');
export const POPUP_TYPE_ADD_SELECTOR = '.popup_type_add';
export const POPUP_TYPE_EDIT_SELECTOR = '.popup_type_edit';
export const POPUP_TYPE_AVATAR = '.popup_type_change-avatar';
export const POPUP_TYPE_DELETE = '.popup_type_delete-card';
export const esc = 'Escape';

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-save',
  buttonInvalidClass: 'popup__form-save_type_off'
}; 