export {openPopup, showPopupPhoto, closePopup};

const popupTypeOpen = document.querySelector('.popup_type_open');

//функция открытия поп-апов
export default function openPopup(popup) {
  popup.classList.add('popup_opened');
  
  document.addEventListener('keydown', closePopupOnButton);
}

//открытие поп-апа увеличенной картинки
function showPopupPhoto(event) {
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

//функция закрытия поп-апов при клике на кнопку ESC
function closePopupOnButton(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  };
}