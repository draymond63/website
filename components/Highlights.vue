<template>
	<div id="highlights">
		<h2>Highlights</h2>
		<client-only>
			<div class="grid" :style="{'--columns': Object.keys(tiles).length}">
				<h3 v-for="title in Object.keys(tiles)" :key="title + '_title'">{{ title }}</h3>
				<div v-for="sections, category in tiles" :key=category class="column">
					<highlight-bubble v-for="tile, i in sections" :key=i v-bind="tile"/>
				</div>
			</div>
		</client-only>
	</div>
</template>

<script lang="ts">
import json from "@/assets/timeline.json";

import { Dictionary } from "vue-gtag";
interface Tile {
	title?: string,
	blurb?: string,
	link?: string,
	image?: string,
	type?: string,
	tags?: string[],
	category: string
};

import Vue from 'vue'
export default Vue.extend({
	name: 'Highlights',
	data() {
		return {
			tiles: {} as Dictionary<Tile[]>,
		}
	},
	beforeMount() {
		// Copy JSON into a Timeline interface
		const entries = Object.entries(json);
		// Iterate through entries, adding them to a new map
		for (var i in entries) {
			const info = entries[i][1];

			for (var x in info) {
				const tile = info[x] as Tile;
				if (tile.image && tile.link && tile.category) {
					if (tile.category in this.tiles)
						this.tiles[tile.category].push(tile);
					else
						this.tiles[tile.category] = [tile];
				}
			}
		}
	}
})
</script> 

<style lang="postcss" scoped>
#highlights {
	padding: 1rem;
}

.grid {
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	place-items: center;
}

.column {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>