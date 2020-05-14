<template>
  <div class="an-main" v-bind:class="{'main-mobile':this.is_mobile}">
    <!-- First Column -->
    <div>
      <span id="header">
        <h1 style="margin-right: 5%">Andro</h1>
        <h2>A binarized neural network breadboard processor</h2>
      </span>
      <h3>The Why</h3>
      <p>
        The goal here is to breakdown Artifical Intelligence to the bare necessities - 
        a sequence of neurons arranged into layers, all with weights and biases
        tied to them. To simplify the project, all the weights must be either 1 or -1.
      </p>
      <h3>The What</h3>
      <p>
        A circuit has been devised to implement the matrix multiplication of dense
        layer neural networks. In the end, the model will be stored on a chip that 
        can be used to multiply the incoming data according, resulting in the final 
        prediction.
      </p>
      <h3>The Timeline</h3>
      <p>
        Below is how I've taken a Keras model and deconstructed it to simulate the 
        hardware I am currently implementing. 
      </p>
    </div>
    <!-- Second Column -->
    <img 
      src="../assets/Andro.svg" 
      v-bind:class="{'img-mobile':this.is_mobile}"
    >
    <timeline 
      class="tl-mobile"
      v-on:ga-event="(x, y, z) => $emit(x, y, z)"
      :items="require('../assets/andro.json')"
      :class="{'tl-desktop':!this.is_mobile}"
      :is_mobile="this.is_mobile"
    />
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
  name: 'AndroPage',
  components: {
    Timeline
  },
  props: {
    is_mobile: Boolean
  }
}
</script>

<style scoped>
.an-main {
  padding: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1vw;
}
.main-mobile {
  grid-template-columns: 100% !important;
  grid-template-rows: repeat(auto-fit, 1fr);
}
img {
  background: #000000;
  border: 1px solid rgba(181, 181, 181, 0.7);
  padding: 1%;
  max-width: 98%;
}
.img-mobile {
  grid-row: 5;
}

.tl-mobile {
  width: 90vw;
}
.tl-desktop {
  grid-column: span 2;
  width: 100%;
}
</style>