<template>
	<div class="font-sans">
		<div class="flex flex-row justify-center mb-16">
			<img
				class="h-8 mt-6 object-contain focus-here"
				src="../assets/logo.png"
				alt=""
			/>
		</div>
		<div class="flex flex-col w-full sm:w-10/12 lg:w-8/12 mx-auto">
			<div class="rounded-lg overflow-hidden">
				<ValidationObserver v-slot="{ handleSubmit }" ref="form">
					<form-wizard
						shape="tab"
						class="w-full -mt-16"
						@on-complete="handleSubmit(submit)"
						ref="wizard"
						title=""
						subtitle=""
						transition="fade-in"
					>
						<p class="text-center text-3xl font-semibold">
							Tes Kesehatan Mental
						</p>
						<div class="mx-auto my-4 border rounded bg-gray-100 select-none">
							<div
								class="w-11/12 my-4 text-sm mx-auto"
								:class="accordionClasses"
							>
								<div
									@click="toggleAccordion"
									class="flex flex-row cursor-pointer"
								>
									<div class="flex-col w-11/12">
										<p class="text-lg text-gray-800 font-semibold">
											Aturan Pilihan Jawaban
										</p>
									</div>
									<div class="flex flex-col w-1/12">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											class="w-8 h-8 -mt-1 ml-auto icon-cheveron-down"
											v-if="!isOpen"
										>
											<path
												fill-rule="evenodd"
												d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
											></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											class="w-8 h-8  ml-auto icon-cheveron-up"
											v-if="isOpen"
										>
											<path
												class="secondary"
												fill-rule="evenodd"
												d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
											></path>
										</svg>
									</div>
								</div>
								<div class="message-body overflow-hidden">
									<ul class="flex flex-col ml-2 md:flex-row pt-4 text-gray-700">
										<div class="flex-col mr-8">
											<li class="flex flex-row mb-2">
												<div
													class="w-6 h-6 align-center inline-block bg-gray-500 text-center text-white font-semibold rounded"
												>
													0
												</div>
												<p class="ml-2">Tidak terjadi pada saya sama sekali</p>
											</li>
											<li class="flex flex-row mb-2">
												<div
													class="w-6 h-6 align-center inline-block bg-gray-500 text-center text-white font-semibold rounded"
												>
													1
												</div>
												<p class="ml-2">Jarang terjadi pada saya</p>
											</li>
										</div>
										<div class="flex-col">
											<li class="flex flex-row mb-2">
												<div
													class="w-6 h-6 align-center inline-block bg-gray-500 text-center text-white font-semibold rounded"
												>
													2
												</div>
												<p class="ml-2">Kadang-kadang terjadi pada saya</p>
											</li>
											<li class="flex flex-row mb-2">
												<div
													class="w-6 h-6 align-center inline-block bg-gray-500 text-center text-white font-semibold rounded"
												>
													3
												</div>
												<p class="ml-2">Sering terjadi pada saya</p>
											</li>
										</div>
									</ul>
								</div>
							</div>
						</div>
						<!-- First Tab -->
						<tab-content :before-change="nextTab">
							<div class=" bg-gray-200 rounded-l-full rounded-r-full">
								<div
									class="rounded-l-full rounded-r-full text-xs leading-none py-1 text-center text-white"
									style="background: #10CBE1; width: 33%;"
								></div>
							</div>
							<table
								class="responsive-table table-auto my-8 mx-auto text-md sm:text-lg text-gray-800"
							>
								<thead class="responsive-table">
									<tr class="responsive-table border-b">
										<th class="text-left px-5">Pernyataan</th>
										<th class="px-5 py-3">0</th>
										<th class="px-5 py-3">1</th>
										<th class="px-5 py-3">2</th>
										<th class="px-5 py-3">3</th>
									</tr>
								</thead>
								<t-content
									name="radio-1"
									text="Saya merasa sulit untuk beristirahat"
								></t-content>
								<t-content
									name="radio-2"
									text="Saya menyadari mulut saya kering"
								></t-content>
								<t-content
									name="radio-3"
									text="Sepertinya saya tidak bisa merasakan perasaan positif sama sekali"
								></t-content>
								<t-content
									name="radio-4"
									text="Saya mengalami kondisi sulit bernafas"
									subtext="seperti: bernafas sangat cepat atau sesak nafas tanpa adanya aktivitas fisik"
								></t-content>
								<t-content
									name="radio-5"
									text="Saya merasa sulit untuk membangun keinginan melakukan sesuatu"
								></t-content>
								<t-content
									name="radio-6"
									text="Saya cenderung bereaksi berlebihan terhadap situasi"
								></t-content>
								<t-content
									name="radio-7"
									text="Saya mengalami tubuh saya gemetar"
									subtext="seperti: tangan bergemetar"
								></t-content>
								<tbody></tbody>
							</table>
						</tab-content>
						<!-- Second Tab -->
						<tab-content>
							<div class=" bg-gray-200 rounded-l-full rounded-r-full">
								<div
									class="rounded-l-full rounded-r-full text-xs leading-none py-1 text-center text-white"
									style="background: #10CBE1; width: 66%"
								></div>
							</div>
							<table class="table-auto my-8 mx-auto text-lg text-gray-800">
								<thead>
									<tr class="responsive-table border-b">
										<th class="text-left px-5">Pernyataan</th>
										<th class="px-5 py-3">0</th>
										<th class="px-5 py-3">1</th>
										<th class="px-5 py-3">2</th>
										<th class="px-5 py-3">3</th>
									</tr>
								</thead>
								<t-content
									name="radio-8"
									text="Saya merasa terlalu sering melakukan aktivitas otomatis untuk merespon cemas"
									subtext="Misal: menggigit kuku, menarik nafas panjang berulang, bicara banyak saat cemas, memotong pembicaraan yang membuat cemas, dsb."
								></t-content>
								<t-content
									name="radio-9"
									text="Saya khawatir tentang situasi di mana saya mungkin panik dan mempermalukan diri sendiri"
								></t-content>
								<t-content
									name="radio-10"
									text="Saya merasa tidak ada yang bisa saya harapkan"
								></t-content>
								<t-content
									name="radio-11"
									text="Saya merasa gelisah"
								></t-content>
								<t-content
									name="radio-12"
									text="Saya merasa sulit untuk tenang"
								></t-content>
								<t-content
									name="radio-13"
									text="Saya merasa sedih dan galau"
								></t-content>
								<t-content
									name="radio-14"
									text="Saya tidak bisa menerima terhadap apa pun yang membuat saya tidak bisa melanjutkan apa yang saya lakukan"
								></t-content>
								<tbody></tbody>
							</table>
						</tab-content>
						<!-- Third Tab -->
						<tab-content>
							<div class=" bg-gray-200 rounded-l-full rounded-r-full">
								<div
									class="rounded-l-full rounded-r-full text-xs leading-none py-1 text-center text-white"
									style="background: #10CBE1;"
								></div>
							</div>
							<table class="table-auto my-8 mx-auto text-lg text-gray-800">
								<thead>
									<tr class="responsive-table border-b">
										<th class="text-left px-5">Pernyataan</th>
										<th class="px-5 py-3">0</th>
										<th class="px-5 py-3">1</th>
										<th class="px-5 py-3">2</th>
										<th class="px-5 py-3">3</th>
									</tr>
								</thead>
								<t-content
									name="radio-15"
									text="Saya merasa saya hampir panik"
								></t-content>
								<t-content
									name="radio-16"
									text="Saya tidak bisa antusias pada apapun"
								></t-content>
								<t-content
									name="radio-17"
									text="Saya merasa saya tidak berharga sebagai manusia"
								></t-content>
								<t-content
									name="radio-18"
									text="Saya merasa agak sensitif"
								></t-content>
								<t-content
									name="radio-19"
									text="Saya menyadari kondisi jantung saya meskipun tidak adanya aktivitas fisik"
									subtext="Misal: Rasa peningkatan denyut jantung, jantung berdebar"
								></t-content>
								<t-content
									name="radio-20"
									text="Saya merasa takut tanpa alasan yang kuat"
								></t-content>
								<t-content
									name="radio-21"
									text="Saya merasa bahwa hidup tidak ada artinya"
								></t-content>
								<tbody></tbody>
							</table>
						</tab-content>
						<button
							class="w-full text-sm font-semibold hover:shadow-outline text-gray-700 shadow-md py-3 px-4 rounded-lg border border-gray-400"
							slot="prev"
							v-scroll-to="'.focus-here'"
						>
							Sebelumnya
						</button>
						<v-button
							msg="Selanjutnya"
							slot="next"
							class="border rounded-lg border-orange-300 px-4 py-3 shadow-md active:outline"
							v-scroll-to="'.focus-here'"
						></v-button>
						<v-button
							msg="Selesai"
							slot="finish"
							class="border rounded-lg border-orange-300 px-10 py-3 shadow-md"
							:class="loadingClasses"
						></v-button>
						<modal v-show="isModalVisible" @close="toggleModal">
							<div slot="header" class="mx-auto text-center mt-12">
								<p class="font-bold text-gray-800">
									Kami mendeteksi adanya pola jawaban yang sama
								</p>
							</div>
							<div slot="body" class="w-11/12 text-lg mx-auto mb-10">
								<p class="text-gray-700">
									Apakah jawaban yang Anda masukkan telah sesuai dengan kondisi
									Anda dalam 7 hari terakhir? <br />
									Apabila Anda ragu, Anda dapat menekan tombol "Tidak" dan
									review kembali jawaban Anda
								</p>
							</div>
							<div slot="footer" class="w-full">
								<v-button
									class="w-full py-2"
									msg="Iya"
									@click.native="skipValidation"
								></v-button>
								<v-button
									class="w-full py-2 mt-2 text-gray-600"
									msg="Tidak"
									variant="alternative"
									@click.native="toggleModal"
								></v-button>
							</div>
						</modal>
					</form-wizard>
				</ValidationObserver>
			</div>
			<div class="flex flex-row mt-4">
				<div class="flex flex-col w-full rounded-t-lg bg-gray-100 border">
					<div class="w-11/12 mx-auto mt-5 mb-6">
						<p class="text-gray-700 font-semibold mb-1">Referensi</p>
						<p class="text-gray-500 text-sm">
							Lovibond, S. H., & Lovibond, P. F. (1996).
							<i>Manual for the depression anxiety stress scales</i>. Psychology
							Foundation of Australia.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TableContent from "@/components/base/TableContent.vue";
