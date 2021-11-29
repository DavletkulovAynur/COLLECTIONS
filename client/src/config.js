export const API_URL = "http://localhost:4000";

// TODO: на сервере переделать
export const URL_CLIENT = "http://localhost:3000";

export const SITE_NAME = "collecttion.ru";

export const typeCollection = [
  { value: "books", label: "Книга" },
  { value: "game", label: " Игра" },
  { value: "movie", label: "Фильм" },
  { value: "tv-series", label: "Сериал" },
  { value: "music", label: "Музыка" },
  { value: "travel", label: "Путешествие" },
  { value: "nostalgia", label: "Ностальгия" },
  { value: "dream", label: "Мечта" },
  { value: "fashion", label: "Мода" },
  { value: "restaurant", label: "Ресторан" },
  { value: "cafe", label: "Кафе" },
  { value: "place", label: "Место" },
  { value: "Interior Design", label: "Дизайн интерьера"},
  { value: "food", label: "Еда" },
  { value: "picture", label: "Картинка" },
  { value: "video", label: "Видео" },
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
