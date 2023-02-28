import { bookService } from "../services/book.service.js"
import { googleBookService } from "../services/googleBookService.js"
import { utilService } from "../services/util.service.js"

export default {
    template: `
    <form>
    <input @input="debounceSearchGoogleBook" type="text" placeholder="Search book" v-model="txt">
    <button>Submit</button>
    </form>
    <ul>
        <li v-for="book in books">
            {{ book.volumeInfo.title }}
            <button @click="addBook(book)">+</button>
        </li>
    </ul>
    `,
    data() {
        return {
            txt: '',
            books: null,
        }
    },
    created(){
        this.debounceSearchGoogleBook = utilService.debounce(this.searchGoogleBook, 500)
    },
    methods: {
        addBook(book) {
            const updatedBook = googleBookService.updateBookObject(book)
            bookService.addGoogleBook(updatedBook)
        },
        searchGoogleBook() {
            googleBookService.query(this.txt)
                .then(books => {
                    console.log('books', books)
                    this.books = books
                })
        }
    },
}