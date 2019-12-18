const express = require('express')
const router = express.Router()

router.post('/create',(req,res) => {
  let title = req.body.title
  let description = req.body.description
  let genre = req.body.genre
  let posterURL = req.body.posterURL
  let movie = {title: title, description: description, genre: genre, posterURL: posterURL}
  movies.push(movie)
  for(let index = 0; index < movies.length; index++) {
    let movie = movies[index]
    movie.movieId = index
  }
  res.redirect('/movies')
})

router.post('/delete',(req,res) => {
  let title = req.body.movieId
  for(let index = 0; index < movies.length; index++){
    let movie = movies[index]
    if(movie.movieId == index) {
      movies.splice(index, 1)
    }
  }
  for(let index = 0; index < movies.length; index++) {
    let movie = movies[index]
    movie.movieId = index
  }
  res.redirect('/movies')
})

router.get('/',(req,res) => {
  res.render('movies', {movie: movies})
})

module.exports = router
