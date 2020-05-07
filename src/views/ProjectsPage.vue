<template>
  <span class="main">
      <h1>Welcome to my portfolio<span id="dot">.</span></h1>
      <h2>
          I have spent the past few years learning about circuitry and 
          hardware from the ground up.
      </h2>
      <a>
          <h3>Flexible PCB: Snake Programmed in assembly (p. 115)</h3>
          To begin, the game <i>snake</i> was made in C for a breadboard prototype.
          Then a surface-mount PCB is designed; the screen is an custom 8x8 LED
          matrix with an ATmega328p as the microcontroller. The PCB is made to be 
          flexible so it can be laminated into a page in the report along with 
          a flexible solar panel for power. Finally, the game is reprogrammed in 
          assembly for practice.
          <br><br>
          <h3>Bluetooth Photoframe (p. 103)</h3>
          An app is created that can send photos to a bluetooth HC05 module which
          is used as a receiver for a microcontroller. This is then processed and 
          sent to a TFT graphical LCD. 
          <br><br>
          <h3>Four bit Programmable Computer (p. 61/109)</h3>
          This project is outlined in much more detail in it's own dedicated
          page since it is my most challenging completed project to date.
          Basically, the goal was to create a computer from scratch with
          all essential pieces: an ALU, RAM, program counter, program & control
          ROM, etc. It took three months to build a breadboard prototype, then
          another three months to create a full PCB with an LED matrix output,
          an extended program counter, and a separate board to program the device.
          The final product was hand soldered and encased in a custom 3D print
          with an acryllic cover.
          <br><br>
      </a>
      <embed src="DER.pdf" type="application/pdf"/>
  </span>
</template>

<script scoped>
export default {
name: 'ProjectsPage',
components: {}
}
</script>

<style scoped>
h1 {
  font-size: 4em;
}

embed {
  width: 100%;
  height: 80vh;
}

.main {
  padding: 5%;
}
</style>