

// video 87-89
const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  res.send('blog')
})
router.get('/:slug', (req, res) => {
  res.send(`hello ${req.params.slug} blog`)
})


module.exports =router