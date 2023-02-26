export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <div class="sale" v-if="book.listPrice.isOnSale">On sale</div>
            <h2>{{ book.title }}</h2>
            <h3 :class="classObject">{{ book.listPrice.amount }}</h3>
            <h4>Reading level: {{ readingLevel }}</h4>
            <h5>{{ publishStatus }}</h5>
            <img :src="book.thumbnail" alt="Book image">
            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails(){
            this.$emit('hide-details')
        }
    },
    computed: {
        readingLevel() {
            if(this.book.pageCount > 500) return 'Serious reading'
            else if(this.book.pageCount > 200) return 'Descent reading'
            else if(this.book.pageCount <= 200) return 'Light reading'
        },
        publishStatus() {
            const currYear = new Date().getFullYear()
            const diff = currYear - this.book.publishedDate
            if(diff < 1) return 'New'
            else if(diff > 10) return 'Vintage'
        },
        classObject() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20
            }
        },
    },
}