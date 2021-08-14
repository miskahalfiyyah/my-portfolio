<template>
  <div class="home">
    <Navbar />
      <Header />
        <Project />
        <Skills />
        <ContactMe />
        <Footer />
        
  </div>
</template>

<script>
import Navbar from '@/components/NavbarSection.vue'
import Header from '@/components/Header.vue'
import Project from '@/components/Project.vue'
import Skills from '@/components/Skills.vue'
import ContactMe from '@/components/ContactMe.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Project,
    Skills,
    ContactMe,
    Footer
  }
}
</script>
