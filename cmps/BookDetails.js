import LongTxt from "./LongTxt.js"

export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <div class="sale" v-if="book.listPrice.isOnSale">On sale</div>
            <h2>{{ book.title }}</h2>
            <h3>{{ book.subtitle }}</h3>
            <h3 :class="classObject">{{ book.listPrice.amount }} {{ book.listPrice.currencyCode}}</h3>
            <h4>Author: <span v-for="author in book.authors">{{ author }}</span></h4>
            <h4>Page count: {{ book.pageCount}} , {{ readingLevel }}</h4>
            <img :src="book.thumbnail">
            <LongTxt :txt="book.description"/>
            <h5>Published Date: {{ book.publishedDate }} , {{ publishStatus }}</h5>
            <p class="book-categories">Categories:
                <span v-for="categorie in book.categories">{{ categorie }}</span></p>
            <p class="lang">Language: {{ book.language }}</p>
            <button class="btn-close-details" @click="closeDetails">X</button>
        </section>
    `,
    data() {
        return {
            defaultImgUrl: '../images/book-cover.jpeg'
        }
    },
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
            if(diff <= 1) return 'New'
            else if(diff > 10) return 'Vintage'
        },
        classObject() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20
            }
        },
    },
    components: {
        LongTxt,
    }
}