/* eslint-disable vue/valid-template-root */
<template>

<div class="tanya-pateron">
    <Navbar />
        <section>
        <div class="container">
            <div class="text text-white">
                <h2>Tanya Pateron, Web Online Course</h2>

                <figure class="figure text-left">
                    <a target="_blank" href="https://www.figma.com/file/n2CdsNB8QDPYMuuahK9YwV/Tanya-Pateron?node-id=2%3A4" style="font-size: 14px;"><i class="fas fa-link ml-2 mt-5"></i> Visit Design</a>
                    <img src="assets/pateron.png" class="figure-img img-fluid mt-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <figcaption class="figure-caption mt-3 text-center font-italic text-white">
                        Web Online Course
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
    name: 'pateron',
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