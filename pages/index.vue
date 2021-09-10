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

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	// Support for old hash web history links that are in old resumes
	mounted() {
		const hash = this.$route.hash;
		if (hash.length >= 2 && hash.substr(0, 2) == '#/') {
			const realPath = hash.substr(2)
			// Keep track of how often this occurs
			this.$gtag.event('Legacy Support', {
        'event_category': 'Old Route',
        'event_label': hash
      })
			// Redirect url
			this.$router.replace((`/${realPath}`))
		}
	}
})
</script>

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
