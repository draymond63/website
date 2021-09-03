<template>
	<div>
		<nav-bar/>
		<div class="parent">
			<LineCurve class="line"/>
			<!-- CONTENT -->
			<div class="content">
				<hero/>
				<div class="spacer"/>
				<about/>
				<div style="margin: 2rem 0"/>
				<timeline/>
				<Footer/>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.parent {
	position: relative;
}

.line {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	overflow: hidden;
}

.content {
	display: flex;
	flex-direction: column;	
	max-width: var(--max-content-width);
	margin: auto;
}

.spacer {
	margin: 5rem 0;
}
</style>
