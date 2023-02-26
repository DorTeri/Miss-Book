export default {
    template: `
        <header class="app-header">
            <h1>Miss Book</h1>
            <nav>
                <a @click="setRoute('HomePage')" href="#">Home</a>
                <a @click="setRoute('BookIndex')" href="#">Books</a>
                <a @click="setRoute('AboutUs')" href="#">About</a>
            </nav>
        </header>
    `,
    methods: {
        setRoute(route) {
            this.$emit('set-route', route)
        }
    }
}