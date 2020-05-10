<template>
  <span id="main">
    <h1>Welcome to my portfolio<span id="dot">.</span></h1>
    <h2>
      I have spent the past few years learning about circuitry and 
      hardware from the ground up.
    </h2>

    <carousel 
      ref="carousel"
      :perPageCustom="[[0, 1], [960, 2]]"
      :autoplay=!this.is_mobile
      :autoplayTimeout=7000 
      :autoplayHoverPause=true
      :minSwipeDistance=6
      :paginationPadding=4
      paginationActiveColor="#404040"
      style="max-width: 100vw"
    >
      <slide v-for="sel in selection" :key="sel">
        <project-slide v-on:img-loaded="loadPDF" v-bind:select="sel"/>
      </slide>
    </carousel>

    <object ref="pdf" data="" type="application/pdf"/>
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
  props: {
    is_mobile: Boolean
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
      ],
      first_loaded: false,
      second_loaded: false
    }
  },
  // Fixes carousel issue
  mounted() {
		setTimeout(() => {
			this.$refs['carousel'].onResize();
			this.$refs['carousel'].goToPage(0);
		}, 500);
  },
  // Load the pdf only once the CHUMP image has loaded
  methods: {
    loadPDF(name) {
      if (name === this.selection[0]) {this.first_loaded = true}
      if (name === this.selection[1]) {this.second_loaded = true}
      if (this.first_loaded && this.second_loaded) {this.$refs['pdf'].data="DER.pdf"}
    }
  }
}
</script>

<style scoped>
object {
  width: 100%;
  height: 80vh;
}
</style>