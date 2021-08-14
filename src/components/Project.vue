<template>
    <!-- Women Banner Section Begin -->
    <section id="project" class="project mb-5 mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <carousel class="project-slider" :items="3" :dots="false" :nav="false" :autoplay="true">
                            <div class="pi-pic">
                                <img src="assets/Studie.png" alt="" />
                                <div class="overlay">
                                    <div class="content">
                                        <a href="">See Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="pi-pic">
                                <img src="assets/tech-solution.png" alt="" />
                                <div class="overlay">
                                    <div class="content">
                                        <router-link to="/tech"><a>See Details</a></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="pi-pic">
                                <img src="assets/monochrome.png" alt="" />
                                <div class="overlay">
                                    <div class="content">
                                        <router-link to="/mono"><a>See Details</a></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="pi-pic">
                                <img src="assets/MYNInterior.png" alt="" />
                                <div class="overlay">
                                    <div class="content">
                                        <a href="">See Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="pi-pic">
                                <img src="assets/Company Profile.png" alt="" />
                                <div class="overlay">
                                    <div class="content">
                                        <a href="">See Details</a>
                                    </div>
                                </div>
                            </div>
                        <!-- <div class="project-item">
                            <div class="pi-pic">
                                <img src="assets/tech-solution.png" alt="" />
                            </div>
                        </div>
                        <div class="project-item">
                            <div class="pi-pic">
                                <img src="assets/monochrome.png" alt="" />
                            </div>
                        </div>
                        <div class="project-item">
                            <div class="pi-pic">
                                <img src="assets/MYNInterior.png" alt="" />
                            </div>
                        </div>
                        <div class="project-item">
                            <div class="pi-pic">
                                <img src="assets/Company Profile.png" alt="" />
                            </div>
                        </div> -->
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
    name: 'Project',
    components: {
        carousel
    }
}
</script>

<style lang="css" scoped>
    .project {
        margin-top: 100px !important;
    }
    /* .project-item {
        margin-right: 25px;
    } */
    .pi-pic {
        margin-right: 25px !important;
        margin: 0 auto;
        position: relative;
    }
    img {
        /* opacity: 1; */
        display: block;
        width: 100%;
        height: auto;
    }
    .content {
        opacity: 0;
    }
    .content:hover {
        opacity: 1;
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
    }
    .content a {
        font-size: 14px;
        display: block;
        background-color: #BE97DC;
        color: white;
        padding: 5px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
    }
    .overplay {
        opacity: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: .5s ease;
    }
    .pi-pic:hover img {
        opacity: .4
    }
    .pi-pic:hover .overlay {
        opacity: 1
    }

</style>