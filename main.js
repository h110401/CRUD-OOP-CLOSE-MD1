let database = new Database()


database.show()

database.add('Nhạc Đỏ')
database.add('Nhạc Vàng')
database.add('Nhạc Trẻ')
database.add('Nhạc Rock')

database.showSongList()


document.querySelector("#create").onclick = () => {
    database.add(document.querySelector('#categoryCreate').value)
    document.querySelector('#categoryCreate').value = ''
}

document.querySelector('#createSong').onclick = () => {
    let name = document.querySelector('#nameSong').value
    let lyrics = document.querySelector('#lyrics').value
    document.querySelector('#nameSong').value = ''
    document.querySelector('#lyrics').value = ''
    database.addSong(name, lyrics)
}

//Modal

let modal = document.querySelector('#modal')
let closeBtn = document.querySelector('#closeBtn')
let close = document.querySelector('#close')
let saveChange = document.querySelector('#saveChange')

close.onclick = () => {
    modal.style.display = 'none'
    document.querySelector('#edit').style.display = 'none'
}

closeBtn.onclick = () => {
    modal.style.display = 'none'
    document.querySelector('#edit').style.display = 'none'
}