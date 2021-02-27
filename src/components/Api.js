export default class Api {
  constructor(config) {
    this._address = config.url;
    this._token = config.headers.token;
  }

  //получить ответ от сервера
  _getResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  //метод получения карточки от сервера
  getCards() {
    return fetch(`${this._address}cards`, {
      headers: {
        authorization: this._token
      }
    }).then((res) => {
        return this._getResponse(res);
      });
  }

  //метод добавления новой карточки
  addNewCard(data) {
    return fetch(`${this._address}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
        return this._getResponse(res);
    });
  }

  //запрос информации о пользователе с сервера
  getUserInfoFromServer() {
    return fetch(`${this._address}users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._getResponse(res);
    });
  }

  //запрос изменения данных профиля
  setUserInfoFromServer(data) {
    return fetch(`${this._address}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${data.userName}`, 
        about: `${data.userJob}`
      })
    })
    .then((res) => {
      return this._getResponse(res);
    });
  }

  //запрос изменения фотографии аватара
  setUserAvatar(data) {
    return fetch(`${this._address}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.linkAvatar
      })
    }) 
    .then((res) => {
      return this._getResponse(res);
    });
  }

  //запрос на удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._address}cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._getResponse(res);
    });
  }

  //запрос на лайк карточки
  likeCard(cardId) {
    return fetch(`${this._address}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._getResponse(res);
    });
  }

  //запрос на удаление лайка карточки
  deleteLikeCard(cardId) {
    return fetch(`${this._address}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._getResponse(res);
    });
  }
}