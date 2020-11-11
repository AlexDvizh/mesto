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
    link: 'https://images.unsplash.com/photo-1516258115999-95997920a630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0NTM1OH0&auto=format&fit=crop&w=334&q=80'
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
function showPopupPhoto() {
  popupPhotoAdd.classList.add('popup_opened');  
}

addButton.addEventListener('click', showPopupPhoto);

//создали функцию закрытия поп-апа добавления фото
function closePopupPhoto() {
  popupPhotoAdd.classList.remove('popup_opened');
}

popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);


//создали функцию переберающую массив и добавляющую элементы из массива на страницу
function addElement(item) {
  const cardElement = document.querySelector('.element-template').content.cloneNode(true);

  cardElement.querySelector('.element__desc-title').textContent = item.name;
  cardElement.querySelector('.element__photo').src = item.link;
  
  //функция удаления карточки
  cardElement.querySelector('.element__delete').addEventListener('click', (event) => {
    const todoDelete = event.target.closest('.element');

    if (todoDelete) {
      todoDelete.remove();
    } 
  });

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

  closePopupPhoto()
}

addPlaceForm.addEventListener('submit', addPlace);




//функция удаления карточки (не доделана)


//создали функцию смены внешнего вида кнопки при нажатии на лайк
//let likeButtons = document.querySelectorAll('.element__desc-like');

//likeButtons.forEach(button => {
//  button.addEventListener('click', (evt) => {
//    const theTarget = evt.target;
//    button.classList.toggle('element__desc-like_type_off');
//  });
//});


