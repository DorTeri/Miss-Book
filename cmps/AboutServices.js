import { utilService } from '../services/util.service.js'

export default {
    template: `
    <div class="about-services">
    <img src="images/services-image.jpg"/>
    <p>
    <h1 class="about-header">Our services</h1>
    {{ makeLoremShort }}
    </p>
    </div>
    `,
    computed: {
        makeLoremShort() {
            return utilService.makeLorem(45)
        },
    }
}