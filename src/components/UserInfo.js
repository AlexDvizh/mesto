export default class UserInfo {
  constructor({name, info, avatar}) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
  }
  //возвращает объект с данными пользователя
  getUserInfo() {
    const userName = this._name.textContent;
    const userInfo = this._info.textContent;
    const userAvatar = this._avatar.src;

    return {userName, userInfo, userAvatar};
  }
  //принимает введённые данные
  setUserInfo({userName, userInfo, userAvatar}) {
    this._name.textContent = userName;
    this._info.textContent = userInfo;
    this._avatar.src = userAvatar;
  }
  //заменяет аватар
  setUserAvatar(userAvatar){
    this._avatar.src = userAvatar;
  }
}