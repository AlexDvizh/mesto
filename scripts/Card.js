import showPopupPhoto from './index.js';

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

export default class Card {
  constructor(title, link) {
    this._name = title;
    this._link = link;
  }

  //добавление карточки в DOM
  _getTemplate() {
    const cardElement = document
      .querySelector('.element-template')
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }
  
  //создание DOM елемента карточки
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__desc-title').textContent = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  //удаление карточки
  _deleteClickHandler = (evt) => {
    evt.target.closest('.element').remove();
  }

  //лайк карточки
  _likeClickHandler = () => {
    this._element.querySelector('.element__desc-like').classList.toggle('element__desc-like_type_off');
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', this._deleteClickHandler);
    this._element.querySelector('.element__desc-like').addEventListener('click', this._likeClickHandler);
    this._element.querySelector('.element__photo').addEventListener('click', (evt) => {
      showPopupPhoto(evt);
    });
  }
}

//перебираем массив и добавляем в DOM
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  document.querySelector('.elements').prepend(cardElement);
});
