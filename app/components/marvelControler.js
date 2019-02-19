import MarvelService from './marvelService.js'
//private

let _marvelService = new MarvelService()

function drawApiHeros() {
  let template = ''
  let heros = _marvelService.ApiHeros
  heros.forEach(h => {

    //dynamic button injection
    template += h.getCard()
  })

  function drawMyTeam() {
    let template = ''
    let heros = _marvelService.MyTeam
    heros.forEach(h => {
      let button = ''
      //dynamic button injection
      template += h.getCard()
    })
  }

  //public

  export default class MarvelControler {
    constructor() {
      _marvelService.addSubscriber('apiHeros', drawApiHeros)

      drawApiHeros()
    }


  }