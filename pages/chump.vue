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
type computerType = InstanceType<typeof ChumpComputer>;

export default Vue.extend({
	name: 'chumpPage',
	components: {
		ChumpComputer,
		ChumpProgrammer
	},
	methods: {
    compile(prog: String) {
			const chump = this.$refs.CHUMP as computerType;			
      chump.compile(prog);
    },
    changeSpeed(speed: Number) {
			const chump = this.$refs.CHUMP as computerType;			
      chump.changeSpeed(speed);
    }
  }
})
</script>

<style lang="postcss" scoped>

</style>