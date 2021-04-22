<template>
	<div class="container">
		<!-- INTRO -->
		<hero/>
		<!-- SOMETHING -->
		<div class="something"></div>
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
	components: {
		Hero
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

.something {
	width: 80%;
	border: 1px solid var(--main-color-1);
}
</style>
