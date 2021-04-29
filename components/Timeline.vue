<template>
	<div id="timeline">
		<h2>A Timeline</h2>
		<h3>Ha projects are fun</h3>

		<div class="project-grid">
			<div class="proj"></div>
			<div class="proj"></div>
			<div class="proj"></div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Projects',
})
</script>

<style lang="postcss" scoped>
#projects {
	margin: 0 5rem;
	padding: 3rem;
}

.project-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem 2rem;
}

.proj {
	width: 100%;
	height: 10rem;
	background: grey;
}


@media screen and (max-width: 850px) {
	#projects {
		margin: 0 1rem;
		padding: 1rem;
	}
}
</style>