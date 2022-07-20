class Database {
    constructor() {
        this.categoryList = []
        this.songList = [new Song('A song', 'A B C D E', 'Nhạc Rock')]
    }

    add(name) {
        if (name.trim() === '') {
            document.querySelector('#alert').innerHTML = 'Không được để trống!'
            document.querySelector('#saveChange').style.display = 'none'
            modal.style.display = 'block'
            saveChange.onclick = () => {
                modal.style.display = 'none'
            }
            return
        } else if (this.check(name)) {
            document.querySelector('#alert').innerHTML = 'Thể loại nhạc đã tồn tại'
            document.querySelector('#saveChange').style.display = 'none'
            modal.style.display = 'block'
            saveChange.onclick = () => {
                modal.style.display = 'none'
            }
            return
        }
        this.categoryList.push(new Category(name))
        this.show()
    }

    check(name) {
        let check = false
        this.categoryList.forEach(cate => {
            if (cate.name.toLowerCase() === name.trim().toLowerCase()) check = true
        })
        return check
    }

    edit(index, name) {
        if (name.trim() === '') {
            modal.style.display = 'block'
            document.querySelector('#alert').innerHTML = 'Không được để trống!'
            document.querySelector('#saveChange').style.display = 'none'
            return
        } else if (this.check(name)) {
            modal.style.display = 'block'
            document.querySelector('#alert').innerHTML = 'Thể loại nhạc đã tồn tại!'
            document.querySelector('#saveChange').style.display = 'none'
            return
        }
        this.categoryList[index].name = name
        this.show()
    }

    delete(index) {
        this.categoryList.splice(index, 1)
        this.show()
    }

    show() {
        let div = document.querySelector('#category')
        let select = document.querySelector('#selectCategory')
        div.replaceChildren()
        select.replaceChildren()

        let table = document.createElement('table')

        table.innerHTML = '<th>ID</th><th>Name</th><th>Edit</th><th>Delete</th>'

        this.categoryList.forEach((category, i) => {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.append(i + 1)
            tr.append(td)

            let tdName = document.createElement('td')
            tdName.append(category.name)
            tr.append(tdName)

            let editBtn = document.createElement('button')
            editBtn.innerHTML = 'Edit'
            editBtn.onclick = () => {
                document.querySelector('#alert').innerHTML = 'Nhập tên để sửa'
                document.querySelector('#edit').style.display = 'block'
                modal.style.display = 'block'
                saveChange.onclick = () => {
                    let name = document.querySelector('#edit').value
                    modal.style.display = 'none'
                    document.querySelector('#edit').value = ''
                    document.querySelector('#edit').style.display = 'none'
                    this.edit(i, name)
                }

            }
            let tdEdit = document.createElement('td')
            tdEdit.append(editBtn)
            tr.append(tdEdit)

            let deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = 'Delete'
            deleteBtn.onclick = () => {
                document.querySelector('#alert').innerHTML = 'Bạn có chắc chắn xoá ?'
                document.querySelector('#saveChange').style.display = 'block'
                modal.style.display = 'block'
                saveChange.onclick = () => {
                    this.delete(i)
                    modal.style.display = 'none'
                }
            }
            let tdDelete = document.createElement('td')
            tdDelete.append(deleteBtn)
            tr.append(tdDelete)

            table.append(tr)
            div.append(table)

            let opt = document.createElement('option')
            opt.innerHTML = category.name
            select.append(opt)
        })
    }

    addSong(nameSong, lyrics) {
        if (nameSong.trim() === '' || lyrics.trim() === '') {
            document.querySelector('#alert').innerHTML = 'Không được để trống!'
            document.querySelector('#saveChange').style.display = 'none'
            modal.style.display = 'block'
            saveChange.onclick = () => {
                modal.style.display = 'none'
            }
            return
        }
        let cate = this.categoryList.find(cate => cate.name === document.querySelector('select').value)
        this.songList.push(new Song(nameSong, lyrics, cate.name))
        this.showSongList()
    }

    deleteSong(index) {
        this.songList.splice(index, 1)
        this.showSongList()
    }

    showSongList() {
        let div = document.querySelector('#songList')
        div.replaceChildren()

        let table = document.createElement('table')

        table.innerHTML = '<th>ID</th><th>Name</th><th>Category</th><th>Delete</th>'

        this.songList.forEach((song, i) => {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.append(i + 1)
            tr.append(td)

            let tdName = document.createElement('td')
            tdName.append(song.name)
            tr.append(tdName)

            let tdCate = document.createElement('td')
            tdCate.append(song.category)
            tr.append(tdCate)

            let deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = 'Delete'
            deleteBtn.onclick = () => {
                document.querySelector('#alert').innerHTML = 'Bạn có chắc chắn xoá ?'
                document.querySelector('#saveChange').style.display = 'block'
                modal.style.display = 'block'
                saveChange.onclick = () => {
                    this.deleteSong(i)
                    modal.style.display = 'none'
                }
            }
            let tdDelete = document.createElement('td')
            tdDelete.append(deleteBtn)
            tr.append(tdDelete)

            table.append(tr)
        })

        div.append(table)
    }


}