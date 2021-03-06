'use strict'

const store = require('../store')

const signUpSuccess = res => {
  $("#message").text('Thanks for signing up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
  signInSwitch()
}
const signUpFailure = err => {
  $("#message").text('Sign up failed, try again')
}

const signInSuccess = res => {
  $("#message").text('Successfully signed in ' + res.user.email)
  store.user = res.user
  $('#sign-in-form').trigger('reset')
  $('#sign-in-section').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-post-section').show()
  $('#posts-section').show()
}
const signInFailure = err => {
  $("#message").text('Sign in failed, try again')
}

const changePasswordSuccess = () => {
  $("#message").text('Successfully changed password for ' + store.user.email)
  $('#change-password-form').trigger('reset')
  $('#change-password-modal').modal('hide')
  $('#change-password-err-alert').hide()
}

const changePasswordFailure = err => {
  $("#message").text('Password change failed, try again')
}

const signOutSuccess = () => {
  $("#message").text('Successfully signed out ' + store.user.email)
  delete store.user
  $('#sign-in-section').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-post-section').hide()
  $('#posts-section').hide()
  $('#change-password-form').trigger('reset')
  $('#create-post-form').trigger('reset')
}

const signOutFailure = err => {
  $("#message").text('Sign out failed, try again')
}

const signUpSwitch = () => {
  $('#sign-in-form').trigger('reset')
  $('#sign-up-section').show()
  $('#sign-in-section').hide()
}

const signInSwitch = () => {
  $('#sign-up-form').trigger('reset')
  $('#sign-up-section').hide()
  $('#sign-in-section').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  signUpSwitch,
  signInSwitch
}
