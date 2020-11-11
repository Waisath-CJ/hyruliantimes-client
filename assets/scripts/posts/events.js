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
    .catch(ui.createPostFailure)
}

const getPosts = e => {
  e.preventDefault()

  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFailure)
}

const editPost = e => {

}

const deletePost = e => {

}

module.exports = {
  createPost,
  getPosts,
  editPost,
  deletePost
}
