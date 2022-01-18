/* eslint-disable vue/valid-template-root */
<template>

<div class="self">
    <Navbar />
        <section>
        <div class="container">
            <div class="text text-white">
                <h2>Self Reporting Covid-19, Mobile Application </h2>

                <figure class="figure text-left">
                    <a target="_blank" href="https://www.figma.com/file/HgeLqVyjMTT6dCs8BqmItm/Ui-Self-reporting?node-id=0%3A1" style="font-size: 14px;"><i class="fas fa-link ml-2 mt-5"></i> Visit Design</a>
                    <img src="assets/selfreport.png" class="figure-img img-fluid mt-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <figcaption class="figure-caption mt-3 text-center font-italic text-white">
                        Self Reporting Covid-19 Mobile Application
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
    name: 'self',
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