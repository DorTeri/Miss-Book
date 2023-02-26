import { bookService } from "../services/book.service.js"


export default {
    template: `
    <section class="book-edit">
        <h2>Add a book</h2>
        <form @submit.prevent="save">
            <input type="text" v-model="book.title" placeholder="Book Title" required/>
            <input type="number" v-model.number="book.listPrice.amount" title="Book price" required/>
            <input type="text" v-model="book.author" placeholder="Author name"/>
            <input type="text" v-model="book.publishedDate" placeholder="Publised year"/>
            <input type="text" v-model="book.description" placeholder="Book description"/>
            <input type="text" v-model="book.thunbnail" placeholder="Book's url image"/>
            <p>Is on sale?</p>
            <input type="checkbox" v-model="book.isOnSale"/>
            <select v-model="book.language" required>
                <option value="" selected disabled>Select language</option>
                <option value="en">en</option>
                <option value="he">he</option>
            </select>
            <button>Add</button>
        </form>
    </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(savedBook => {
                    this.book = bookService.getEmptyBook()
                    this.$emit('book-saved', savedBook)
                })
        }
    }
}