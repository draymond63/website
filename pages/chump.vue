<template>
	<div>
		<p>Hello!</p>
		<chump-computer ref="CHUMP"/>
		<chump-programmer
			v-on:update-code="compile"
			v-on:speed-change="changeSpeed"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChumpComputer from '~/components/ChumpComputer.vue'
import ChumpProgrammer from '~/components/ChumpProgrammer.vue'

export default Vue.extend({
	name: 'chumpPage',
	components: {
		ChumpComputer,
		ChumpProgrammer
	},
	methods: {
    compile(prog: String) {
			console.log(this.$refs.CHUMP);
			console.log(prog);
			
      // this.$refs.CHUMP.compile(prog);
    },
    changeSpeed(speed: Number) {
      // this.$refs.CHUMP.changeSpeed(speed);
    }
  }
})
</script>

<style lang="postcss" scoped>

</style>