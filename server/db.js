
module.exports = {
  getUser,
  getUsers,
  addUser,
  getUsersWhoLike
}

function getUsers (db) {
  return db('users').select()
}

function getUser (id, db) {
  return db('users').where('id', id).first()
}

function addUser(user, db) {
  return db('users').insert(user)
}

function getUsersWhoLike(favouriteName, db) {
  return db('users')
    .select('users.*')
    .join('favourites_users', 'favourites_users.user_id', 'users.id')
    .join('favourites', 'favourites.id', 'favourites_users.favourite_id')
    .where('favourites.name', favouriteName)
}

