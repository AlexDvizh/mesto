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
const elementTemplate = document.querySelector('.element-template');
const inputTypePhotoName = document.querySelector('.popup__input_type_photo-name');
const inputTypePhotoLink = document.querySelector('.popup__input_type_link-photo');


function PlaceCard(title, link) {
  this.name = title;
  this.link = link;
}

//добавили массив карточек
const initialCards = [
  new PlaceCard('Архыз', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'),
  new PlaceCard('Йосемитская долина', 'https://images.unsplash.com/photo-1516001511917-f504ed8149af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80'),
  new PlaceCard('Озеро Минневанка', 'https://images.unsplash.com/photo-1510711789248-087061cda288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'),
  new PlaceCard('Камчатка', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'),
  new PlaceCard('Холмогорский район', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'),
  new PlaceCard('Байкал', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg')
]; 

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
});
//открытие поп-апа добавления карточки
addButton.addEventListener('click', () => {
  openPopup(popupPhotoAdd);
  addPlaceForm.reset(); 
  popupAddButton.classList.add('popup__form-save_type_off');
});
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

//Создаёт DOM элемент карточки
function createCardDOMElement(placeCard) {
  const cardElement = elementTemplate.content.cloneNode(true);

  cardElement.querySelector('.element__desc-title').textContent = placeCard.name;
 
  const image = cardElement.querySelector('.element__photo');
  image.src = placeCard.link;
  image.alt = `Фото: ${placeCard.name}`;
  image.addEventListener('click', (e) => {
    showPopupPhoto(e);
  });
  
  //функция удаления карточки
  cardElement.querySelector('.element__delete').addEventListener('click', (event) => {
    const todoDelete = event.target.closest('.element');

    if (todoDelete) {
      todoDelete.remove();
    } 
  });
  
  //функция лайка карточки
  cardElement.querySelector('.element__desc-like').addEventListener('click', (event) => {
    const todoLike = event.target.closest('.element__desc-like');

    todoLike.classList.toggle('element__desc-like_type_off');
  
  });

  return cardElement;
}


//Добавляет карточку в DOM
function addCard(placeCard) {
  const card = createCardDOMElement(placeCard);
  elementsList.prepend(card);
}

initialCards.forEach((item) => {
  addCard(item)
});

//функция добавления новой карточки на страницу
function handleSubmitAddPlaceForm(event) {
  event.preventDefault();

  const name = inputTypePhotoName.value;
  const link = inputTypePhotoLink.value;
  const placeCard = new PlaceCard(name, link);
  addCard(placeCard);
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
