import { bookService } from '../services/book.service.js'

import BookFilter from './BookFilter.js'
import BookList from './BookList.js'

import BookEdit from './BookEdit.js'
import BookDetails from './BookDetails.js'


export default {
    template: `
    <section class="books-index">
        <BookFilter v-show="isFilter" :books="books" @filter="setFilterBy"/>
        <button v-if="isFilter" @click="toggleFilter">close</button>
        <button v-if="!isFilter" @click="toggleFilter">Filter</button>
        <button class="btn-add" @click="toggleAdd">Add book</button>
        <BookEdit v-show="add" @book-saved="onSaveBook"/>
        <BookList 
        :books="filteredBooks" 
        v-if="books"
        @show-details="showBookDetails"/>
        <bookDetails 
        v-if="selectedBook"
        @hide-details="selectedBook = null"
        :book="selectedBook"/>
    </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: {maxPrice: 400},
            add: false,
            isFilter: false
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === bookId)
                    this.books.splice(idx, 1)
                })
        },
        showBookDetails(bookId) {
            this.selectedBook = this.books.find(book => book.id === bookId)
        },
        onSaveBook(newBook) {
            this.books.unshift(newBook)
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        },
        toggleAdd() {
            this.add = !this.add
        },
        toggleFilter() {
            this.isFilter = !this.isFilter
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(book => regex.test(book.title) &&
            book.listPrice.amount < this.filterBy.maxPrice)
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    },
    components: {
        bookService,
        BookList,
        BookFilter,
        BookEdit,
        BookDetails
    }
}