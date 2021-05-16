<template>
	<div class="footer">
		<h3>Daniel Raymond</h3>
		<h5>Message me!</h5>
		<div class="socials">
			<a href="https://www.linkedin.com/in/draymond63/"><img src="@/assets/socials/linkedin.svg" alt="LinkedIn"></a>
			<a href="mailto:dan@raymond.ch"><img src="@/assets/socials/email.svg" alt="Email"></a>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Footer',
})
</script>

<style lang="postcss" scoped>
.footer {
	width: 100%;
	padding: 1rem;
	background: var(--main-color-1);

	display: flex;
	flex-direction: column;
	align-items: center;
}

.socials {
	padding: .5rem;
	display: flex;
	justify-content: space-between;
}
h3, h5 {
	color: white;
}
/* Social link images */
img {
	height: 2.5rem;
}
.socials>:not(:last-child) {
	margin-right: 1rem;
}
</style>