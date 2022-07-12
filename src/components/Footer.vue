<template>
	<footer>
		<main class="container">
			<div class="row">
				<div class="mobile__padding">
					<div class="col-xs-6 col-md-3">
						<div class="footer-nav-items">
							<h4>Quick Links</h4>
							<hr />
							<a href="/about" class="tba">About Us</a><br />
							<a href="/work" class="tba">Our Work</a><br />
							<a href="/about" class="tba">Our Team</a><br />
							<a href="/privacy-policy" class="tba">Privacy Policy</a><br />
						</div>
					</div>
					<div class="col-xs-6 col-md-3">
						<div class="footer-nav-items">
							<address>
								<h4>Contact Us</h4>
								<hr />
								PO Box 2268, Arusha<br />
								Tanzania<br />
								
								<!-- pan title="Phone">Tel:</span> +255 752 773 890<br /-->
								<a href="mailto:info@nyanda.org">
									<span title="Phone">Email:</span> info@nyanda.org</a
								>
							</address>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-md-3">
					<div class="footer-nav-items">
						<h4>Support our Projects</h4>
						<hr />
						<a href="/volunteer" class="tba">Volunteer With Us</a><br />
					</div>
				</div>
				<div class="col-xs-6 col-md-3">
					<div class="contact-sec">
						<h4>Follow Us</h4>
						<hr />
						<div class="social-medias">
							<a
								href="https://facebook.com/ecosystemssurvival"
								target='"_blank"'
							>
								<i class="fab fa-facebook"></i
							></a>
							<a
								href="http://www.instagram.com/ecosystemssurvival"
								target='"_blank"'
							>
								<i class="fab fa-instagram"></i
							></a>
							<a
								href="https://www.linkedin.com/company/ecosystemssurvival/"
								target='"_blank"'
							>
								<i class="fab fa-linkedin"></i
							></a>
							<a href="http://www.twitter.com/testecosystems" target='"_blank"'>
								<i class="fab fa-twitter"></i
							></a>
						</div>
					</div>
				</div>
			</div>
		</main>
		<section class="trademark container">
			<hr />
			<p>TEST © {{ new Date().getFullYear() }} | All Rights Reserved.</p>
		</section>
	</footer>
</template>

<script>
export default {
	components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
	* {
		width: 100% !important;
	}
	.mobile__padding {
		display: flex;
	}
	h3 {
		padding: 1.5rem 0 0.8rem 0;
	}

	a {
		line-height: 22px;
	}

	hr {
		width: 15% !important;
		align-items: center !important;
		margin: 0.5rem 0 !important;
	}

	main {
		width: 100% !important;
		margin: auto !important;
		display: block !important;

		.social-medias {
			display: flex !important;
			padding: 1rem 0 2rem 0;
		}

		.footer-nav-items img {
			width: 12px !important;
		}

		.footer-nav-items br {
			display: block !important;
		}

		br {
			display: none !important;
		}

		.footer-nav-items .payment {
			width: 20% !important;
		}

		img {
			width: 10% !important;
		}
	}
}

footer {
	padding: 1rem 0;
	background-color: #1e2022;

	address {
		color: #fff;
	}

	main {
		hr {
			margin: 1rem 0;
		}
		h3 {
			color: var(--primary-color);
			font-weight: 600;
			margin: 0;
			font-size: 18px;
			padding-top: 2rem;
		}
	}

	hr {
		width: 25%;
		margin: 0;
	}

	.social-medias {
		i {
			cursor: pointer;
			font-size: 25px;
			margin-right: 25px;
			color: #ddd;
		}

		i:hover {
			color: var(--primary-color);
			transition: 0.5s ease;
		}
	}

	p {
		color: #fff;
	}

	a {
		text-decoration: none;
		color: #fff;
		cursor: pointer;
	}

	.trademark {
		hr {
			border: 0.5px solid #262626;
			margin: 1rem 0;
			width: 100% !important;
		}
		p {
			text-align: center;
			font-size: 12px !important;
			padding: 1rem 0 1rem 0;
		}
	}
}
</style>
