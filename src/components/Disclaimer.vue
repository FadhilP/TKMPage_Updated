<template>
	<div class="scroll-here pt-20 px-10 lg:px-48 bg-blue-100">
		<!--Center-->
		<div class="pb-20">
			<h1
				class="w-full sm:w-9/12 mx-auto pb-10 text-4xl text-gray-800 text-center font-sans font-semibold"
			>
				Catatan penting sebelum anda mulai!
			</h1>
			<div class="w-full sm:w-11/12 lg:w-10/12 lg:flex mx-auto">
				<div
					class="shadow-xl border-gray-100 border-2 p-4 flex flex-col justify-between leading-normal rounded-lg bg-white"
				>
					<div
						class="flex-col p-4 text-sm sm:text-lg text-gray-600 font-sans leading-relaxed items-center"
					>
						<ul class="pl-8 list-outside list-decimal">
							<li class="pb-2">
								<b>Jangan</b> gunakan alat tes ini sebagai acuan diagnosis.
							</li>
							<li class="pb-2">
								Gunakan tes ini sebagai gambaran umum kondisi Anda dan
								menentukan kebutuhan untuk ke profesional.
							</li>
							<li class="pb-2">
								Seluruh data dan hasil tes bersifat
								<b>rahasia</b> dan hanya digunakan untuk pengembangan alat tes.
							</li>
							<li class="pb-2">
								Seluruh alat tes ini diadaptasi berdasarkan alat tes bebas dan
								daring sehingga dapat diakses secara
								<b>gratis</b>. Riliv tidak memiliki hak cipta alat tes satu pun.
							</li>
							<li class="pb-2">
								Jika kamu memiliki masalah kesehatan mental,
								<b>segera hubungi bantuan profesional</b>.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p
				v-show="authFail"
				class="w-9/12 mx-auto bg-red-200 rounded text-center text-red-600 font-semibold p-4 my-8"
			>
				{{ this.error }}
			</p>
			<div
				class="w-4/12 md:w-3/12 xl:w-2/12 mx-auto"
				:class="{ 'mt-16': !authFail }"
			>
				<div class="shadow-lg rounded">
					<v-button
						v-google-signin-button="clientId"
						class="py-3 lg:py-4"
						:class="loadingClasses"
						msg="Lanjutkan"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";
import GoogleSignInButton from "vue-google-signin-button-directive";
import axios from "axios";

export default {
	components: {
		"v-button": Button,
	},
	directives: {
		GoogleSignInButton,
	},
	data() {
		return {
			user_id: "",
			authFail: false,
			isLoading: false,
			isValidated: "",
			error: "",
			response: "",
			output: "",
			userStatus: "",
			clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
			loginAPI: process.env.VUE_APP_LOGIN_API,
		};
	},
	methods: {
		toggleLoading: function() {
			this.isLoading = !this.isLoading;
		},

		/* eslint-disable no-console */
		async OnGoogleAuthSuccess(idToken) {
			this.isLoading = true;

			const params = {
				id_token: idToken,
			};

			await axios
				.get("https://oauth2.googleapis.com/tokeninfo", { params })
				.then((response) => (this.response = response.data));

			await axios
				.post(this.loginAPI, {
					name: this.response.given_name,
					avatar: this.response.picture,
					email: this.response.email,
				})
				.then(
					(response) => (
						(this.output = response.data),
						(this.user_id = response.data.user_id),
						(this.isValidated = true),
						(this.userStatus = response.data.registered)
					)
				)
				.catch(
					(error) => (
						console.log(error),
						(this.output = error.response),
						(this.authFail = true),
						(this.error =
							"Login gagal 😞, silahkan coba lagi atau refresh browser anda")
					)
				);
			//Check user apakah sudah register sebelumnya
			this.checkUser();

			//Validasi user apakah telah melewati batas 10 hari
			if (this.isValidated == false) {
				//Matiin Spinner
				this.toggleLoading();

				//Tampilin Error
				this.authFail = true;

				return (this.error =
					"Anda dapat melakukan Tes Kesehatan Mental lagi setelah 10 hari terhitung dari anda melakukan tes kesehatan mental sebelumnya");
			} else {
				//Mau ke route /test atau /registration tetep butuh token
				// let parsed = JSON.stringify(this.output.token);
				localStorage.setItem("token", this.output.token);
				localStorage.setItem("identifier", this.user_id);
				console.log(this.output.token);
			}
		},

		OnGoogleAuthFail(error) {
			console.log(error);
			this.authFail = true;
			this.error =
				"Login gagal 😞, silahkan coba lagi atau refresh browser anda";
		},

		checkUser() {
			//User udah register sebelumnya?
			if (this.userStatus == true) {
				//Ke halaman introduction test
				this.$router.push({ name: "intro" });
			} else if (this.userStatus == false) {
				this.$router.push({ name: "registration" });
			} else {
				//Tampilin Error
				this.authFail = true;
				return (this.error = "Network Error 😢");
			}
		},
	},
	/* eslint-enable no-console */

	computed: {
		loadingClasses: function() {
			return {
				"spinner cursor-wait": this.isLoading,
				"": !this.isLoading,
			};
		},
	},
};
</script>

<style></style>
