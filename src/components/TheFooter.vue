<template>
    <section id="footer">
        <div class="social">
            <div class="logo">
                <img src="" alt="">
                <h2>WTT SOLUTIONS</h2>
            </div>
            <div class="social-networks">
                <p>Find Us</p>
                <span>
                    <router-link to='/' v-for="value in networks" :key="value" v-html="value"></router-link>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Footer',
    data() {
        return {
            networks:[
                '<ion-icon name="logo-behance"></ion-icon>',
                '<ion-icon name="logo-behance"></ion-icon>',
                '<ion-icon name="logo-behance"></ion-icon>',
                '<ion-icon name="logo-linkedin"></ion-icon>'
            ]
        }
    },
}
</script>