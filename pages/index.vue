<template>
	<div class="container">
		<!-- INTRO -->
		<hero/>
		<line-curve/>
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import LineCurve from '@/components/LineCurve.vue';

export default {
	components: {
		Hero,
		LineCurve
	},
	head() {
		return {
			title: 'Daniel <3',
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;	
}
</style>
