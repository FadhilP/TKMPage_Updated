<template>
	<div class="font-sans min-h-screen">
		<div class="flex flex-row justify-center">
			<img
				class="h-6 mt-5 mb-10 lg:my-6 object-contain"
				src="../assets/logo.png"
				alt=""
			/>
		</div>
		<div class="border rounded-lg w-10/12 sm:w-8/12 lg:w-4/12 mx-auto mb-8">
			<div class="flex-wrap my-8">
				<p class="text-center text-lg font-semibold text-gray-600 my-1">
					Satu langkah lagi
				</p>
				<p class="text-center text-sm text-gray-600 mx-8">
					Mohon untuk mengisi data diri Anda terlebih dahulu, agar kami dapat
					memberikan bantuan dan informasi layanan secara optimal
				</p>
			</div>
			<div class="w-11/12 border-t border-gray-300 mx-auto"></div>
			<form @submit.prevent="submit">
				<div class="flex-wrap my-8 mx-8">
					<div class="block">
						<p class="text-gray-600 font-semibold text-sm">Nama</p>
						<input
							v-model.lazy="person.name"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="Walter Joseph Kovacs"
							value=""
						/>
						<p class="text-red-500 font-semibold text-sm" v-if="errors.name">{{errors.name}}</p>
					</div>
					<!-- <div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">
							Nomor Induk Kependudukan
						</p>
						<input
							v-model.lazy="person.nik"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="327208200698XXXX"
							value=""
						/>
					</div> -->
					<!-- <div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Jenis Kelamin</p>
						<div class="mt-2">
							<label
								class="inline-flex items-center"
								:class="[person.gender != 'male' ? 'text-gray-500' : '']"
							>
								<input
									id="pria"
									type="radio"
									class="form-radio"
									name="accountType"
									value="male"
									v-model="person.gender"
								/>
								<label class="ml-2 text-sm" for="pria">Pria</label>
							</label>
							<label
								class="inline-flex items-center ml-6"
								:class="[person.gender != 'female' ? 'text-gray-500' : '']"
							>
								<input
									id="wanita"
									type="radio"
									class="form-radio"
									name="accountType"
									value="female"
									v-model="person.gender"
								/>
								<label for="wanita" class="ml-2 text-sm">Wanita</label>
							</label>
						</div>
					</div> -->
					<!-- <div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Nomor Telepon</p>
						<input
							v-model.lazy="person.phone"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="08123456XXX"
							value=""
						/>
					</div> -->

					<!-- JABATAN INPUT -->
					<div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Jabatan</p>
						<select
							class="form-select mt-1 block w-full text-sm capitalize focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							:class="inputStyle(jabatan)"
							v-model="person.jabatan"
							placeholder="No"
						>
							<option value="" disabled selected>Pilih Jabatan</option>
							<option
								v-for="(data, index) in jabatan"
								:value="data"
								:key="`jabatan${index}`"
								>{{ data }}</option
							>
						</select>
						<p class="text-red-500 font-semibold text-sm" v-if="errors.jabatan">{{errors.jabatan}}</p>
					</div>

					<div v-if="person.jabatan === 'Lainnya'" class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">
							Masukkan Jabatan Anda
						</p>
						<input
							v-model.lazy="person.jabatanLainnya"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="Jabatan di perusahaan"
							value=""
						/>
					</div>
					<!-- JABATAN INPUT END -->

					<!-- UNIT KERJA INPUT -->
					<div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Unit Kerja</p>
						<select
							class="form-select mt-1 block w-full text-sm capitalize focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							:class="inputStyle(unitKerja)"
							v-model="person.unitKerja"
							placeholder="No"
						>
							<option value="" disabled selected>Pilih unit kerja</option>
							<option
								v-for="(data, index) in unitKerja"
								:value="data"
								:key="`unitKerja${index}`"
								>{{ data }}</option
							>
						</select>
						<p class="text-red-500 font-semibold text-sm" v-if="errors.unitKerja">{{errors.unitKerja}}</p>
					</div>

					<div v-if="person.unitKerja === 'Lainnya'" class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">
							Masukkan Unit Kerja Anda
						</p>
						<input
							v-model.lazy="person.unitKerjaLainnya"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="Unit kerja di perusahaan"
							value=""
						/>
					</div>
					<!-- JABATAN INPUT END -->

					<div class="block mt-8">
						<v-button
							type="submit"
							msg="Selanjutnya"
							class="py-3"
							:class="loadingClasses"
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VCalendar from "v-calendar";
import Button from "@/components/Button.vue";

