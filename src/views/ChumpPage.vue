<template>
  <div id="main" v-bind:class="{'main-mobile':this.is_mobile}">
    <!-- First Column -->
    <div>
      <span id="header">
        <h1 style="margin-right: 5%">CHUMP</h1>
        <h2>A programmable 4-bit computer, my largest project to date.</h2>
      </span>
      <h3>How It Works</h3>
      <p>
        The control ROM receives the opcode ⁠— the instruction for the entire computer ⁠— 
        from the program ROM. This ROM is programmed by the user with a <a>machine code</a> 
        language I devised from scratch. Using this information and its eight output pins, 
        the control ROM distributes the proper ALU instruction, which function the RAM 
        should be performing (read or write), and the inhibiting pin of the accumulator 
        chip (Accum). It knows this based on the previously agreed upon interpretation 
        and language inside the registers of the ROMs. For example, the current opcode 
        for an addition operation is 0010. This number becomes the address for the control 
        ROM. It looks inside that specific register and outputs whatever it sees. In 
        this case, it would set the ALU to addition and enable the Accum. Since we 
        aren’t using the RAM, it is set to read as a precaution.
      </p>
      <br>
      <p>I've made a little simulation of it for you to play with right here on this page!</p>
      <img src="../assets/chumpBlock.svg" alt="">
    </div>
    <!-- Second Column -->
    <div>
      <CHUMP ref="CHUMP"/>
      <Programmer v-on:update-code="compile"/>
    </div>
  </div>
</template>

<script>
import CHUMP from '@/components/Chump.vue'
import Programmer from '@/components/Programmer.vue'

export default {
  name: 'ChumpPage',
  components: {
    CHUMP,
    Programmer
  },
  methods: {
    compile(prog) {
      this.$refs.CHUMP.compile(prog);
    }
  },
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
  width: 85%;
  padding: 5%;
  background: #404040;
  border: 1px solid #B5B5B5;
}
</style>