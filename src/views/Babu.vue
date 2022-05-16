<template>
	<div class="height_and_weight__global mobile_top_margin_profile_content">
		<ProfileCaption name="Team Mamber" />
		<section class="container">
			<div class="profile-content__cover">
				<img
					src="../assets/babu.jpg"
					class="img-responsive img-circle image__style"
					alt="Responsive image"
				/>
				<div class="profile_content__and__media-cover">
					<h2 class="profile_content">Babu Rotiken</h2>
					<p class="profile_content">
						Babu is a Law graduate from Mzumbe University. From his elevated
						educational background which accompanied by irresistible passion
						currently he is offering strong attention to details, accuracy, and
						doing well in excellent critical thinking, and legal research
						skills. His dreams of being a legal practioner, is currently
						studying a post graduate diploma in legal practice at the Law School
						of Tanzania, with vast expertise and firm foundation in Land laws,
						environmental laws and conservations laws. His passion in this field
						has encouraged him to learn more where he gained content hiden in
						this noble specilization including understanding every joint of
						laws.
					</p>
					<div class="profile_content profile-social-medias__tags">
						<a href=""> <i class="fab fa-facebook"></i></a>
						<a href=""> <i class="fab fa-instagram"></i></a>
						<a href=""> <i class="fab fa-linkedin"></i></a>
						<a href=""> <i class="fab fa-twitter"></i></a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import ProfileCaption from "@/components/ProfileCaption.vue";
export default {
	components: {
		ProfileCaption,
	},
};
</script>

<style lang="scss" scoped></style>
