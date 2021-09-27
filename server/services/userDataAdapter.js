function userDataAdapter(user) {
  return {
    active: user.active,
    subscriptions: user.subscriptions,
    userId: user._id,
    subscribers: user.subscribers,
    userName: user.username,
    bookmark: user.bookmark,
    email: user.email,
    avatar: user.avatar,
    description: user.description ?? '',
    place: user.place ?? '',
  }
}

module.exports = userDataAdapter