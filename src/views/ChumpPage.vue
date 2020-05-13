<template>
  <div id="main" v-bind:class="{'main-mobile':this.is_mobile}">
    <!-- First Column -->
    <div>
      <span id="header">
        <h1 style="margin-right: 5%">CHUMP</h1>
        <h2>Computers can often be a black box.</h2>
      </span>
      <h3>The Why</h3>
      <p>
        There are so many systems working to make the picture you see on your screen, 
        it's seems impossible to figure out all that's going on. 
      </p>

      <h3>The What</h3>
      <p>
        This project attempts to strip down a computer to what it was originally: a device
        capable of executing a program in order to fulfill a given purpose. For the most
        basic tasks, a computer needs 5 things:
        <ul>
          <i>
            <li>a <a>program</a> to run</li>
            <li>a <a>counter</a> to keep track of the program line</li>
            <li>a method of <a>decoding</a> the current the operation</li>
            <li>a chip to carry out the <a>logic</a> operation</li>
            <li> <a>memory</a> to store and read data</li>
          </i>
        </ul>
      </p>

      <h3>Let's use this Sim!</h3>
      <p>
        I've made a little simulation of my project for you to play with right here 
        on this page!<br>
        <br>
        If you've programmed in <a>Assembly</a>, this is like my own personal version.<br>
        If not, this will be a new thing to learn :).<br>
        <br>
        With these simple concepts the computer can perform these operations:
        <ul>
          <i>
            <li>Load</li>
            <li>Addition & subtraction</li>
            <li>Bitwise ANDing</li>
            <li>Storing and reading to memory</li>
            <li>Conditional & non-conditional jumping</li>
          </i>
        </ul>
        Each operation is made up of an operation and a constant. The constant will be 
        used in conjuction with the result from the previous operation, shown by the 
        LEDs from the output of the ALU (Arithmetic and logic unit). For memory 
        instructions, the constant is treated as an address, and for the goto or the 
        if-zero conditional, the constant is treated as the line number to jump to.
        <br><br>
        The program currently running reads address 2 from memory and adds 1 to the value
        (shown in the <a>accumulator</a>). It then stores that value back and restarts 
        the program by jumping to the first line (0).<br>
        As you can see the accumulator is incrementing by one, showing the output of the 
        program!
      </p>
      <p>
        If you'd like a technical, in-depth report of this project click 
        <a href="DER.pdf#page=61" @click="$emit('ga-event', 'CHUMP', 'Viewed')">here!</a>
      </p>
      <!-- <img src="../assets/chumpBlock.svg" v-bind:class="{'img-desktop':!this.is_mobile}"> -->
      <br>
    </div>

    <!-- Second Column -->
    <div>
      <CHUMP ref="CHUMP"/>
      <Programmer 
        v-on:update-code="compile"
        v-on:speed-change="changeSpeed"
      />
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
    },
    changeSpeed(speed) {
      this.$refs.CHUMP.changeSpeed(speed);
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
ul {
  margin-top: 0.3em;
}
</style>