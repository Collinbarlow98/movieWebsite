const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
  res.send(movies)
})

module.exports = router