Vue.use(VCalendar, {
	locales: {
		"id-ID": {
			masks: {
				L: "YYYY-MM-DD",
				// ...optional `title`, `weekdays`, `navMonths`, etc
			},
		},
	},
});

export default {
	name: "test",
	components: {
		"v-button": Button,
	},
	data: function() {
		return {
			username: "",
			checkTokenAPI: process.env.VUE_APP_CHECK_TOKEN_API,
			registrationAPI: `${process.env.VUE_APP_API_URL}/user-company-detail/store`,
			jabatan: [
				"Staff / Junior level",
				"Supervisor / Senior level",
				"Manager",
				"General Manager",
				"Direktur",
				"Lainnya",
			],
			unitKerja: [
				"Produksi",
				"Pemasaran",
				"Keuangan",
				"Pengadaan",
				"Teknologi Informasi (IT)",
				"Lainnya",
			],
			kodePerusahaan: null,
			person: {
				name: "",
				jabatan: "",
				unitKerja: "",
				jabatanLainnya: null,
				unitKerjaLainnya: null,
			},
			key: "",
			errors: {
				name: "",
				jabatan: "",
				unitKerja: ""
			}
		};
	},
	/* eslint-disable no-console */
	async created() {},
	async mounted() {
		window.location.href = "#";
		this.username = localStorage.getItem("username");
		this.person.name = this.username;
		this.user_id = localStorage.getItem("identifier");
		this.kodePerusahaan = localStorage.getItem("kodePerusahaan");
	},
	methods: {
		/* eslint-disable no-console */
		submit: function() {
			this.errors = {	
				name: "",
				jabatan: "",
				unitKerja: ""
			}
			if (!this.person.jabatan) this.errors['jabatan'] = "Harap memasukkan jabatan"
			if (!this.person.unitKerja) this.errors['unitKerja'] = "Harap memasukkan unit kerja"
			if (!this.person.name) this.errors['name'] = "Harap memasukkan nama"
			
			
			// Jabatan Handler
			let jabatanValue = null;
			if (this.person.jabatan === "Lainnya") {
				jabatanValue = this.person.jabatanLainnya;
			} else jabatanValue = this.person.jabatan;

			// Unit Kerja Handler
			let unitKerjaValue = null;
			if (this.person.unitKerja === "Lainnya") {
				unitKerjaValue = this.person.unitKerjaLainnya;
			} else unitKerjaValue = this.person.unitKerja;

			axios
				.post(
					this.registrationAPI,
					{
						companyCode: this.kodePerusahaan,
						division: unitKerjaValue,
						position: jabatanValue,
					},
					{
						headers: {
							Authorization: `${localStorage.getItem("token")}`,
						},
					}
				)
				.then(
					(response) => (
						(this.output = response.data), this.$router.push({ name: "intro" })
					),
					(error) => {
						console.log(error.response.data.error.name);
						if (error.response.data.error.name === "InvalidJwtToken")
							this.$router.push({ name: "home" });
					}
				);
		},

		inputStyle: function(targetInput) {
			// bind with one method and return Array
			return [targetInput == "" ? "text-gray-500" : "text-gray-800"];
		},
		toggleLoading: function() {
			this.isLoading = !this.isLoading;
		},
	},
	computed: {
		loadingClasses: function() {
			return {
				"spinner cursor-wait": this.isLoading,
				"": !this.isLoading,
			};
		},
	},
	/* eslint-enable no-console */
};
</script>

<style>
button:focus,
a:focus,
a:active,
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
select::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
	outline: none !important;
}

select:-moz-focusring {
	color: transparent;
	text-shadow: 0 0 0 #000;
}
</style>
