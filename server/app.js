const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const usersRouter = require('./routes/users')
const moviesRouter = require('./routes/movies')
const apiRouter = require('./routes/api')
const path = require('path')

app.use(express.urlencoded())
app.use(express.static('public'))
app.use('/users',usersRouter)
app.use('/movies',moviesRouter)
app.use('/api',apiRouter)

app.post('/movies/:genre',(req,res) => {
  req.params.genre
  genre = movies.filter(el => el.genre == req.body.genre)
  res.render('movies', {movie: genre})
})

app.post('/movies/:movieId',(req,res) => {
  console.log(movies)
  req.params.movieId
  movieId = movies.filter(el => el.movieId == req.body.movieId)
  res.render('movies', {details: movieId})
})

const VIEWS_PATH = path.join(__dirname, '/views')

//tell express to use mustache templating engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
// the pages are located in views directory
app.set('views',VIEWS_PATH)
//extension will be .mustache
app.set('view engine', 'mustache')

global.movies = []

app.listen(3000,() => {
})
