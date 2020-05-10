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
      :autoplay=true
      :autoplayTimeout=7000 
      :autoplayHoverPause=true
      :minSwipeDistance=6
      :paginationPadding=4
      paginationActiveColor="#404040"
      style="max-width: 100vw"
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
      ],
    }
  },
  // Fixes carousel issue
  mounted() {
		setTimeout(() => {
			this.$refs['carousel'].onResize();
			this.$refs['carousel'].goToPage(0);
		}, 500);
	}
}
</script>

<style scoped>
object {
  width: 100%;
  height: 80vh;
}
</style>