import Button from "@/components/Button.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import modal from "@/components/Modal.vue";
import axios from "axios";

export default {
	data: function() {
		return {
			isOpen: true,
			isLoading: false,
			isValid: true,
			isModalVisible: false,
			isValidationSkipped: false,
			user_id: "",
			soal: [],
			validasi: [],
			output: [],
			errors: "",
			dataSoal: [],
			checkTokenAPI: process.env.VUE_APP_CHECK_TOKEN_API,
			submitAnswerAPI: process.env.VUE_APP_SUBMIT_ANSWER_API,
			getQuestionsAPI: process.env.VUE_APP_GET_QUESTIONS_API,
		};
	},
	components: {
		"t-content": TableContent,
		"v-button": Button,
		FormWizard,
		TabContent,
		modal,
	},
	/* eslint-disable no-console */
	async mounted() {
		await axios
			.get(this.getQuestionsAPI, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then(
				(response) => {
					this.dataSoal = response.data.data;
				},
				(error) => {
					const res = error;
					console.log(res);
					this.$router.push({ name: "home" });
				}
			);
	},
	/* eslint-enable no-console */
	methods: {
		setFocus: function() {
			// Note, you need to add a ref="search" attribute to your input.
			this.$refs.img.focus();
		},
		toggleAccordion: function() {
			this.isOpen = !this.isOpen;
		},
		toggleLoading: function() {
			this.isLoading = !this.isLoading;
		},
		toggleModal: function() {
			this.isModalVisible = !this.isModalVisible;
		},
		nextTab() {
			return true;
		},
		async skipValidation() {
			this.isValidationSkipped = true;
			this.toggleModal();
			await this.submit();
		},
		/* eslint-disable no-console */
		async submit() {
			this.soal = [];

			for (var i = 1; i <= 21; i++) {
				var getAnswer = document.querySelector(
					"input[type=hidden][name=radio-" + i + "]"
				).value;
				var integerAnswer = parseInt(getAnswer, 10);

				this.soal.push({
					id: this.dataSoal[i - 1].id,
					answer: integerAnswer,
					type: this.dataSoal[i - 1].type,
				});

				this.validasi.push(integerAnswer);
			}

			if (
				this.similarity(this.validasi) > 95 &&
				this.isValidationSkipped == false
			) {
				this.toggleModal();
				return;
			}

			this.toggleLoading();

			//Tiap API yang pake middleware auth harus nyertain token di header
			const config = {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			};

			await axios
				.post(
					this.submitAnswerAPI,
					{
						soal: this.soal,
					},
					config
				)
				.then(
					(response) => (
						(this.output = response.data),
						this.$router.push({
							name: "result",
						})
					)
				)
				.catch(
					(error) => (
						console.log(error.response), (this.output = error.response)
					)
				);
		},

		similarity(list) {
			if (list.length < 1) return 0;
			if (list.length < 2) return 100;

			let listPair = [];
			for (let i = 0; i < list.length - 1; i++)
				listPair.push({ a: list[i], b: list[i + 1] });

			const sum = listPair.reduce(
				(acc, { a, b }) => acc + Math.pow(a - b, 2),
				0
			);

			const calculation = 100 - Math.sqrt(sum);

			return calculation < 0 ? 0 : calculation;
		},
		/* eslint-enable no-console */
	},
	computed: {
		accordionClasses: function() {
			return {
				"is-closed": !this.isOpen,
				"is-primary": this.isOpen,
				"is-dark": !this.isOpen,
			};
		},
		loadingClasses: function() {
			return {
				"spinner opacity-50 pointer-events-none": this.isLoading,
				"": !this.isLoading,
			};
		},
	},
};
</script>

<style>
.wizard-header {
	display: none;
}

i.wizard-icon {
	display: none !important;
}

.tab_shape {
	background-color: white !important;
}

:focus {
	outline: 0;
}

.is-closed .message-body {
	max-height: 0;
}
</style>
