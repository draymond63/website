<template>
  <div class="computer">
    <img id="chumpRender" src="../assets/chumpRender.svg">
    <!-- LEDs -->
    <div v-show="this.showLEDs" id="r" style="left: 5%;"  class="c-led r-0"></div>

    <div v-show="this.showLEDs" id="g" style="left: 10%;" class="c-led g-0"></div>
    <div v-show="this.showLEDs" id="g" style="left: 13%;" class="c-led g-0"></div>
    <div v-show="this.showLEDs" id="g" style="left: 16%;" class="c-led g-0"></div>
    <div v-show="this.showLEDs" id="g" style="left: 19%;" class="c-led g-0"></div>

    <div v-show="this.showLEDs" id="y" style="left: 23%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 26%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 29%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 32%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 35%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 38%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 41%;" class="c-led y-0"></div>
    <div v-show="this.showLEDs" id="y" style="left: 44%;" class="c-led y-0"></div>
    
    <div v-show="this.showLEDs" id="r" style="left: 50%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 53%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 56%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 59%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 62%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 65%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 68%;" class="c-led r-0"></div>
    <div v-show="this.showLEDs" id="r" style="left: 71%;" class="c-led r-0"></div>

    <div v-show="this.showLEDs" id="g" style="left: 82%;" class="c-led g-0"></div>
    <div v-show="this.showLEDs" id="g" style="left: 85%;" class="c-led g-0"></div>
    <div v-show="this.showLEDs" id="g" style="left: 88%;" class="c-led g-0"></div>
    <div v-show="this.showLEDs" id="g" style="left: 91%;" class="c-led g-0"></div>
  </div>
</template>

