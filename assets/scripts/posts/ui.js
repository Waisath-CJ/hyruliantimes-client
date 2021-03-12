'use strict'

const api = require('./api')
const store = require('../store')

const createPostSuccess = res => {
  $('#create-post-form').trigger('reset')
  $('#message').text('Created post successfully!')
}

const createPostFailure = err => {
  $('#message').text('Creating post failed\n' + err)
}

const getPostsSuccess = res => {
  const posts = res.posts
  let html = ''
  for (let i = posts.length - 1; i >= 0; i--) {
    let date = new Date(posts[i].createdAt).toLocaleString('en-US')
    let edited = posts[i].createdAt !== posts[i].updatedAt ? ' - edited' : ''
    if (store.user.email === posts[i].owner.email) {
      const editHTML = `<button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#editPostModal" data-content="${posts[i].content}" data-id="${posts[i]._id}">Edit</button>`
      const deleteHTML = `<button class="btn btn-outline-danger inline delete-post" data-id="${posts[i]._id}">Delete</button>`

      html += `<div class="card"><div class="card-header inline options-parent">${posts[i].owner.firstName} ${posts[i].owner.lastName} - ${editHTML} ${deleteHTML}</div><div class="card-body"><p class="card-text">${posts[i].content}</p></div><div class="card-footer text-muted">${date}${edited}</div></div><br>`
    } else {
      html += `<div class="card"><div class="card-header inline options-parent">${posts[i].owner.firstName} ${posts[i].owner.lastName}</div><div class="card-body"><p class="card-text">${posts[i].content}</p></div><div class="card-footer text-muted">${date}${edited}</div></div><br>`
    }
  }
  $('#posts-section').html(html)
  $('.delete-post').on('click', function (e) {
    e.preventDefault()

    const button = $(e.target)
    const postId = button.data('id')

    api.deletePost(postId)
      .then(deletePostSuccess)
      .then(api.getPosts)
      .then(getPostsSuccess)
      .catch(deletePostFailure)
  })
}

const getPostsFailure = err => {
  $('#message').text('Getting posts failed\n' + err)
}

const editPostSuccess = () => {
  $('#editPostModal').modal('toggle')
  $('#message').text('Editing post succeeded')
}

const editPostFailure = err => {
  $('#message').text('Editing post failed\n' + err)
}

const deletePostSuccess = () => {
  $('#message').text('Deleting post succeeded')
}

const deletePostFailure = err => {
  $('#message').text('Deleting post failed\n' + err)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostsSuccess,
  getPostsFailure,
  editPostSuccess,
  editPostFailure
}