class Category {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.songList = []
    }

    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    add(Song) {
        this.songList.push(Song)
    }
}