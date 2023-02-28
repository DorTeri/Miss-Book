import { utilService } from '../services/util.service.js'

export default {
    template: `
    <h1 class="about-header">Dor's Team</h1>
    <section class="about-section">
        <div class="about-profile">
            <img src="../images/my-profile.jpg"/>
        </div>
        <div>
            <h2>The Short</h2>
            <p>{{ makeLoremShort }}</p>
            <img src="../images/about-photo.jpg"/>
        </div>
        <div>
            <h2>The Long</h2>
            <p>{{ makeLoremLong }}</p>
        </div>
        </section>
        `,
        computed: {
            makeLoremShort() {
                return utilService.makeLorem(30)
            },
            makeLoremLong() {
                return utilService.makeLorem(60)
            }
        }
}