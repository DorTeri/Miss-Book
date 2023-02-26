const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import BookIndex from './cmps/BookIndex.js'
import HomePage from './pages/HomePage.js'
import AboutUs from './pages/AboutUs.js'

const options = {
    template: `
        <AppHeader class="full" @setRoute="route = $event"/>
        <main class="router-view">
        <HomePage v-if="route === 'HomePage'" />
        <BookIndex v-if="route === 'BookIndex'"/>
        <AboutUs v-if="route === 'AboutUs'"/>
        </main>
        <appFooter class="full"/>
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
        AppHeader,
        AppFooter
    }
}




const app = createApp(options)
app.mount('#app')