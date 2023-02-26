export default {
    template: `
    <section class="books-filter">
        <input v-model="filterBy.title"
        @input="filter"
        placeholder="Search"
        type="text"/>
        <label for="max-price">Max price</label>
        <input id="max-price"
        type="range"
        v-model="filterBy.maxPrice"
        @input="filter"/>
    </section>
    `,
    data() {
        return {
            filterBy: { title: '', maxPrice: 0 }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}