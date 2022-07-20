let database = new Database("#category")

database.add('Nhạc Đỏ')
database.add('Nhạc Vàng')
database.add('Nhạc Trẻ')
database.add('Nhạc Rock')


database.show()

document.querySelector("button").onclick = () => {
    database.add(document.querySelector('#categoryCreate').value)
}