class Database {
    constructor() {
        this.categoryList = []
        this.songList = [new Song('A song', 'A B C D E', 'Nhạc Rock')]
    }

    add(name) {
        if (name.trim() === '') {
            alert('Không được đê trống')
            return
        } else if (this.check(name)) {
            alert('Thể loại nhạc đã tồn tại')
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

    edit(index) {
        let name = prompt('Category: ', this.categoryList[index].name)
        if (name.trim() === '') {
            alert('Không được để trống')
            return
        } else if (this.check(name)) {
            alert('Thể loại nhạc đã tồn tại')
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
                this.edit(i)
            }
            let tdEdit = document.createElement('td')
            tdEdit.append(editBtn)
            tr.append(tdEdit)

            let deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = 'Delete'
            deleteBtn.onclick = () => {
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
            alert('Không được để trống')
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