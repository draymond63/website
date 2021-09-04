<template>
	<div class="tile-wrapper">
		<div class="tile">
			<component :is="link? 'nuxt-link' : 'span'" :to="link">
				<div class="header">
					<h3 :class="{'underline': link}">{{ title }}</h3>
					<h5 class="type">{{ type }}</h5>
				</div>
				<div class="tags">
					<h6 v-for="tag in tags" class="tag" :key="tag">{{ tag }}</h6>
				</div>
				<p>{{ blurb }}</p>
			</component>
		</div>
	</div>
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
.tile-wrapper {
	--shift-distance: .2rem;
}
.tile {
	width: 100%;
	padding: 1rem;
	background: #fffaf7;

	margin-top: var(--shift-distance);
	transition: all .3s ease;
	box-shadow: 0px 4px 8px 0px #c9aba075;
}
.tile-wrapper:hover > .tile {
	margin-top: 0rem;
	margin-bottom: var(--shift-distance);
	box-shadow: 0px 4px 8px 0px #e4a996de;
}

.header {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
h3 {
	font-size: 1.4em;
}
h5.type {
	color: var(--main-color);
	opacity: 0.75;
}

.tags {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.tag {
	width: max-content;
	padding: .2rem .8rem;
	margin-bottom: .4rem;
	color: var(--text-color);
	border: 1px solid var(--main-color);
	border-radius: 1rem;
}
.tag:not(:last-child) {
	margin-right: 1rem;
}

.underline {
	text-decoration: underline;
	text-decoration-color: var(--text-color);
}

a, p {
	color: var(--text-color);
	text-decoration: none;
}
</style>