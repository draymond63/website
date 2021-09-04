<template>
	<div>
		<nav-bar/>
		<div class="cp-main">
			<!-- Computer sim -->
			<div class="sim">
				<ChumpComputer ref="CHUMP"/>
				<ChumpProgrammer 
					v-on:update-code="compile"
					v-on:speed-change="changeSpeed"
				/>
			</div>
			<!-- Info -->
			<div>
				<span id="header">
					<h1>PCB Computer</h1>
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
				</p>
				<ul>
					<i>
						<li>a <b>program</b> to run</li>
						<li>a <b>counter</b> to keep track of the program line</li>
						<li>a method of <b>decoding</b> the current the operation</li>
						<li>a chip to carry out the <b>logic</b> operation</li>
						<li> <b>memory</b> to store and read data</li>
					</i>
				</ul>

				<h3>Let's use this Sim!</h3>
				<p>
					I've made a little simulation of my project for you to play with right here 
					on this page!<br>
					<br>
					If you've programmed in <b>Assembly</b>, this is like my own personal version.<br>
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
					(shown in the <b>accumulator</b>). It then stores that value back and restarts 
					the program by jumping to the first line (0).<br>
					As you can see the accumulator is incrementing by one, showing the output of the 
					program!
				</p>
				<h3>My Project</h3>
				<p>
					For this project I spend 2 months build a breadboard prototype and 3 months
					designing and manufacturing a custom <b>PCB</b> and 3D printed case.<br>
					If you'd like a technical, in-depth report of this project click 
					<a href="DER.pdf#page=33" @click="$emit('ga-event', 'CHUMP', 'Viewed')">here!</a>
				</p>
				<br>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	methods: {
    compile(prog: string) {
			const chump = this.$refs.CHUMP as any;
      chump.compile(prog);
    },
    changeSpeed(speed: number) {
			const chump = this.$refs.CHUMP as any;
      chump.changeSpeed(speed);
    }
  }
})
</script>

<style lang="postcss" scoped>
.cp-main {
  padding: 2rem;
	padding-top: 4rem;
}
.sim {
	float: right;
	width: 45%;
}
ul {
  margin-top: 0.3em;
}
h3 {
  margin-top: 1em;
}

@media screen and (max-width: 850px) {
	.cp-main {
		display: flex;
		flex-direction: column-reverse;
	}
	.sim {
		width: 100%;
	}
}
</style>