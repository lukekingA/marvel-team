import Hero from "../models/hero.js"

//private

let _marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public'
})

let _characters = 'characters?limit=100'
let _offset = 0
let _apiKey = 0

let _state = {
  apiHeros: [],
  myTeam: []
}


let _subscribers = {
  apiHeros: [],
  myTeam: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}

//public 
export default class MarvelService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ApiHeros() {
    return _state.apiHeros.map(hero => new(Hero(hero)))
  }

  get MyTeam() {
    return _state.MyTeam.map(hero => new(Hero(hero)))
  }

  getMarvelData() {
    _marvelAPI.get(`${_characters}&offset=${_offset}&apiKey=${_apiKey}`).then(response => {
      let data = response.data.data.results.map(d => new Hero(d))
      setState('apiHeros', data)
    }).catch(err => console.log(err))
  }

}