exportdefault class Hero {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.thumbnail.path + '.' + data.thumbnail.extention
    this.description = data.description || 'Classified'
    this.id = data.id
  }

  getCard() {

    return `
    <div class="row marvel-characters">
      <div class="card col">
        <img src="" alt="" class="card-img-top">
        <div class="card-body">

        </div>
      </div>
    </div>`
  }
}