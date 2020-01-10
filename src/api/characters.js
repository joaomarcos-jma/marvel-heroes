import axios from 'axios'

const PUBLIC_KEY = 'caff0e2672bea96b687f77bb8f4fab89'
const HASH = 'f2ff1335c5086610ba73060dbc4fa214'
const KEY = `?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/'
})

function getHeroesApi (heroes) {

    api.get(`characters${KEY}`)
        .then((response) => {
            if (response.data) {
               let data = JSON.parse(JSON.stringify(response.data));
                heroes(data.data.results)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export default {
    getHeroes: (heroes) => getHeroesApi(heroes)
}
