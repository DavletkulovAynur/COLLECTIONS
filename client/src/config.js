export const API_URL = "http://localhost:4000";

// TODO: на сервере переделать
export const URL_CLIENT = "http://localhost:3000";
export const SITE_NAME = "collecttion.ru";

export const typeCollection = [
  { value: "books", label: "Книга" },
  { value: "game", label: " Игра" },
  { value: "movie", label: "Фильм" },
  { value: "tv-series", label: "Сериал" },
  { value: "travel", label: "Путешествие" },
  { value: "nostalgia", label: "Ностальгия" },
  { value: "other", label: "Другое" },
];

export const alertMessagesText = {
  addCommentText: 'Комментарий добавлен',
  deleteCommentText: 'Комментарий удалён',
  deleteCollection: 'Вы удалили свою коллекцию',
  complainCollection: 'Ваша жалоба принята',
  addNewCollection: 'Вы добавили новую коллекцию',
  userEditAvatar: 'Вы поменяли свою аватарку',
  userInfoEdit: 'Вы отредактировали свой профиль',
  subscribeOnUser: 'Вы подписались',
  unSubscribeOnUser: 'Вы отписались',
  authEmailResending: 'Повторное подтверждение отправлено на почту',
  addBookmark: 'Вы сохранили коллекцию',
  deleteBookmark: 'Вы удалили коллекцию из сохраненных',
}
