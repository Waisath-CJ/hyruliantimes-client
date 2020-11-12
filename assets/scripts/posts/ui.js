'use strict'

const createPostSuccess = res => {
  $('#create-post-form').trigger('reset')
}

const createPostFailure = err => {
  alert(err)
}

const getPostsSuccess = res => {
  const posts = res.posts
  let html = ''
  const editHTML = '<button class="btn btn-warning inline edit-post">Edit</button>'
  const deleteHTML = '<button class="btn btn-danger inline delete-post">Delete</button>'
  for (let i = posts.length - 1; i >= 0; i--) {
    html += `<div class="card"><div class="card-header inline options-parent">${posts[i].owner} - ${editHTML} ${deleteHTML}</div><div class="card-body"><p class="card-text">${posts[i].content}</p></div><div class="card-footer text-muted">${posts[i].createdAt}</div></div><br>`
  }
  $('#posts-section').html(html)
  $('.edit-post').on('click', function (e) {
    e.preventDefault()

    console.log('clicked edit post button')

    // const form = e.target
    // const postData = getFormFields(form)

    // api.editPost(postData)
    //   .then(ui.editPostSuccess)
    //   .catch(ui.editPostFailure)
  })
  $('.delete-post').on('click', function (e) {
    e.preventDefault()

    console.log('clicked delete post button')

    // const form = e.target
    // const postData = getFormFields(form)

    // api.deletePost(postData)
    //   .then(ui.deletePostSuccess)
    //   .catch(ui.deletePostFailure)
  })
}

const getPostsFailure = err => {
  alert(err)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostsSuccess,
  getPostsFailure
}