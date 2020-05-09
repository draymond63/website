<template>
  <span id="main">
    <h1>Welcome to my portfolio<span id="dot">.</span></h1>
    <h2>
      I have spent the past few years learning about circuitry and 
      hardware from the ground up.
    </h2>
    <carousel 
      id="carousel"
      :perPage=1 
      :autoplay=true 
      :autoplayTimeout=5000 
      :autoplayHoverPause=true
      :minSwipeDistance=6
      :paginationPadding=4
      paginationActiveColor="#404040"
    >
      <slide v-for="sel in selection" :key="sel">
        <project-slide v-bind:select="sel"/>
      </slide>
    </carousel>
    <object data="DER.pdf" type="application/pdf"/>
  </span>
</template>

<script scoped>
import { Carousel, Slide } from 'vue-carousel';
import ProjectSlide from '../components/ProjectSlide.vue'

export default {
  name: 'ProjectsPage',
  components: {
    Carousel,
    Slide,
    ProjectSlide
  },
  data() {
    return {
      selection: [
        "chump",
        "vibe",
        "chump-pcb",
        "flex",
        "fan",
        "pbar",
        "bcd",
      ]
    }
  },
  mounted() {
    document.getElementById("carousel").click()

    gtag('config', 'UA-0000000-1');
  }
}
</script>

<style scoped>
object {
  width: 100%;
  height: 80vh;
}
img {

}
</style>