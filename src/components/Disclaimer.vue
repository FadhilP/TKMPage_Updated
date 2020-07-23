<template>
	<div class="bg-blue-50">
		<div class="scroll-here pt-20 px-10 lg:px-48 bg-blue-50">
			<!--Center-->
			<div class="">
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
									Seluruh data dan hasil tes bersifat <b>rahasia</b> dan hanya
									digunakan untuk keperluan pemilihan layanan lanjutan.
								</li>
								<li class="pb-2">
									Seluruh alat tes ini diadaptasi berdasarkan alat tes bebas dan
									daring sehingga dapat diakses secara <b>gratis</b>. Riliv
									tidak memiliki hak cipta alat tes satu pun.
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
							@click.native="toggleModal()"
							class="py-3 lg:py-4"
							:class="loadingClasses"
							msg="Lanjutkan"
						/>
					</div>
				</div>
				<!-- MODAL UNTUK CEK KODE PERUSAHAAN -->
				<modal v-show="isModalVisible" @close="toggleModal()">
					<div slot="header" class="mx-auto text-center mt-4">
						<p v-if="!showLoginWithGoogle" class="font-bold text-gray-800">
							Masukan Kode Perusahaan Anda
						</p>
						<p v-else class="font-bold text-gray-800">
							Silahkan Login Melalui Akun Google Anda
						</p>
					</div>
					<div slot="body" class="mx-auto text-center mt-2">
						<form @submit.prevent="submit">
							<div class="flex-wrap mx-8">
								<div v-if="!showLoginWithGoogle" class="block text-left">
									<p class="text-gray-700 font-semibold text-sm">
										Kode Perusahaan
									</p>
									<input
										v-model.lazy="kodePerusahaan"
										class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
										placeholder="Isi Kode Perusahaan"
										value=""
									/>
									<p v-if="showErrorMessage" class="text-red-600 text-sm">
										Mohon maaf kode perusahaan yang anda masukkan tidak valid
									</p>
								</div>
								<div v-else class="block text-left">
									<p class="text-gray-600 font-normal text-sm">
										<strong class="text-gray-700 font-semibold"
											>Selamat, kode yang Anda masukkan telah
											terverifikasi!</strong
										><br />Silahkan login melalui akun Google anda dengan cara
										menekan tombol
										<span class="text-gray-700 font-semibold">Lanjutkan</span>
										di bawah!
									</p>
								</div>
							</div>
						</form>
					</div>
					<div slot="footer" class="mx-auto w-full px-4 m-4">
						<v-button
							v-if="!showLoginWithGoogle"
							type="button"
							class="py-3 w-4/12 mb-3"
							@click.native="submit"
							msg="Verifikasi Kode"
							aria-label="Close modal"
						/>

						<v-button
							v-else
							v-google-signin-button="clientId"
							class="py-3 w-4/12 mb-3"
							:class="loadingClasses"
							msg="Lanjutkan"
						/>
						<v-button
							type="button"
							variant="alternative"
							class="py-3 w-4/12"
							@click.native="toggleModal()"
							msg="Kembali"
							aria-label="Close modal"
						/>
					</div>
				</modal>
				<!-- MODAL UNTUK CEK KODE PERUSAHAAN END -->
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
import modal from "@/components/Modal.vue";
import GoogleSignInButton from "vue-google-signin-button-directive";
import axios from "axios";

export default {
	components: {
		"v-button": Button,
		modal,
	},
	directives: {
		GoogleSignInButton,
	},
	data() {
		return {
			user_id: "",
			user_name: "",
			authFail: false,
			isLoading: false,
			isValidated: "",
			error: "",
			response: "",
			output: "",
			userStatus: "",
			isModalVisible: false,
			clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
			loginAPI: process.env.VUE_APP_LOGIN_API,
			checkCodeAPI: process.env.VUE_APP_CHECK_CODE_API,
			kodePerusahaan: null,
			showErrorMessage: false,
			showLoginWithGoogle: false,
		};
	},
	async mounted() {
		localStorage.removeItem("token");
	},
	methods: {
		toggleLoading: function() {
			this.isLoading = !this.isLoading;
		},
		toggleModal: function() {
			this.isModalVisible = !this.isModalVisible;
		},
		/* eslint-disable no-console */
		submit: async function() {
			const CompanyCodeExist = await this.CheckCompanyCode();
			this.showErrorMessage = !CompanyCodeExist;
			this.showLoginWithGoogle = CompanyCodeExist;
		},

		/* eslint-disable no-console */
		async CheckCompanyCode() {
			this.showErrorMessage = false;
			this.showLoginWithGoogle = false;
			let codeExist = false;
			await axios
				.get(`${this.checkCodeAPI}?code=${this.kodePerusahaan}`, null)
				.then((response) => {
					if (response.data.message === "Company code success") {
						codeExist = true;
						localStorage.setItem("kodePerusahaan", this.kodePerusahaan);
					} else codeExist = false;
				})
				.catch((err) => {
					console.log(err);
					codeExist = false;
				});

			return codeExist;
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

			localStorage.setItem("username", this.response.name);

			await axios
				.post(this.loginAPI, {
					token: idToken,
				})
				.then((response) => {
					this.output = response.data;
				})
				.catch(
					(error) => (
						console.log(error),
						(this.output = error.response),
						(this.authFail = true),
						(this.error =
							"Login gagal 😞, silahkan coba lagi atau refresh browser anda")
					)
				);
			localStorage.setItem("token", this.output.token);
			this.$router.push({ name: "registration" });
			// this.checkUser();
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
				// this.$router.push({ name: "intro" });
			} else if (this.userStatus == false) {
				// this.$router.push({ name: "registration" });
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
		testClasses: function() {
			return "bg-aqua";
		},
	},
};
</script>

<style></style>
