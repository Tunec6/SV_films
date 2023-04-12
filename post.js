async function getMovie() {
    return fetch('https://swapi.dev/api/films')
    .then((movieResponse) =>{
      return movieResponse.json()
    })
     .catch((err) => {
      console.error('Ошибка', err)
     })
    }
    getMovie()