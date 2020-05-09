<template>
  <div class="programmer">

    <div>
    <p style="margin: 10%;">
      <b>Load</b><br>
      Load value into reg<br>
      <b>Add</b><br>
      Add constant to reg<br>
      <b>Subtract</b><br>
      Subtract constant from reg<br>
      <b>StoreTo</b><br>
      Store reg in address given<br>
      <b>Read</b><br>
      Read RAM from address given<br>
      <b>GoTo</b><br>
      Jump PC to constant<br>
      <b>IfZero</b><br>
      Jump PC to constant if reg is 0<br><br>
    </p>
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
    spellcheck="false">load 0010</textarea>
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

  methods: {
    compile() {
      let code = document.getElementsByClassName("prog-input").item(0).value
      code = this.parseCode(code) // Parse code into line by line instructions

      // Convert each string into array of functions
      for (let l in code) {
        if (code[l] != [])
          this.err = this.compileLine(l, code[l])

        if (this.err) {
          return false // Send message to freeze program
        }
      }
      return this.program
    },
    parseCode(code) {
      code = code.split('\n')
      for (let l in code) {
        if (code[l].includes(';')) // Get rid of comments
          code[l] = code[l].substring(0, code[l].indexOf(';')); 
        code[l] = code[l].split(' ') // Split function by white space
        code[l] = code[l].filter(function(index) { // Get rid of all white spaces
          return index != "" && index != ' '
        })
      }
      code = code.filter(function(index) { // Get rid of empty arrays
        return index.length != 0
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
    background: #000000;
    border: 1px solid #B5B5B5;

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
  /* Errors */
  i {
    color: rgb(160, 0, 0);
    font-size: 0.9em;
  }
</style>
