import {myId} from '../utils/constants.js';

export default class Card {
  constructor({title, link, likes, cardId, ownerId, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick}) {
    this._name = title;
    this._link = link;
    this._likes = likes;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._elementTemplate = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  //добавление карточки в DOM
  _getTemplate() {
    const cardElement = this._elementTemplate.content.querySelector('.element').cloneNode(true);
    
    return cardElement;
  }

  //добавление и удаление +1\-1 при клике на лайк
  changeLike = () => {  
    const checkElementLike = this._elementLikeButton.classList.contains('element__desc-like_type_off');

    this._elementLikeButton.classList.toggle('element__desc-like_type_off');
    this._element.querySelector('.element__like_counter').textContent = this._likes.length + (checkElementLike ? 0 : 1);

    this._handleLikeClick(this._cardId);
  }

  //обновление кол-ва карточек, которые пришли с сервера
  updateLikeCard(likesMassive) {
    this._likes = likesMassive;
    this._checkLike();
  }

  //проверка количества лайков у карточек
  _checkLike() {
    this._element.querySelector('.element__like_counter').textContent = this._likes.length;

    if (this._likes.findIndex((item) => item._id == myId) !== -1) {
      this._elementLikeButton.classList.add("element__desc-like_type_off");
    }
  }

  //клик на иконку корзины и открытие поп-апа подтверждения
  _trashClick = () => {
    this._handleDeleteClick(this);
  }
  
  //создание DOM елемента карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementDelete = this._element.querySelector('.element__delete');
    this._elementLikeButton = this._element.querySelector('.element__desc-like');
    const photo = this._element.querySelector('.element__photo');

    this._element.querySelector('.element__desc-title').textContent = this._name;
    photo.src = this._link;
    photo.alt = this._name;

    if (myId !== this._ownerId) {
      this._element.querySelector('.element__delete').classList.add('element__delete_disabled');
    }

    this._setEventListeners();

    this._checkLike();
    return this._element;
  }

  //удаление карточки
  delCard = () => {
    this._element.remove();
    this._element = null;
  }

  //лайк карточки
  // _likeClickHandler = () => {
  //   this._element.querySelector('.element__desc-like').classList.toggle('element__desc-like_type_off');
  // }

  _setEventListeners() {
    this._elementDelete.addEventListener('click', this._trashClick);
    this._elementLikeButton.addEventListener('click', this.changeLike);
    // this._element.querySelector('.element__desc-like').addEventListener('click', this._likeClickHandler);
    this._element.querySelector('.element__photo').addEventListener('click', this._handleCardClick);
  }
}