<script>
// ! Convert to ts
export default {
  name: 'ChumpComputer',
  data() {
    return {
      clk: 1,       // Toggles clock
      program: [],  // Array of functions and their constants
      pc: 0,        // Index of the Program Counter
      alu: 0,
      RAM: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      pl: 0xFF,
      acc: 0,

      run: true,    // Runs only if the code was compiled successfully
      nextCycleOp: null, // Stuff to do after the LEDs update
      showLEDs: false,
      interval: null
    }
  },
  // INIT
  mounted() {
    // Only show leds once svg has loaded in
    const svg = document.getElementById("chumpRender")
    svg.onload = () => { // Arrow function maintains correct 'this'
      this.showLEDs = true
      this.interval = setInterval(this.update.bind(this), 25000/50) // Update every n milliseconds (50 == default speed)
    }

    this.LEDs = Array.from(document.getElementsByClassName("c-led"))
    // Split LEDs into relevant sections
    this.clkLED = this.LEDs[0]
    this.aluLEDs = this.LEDs.slice(1, 5)
    this.plLEDs = this.LEDs.slice(5, 13)
    this.pcLEDs = this.LEDs.slice(13, 22)
    this.accLEDs = this.LEDs.slice(21, 25)
  },
  // Methods
  methods: {
    changeSpeed(speed) {
      clearInterval(this.interval)
      if (speed != 0) { // 0 freezes it
        this.interval = setInterval(this.update.bind(this), 25000/speed)
      } else {
        this.interval = null
      }
    },
    /***************************************************** VISUALIZATION */
    update() {
      if (this.run) {
        // Toggle clock
        this.clk ^= 1
        if (this.clk) {

          // Change CHUMP variables if applicable
          if (this.program[this.pc] != null && this.program[this.pc][0] != null && this.program[this.pc][1] != null)
            this.executeLine()
          else if (this.clk) // Set default state of program line to all on
            this.pl = 0xFF
          
          // Increment the PC
          this.pc %= 256
          this.pc++
          // Update LEDs to match
          this.updateLEDs()

          if (this.nextCycleOp) {
            this.nextCycleOp()
          }
        }
        // CLOCK
        this.toggle(this.clkLED, this.clk)
      }
    },
    updateLEDs() {
        // ALU
        for (let i in this.aluLEDs) {
            let state = this.alu & (0x8 >> i)
            this.toggle(this.aluLEDs[i], state)
        }
        // PROGRAM OUTPUT
        for (let i in this.plLEDs) {
            let state = this.pl & (0x80 >> i)
            this.toggle(this.plLEDs[i], state)
        }
        // PROGRAM COUNTER
        for (let i in this.pcLEDs) {
            let state = this.pc & (0x80 >> i)
            this.toggle(this.pcLEDs[i], state)
        }
        // ACCUMULATOR
        for (let i in this.accLEDs) {
            let state = this.acc & (0x8 >> i)
            this.toggle(this.accLEDs[i], state)
        }
    },
    toggle(LED, state) {
        if (state) state = 1; // Normalize state
        const color = LED.id
        LED.classList = "c-led " + color + "-" + state
    },
    /**************************************************** PARSING */
    compile(prog) {
      this.clk = 0
      this.pc = 0

      if (prog) {
        this.run = true
        this.program = this.parseFunc(prog)
      } else {
        this.run = false
        this.updateLEDs()
      }
    },
    // Convert strings to functions
    parseFunc(prog) {
      for (let l in prog) {
        switch(prog[l][0]) {
          case 'load':
            prog[l][0] = this.load
            break
          case 'add':
            prog[l][0] = this.add
            break
          case 'sub':
            prog[l][0] = this.sub
            break
          case 'str':
            prog[l][0] = this.str
            break
          case 'read':
            prog[l][0] = this.read
            break
          case 'and':
            prog[l][0] = this.and
            break
          case 'goto':
            prog[l][0] = this.goto
            break
          case 'ifZero':
            prog[l][0] = this.ifZ
            break
          default:
            console.error("Inappropriate program line passed");
        }
      }
      return prog
    },
    /***************************************************** EXECUTING */
    // Update CHUMP variables
    executeLine() {
      if (this.clk) { // On positive edge of the clock
        // Set the Program Line
        const constant = this.program[this.pc][1]
        switch(this.program[this.pc][0]) {
          case this.load:
            this.pl = constant
            break
          case this.add:
            this.pl = (0b0010 << 4) | constant
            break
          case this.sub:
            this.pl = (0b0100 << 4) | constant
            break
          case this.str:
            this.pl = (0b0110 << 4) | constant
            break
          case this.read:
            this.pl = (0b1000 << 4) | constant
            break
          case this.and:
            this.pl = (0b1010 << 4) | constant
            break
          case this.goto:
            this.pl = (0b1100 << 4) | constant
            break
          case this.ifZ:
            this.pl = (0b1110 << 4) | constant
            break
          default:
            this.pl = 0xFF
            break
        }
        // Call the function from within the program array and pass it the constant associated
        this.program[this.pc][0].call(this, constant)
      }
    },
    load(c) {
      this.alu = c
      this.alu %= 16
    },
    add(c) {
      this.alu += c
      this.alu %= 16
      this.nextCycleOp = () => {
        this.acc = this.alu;
        this.nextCycleOp = null;
      }
    },
    sub(c) {
      this.alu -= c
      this.alu %= 16
      this.nextCycleOp = () => {
        this.acc = this.alu;
        this.nextCycleOp = null;
      }
    },
    str(c) {
      this.RAM[c] = this.acc
    },
    read(c) {
      this.alu = this.RAM[c]
    },
    and(c) {
      this.alu = this.acc & c
    },
    goto(c) {
      this.nextCycleOp = () => {
        this.pc = c - 1
        this.pc %= 256
        this.nextCycleOp = null;
      }
    },
    ifZ(c) {
      if (this.acc == 0) {
        this.nextCycleOp = () => {
          this.pc = c - 1
          this.pc %= 256
          this.nextCycleOp = null;
        }
      }
    },

  }
}
</script>

<style lang="postcss" scoped>
.computer {
  position: relative;
  height: min-content;
}
.c-led {
  position: absolute;
  bottom: 8%;
  width: 1.3vmin;
  height: 1.3vmin;
  border-radius: 50%;
}
.g-0 {background-color: green}
.g-1 {background-color: greenyellow}
.r-0 {background-color: maroon}
.r-1 {background-color: red}
.y-0 {background-color: darkgoldenrod}
.y-1 {background-color: yellow}
</style>
