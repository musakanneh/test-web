<template>
	<div class="height_and_weight__global">
		<main class="container animate_1">
			<div class="video-container">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/CbrTZdxe9JQ?controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</main>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
	body {
		main {
			margin-top: -8rem !important;
		}
	}
}
.video-container {
	padding-top: 9rem !important;
}
</style>
