<template>
  <div id="main" v-bind:class="{'main-mobile':this.is_mobile}">
    <!-- First Column -->
    <div>
      <span id="header">
        <h1 style="margin-right: 5%">Andro</h1>
        <h2>A binarized neural network breadboard processor</h2>
      </span>
      <h3>The Goal</h3>
      <p>
        The final product will be a breadboard prototype of a circuit that could store the 
        weights of a fully <a>binarized dense layer sequential neural network</a> and apply 
        the matrix multiplication correctly to produce a set of logits that could determine 
        the final result. An addition circuit is attached to cycle through the logits 
        to find the index of the EEPROM with the highest logits.
      </p>
      <h3>The Software</h3>
      <p>
        An example model was made with Keras and Larq to use the mnist dataset with 1-bit 
        weights. There are multiple iterations of this NN, slowly deconstructing it from 
        Keras to <a>Numpy</a> to using bitwise operators. The final iteration is a custom 
        <a>hardware simulation</a> to emulate the design of the real circuit.
      </p>
      <h3>The Hardware</h3>
      <p>
        I have finished the software side of this project (including the simulation) and 
        have just recently ordered parts. In the end the circuit will be able to take most 
        shapes of neural network, including multiple hidden layers!
      </p>
      <br>
      <p>Github Repo: 
        <a @click="$emit('ga-event', 'Github', 'Sent', 'Andro')" href="https://github.com/draymond63/Andro" target="_blank">github.com/draymond63/Andro</a>
      </p>
    </div>
    <!-- Second Column -->
    <img src="../assets/Andro.svg" alt="Block Diagram didn't load">
  </div>
</template>

<script>

export default {
  name: 'AndroPage',
  props: {
    is_mobile: Boolean
  }
}
</script>

<style scoped>
#main {
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
  padding: 5px;
  width: 100%;
}
</style>