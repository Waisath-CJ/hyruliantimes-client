'use strict'

const authEvents = require('./auth/events')

$(() => {
  // AUTH Event Listeners
  // POST sign-up
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  // POST sign-in
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  // PATCH change-password
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // DELETE sign-out
  $('#sign-out').on('click', authEvents.onSignOut)

  // MISC Event Listeners
  // Switch from sign in to sign up
  $('#sign-up-switch').on('click', authEvents.signUpSwitch)

  // Switch from sign up to sign in
  $('#sign-in-switch').on('click', authEvents.signInSwitch)
})
