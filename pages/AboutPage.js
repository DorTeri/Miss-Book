import { utilService } from '../services/util.service.js'

export default {
    template: `
    <section class="about-section">
        <div class="about-profile">
            <h1>Dor's Team</h1>
            <img src="../images/my-profile.jpg">
        </div>
        <div>
            <h1>The Short</h1>
            <p>{{ makeLorem }}</p>
        </div>
        </section>
        `,
        computed: {
            makeLorem() {
                return utilService.makeLorem(30)
            }
        }
}