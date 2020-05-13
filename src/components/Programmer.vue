<template>
  <div class="programmer">
    <span class="speed-header">
      <h4>Speed Control</h4>
      <input 
        ref="SPEED"
        type="range" 
        min="0" max="500" 
        value="50" 
        class="slider"
        @click="() => $emit('speed-change', getSpeed())">
      <h4>Programmer</h4>
    </span>
    <div class="placement">
      <div>
        <div style="margin: 10%;">
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
        <div style="height: 8vh">
          <i v-if="this.err == 1">Error: opcode at line  {{ this.err_line }} is uncompilable</i>
          <i v-else-if="this.err == 2">Error: operand at line {{ this.err_line }} is not binary</i>
          <i v-else-if="this.err == 3">Error: missing operand at line {{ this.err_line }}</i>
          <i v-else-if="this.err == 4">Error: operand exceeds 4-bit max at line {{ this.err_line }}</i>
        </div>
      </div>

      <textarea
      @input="$emit('update-code', compile())"
      class="prog-input" 
      spellcheck="false"
      ref="input"
      >read 0010;
      add   0001;
      str   0010;
      jmp   0000;
      </textarea>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Programmer',

  data() {
    return {
      program: [],
      err: 0,
      err_line: 0
    }
  },
  // Change the default text of the textarea
  mounted() {
    this.$refs.input.innerHTML = this.$refs.input.innerHTML.replace(/; /g, '\n')
    this.$emit('update-code', this.compile())
  },

  methods: {
    getSpeed() {
      return this.$refs.SPEED.value
    },

    compile() {
      let code = document.getElementsByClassName("prog-input").item(0).value
      code = this.parseCode(code) // Parse code into line by line instructions

      // Convert each string into array of functions
      for (let l in code) {
        if (code[l] != [])
          this.err = this.compileLine(l, code[l])

        if (this.err)
          return false // Send message to freeze program
      }
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
    }

  }
}
</script>

<style scoped>
  .programmer {
    background: black;
    border: 1px solid #B5B5B5;

    justify-content: center;
  }
  .placement {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .prog-input {
    background: #404040;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;

    margin: 10%;
    resize: none;
  }

  /* SLIDER */
  .speed-header {
    text-align: center;
  }
  h4 {
    margin: 0;
    margin-top: 0.5em;
  }
  .slider {
    -webkit-appearance: none;
    width: 80%;
    margin-left: 10%;
    margin-top: 1%;
    height: 1em;
    background: #1A1A1A;
    outline: 1px solid #B5B5B5;

    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  .slider:hover {
    opacity: 1;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1em;
    height: 1em;
    background: #F19E44;
    border-radius: 20%;
    cursor: pointer;
  }

  /* Errors */
  i {
    color: rgb(160, 0, 0);
    font-size: 0.9em;
  }
</style>
