<template>
  <div id="highlights">
    <VueSlickCarousel :dots="true">
      <div v-for="tile, i in tiles" :key="i">{{ tile }}</div>
    </VueSlickCarousel>
  </div>
</template>
 
<script lang="ts">
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import json from "@/assets/timeline.json";
interface Tile {
	title?: string,
	blurb?: string,
	link?: string,
	image?: string,
	type?: string,
	tags?: string[]
};

import Vue from 'vue'
export default Vue.extend({
	name: 'Highlights',
	components: {
		VueSlickCarousel
	},
	data() {
		return {
			tiles: [] as Tile[]
		}
	},
	beforeMount() {
		// Copy JSON into a Timeline interface
		const entries = Object.entries(json);
		// Iterate through entries, adding them to a new map
		for (var i in entries) {
			const info = entries[i][1] as Tile[];

			for (var x in info) {
				const tile = info[x];
				if (tile.image && tile.link)
					this.tiles.push(tile);
			}
		}
	}
})
</script> 

<style lang="postcss" scoped>
#highlights {
	padding: 1rem;
	/* display: grid; */
	/* place-items: center; */
}
</style>