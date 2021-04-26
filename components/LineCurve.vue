<template>
	<div>
		<canvas ref="canvas"></canvas>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: "LineCurve",
	methods: {
		heroLine(ctx: CanvasRenderingContext2D) {
			ctx.moveTo(200, 0);
			ctx.lineTo(200, 400); // ! Fit hero height
			ctx.stroke();
		},
		heroAboutLine(ctx: CanvasRenderingContext2D) {

		}
	},
	mounted() {
		const c = this.$refs.canvas as HTMLCanvasElement;
		// Resize to match content
		if (c.parentElement) {
			c.height = c.parentElement.offsetHeight;
			c.width = c.parentElement.offsetWidth;
		}
		// Drawing
		const ctx = c.getContext("2d");
		if (ctx) {
			ctx.strokeStyle = 'hsl(16, 95%, 65%)';
			ctx.lineWidth = 8;
			this.heroLine(ctx);
			this.heroAboutLine(ctx);
		}
	}
})
</script>