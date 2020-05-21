<template>
	<!--Center-->
	<div class="bg-blue-50">
		<div class="w-10/12 lg:w-8/12 mx-auto pt-16 lg:pt-40">
			<h1
				class="pb-10 text-3xl sm:text-4xl md:text-5xl text-gray-800 text-center font-sans font-semibold"
			>
				Mari Menjaga Kesehatan Mental Bersama
			</h1>
			<h2 class="pb-10 text-xl md:text-3xl text-gray-700 text-center font-sans">
				Ajak teman Anda untuk mengetahui lebih dalam mengenai kondisi kesehatan
				mentalnya.
			</h2>
			<div
				class="text-center w-6/12 sm:w-4/12 md:w-3/12 mx-auto shadow-lg rounded"
			>
				<v-button
					class="py-3 lg:py-4"
					msg="Bagikan alat tes ini"
					@click.native="toggleModal"
				/>
				<modal v-show="isModalVisible" @close="toggleModal">
					<div slot="header" class="mx-auto text-center mt-12">
						<p class="font-bold text-gray-800">
							Bagikan alat tes ini
						</p>
					</div>
					<div slot="body" class="text-lg mx-auto mb-10">
						<social-sharing
							url="https://sehatmental.riliv.co"
							title="Hai, gimana kondisimu saat ini? Untuk membantumu lebih mengenali kondisi mentalmu, yuk coba Tes Kesehatan Mental ini sekarang!"
							description="Hai, gimana kondisimu saat ini? Untuk membantumu lebih mengenali kondisi mentalmu, yuk coba Tes Kesehatan Mental ini sekarang!"
							quote="Hai, gimana kondisimu saat ini? Untuk membantumu lebih mengenali kondisi mentalmu, yuk coba Tes Kesehatan Mental ini sekarang!"
							inline-template
						>
							<div class="inline-block text-4xl text-gray-800">
								<network
									class="mx-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-800"
									network="facebook"
								>
									<font-awesome-icon :icon="['fab', 'facebook-square']" />
								</network>
								<network
									class="mx-2 cursor-pointer transition duration-300 ease-in-out hover:text-green-600"
									network="line"
								>
									<font-awesome-icon :icon="['fab', 'line']" />
								</network>
								<network
									class="mx-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-600"
									network="linkedin"
								>
									<font-awesome-icon :icon="['fab', 'linkedin']" />
								</network>
								<network
									class="mx-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-700"
									network="telegram"
								>
									<font-awesome-icon :icon="['fab', 'telegram']" />
								</network>
								<network
									class="mx-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
									network="twitter"
								>
									<font-awesome-icon :icon="['fab', 'twitter-square']" />
								</network>
								<network
									class="mx-2 cursor-pointer transition duration-300 ease-in-out hover:text-green-700"
									network="whatsapp"
								>
									<font-awesome-icon :icon="['fab', 'whatsapp']" />
								</network>
							</div>
						</social-sharing>
					</div>
					<div slot="footer" class="bg-dark"></div>
				</modal>
			</div>
		</div>
		<img
			class="w-full object-bottom"
			src="../assets/illustration-footer.png"
			alt="Footer illustration"
		/>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";
import SocialSharing from "vue-social-sharing";
import modal from "@/components/Modal.vue";

export default {
	components: {
		"v-button": Button,
		SocialSharing,
		modal,
	},
	data: function() {
		return {
			isModalVisible: false,
		};
	},
	methods: {
		toggleModal: function() {
			this.isModalVisible = !this.isModalVisible;
		},
	},
};
</script>

<style></style>
