import { utilService } from '../services/util.service.js'

export default {
    template: `
    <section class="about">
        <div class="team-link">
    <RouterLink to="/about/team" >
        Our team
        <br>
    <i class="fa-solid fa-people-group"
    :class="{'fa-beat-fade': isTeamHovering}"
    @mouseover="isTeamHovering = true"
     @mouseout="isTeamHovering = false"></i>
    </RouterLink>
    </div>
    <div class="services-link">
    <RouterLink to="/about/services">
        Our services
        <br>
    <i class="fa-solid fa-gears"
    :class="{'fa-spin': isServiceHovering}"
    @mouseover="isServiceHovering = true"
    @mouseout="isServiceHovering = false"></i>
    </RouterLink>
    </div>
    <section class="about-section">
        <div>
            <h2>Books & Us</h2>
            <p>{{ makeLoremLong }}</p>
        </div>
        <img src="images/about-photo.jpg"/>
        </section>
        <RouterView />
        </section>
        `,
        data() {
            return {
                isTeamHovering: false,
                isServiceHovering: false
            }
        },
    computed: {
        makeLoremLong() {
            return utilService.makeLorem(65)
        }
    }
}