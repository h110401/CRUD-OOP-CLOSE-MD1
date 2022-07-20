class Song {
    constructor(name, lyrics, category) {
        // this.id = id
        this.name = name
        this.lyrics = lyrics
        this.category = category
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getLyrics() {
        return this.lyrics
    }

    setLyrics(lyrics) {
        this.lyrics = lyrics
    }

    getCategory() {
        return this.category
    }

    setCategory(category) {
        this.category = category
    }
}