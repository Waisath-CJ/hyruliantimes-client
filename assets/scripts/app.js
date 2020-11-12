'use strict'

const authEvents = require('./auth/events')
const postEvents = require('./posts/events')

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

  // POST Event Listeners
  // POST create post
  $('#create-post-form').on('submit', postEvents.createPost)

  // GET posts
  $('#get-posts').on('click', postEvents.getPosts)

  // PATCH posts
  $('#edit-post-form').on('submit', postEvents.editPost)

  // MISC Event Listeners
  // Switch from sign in to sign up
  $('#sign-up-switch').on('click', authEvents.signUpSwitch)

  // Switch from sign up to sign in
  $('#sign-in-switch').on('click', authEvents.signInSwitch)

  // Dynamically add the content to the modal when edit button is clicked
  $('#editPostModal').on('show.bs.modal', function(e) {
    const button = $(e.relatedTarget)
    const content = button.data('content')
    const postId = button.data('id')
    const modal = $(this)
    modal.find('.modal-body form .form-group textarea').val(content)
    modal.find('.modal-body form .edit-post-id').val(postId)
  })
})
