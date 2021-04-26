<template>
	<div class="line-wrapper">
		<canvas ref="canvas"></canvas>
	</div>
</template>

<script>
export default {
	name: "Line",
	methods: {
		heroLine(ctx) {
			ctx.moveTo(200, 0);
			ctx.lineTo(200, 700);
			ctx.stroke();
		},
		heroAboutLine(ctx) {
			
		}
	},
	mounted() {
		const c = this.$refs.canvas;
		const ctx = c.getContext("2d");
		ctx.strokeStyle = 'hsl(16, 95%, 65%)';
		ctx.lineWidth = 8;
		this.heroLine(ctx);
	}
}
</script>

<style scoped>
/* .line-wrapper {
	background: grey;
} */
</style>