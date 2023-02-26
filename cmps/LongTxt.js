export default {
    props: ['txt'],
    template: `
    Book description: {{txtByLength}}
    <button @click="showMore" v-if="isLong">
        <span v-if="!isMore">Read more</span>
        <span v-if="isMore">Show less</span>
    </button>
    `,
    data() {
        return {
            isMore: false
        }
    },
    methods: {
        showMore() {
            this.isMore = !this.isMore
        }
    },
    computed: {
        txtByLength() {
            if(this.txt.length > 100 && !this.isMore) return this.txt.slice(0 , 100) + '...'
            else return this.txt
        },
        isLong() {
            if(this.txt.length > 100) return true
            else return false
        }
    }
}