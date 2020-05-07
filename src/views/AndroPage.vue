<template>
  <div id="main">
    <h1>Andro</h1>
    <h2>A fully independent breadboard processor for Binarized Neural Networks</h2>
    <span style="grid-column: span 2">
      <h3>The Goal</h3>
      <p>
        The final product will be a breadboard prototype of a circuit that could store the 
        weights of a fully binarized dense layer sequential neural network and apply 
        the matrix multiplication correctly to produce a set of logits that could determine 
        the final result. An addition circuit is attached to cycle through the logits 
        to find the index of the EEPROM with the highest logits.
      </p>
      <h3>The Software</h3>
      <p>
        An example model was made with Keras and Larq to use the mnist dataset with 1-bit 
        weights. There are multiple iterations of this NN, slowly deconstructing it from 
        Keras to Numpy to using bitwise operators. The final iteration is a custom hardware 
        simulation to emulate the design of the real circuit.
      </p>
      <h3>The Hardware</h3>
      <p>
        I have finished the software side of this project (including the simulation) and 
        have just recently ordered parts. In the end the circuit will be able to take most 
        shapes of neural network, including multiple hidden layers!
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AndroPage',
}
</script>

<style scoped>
#main {
  display: grid;
  grid-template-columns: 20% 70%;
}
</style>