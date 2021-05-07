<template>
	<component class="tile" :is="link? 'nuxt-link' : 'div'" :to="link">
		<div class="header">
			<h3>{{ title }}</h3>
			<h5 class="type">{{ type }}</h5>
		</div>
		<div class="tags">
			<h6 v-for="tag in tags" class="tag" :key="tag">{{ tag }}</h6>
		</div>
		<p>{{ blurb }}</p>
	</component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Tile',
	props: {
		title: {
			type: String,
			default: ''
		},
		blurb: {
			type: String,
			default: ''
		},
		link: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: ''
		},
		tags: {
			type: Array as () => String[],
			default: () => []
		},
	}
})
</script>

<style lang="postcss" scoped>
.tile {
	width: 100%;
	min-height: 100%; /* Make adjacent tiles the same height */
	padding: 1rem;
	background: #fffaf7;
	box-shadow: 0px 4px 8px 0px #c9aba075;
	transition: all .3s ease;
}
.tile:hover {
	box-shadow: 0px 4px 8px 0px #e4a996de;
}

.header {
	display: flex;
	justify-content: space-between;
}
h3 {
	font-size: 1.4em;
}
h5.type {
	color: var(--main-color-1);
	opacity: 0.75;
}

.tags {
	display: flex;
	flex-direction: row;
}
.tag {
	width: max-content;
	padding: .2rem .8rem;
	margin-bottom: .4rem;
	color: var(--text-color);
	border: 1px solid var(--main-color-1);
	border-radius: 1rem;
}
.tag:not(:last-child) {
	margin-right: 1rem;
}

a, p {
	color: var(--text-color);
	text-decoration: none;
}

@media screen and (max-width: 850px) {
	.tile {
		min-height: none;
	}
}
</style>