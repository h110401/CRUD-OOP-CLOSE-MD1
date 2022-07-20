let database = new Database()

database.show()

database.add('Nhạc Đỏ')
database.add('Nhạc Vàng')
database.add('Nhạc Trẻ')
database.add('Nhạc Rock')

database.showSongList()

document.querySelector("button").onclick = () => {
    database.add(document.querySelector('#categoryCreate').value)
}

document.querySelector('#createSong').onclick = () => {
    let name = document.querySelector('#nameSong').value
    let lyrics = document.querySelector('#lyrics').value
    database.addSong(name, lyrics)
}