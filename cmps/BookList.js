import BookPreview from './BookPreview.js'

export default {
    props: ['books'],
    template: `
    <section class="books-list">
        <ul>
            <li v-for="book in books" :key="book.id">
                <BookPreview :book="book"/>
                <button @click="showDetails(book.id)">Details</button>
                <button @click="remove(book.id)">X</button>
            </li>
        </ul>
    </section>
    `,
    methods: {
        remove(bookId) {
            this.$emit('remove', bookId)
        },
        showDetails(bookId) {
            this.$emit('show-details', bookId)
        }
    },
    components: {
        BookPreview,
    }
}