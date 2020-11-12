'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const createPost = e => {
  e.preventDefault()

  const form = e.target
  const postData = getFormFields(form)

  api.createPost(postData)
    .then(ui.createPostSuccess)
    .then(api.getPosts)
    .then(ui.getPostsSuccess)
    .catch(ui.createPostFailure)
}

const getPosts = e => {
  e.preventDefault()

  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFailure)
}

const editPost = e => {
  e.preventDefault()

  const form = e.target
  const postData = getFormFields(form)

  api.editPost(postData)
    .then(ui.editPostSuccess)
    .then(api.getPosts)
    .then(ui.getPostsSuccess)
    .catch(ui.editPostFailure)
}

module.exports = {
  createPost,
  getPosts,
  editPost
}
