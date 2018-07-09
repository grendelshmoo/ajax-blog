const model = require('../models/')

function getAll(req, res, next) {
  const data = model.getAll()
  res.status(200).json({
    data
  })
}

function getOne(req, res, next) {
  const id = req.params.id
  const data = model.getOne(id)
  if (!data) {
    return next({
      status: 404,
      message: `Could not find post with ID of ${id}`
    })
  }
  res.status(200).json({
    data
  })
}

function create(req, res, next) {
  const title = req.body.title
  const content = req.body.content
  if (!title || !content) {
    return next({
      status: 404,
      message: `Title and Content are required`
    })
  }
  const data = model.create(title, content)
  if (!data) {
    return next({
      status: 400,
      message: `Could not update post, wrong id.`
    })
  }
  res.status(200).json({
    data
  })
}

function update(req, res, next) {
  const id = req.params.id
  const title = req.body.title
  const content = req.body.content
  if (!title || !content) {
    return next({
      status: 404,
      message: `Title and Content are required.`
    })
  }
  const data = model.update(id, title, content)
  if (!data) {
    return next({
      status: 400,
      message: `Could not update new post.  Wrong id.`
    })
  }
  res.status(200).json({
    data
  })
}

function remove(req, res, next) {
  const id = req.params.id
  const data = model.remove(id)
  if (!data) {
    return next({
      status: 404,
      message: `Could not delete post, wrong id.`
    })
  }
  res.status(200).json({
    data
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}
