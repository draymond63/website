<template>
  <div class="programmer">
    <h4>Speed Control</h4>
    <input 
      type="range" 
      min="0" max="500" 
      value="174"
      class="slider"
      @click="updateSpeed">
    <h4>
      Programmer
      <b class="info-icon material-icons" @click="show_info = true">info</b>
      <b class="error-icon material-icons" v-if="err" @click="show_err = true">error_outline</b>
    </h4>
    <textarea
    @input="$emit('update-code', compile())"
    class="prog-input" 
    spellcheck="false"
    ref="input"
    >read 0010;
add 0001;
str 0010;
jmp 0000;
</textarea>

    <transition name="fade">
      <div class="modal-wrapper" v-if="show_info">
        <div class="modal">
          <b>Write commands and adjust the clock speed here!</b>
          <div class="commands">
            <b>Load</b>
            <p>Load value into reg</p>
            <b>Add</b>
            <p>Add constant to reg</p>
            <b>Subtract</b>
            <p>Subtract constant from reg</p>
            <b>And</b>
            <p>Bitwise AND with constant</p>
            <b>StoreTo</b>
            <p>Store reg in address given</p>
            <b>Read</b>
            <p>Read RAM from address given</p>
            <b>GoTo</b>
            <p>Jump PC to constant</p>
            <b>IfZero</b>
            <p>Jump PC to constant if reg is 0</p><br>
          </div>
          <button class="okay-button" @click="dismissInfoModal">Okay</button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="modal-wrapper" v-if="show_err">
        <div class="modal">
          <i v-if="err == 1">Error: opcode at line  {{ err_line }} is uncompilable</i>
          <i v-else-if="err == 2">Error: operand at line {{ err_line }} is not binary</i>
          <i v-else-if="err == 3">Error: missing operand at line {{ err_line }}</i>
          <i v-else-if="err == 4">Error: operand exceeds 4-bit max at line {{ err_line }}</i>
          <button class="okay-button" @click="show_err = false">Okay</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ChumpProgrammer',
  data() {
    return {
      program: [],
      err: 0,
      err_line: 0,
      show_err: false,
      show_info: true,
    }
  },
  // Change the default text of the textarea
  mounted() {
    this.$refs.input.innerHTML = this.$refs.input.innerHTML.replace(/; /g, '\n')
    this.$emit('update-code', this.compile())
  },

  methods: {
    updateSpeed(e) {
      const speed = Number(e.target.value)
      console.log(speed)
      // Altered so increase isn't linear
      this.$emit('speed-change', this.speedFunction(speed));
    },
    // * The initial value of the input should be set so that desireSpeed starts at 50 (predefined in Chump.vue)
    speedFunction(x, beginSpeed=10, endSpeed=1000) {
      // a = inputScaleSize/ln(f/i)
      const a = 500/Math.log(endSpeed/beginSpeed)/Math.log(Math.exp(1))
      // s = a * ln(i)
      const s = a * Math.log(beginSpeed)/Math.log(Math.exp(1))
      return Math.exp((x+s)/a)
    },

    compile() {
      let code = document.getElementsByClassName("prog-input").item(0).value
      code = this.parseCode(code) // Parse code into line by line instructions

      // Convert each string into array of functions
      const prevErr = this.err
      for (let l in code) {
        if (code[l] != [])
          this.err = this.compileLine(l, code[l])

        if (this.err) {
          if (prevErr != this.err)
            this.show_err = true
          return false // Send message to freeze program
        }
      }
      this.show_err = false
      return this.program
    },
    // Make each line a string of an op and a const
    parseCode(code) {
      code = code.split('\n')
      for (let l in code) {
        // Get rid of comments
        if (code[l].includes(';'))
          code[l] = code[l].substring(0, code[l].indexOf(';')); 
        // Split function by white space
        code[l] = code[l].split(' ')
        // Get rid of all white spaces
        code[l] = code[l].filter(function(index) {
          return index != "" && index != ' '
        })
      }
      // Get rid of empty arrays
      code = code.filter(function(line) {
        return line.length != 0
      })
      return code
    },
    // Convert string into array of a function and a constant
    compileLine(index, line) {
      const opCode = line[0].toLowerCase()
      // Save line in case it fails
      this.err_line = index
      // Convert the opCode string to a callable function
      switch (opCode) {
        case 'load':
        case '0000':
          this.program[index] = ['load']
          break
        case 'add':
        case '0010':
          this.program[index] = ['add']
          break
        case 'sub':
        case 'subtract':
        case '0100':
          this.program[index] = ['sub']
          break
        case 'str':
        case 'store':
        case 'storeto':
        case '0110':
          this.program[index] = ['str']
          break
        case 'rd':
        case 'read':
        case '1000':
          this.program[index] = ['read']
          break
        case 'and':
        case '1010':
          this.program[index] = ['and']
          break
        case 'goto':
        case 'jmp':
        case 'jump':
        case '1100':
          this.program[index] = ['goto']
          break
        case 'if0':
        case 'breq':
        case 'ifZero':
        case '1110':
          this.program[index] = ['ifZero']
          break
        default:
          return 1 // Error code for wrong opcode
      }
      // Error code for missing operand
      if (line[1] === undefined)
          return 3 
      // Error code for nonbinary value
      for (let i = 2; i < 10; i++)
          if (line[1].includes(i))
              return 2

      let raw = parseInt(line[1],2)
      // Error code for > 4-bit value
      if (raw > 15)
        return 4

      // Pass the constant if everything is fine
      this.program[index].push( raw )
      return 0
    },

    dismissInfoModal() {
      this.show_info = false
			this.$gtag.event('Interaction', {
        'event_category': 'Chump',
        'event_label': 'Programmer Used'
      })
    }

  }
}
</script>

<style scoped>
.programmer {
  position: relative;
  background: white;
  border: 1px solid #B5B5B5;
  font-size: 0.8rem;
  text-align: center;
}
.prog-input {
  background: lightgrey;
  color: var(--text-color);

  box-sizing: border-box;
  width: 80%;
  height: 10rem;

  margin: 0;
  padding: 10%;
  padding-top: 0;
  resize: none;
}

/* Modal */
.modal-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: grid;
  place-items: center;
  backdrop-filter: blur(5px);
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  background: #ececec;
  border: 1px solid grey;
  border-radius: 1rem;
}
.modal>.commands {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  text-align: left;
}
.modal>.okay-button {
  width: max-content;
  padding: .25rem .5rem;
  border-radius: .5rem;
  background: white;
}

/* SLIDER */
h4 {
  margin: 0;
  margin-top: 0.5em;
}
.slider {
  -webkit-appearance: none;
  width: 80%;
  margin-top: 0;
  height: 1em;
  background: lightgrey;
  outline: 1px solid #B5B5B5;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  background: var(--main-color);
  border-radius: 20%;
  cursor: pointer;
}

/* Icons */
.error-icon {
  color: #cf0000;
}
.info-icon {
  color: grey;
}
/* Errors */
i {
  color: #a00000;
  font-size: 0.9em;
}
</style>
