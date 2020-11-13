const popup = document.querySelector('.popup');
const popupPhotoAdd = document.querySelector('.popup_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelector('.popup__close');
const popupCloseButtonPhoto = document.querySelector('.popup__close_photo');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
const elementsList = document.querySelector('.elements');
const addPlaceForm = document.querySelector('.popup__form_add-place');



//создали функцию открытия поп-апа редактирования профиля
function showPopup() {
  popup.classList.add('popup_opened'); 
  nameInput.value = title.textContent;
  jobInput.value = subTitle.textContent;   
}

editButton.addEventListener('click', showPopup);

//создали функцию закрытия поп-апа редактирования профиля
function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

//создали функцию замены текста профиля из поп-апа, исходя из введеных пользователем данных
function submitForm(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  subTitle.textContent = jobInput.value; 
  
  closePopup();
}

popupForm.addEventListener('submit', submitForm);

//добавили массив карточек
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

//создали функцию открытия поп-апа добавления фото
function showPopupAdd() {
  popupPhotoAdd.classList.add('popup_opened');  
}

addButton.addEventListener('click', showPopupAdd);

//создали функцию закрытия поп-апа добавления фото
function closePopupAdd() {
  popupPhotoAdd.classList.remove('popup_opened');
}

popupCloseButtonPhoto.addEventListener('click', closePopupAdd);


//создали функцию переберающую массив и добавляющую элементы из массива на страницу
function addElement(item) {
  const cardElement = document.querySelector('.element-template').content.cloneNode(true);

  cardElement.querySelector('.element__desc-title').textContent = item.name;
 
  const image = cardElement.querySelector('.element__photo');
  image.src = item.link;
  image.addEventListener('click', (e) => {
    showPopupPhoto(e);
  });

  cardElement.querySelector('.element__photo').src = item.link;
  
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

    if (todoLike) {
      todoLike.classList.toggle('element__desc-like_type_off');
    }
  });

  elementsList.prepend(cardElement);
}

initialCards.forEach((item) => {
  addElement(item);
});

//функция добавления новой карточки на страницу
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

  closePopupAdd();
}

addPlaceForm.addEventListener('submit', addPlace);

// открытие поп-апа с большим фото
const popupTypeOpen = document.querySelector('.popup_type_open');

function showPopupPhoto(event) {
  popupTypeOpen.classList.add('popup_opened'); 

  const cardElement = event.target.closest('.element');
  const photo = cardElement.querySelector('.element__photo');
  const title = cardElement.querySelector('.element__desc-title');
  
  popupTypeOpen.querySelector('.popup__image').src = photo.src;
  popupTypeOpen.querySelector('.popup__img-title').innerHTML = title.textContent;
}

//закрытие поп-апа с большим фото
const popupCloseImg = document.querySelector('.popup__close-img');

function closePopupPhoto() {
  popupTypeOpen.classList.remove('popup_opened');  
}

popupCloseImg.addEventListener('click', closePopupPhoto);



