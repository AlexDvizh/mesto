export default class Card {
  constructor({title, link, likes, cardId, ownerId, myId, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick}) {
    this._name = title;
    this._link = link;
    this._likes = likes;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._myId = myId;
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
  
  setLikes() {
    this.setLikeStatus();
    this.setLikeCounter(this._likes.length);
  }

  setLikeStatus() {
    this.liked = this.checkLikeStatus(this._likes, this._myId);
    if (this.liked) {
      this._elementLikeButton.classList.add('element__desc-like_type_off');
    }
  }

  setLikeCounter(likeCount) {
    this._element.querySelector('.element__like_counter').textContent = likeCount;
  }

  checkLikeStatus(likes, userId) {
    return likes.some(like => like._id === userId);
  }

  handleClickLike = () => {
    this._handleLikeClick(this._cardId, this.liked);
  }

  updateLikes(likes) {
    this.liked = !this.liked;
    this._elementLikeButton.classList.toggle('element__desc-like_type_off');
    this.setLikeCounter(likes.length);
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

    if (this._myId !== this._ownerId) {
      this._element.querySelector('.element__delete').classList.add('element__delete_disabled');
    }

    this._setEventListeners();
    this.setLikes();

    return this._element;
  }

  //удаление карточки
  delCard = () => {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._elementDelete.addEventListener('click', this._trashClick);
    this._elementLikeButton.addEventListener('click', this.handleClickLike);
    this._element.querySelector('.element__photo').addEventListener('click', this._handleCardClick);
  }
}
