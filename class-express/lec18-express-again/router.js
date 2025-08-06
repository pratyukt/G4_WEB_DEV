const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const birdLogin = (req, res, next) => {
  console.log("BIRD LOG IN")
  next()
}
router.use(birdLogin)

// define the home page route
router.get('/', (req, res) => {
  res.send('home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About bird')
})

module.exports = router
