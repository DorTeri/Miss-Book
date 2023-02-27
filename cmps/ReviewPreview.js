export default {
    props: ['reviews'],
    template: `
    <section class="users-reviews">
        <h2>Reviews</h2>
        <div v-for="(review , idx) in reviews" :key="reviews" class="user-review">
            <h2>{{ review.name }}</h2>
            <i v-for="star in review.rate" class="fa-regular fa-star checked"></i>
            <small>{{ review.readAt }}</small>
            <button @click="remove(idx)">X</button>
        </div>
    </section>
    `,
    methods: {
        remove(idx) {
            this.reviews.splice(idx , 1)
            this.$emit('remove' , this.reviews)
        }
    }
}