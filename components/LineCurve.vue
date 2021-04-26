<template>
	<div class="line-wrapper">
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
			ctx.lineTo(200, 700);
			ctx.stroke();
		},
		heroAboutLine(ctx: CanvasRenderingContext2D) {

		}
	},
	mounted() {
		const c = this.$refs.canvas as HTMLCanvasElement;
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

<style scoped>
</style>