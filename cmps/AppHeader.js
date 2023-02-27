export default {
    template: `
        <header class="app-header">
            <div class="header-content">
            <RouterLink to="/"><h1>Miss Book</h1></RouterLink>
            <nav>
                <RouterLink to="/">Home</RouterLink> 
                <RouterLink to="/book">Our Books</RouterLink> 
                <RouterLink to="/about">About</RouterLink>
            </nav>
</div>
        </header>
    `,
    methods: {
        setRoute(route) {
            this.$emit('set-route', route)
        }
    }
}