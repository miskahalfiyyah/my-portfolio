/* eslint-disable vue/valid-template-root */
<template>

<div class="find">
    <Navbar />
        <section>
        <div class="container">
            <div class="text text-white">
                <h2>FindaJob, Find a Job for Gresh Graduate Web Application</h2>

                <figure class="figure text-left">
                    <a target="_blank" href="" style="font-size: 14px;"><i class="fas fa-link ml-2 mt-5"></i> Visit Website</a>
                    <img src="assets/Company Profile.png" class="figure-img img-fluid mt-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <figcaption class="figure-caption mt-3 text-center font-italic text-white">
                        Fresh Graduate Web Application
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
    <Footer />
</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navbar from '../components/NavbarSection.vue';
export default {
    name: 'find',
    components: { 
        Navbar,
        Footer
    },
}
</script>

<style>
    * {
        font-family: 'Rubik', sans-serif;
    }
    .text-desc {
        color: white !important;
    }
</style>