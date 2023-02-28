import { bookService } from "../services/book.service.js"
import { eventBusService } from "../services/event-bus.service.js"


export default {
    template: `
    <section class="review">
        <h3>Your review</h3>
        <form @submit.prevent="addReview">
            <input type="text" v-model="review.name" placeholder="Your name">
            <div>
            <i v-for="(star,idx) in 5" 
            class="fa-regular fa-star"
            @click="setStarRate(idx)"
            :class="{ checked: (idx < review.rate)}">
            </i>
            </div>
            <label for="dateRead">Read at:</label>
            <input id="dateRead" type="date" v-model="review.readAt">
            <button class="btn-review"><i class="fa-solid fa-share"></i></button>
        </form>
    </section>
    `,
    data() {
        return {
            review: { name: null, rate: 1, readAt: null },
            book: null
        }
    },
    created() {
        const { bookId } = this.$route.params
        if (bookId) {
            bookService.get(bookId)
                .then(book => this.book = book)
        }
    },
    methods: {
        setStarRate(rate) {
            if (this.book) {
                this.review.rate = rate + 1
            }
        },
        addReview() {
            bookService.addReview(this.review, this.book.id)
            eventBusService.emit('show-msg', { txt: 'Review Added', type: 'success' })
            this.$emit('added' , this.review)
        },
    },
    computed: {
        classChecked() {
        }
    }
}