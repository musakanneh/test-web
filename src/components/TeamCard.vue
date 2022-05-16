<template>
	<body>
		<div class="team-and-boardmembers__cover">
			<main class="container">
				<h1>BOARD</h1>
				<div class="row row-cols-4 __mi">
					<div class="col"></div>
					<div class="col">
						<div class="thumbnail">
							<img
								src="../assets/lekumok.png"
								class="img-responsive"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Dr. Lekumok Kironyi" position="Chairman" />
								<a href="/lekumok">View Profile</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="thumbnail">
							<img
								src="../assets/lilian.png"
								class="img-responsive"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Lilian Looloitai" position="Treasurer" />
								<a href="/lilian">View Profile</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="thumbnail">
							<img
								src="../assets/jop.png"
								class="img-responsive"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Jopha Peter Kakanyi" position="Member" />
								<a href="/jopha">View Profile</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="thumbnail">
							<img
								src="../assets/melubo.png"
								class="img-responsive"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Emanuel Melubo" position="Member" />
								<a href="/emanuel">View Profile</a>
							</div>
						</div>
					</div>
				</div>
				<h1>OUR TEAM</h1>
				<div class="row row-cols-4 __mi">
					<div class="col-xs-8">
						<div class="__mobile__styles">
							<img
								src="../assets/nagol.png"
								class="img-responsive img-circle"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Elias Nagol" position="Technical Advisor" />
								<a href="/elias">View Profile</a>
							</div>
						</div>
					</div>
					<div class="col-xs-8">
						<div class="__mobile__styles">
							<img
								src="../assets/evel.png"
								class="img-responsive img-circle"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Evelyn Kaney" position="Financial Manager" />
								<a href="/evelyn">View Profile</a>
							</div>
						</div>
					</div>
					<div class="col-xs-8">
						<div class="__mobile__styles">
							<img
								src="../assets/babu.jpg"
								class="img-responsive img-circle"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Babu Rotiken" position="Legal Officer" />
								<a href="/babu">View Profile</a>
							</div>
						</div>
					</div>

					<div class="col-xs-8">
						<div class="__mobile__styles">
							<img
								src="../assets/marco.jpeg"
								class="img-responsive img-circle"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Marco Mathayo" position="Programs Manager" />
								<a href="/marco">View Profile</a>
							</div>
						</div>
					</div>
					<div class="col-xs-8">
						<div class="">
							<img
								src="../assets/yannick.png"
								class="img-responsive img-circle"
								alt="Responsive image"
							/>
							<div class="team__details">
								<TeamTag name="Yannick Ndoinyo" position="Executive Director" />
								<a href="/yannick">View Profile</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
		<PartnerCard />
	</body>
</template>

<script>
import PartnerCard from "@/components/PartnerCard.vue";
import TeamTag from "@/components/TeamTag.vue";
export default {
	components: {
		TeamTag,
		PartnerCard,
	},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
	.__mi {
		display: block !important;
	}
	.__mobile__styles {
		margin-bottom: 1.5rem !important;
	}
}
body {
	.team-and-boardmembers__cover {
		background: #ddd;
		width: 100%;
		height: 100%;
		padding: 2rem 0 4rem 0;
	}

	.thumbnail {
		padding-bottom: 1.5rem;
		background: #fbfbfb;
	}

	.__border_img {
		border: 1px solid #303030;
		padding: 0.5rem;
	}

	.team__details {
		text-align: center;
		padding-top: 1rem;

		a {
			text-decoration: none;
			padding: 0.3rem 1rem;
			background: #d8c690;
			border-radius: 5px;
			color: var(--black);
			outline: none;

			&:hover {
				background: #be9e44;
				transition: 0.5s ease;
			}
		}
	}

	img {
		width: 100%;
	}

	.__mi {
		display: flex;
		width: 98%;
		margin: auto;
		justify-content: space-evenly;
	}

	h1 {
		// font-size: 3rem !important;
		padding: 6rem 0 4rem 0;
		width: 100%;
		margin: 0;
		text-align: center;
	}
}
</style>
