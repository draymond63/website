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
        The control ROM receives the opcod ⁠— the instruction for the entire computer ⁠— 
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
      <h3>The RAM</h3>
      <p>
        The RAM that is used in this project is the SN74LS189N. It has 16 four-bit registers. 
        As a result, it has four address pins, four data input pins, and four output pins. 
        It works similarly to the EEPROMs as previously discussed the main difference being 
        that in this project we are writing to it in certain scenarios. To write to this 
        chip, the R/W pin is grounded.
      </p>
      <h3>The Address Chip and Accumulator</h3>
      <p>
        The address chip is a hex flip-flop. It has eight inputs and eight corresponding 
        outputs. When an input is given power, even for an instant, its respective output 
        is set to high. In this way, it acts as a single register that holds the address for 
        the RAM. Once its clock pin completes one full cycle all its outputs are set low.
        The Accum is the exact same chip, but it is an octal flip-flop with an optional inhibitor.
      </p>
      <h3>The Multiplexer</h3>
      <p>
        The multiplexer has two primary inputs comprised of four pins each: A and B. Based 
        on the input of a select pin, it decides to output either all the A inputs or all the 
        B inputs. This is used in the CHUMP to determine whether to use the constant provided 
        by the program ROM or the output of the RAM.
      </p>
      <!-- <img src="../assets/chumpBlock.svg" alt=""> -->
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
</style>