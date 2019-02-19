import MarvelControler from "./components/marvelControler.js";




class App {
  constructor() {
    this.controllers = {
      marvelControler: new MarvelControler(),
    }
  }
}

window.app = new App()