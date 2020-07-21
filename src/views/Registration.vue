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
					memberi bantuan dengan lebih cepat dan tepat
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
					<div class="block mt-4">
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
					</div>
					<div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Nomor Telepon</p>
						<input
							v-model.lazy="person.phone"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="08123456XXX"
							value=""
						/>
					</div>
					<div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Jabatan</p>
						<input
							v-model.lazy="person.jabatan"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="Jabatan di perusahaan"
							value=""
						/>
					</div>
					<div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Divisi</p>
						<input
							v-model.lazy="person.divisi"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="Divisi di perusahaan"
							value=""
						/>
					</div>
					<!-- <div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Tanggal Lahir</p>
						<div class="mt-2">
							<v-date-picker
								v-model.number="date"
								locale="id-ID"
								class="appearance-none"
								:popover="{ placement: 'bottom', visibility: 'click' }"
							>
								<input
									id="date"
									name="datepicker"
									class="focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
									placeholder="Ex: 29/04/1999"
									slot-scope="{ inputProps, inputEvents }"
									:class="[
										`appearance-none text-sm border rounded w-full py-2 px-3`,
									]"
									v-bind="inputProps"
									v-on="inputEvents"
								/>
							</v-date-picker>
						</div>
					</div> -->
					<!-- <div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Provinsi</p>
						<select
							class="form-select mt-1 block w-full text-sm capitalize focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							:class="inputStyle(state.province)"
							@change="province"
							v-model="state.province"
							placeholder="No"
						>
							<option value="" disabled selected>Pilih Provinsi</option>
							<option
								v-for="province in provinces.data"
								:value="{ id: province.id, name: province.name }"
								:key="province.id"
								>{{ province.name.toLowerCase() }}</option
							>
						</select>
					</div>
					<div
						class="block mt-4"
						:class="[state.province != '' ? '' : 'hidden']"
					>
						<p class="text-gray-600 font-semibold text-sm">Kota/Kabupaten</p>
						<select
							class="form-select mt-1 block w-full text-sm capitalize focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							:class="inputStyle(state.regency)"
							@change="regency"
							v-model="state.regency"
						>
							<option value="" disabled selected>Pilih Kota/Kabupaten</option>
							<option
								v-for="regency in regencies.data"
								:value="{ id: regency.id, name: regency.name }"
								:key="regency.id"
								>{{ regency.name.toLowerCase() }}</option
							>
						</select>
					</div>
					<div
						class="block mt-4"
						:class="[state.regency != '' ? '' : 'hidden']"
					>
						<p class="text-gray-600 font-semibold text-sm">Kecamatan</p>
						<select
							class="form-select mt-1 block w-full text-sm text-gray-500 capitalize focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							:class="inputStyle(state.district)"
							v-model="state.district"
						>
							<option value="" disabled selected>Pilih Kecamatan</option>
							<option
								v-for="district in districts.data"
								:value="{ id: district.id, name: district.name }"
								:key="district.id"
								>{{ district.name.toLowerCase() }}</option
							>
						</select>
					</div> -->
					<!-- <div class="block mt-4">
						<p class="text-gray-600 font-semibold text-sm">Alamat</p>
						<input
							v-model="state.address"
							class="form-input mt-2 block w-full text-sm focus:bg-gray-200 text-gray-800 placeholder-gray-500 focus:shadow-none focus:border-transparent focus:outline-none"
							placeholder="Masukkan alamat anda"
						/>
					</div> -->
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
			date: "",
			username: "",
			isValid: false,
			baseUrl: "https://x.rajaapi.com/MeP7c5ne",
			checkTokenAPI: process.env.VUE_APP_CHECK_TOKEN_API,
			registrationAPI: process.env.VUE_APP_REGISTRATION_API,
			person: {
				name: "",
				gender: "",
				nik: "",
				phone: "",
				jabatan: "",
				divisi: "",
			},
			key: "",
			state: {
				province: "",
				regency: "",
				district: "",
				address: "",
			},
			provinces: [],
			regencies: [],
			districts: [],
			output: [],
			clientData: [],
		};
	},
	/* eslint-disable no-console */
	async created() {},
	async mounted() {
		//Validasi token
		await this.getToken();
		//Cek kredensialnya valid atau engga
		if (this.isValid == true) {
			//Assign user_id
			this.user_id = localStorage.getItem("identifier");
			//Get key untuk API
			await this.getKey();
			//Get Provinsi
			await this.initState();
		} else {
			this.$router.push({ name: "403" });
		}
	},
	methods: {
		async getToken() {
			this.username = localStorage.getItem("username");
			this.person.name = this.username;
			await axios
				.post(this.checkTokenAPI, {
					token: localStorage.getItem("token"),
				})
				.then(() => (null, (this.isValid = true)))
				.catch((error) => console.log(error.response));
		},
		async getKey() {
			await axios
				.get("https://x.rajaapi.com/poe")
				.then((response) => (this.key = response.data.token));
		},

		async initState() {
			const suffixUrl = "/m/wilayah/provinsi";
			const url = this.baseUrl + this.key + suffixUrl;

			await axios
				.get(url)
				.then((response) => (this.provinces = response.data))
				.catch((error) => console.error(error));
		},

		province() {
			this.state.regency = "";
			this.state.district = "";

			// set params
			const suffixUrl = "/m/wilayah/kabupaten";
			const url = this.baseUrl + this.key + suffixUrl;
			const params = {
				//nyesuain API Call dari rajaapi.com
				idpropinsi: this.state.province.id,
			};

			// url /wilayah/kabupaten?idpropinsi=xxx
			axios
				.get(url, { params })
				.then((response) => {
					this.regencies = response.data;
				})
				.catch((error) => console.error(error));
		},

		regency() {
			this.state.district = "";

			const suffixUrl = "/m/wilayah/kecamatan";
			const url = this.baseUrl + this.key + suffixUrl;
			// set params
			const params = {
				idkabupaten: this.state.regency.id,
			};

			axios
				.get(url, { params })
				.then((response) => {
					this.districts = response.data;
				})
				.catch((error) => console.error(error));
		},

		submit: function() {
			const date = document.querySelector("input[id=date]").value;

			axios
				.post(this.registrationAPI, {
					user_id: localStorage.getItem("identifier"),
					provinsi: this.state.province.name,
					kabupaten: this.state.regency.name,
					kecamatan: this.state.district.name,
					alamat: this.state.address,
					name: this.person.name,
					nik: this.person.nik,
					phone: this.person.phone,
					gender: this.person.gender,
					birthdate: date,
				})
				.then(
					(response) => (
						// console.log(response.data),
						(this.output = response.data),
						(this.user_id = response.data.user_id),
						this.$router.push({ name: "intro" })
					)
				)
				.catch((error) => (this.output = error.response));
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
