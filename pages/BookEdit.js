import { bookService } from "../services/book.service.js"


export default {
    template: `
    <section class="book-edit">
        <form @submit.prevent="save">
            <h2>{{ titleDisplay }}</h2>
            <input type="text" v-model="book.title" placeholder="Book Title" required/>
            <input type="number" v-model.number="book.listPrice.amount" title="Book price" required/>
            <input type="text" v-model="book.authors" placeholder="Author name"/>
            <input type="text" v-model="book.publishedDate" placeholder="Publised year"/>
            <input type="text" v-model="book.description" placeholder="Book description"/>
            <input type="text" v-model="book.thumbnail" placeholder="Book's url image"/>
            <p>Is on sale?
            <input type="checkbox" v-model="book.listPrice.isOnSale"/>
            </p>
            <p>Select language</p>
            <select v-model="book.language" required>
                <option value="" selected disabled>Select language</option>
                <option value="en">en</option>
                <option value="he">he</option>
            </select>
            <button>Add</button>
        </form>
        <RouterLink to="/book">Back</RouterLink>
    </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    created(){
        const {bookId} = this.$route.params
        if (bookId) {
            bookService.get(bookId)
                .then(book => this.book = book)
        }
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(savedBook => {
                    this.book = bookService.getEmptyBook()
                    this.$emit('book-saved', {savedBook})
                })
        },
        goBack() {
            this.$emit('go-back')
        }
    },
    computed: {
        titleDisplay() {
            if(this.book.title) return `Edit ${this.book.title}`
            else return 'Add a book'
        }
    }
}