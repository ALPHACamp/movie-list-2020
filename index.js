const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'
const movies = []

axios
  .get(INDEX_URL)
  .then((response) => {
    movies.push(...response.data.results)
    console.log(movies)
  })
  .catch((err) => console.log(err))