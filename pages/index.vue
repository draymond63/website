<template>
	<div class="parent">
		<LineCurve class="position"/>
		<!-- CONTENT -->
		<div class="position content">
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

<style scoped>
.parent {
	position: relative;
}

.position {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}

.content {
	display: flex;
	flex-direction: column;	
}
</style>
