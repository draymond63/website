<template>
	<div class="tile">
		<h3><a :href="link">{{ title }}</a></h3>
		<p>{{ blurb }}</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Tile',
	props: {
		'title': String,
		'blurb': String,
		'link': String,
		'type': String,
		'tags': Array as () => Array<String>,
	}
})
</script>

<style lang="postcss" scoped>
.tile {
	width: 100%;
	height: 10rem;
	padding: 1rem;
	background: grey;
	box-shadow: 0px 4px 8px 0px #c9aba040;
}

a, p {
	color: var(--text-color);
}
p {
	font-size: 1rem;
}
</style>