<template>
	<div class="container" ref="container">
		<div class="bubble" :style="{'left': x + 'px', 'top': y + 'px'}">
			<img :src="image" :alt="title">
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Bubble',
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
		image: {
			type: String,
			default: ''
		},
		category: {
			type: String,
			default: ''
		},
		tags: {
			type: Array as () => String[],
			default: () => []
		},
	},

	data() {
		return {
			x: 0,
			y: 0,
			v_x: 0,
			v_y: 0,
		}
	},
	methods: {
		updateVelocity() {
			this.v_x += 0.1 * (Math.random() - 0.5);
			this.v_y += 0.1 * (Math.random() - 0.5);
			setTimeout(this.updateVelocity, 1000);
		},
		updatePosition() {
			this.x += this.v_x;
			this.y += this.v_y;
			const container = this.$refs.container as HTMLElement;

			if (this.x < 0 || this.x > container.clientWidth) {
				this.v_x *= -1;
				this.x += 2 * this.v_x;
			}
			if (this.y < 0 || this.y > container.clientHeight) {
				this.v_y *= -1;
				this.y += 2 * this.v_y;
			}
			setTimeout(this.updatePosition, 50);
		}
	},
	mounted() {
		this.v_x = Math.random() - 0.5;
		this.v_y = Math.random() - 0.5;

		this.updatePosition();
		this.updateVelocity();
	}
})
</script>

<style lang="postcss" scoped>
.container {
	--bubble-size: 5rem;
	position: relative;
	width: calc(var(--bubble-size) * 2);
	height: calc(var(--bubble-size) * 2);
}

.bubble {
	position: absolute;
	width: var(--bubble-size);
	height: var(--bubble-size);
	overflow: hidden;

	background: white;
	border-radius: 50rem;
	border: 5px solid var(--main-color);
	transition: all .5s ease;
}

/* .bubble:hover {
	--bubble-size: 100%;
} */
</style>