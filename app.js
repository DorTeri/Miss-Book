const { createApp } = Vue

import BookIndex from './cmps/BookIndex.js'
import HomePage from './pages/HomePage.js'
import AboutUs from './pages/AboutUs.js'

const options = {
    template: `
        <HomePage v-if="route === 'HomePage'" />
        <BookIndex v-if="route === 'BookIndex'"/>
        <AboutUs v-if="route === 'AboutUs'"/>
        `,
    data() {
        return {
            route: 'BookIndex',
        }
    },
    components: {
        BookIndex,
        HomePage,
        AboutUs,
    }
}




const app = createApp(options)
app.mount('#app')