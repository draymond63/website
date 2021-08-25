<template>
<!-- TEMPORARY FIX -->
<client-only>
	<div id="experience">
		<h2>A Timeline</h2>
		<h3>A brief overview of what I've done</h3>
		<!-- div the line attaches to -->
		<div id="timeline">
			<!-- Selector buttons -->
			<button
				v-for="type in typeOptions"
				:key="type"
				@click="() => popPush(type)"
				:class="{'active': types.includes(type)}"
				>{{ type }}
			</button>
			<!-- Tiles -->
			<div v-for="info in getSortedInfo()" :key="info[0]" class="timeline-content">
				<transition name="fadeHeight">
					<h3 v-if="hasTiles(info[0])" class="year">{{ info[0] }}</h3>
				</transition>
				<div class="grid">
					<transition name="fadeHeight" v-for="(tile, i) in info[1]" :key="i">
						<tile v-if="includeTile(tile.type)" v-bind="tile"/>
					</transition>
				</div>
			</div>
			<p>Click here to learn more about <a href="/DER.pdf">my projects</a>!</p>
		</div>
	</div>
</client-only>
</template>

<script lang="ts">
import tile from "@/components/TimeLineTile.vue";
import json from "@/assets/timeline.json";
interface Tile {
	title?: string,
	blurb?: string,
	link?: string,
	type?: string,
	tags?: string[]
};
interface Timeline {
	[key: string]: Tile[],
};

import Vue from 'vue'
export default Vue.extend({
	name: 'Projects',
	components: {
		tile
	},
	data() {
		return {
			info: {} as Timeline, // Replaced by beforeMount
			typeOptions: [] as string[],
			types: [] as string[]
		}
	},
	methods: {
		popPush(tag: string) {
			if (this.types.includes(tag))
				this.types = this.types.filter((val) => val !== tag);
			else
				this.types.push(tag);
		},
		// Check if a tile should be shown
		includeTile(type: string): boolean {
			if (this.types.length == 0)
				return true;
			return this.types.includes(type);
		},
		// Check if a year has tiles that are being shown
		hasTiles(year: string): boolean {
			let result = false
			if (this.types.length == 0) return true;
			// Check if there is a tile in the year
			if (this.info[year]) {
				this.info[year].forEach((tile) => {
					if (tile.type && this.includeTile(tile.type))
						result = true;
				});
			}
			return result;
		},
		// Sort the data
		getSortedInfo(): [string, Tile[]][] {
			return Object.entries(this.info).sort((a, b) => b[0].localeCompare(a[0])); 
		}
	},
	beforeMount() {
		// Copy JSON into a Timeline interface
		const entries = Object.entries(json);
		// Iterate through entries, adding them to a new map
		for (var i in entries) {
			const key = entries[i][0];
			const value = entries[i][1];
			this.info[key] = value as Tile[];
		}
		// Gather types from data
		Object.values(this.info).forEach((list: Tile[]) => 
			list.forEach((tile: Tile) => {
				if (tile.type && !this.typeOptions.includes(tile.type as string))
					this.typeOptions.push(tile.type as string);
			})
		);
	}
})
</script>

<style lang="postcss" scoped>
#experience {
	margin: 0 5rem;
	padding: 3rem;
}

.timeline-content {
	display: grid;
	place-items: center;
}

.year {
	text-align: center;
	width: max-content;
	
	padding: 0.5rem;
	margin-bottom: 0.2rem;

	background: white;
	border: 4px solid var(--main-color);
	border-radius: 0.3rem;
}

.grid {
	width: 100%;
	margin-bottom: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* place-items: start; Remove to have tiles fill grid space */
	gap: 1rem 2rem;
}

button {
	background: #fffaf7;
	border: 1px solid #f5dec1;
	border-radius: 1rem;
	margin: .5rem;
	margin-left: 0;
}
button.active {
	background: #f5dec1;
}

@media screen and (max-width: 850px) {
	#experience {
		margin: 0 1rem;
		padding: 1rem;
	}
	.grid {
		grid-template-columns: 1fr;
	}
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
	transition: all 0.5s;
	max-height: 100vh;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
	opacity: 0;
	max-height: 0px;
	overflow: hidden;

	padding-top: 0;
	padding-bottom: 0;
	margin-top: 0;
	margin-bottom: 0;
}
</style>