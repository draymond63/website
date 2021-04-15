<template>
	<div class="container">
		<h1 class="title">
			DANIEL RAYMOND
		</h1>
		<NuxtLink to="/test">New Page</NuxtLink>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Home'
};
</script>

<style>
.container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Montesserat';
	display: block;
	font-weight: 300;
	font-size: 80px;
	color: #35495e;
}
</style>
