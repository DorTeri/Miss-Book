import { bookService } from "../services/book.service.js"
import LongTxt from "../cmps/LongTxt.js"
import AddReview from "../cmps/AddReview.js"
import ReviewPreview from "../cmps/ReviewPreview.js"

export default {
    template: `
        <section v-if="book" class="book-details">
            <div class="sale" v-if="book.listPrice.isOnSale">On sale</div>
            <h1>{{ book.title }}</h1>
            <h2>{{ book.subtitle }}</h2>
            <h3 :class="classObject">{{ formattedPrice }}</h3>
            <h4>Author: <span v-for="author in book.authors">{{ author }}</span></h4>
            <h4>Page count: {{ book.pageCount}} , {{ readingLevel }}</h4>
            <img :src="book.thumbnail">
            <LongTxt :txt="book.description"/>
            <h5>Published Date: {{ book.publishedDate }} , {{ publishStatus }}</h5>
            <p class="book-categories">Categories:
                <span v-for="categorie in book.categories">{{ categorie }}</span></p>
            <p class="lang">Language: {{ book.language }}</p>
            <ReviewPreview 
            v-if="(book.reviews && book.reviews === [])"
            @remove="removeReview" 
            :reviews="book.reviews"/>
            <h3 v-else>No reviews yet</h3>
            <AddReview />
        </section>
    `,
    data() {
        return {
            defaultImgUrl: '../images/book-cover.jpeg',
            book: null
        }
    },
    created() {
        const { bookId } = this.$route.params
        bookService.get(bookId)
            .then(book => this.book = book)
    },
    methods: {
        closeDetails() {
            this.$emit('hide-details')
        },
        removeReview(reviews) {
            this.book.reviews = reviews
            bookService.save(this.book)
        }
    },
    computed: {
        readingLevel() {
            if (this.book.pageCount > 500) return 'Serious reading'
            else if (this.book.pageCount > 200) return 'Descent reading'
            else if (this.book.pageCount <= 200) return 'Light reading'
        },
        publishStatus() {
            const currYear = new Date().getFullYear()
            const diff = currYear - this.book.publishedDate
            if (diff <= 1) return 'New'
            else if (diff > 10) return 'Vintage'
        },
        classObject() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20
            }
        },
        formattedPrice() {
            const { amount, currencyCode } = this.book.listPrice
            return new Intl.NumberFormat('en', { style: 'currency', currency: currencyCode }).format(amount)
        },
    },
    components: {
        LongTxt,
        AddReview,
        ReviewPreview
    }
}