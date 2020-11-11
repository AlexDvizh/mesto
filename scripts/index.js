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
let elementsList = document.querySelector('.elements');
const addPlaceForm = document.querySelector('.popup__form_add-place');

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

//создали функцию открытия поп-апа добавления фото
function showPopupPhoto() {
  popupPhotoAdd.classList.add('popup_opened');  
}

//создали функцию закрытия поп-апа добавления фото
function closePopupPhoto() {
  popupPhotoAdd.classList.remove('popup_opened');
}


addButton.addEventListener('click', showPopupPhoto);
popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);


//создали функцию переберающую массив и добавляющую элементы из массива на страницу
function addElement(item) {
  const cardElement = document.querySelector('.element-template').content.cloneNode(true);

  cardElement.querySelector('.element__desc-title').textContent = item.name;
  cardElement.querySelector('.element__photo').src = item.link;

  elementsList.append(cardElement);
}

initialCards.forEach((item) => {
  addElement(item);
});

//функция добавления новой карточки на страницу
addPlaceForm.addEventListener('submit', addPlace);

function addPlace(event) {
  event.preventDefault();

  const name = document.querySelector('.popup__input_type_photo-name').value;
  const link = document.querySelector('.popup__input_type_link-photo').value;

  const card = {
    name,
    link 

  };

  initialCards.push(card);
  addElement(card);

  closePopupPhoto()
}





//функция удаления карточки (не доделана)
//let deleteButton = document.querySelector('.element__delete');

//deleteButton.addEventListener('click', (data) => {

//}

//создали функцию смены внешнего вида кнопки при нажатии на лайк
let likeButtons = document.querySelectorAll('.element__desc-like');

likeButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    const theTarget = evt.target;
    button.classList.toggle('element__desc-like_type_off');
  });
});


