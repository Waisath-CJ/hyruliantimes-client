'use strict'

const api = require('./api')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const createPostSuccess = res => {
  $('#create-post-form').trigger('reset')
  $('#message').text('Created post successfully!')
}

const createPostFailure = err => {
  $('#message').text('Creating post failed\n' + err)
}

const getPostsSuccess = res => {
  const posts = res.posts
  const userFullName = `${store.user.firstName} ${store.user.lastName}`
  let html = ''
  const deleteHTML = '<button class="btn btn-outline-danger inline delete-post">Delete</button>'
  for (let i = posts.length - 1; i >= 0; i--) {
    if (userFullName === posts[i].owner) {
      const editHTML = `<button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#editPostModal" data-content="${posts[i].content}" data-id="${posts[i]._id}">Edit</button>`

      html += `<div class="card"><div class="card-header inline options-parent">${posts[i].owner} - ${editHTML} ${deleteHTML}</div><div class="card-body"><p class="card-text">${posts[i].content}</p></div><div class="card-footer text-muted">${posts[i].createdAt}</div></div><br>`
    } else {
      html += `<div class="card"><div class="card-header inline options-parent">${posts[i].owner}</div><div class="card-body"><p class="card-text">${posts[i].content}</p></div><div class="card-footer text-muted">${posts[i].createdAt}</div></div><br>`
    }
  }
  $('#posts-section').html(html)
  $('.delete-post').on('click', function (e) {
    e.preventDefault()

    console.log('clicked delete post button')

    // const form = e.target
    // const postData = getFormFields(form)

    // api.deletePost(postData)
    //   .then(deletePostSuccess)
    //   .catch(deletePostFailure)
  })
}

const getPostsFailure = err => {
  $('#message').text('Getting posts failed\n' + err)
}

const editPostSuccess = res => {
  $('#editPostModal').modal('toggle')
  $('#message').text('Editing post succeeded')
}

const editPostFailure = err => {
  $('#message').text('Editing post failed\n' + err)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostsSuccess,
  getPostsFailure,
  editPostSuccess,
  editPostFailure
}