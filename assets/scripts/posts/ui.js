'use strict'

const createPostSuccess = res => {
  $('#create-post-form').trigger('reset')
}

const createPostFailure = err => {

}

const getPostsSuccess = res => {
  const posts = res.posts
  let html = ''
  for (let i = posts.length - 1; i >= 0; i--) {
    html += `<p>${posts[i].owner}<br>${posts[i].createdAt}<br>${posts[i].content}</p>`
  }
  $('#response-area').html(html)
}

const getPostsFailure = err => {

}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostsSuccess,
  getPostsFailure
}