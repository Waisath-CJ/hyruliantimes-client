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

const editPost = (postData, id) => {
  return $.ajax({
    url: config.apiUrl + `/posts/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: postData
  })
}

const deletePost = id => {
  return $.ajax({
    url: config.apiUrl + `/posts/${id}`,
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
