<template>
	<div>
		<nav-bar/>
		<div class="parent">
			<LineCurve class="line"/>
			<!-- CONTENT -->
			<div class="content" ref="content">
				<hero/>
				<div class="spacer"/>
				<about/>
				<div style="margin: 2rem 0"/>
				<timeline/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Timeline from '@/components/Timeline.vue';
import LineCurve from '@/components/LineCurve.vue';

import Vue from 'vue'
export default Vue.extend({
	components: {
		Hero,
		About,
		Timeline,
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
	z-index: -1;
}

.content {
	display: flex;
	flex-direction: column;	
}

.spacer {
	margin: 5rem 0;
}
</style>
