'use strict'

const config = require('../config')
const store = require('../store')

const createPost = postData => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: postData
  })
}

const getPosts = () => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const editPost = postData => {
  return $.ajax({
    url: config.apiUrl + `/posts/${postData.post.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      post: {
        content: postData.post.content
      }
    }
  })
}

const deletePost = postData => {
  return $.ajax({
    url: config.apiUrl + `/posts/${postData.post.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createPost,
  getPosts,
  editPost,
  deletePost
}
