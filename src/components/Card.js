export default class Card {
  constructor({title, link, likes, cardId, templateSelector, handleCardClick, handleDeleteClick}) {
    this._name = title;
    this._link = link;
    this._likes = likes;
    this._cardId = cardId;
    this._elementTemplate = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  //добавление карточки в DOM
  _getTemplate() {
    const cardElement = this._elementTemplate.content.querySelector('.element').cloneNode(true);
    
    return cardElement;
  }

  //проверка количества лайков у карточек
  _checkLike() {
    this._element.querySelector('.element__like_counter').textContent = this._likes.length;
  }

  _trashClick = () => {
    this._handleDeleteClick(this._cardId);
  }
  
  //создание DOM елемента карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementDelete = this._element.querySelector('.element__delete');
    const photo = this._element.querySelector('.element__photo');

    this._element.querySelector('.element__desc-title').textContent = this._name;
    photo.src = this._link;
    photo.alt = this._name;

    this._setEventListeners();

    this._checkLike();
    return this._element;
  }

  //удаление карточки
  _deleteClickHandler = () => {
    this._element.remove();
    this._element = null;
  }

  //лайк карточки
  _likeClickHandler = () => {
    this._element.querySelector('.element__desc-like').classList.toggle('element__desc-like_type_off');
  }

  _setEventListeners() {
    this._elementDelete.addEventListener('click', this._trashClick);
    this._element.querySelector('.element__desc-like').addEventListener('click', this._likeClickHandler);
    this._element.querySelector('.element__photo').addEventListener('click', this._handleCardClick);
  }
}
