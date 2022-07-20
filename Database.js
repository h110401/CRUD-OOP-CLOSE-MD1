class Database {
    constructor(id) {
        this.id = id
        this.categoryList = []
    }

    add(name) {
        if (name.trim() === '') {
            alert('Không được đê trống')
        } else {
            this.categoryList.push(new Category(this.categoryList.length + 1, name))
            this.show()
        }
    }

    edit(index) {
        let name = prompt('Category: ', this.categoryList[index].name)
        if (name.trim() === '') {
            alert('Không được để trống')
        } else {
            this.categoryList[index].name = name
        }

        this.show()
    }

    delete(index) {
        this.categoryList.splice(index, 1)
        this.show()
    }

    show() {
        let div = document.querySelector(this.id)
        div.replaceChildren()
        let table = document.createElement('table')
        this.categoryList.forEach((category, i) => {
            let tr = document.createElement('tr')
            for (const categoryKey in category) {
                if (categoryKey !== 'songList') {
                    let td = document.createElement('td')
                    td.append(category[categoryKey])
                    tr.append(td)
                }
            }
            let editBtn = document.createElement('button')
            editBtn.innerHTML = 'Edit'
            editBtn.onclick = () => {
                this.edit(i)
            }
            tr.append(editBtn)


            let deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = 'Delete'
            deleteBtn.onclick = () => {
                this.delete(i)
            }

            tr.append(deleteBtn)
            table.append(tr)
            div.append(table)
        })
    }
}