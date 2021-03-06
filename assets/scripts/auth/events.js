'use strict'

const api = require('./api')
const ui = require('./ui')
const postApi = require('../posts/api')
const postUi = require('../posts/ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = e => {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(postApi.getPosts)
    .then(postUi.getPostsSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = e => {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = e => {
  e.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const signUpSwitch = e => {
  e.preventDefault()
  ui.signUpSwitch()
}

const signInSwitch = e => {
  e.preventDefault()
  ui.signInSwitch()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  signUpSwitch,
  signInSwitch
}
