const films = document.querySelector('.films')
const postFilms = (film) => {
  const filmDiv = document.createElement('div')
  filmDiv.classList.add('film')
  filmDiv.innerHTML = 
      `
      <h2>${film.title}</h2>
      <p>Дата создания:${film.release_date}</p>
      <p>Продюсер:${film.producer}</p>
      <p>Директор:${film.director}</p>
      `
  films.append(filmDiv)
}

const postLoad = () => {
  const divLoading = document.createElement('div')
  divLoading.classList.add('load')       
  divLoading.innerHTML =
      `
      <div></div>
      `

  films.append(divLoading)
}

const load = () => {
  const delLoad = document.querySelector('.load')
  delLoad.innerHTML = ''
}

const error = () => {
  const erroDiv = document.createElement('div')
  erroDiv.classList.add('error')
  erroDiv.innerHTML =
      `<div>Произошла ошибка</div>`
  films.append(erroDiv)
}

const getFilms = async() => {
  postLoad()
  try{
    const movieApi = await fetch('https://swapi.dev/api/films')
    const movie = await movieApi.json()
    api = movie.results.map(films => postFilms(films))
  } catch (err){
    console.error('Ошибка', err)
    error()
  } finally {
    load()
  }
}

getFilms()