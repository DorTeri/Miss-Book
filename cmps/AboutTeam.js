import { utilService } from '../services/util.service.js'

export default {
    template: `
    <div class="about-team">
    <img src="images/my-profile.jpg"/>
    <p>
    <h1 class="about-header">Dor's Team</h1>
    {{ makeLoremShort }}
    </p>
    </div>
    `,
    computed: {
        makeLoremShort() {
            return utilService.makeLorem(65)
        },
    }
}