<template>
  <div id="main">
    <img v-bind:src="this.image" alt="Loading...">
    <span>
      <h3>{{this.title}}</h3>
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
      blurb: ""
  }
  },
  created() {
    let proj = content[this.select][0]
    this.title = proj.title
    this.image = require(`../assets/carousel/${proj.image}`)
    this.blurb = proj.blurb
  }
}
</script>

<style scoped>
#main {
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
</style>