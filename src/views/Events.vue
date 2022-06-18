<template>
	<body>
		<div class="global__height"></div>
		<div class="container animate_1">
			<div class="global__height"></div>
			<h4>Upcoming events</h4>
			<div class="row">
				<div class="col-xs-6 col-md-12 border__">
					<h3>
						vision 2033
					</h3>
					<div class="content__text">
						<p>
							DRAFT- ToR for Land, Biodiversity Conservation
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-6 col-md-12 border__">
					<h3>
						Land Governance, Conservation and livelihoods Support for Indigenous
						People in East Africa- Kenya and Tanzania
					</h3>
					<div class="content__text">
						<p>
							We are planning a huge indigenous peoples Forum Conference to be
							held here in Arusha, July 2022
						</p>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
export default {
	components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
	.global__height {
		display: none;
	}
	.container {
		h4 {
			padding-top: 3rem;
			margin-bottom: -2rem !important;
		}
	}
	.border__ {
		display: block !important;

		h3 {
			padding: 2rem 0 1rem 0;
		}
		p {
			margin: 0 !important;
			padding: 0.5rem 0;
		}
	}
}

body {
	background: #ddd;
	padding: 2rem 0 6rem 0;

	.row {
		margin: auto;
	}

	.image {
		border: 1px solid #30303011;
	}

	.border__ {
		display: grid;
		grid-template-columns: 1fr 2fr;
		column-gap: 50px;
		padding: 3rem 0;

		p {
			font-size: 1.6rem;
			color: #303030 !important;
		}

		img {
			width: 100%;
			padding: 2rem;
		}
	}

	h3 {
		margin: 0;
		font-size: 20px;
		line-height: 1.5;
		padding-bottom: 1rem;
	}

	h4 {
		color: #505050;
		margin: 0;
		padding: 0;
	}
}
</style>
