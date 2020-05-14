<template>
  <div class="ps-main" href="">
    <img ref="image" v-bind:src="this.image" alt="Loading...">
    <span>
      <a v-bind:href="this.url" target="_blank">{{this.title}}</a>
      <p v-if="this.blurb!=''">{{this.blurb}}</p>
    </span>
  </div>
</template>

<script scoped>
import content from "../assets/projects.json"

export default {
  name: 'ProjectsPage',
  props: {
    select: String
  },
  data() {
    return {
      image: "",
      title: "",
      blurb: "",
      url: undefined
  }
  },
  created() {
    let proj = content[this.select][0]
    this.title = proj.title
    this.image = require(`../assets/carousel/${proj.image}`)
    this.blurb = proj.blurb
    if (proj.url) {
      this.url = proj.url
    }
  },
  // Send and event when the image has loaded succesfully
  mounted() {
    this.$refs['image'].onload = () => {
      this.$emit('img-loaded', this.select)
    }
  }
}
</script>

<style scoped>
.ps-main {
  display: flex;
  flex-direction: column;
  text-align: center;

  /* width: 100%; */
  height: 37vh;
  padding: 2%;
  margin: 2%;

  background: black;
  border: 1px solid #B5B5B5;
}
img {
  border: 1px solid white;
  max-width: 100%;
  max-height: 30vh;
  margin-bottom: 1vh;
}
a {
  font-size: 1.2em;
  color: #FFD9AB;
  margin: 0;
}
</style>