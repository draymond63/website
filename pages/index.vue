<template>
	<div class="container">
		<div class="position"><LineCurve/></div>
		<div class="content position">
			<!-- INTRO -->
			<hero/>
		</div>
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
.content {
	display: flex;
	flex-direction: column;	
}

.position {
	position: absolute;
	top: 0;
	left: 0;
}

.container {
	position: relative;
}
</style>
