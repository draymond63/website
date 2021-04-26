<template>
	<div class="parent">
		<LineCurve class="line"/>
		<!-- CONTENT -->
		<div class="content" ref="content">
			<hero/>
		</div>
	</div>
</template>

<script lang="ts">
import Hero from '@/components/Hero.vue';
import LineCurve from '@/components/LineCurve.vue';

import Vue from 'vue'
export default Vue.extend({
	components: {
		Hero,
		LineCurve
	},
	head() {
		return {
			title: 'Daniel <3',
		}
	}
})
</script>

<style lang="postcss" scoped>
.parent {
	position: relative;
}

.line {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.content {
	display: flex;
	flex-direction: column;	
}
</style>
