<template>
	<div class="font-sans h-screen">
		<div class="flex flex-row justify-center mb-16">
			<img class="h-10 mt-6 object-contain" src="../assets/logo.png" alt="" />
		</div>
		<div class="flex flex-col w-10/12 mx-auto mb-24">
			<p class="mx-auto text-2xl text-gray-800 font-bold">Hasil Tes</p>
			<div class="flex flex-col lg:flex-row mb-10">
				<div class="py-5 mr-10 w-full lg:w-4/12">
					<p class="text-xl">Grafik Hasil</p>
					<div class="w-full">
						<div
							class="absolute z-10 floating"
							:class="{ hidden: this.output.status != '400' }"
							style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
						>
							<p
								class="flex h-8 items-center rounded-lg border p-5 font-semibold bg-gray-100"
							>
								No Data 😞
							</p>
						</div>
						<apexchart
							width="100%"
							height="350"
							type="bar"
							:options="chartOptions"
							:series="series"
							:key="this.series[0].data[0]"
							:class="{ isLoaded: this.output.status == '400' }"
						></apexchart>
					</div>
					<div class="mx-auto border rounded bg-gray-100">
						<div class="my-4 text-sm mx-auto" :class="accordionClasses">
							<div
								class="flex flex-row items-center cursor-pointer"
								@click="toggleAccordion"
							>
								<p class="ml-4 text-base text-gray-800 font-semibold my-2">
									Keterangan Grafik
								</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-8 h-8 mr-2 ml-auto icon-cheveron-down"
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
									class="w-8 h-8 mr-2 ml-auto icon-cheveron-up"
									v-if="isOpen"
								>
									<path
										class="secondary"
										fill-rule="evenodd"
										d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
									></path>
								</svg>
							</div>
							<div class="message-body overflow-hidden">
								<div class="w-10/12 mx-auto mt-6 my-4">
									<ul class="text-gray-800 text-xs">
										<li class="inline-block mb-3 w-6/12">
											<div class="flex flex-row">
												<div
													class="w-6 h-6 rounded-lg"
													style="background-color:#2FD2E5;"
												></div>
												<p class="font-semibold text-gray-700 ml-1 my-auto">
													Normal
												</p>
											</div>
										</li>
										<li class="inline-block mb-3 w-6/12">
											<div class="flex flex-row">
												<div
													class="w-6 h-6 rounded-lg"
													style="background-color:#949ACB;"
												></div>
												<p class="font-semibold text-gray-700 ml-1 my-auto">
													Ringan
												</p>
											</div>
										</li>
										<li class="inline-block mb-3 w-6/12">
											<div class="flex flex-row">
												<div
													class="w-6 h-6 rounded-lg"
													style="background-color:#CF93C1;"
												></div>
												<p class="font-semibold text-gray-700 ml-1 my-auto">
													Sedang
												</p>
											</div>
										</li>
										<li class="inline-block mb-3 w-6/12">
											<div class="flex flex-row">
												<div
													class="w-6 h-6 rounded-lg"
													style="background-color:#F598AE;"
												></div>
												<p class="font-semibold text-gray-700 ml-1 my-auto">
													Parah
												</p>
											</div>
										</li>
										<li class="inline-block mb-3 w-6/12">
											<div class="flex flex-row">
												<div
													class="w-6 h-6 rounded-lg"
													style="background-color:#F58982;"
												></div>
												<p class="font-semibold text-gray-700 ml-1 my-auto">
													Sangat Parah
												</p>
											</div>
										</li>
									</ul>
								</div>
								<table
									class="table-auto w-11/12 table-fixed mx-auto text-gray-700 text-xs text-center leading-snug "
								>
									<thead>
										<tr>
											<th class="px-2 py-2 font-semibold">Level</th>
											<th class="px-2 py-2 font-semibold">Depresi</th>
											<th class="px-2 py-2 font-semibold">Kecemasan</th>
											<th class="px-2 py-2 font-semibold">Stres</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="px-2 py-2">Normal</td>
											<td class="px-2 py-2">0-9</td>
											<td class="px-2 py-2">0-7</td>
											<td class="px-2 py-2">0-14</td>
										</tr>
										<tr class="bg-gray-200">
											<td class="rounded-l px-2 py-2">Ringan</td>
											<td class="px-2 py-2">10-13</td>
											<td class="px-2 py-2">8-9</td>
											<td class="rounded-r px-2 py-2">15-18</td>
										</tr>
										<tr>
											<td class="px-2 py-2">Sedang</td>
											<td class="px-2 py-2">14-20</td>
											<td class="px-2 py-2">10-14</td>
											<td class="px-2 py-2">19-25</td>
										</tr>
										<tr class="bg-gray-200">
											<td class="rounded-l px-2 py-2">Parah</td>
											<td class="px-2 py-2">21-27</td>
											<td class="px-2 py-2">15-19</td>
											<td class="rounded-r px-2 py-2">26-33</td>
										</tr>
										<tr>
											<td class="px-2 py-2">Sangat Parah</td>
											<td class="px-2 py-2">28+</td>
											<td class="px-2 py-2">20+</td>
											<td class="px-2 py-2">34+</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full md:w-8/12 mx-auto md:ml-0">
					<tabs>
						<tab name="Depresi" :selected="true">
							<p class="my-1 text-sm text-gray-800">
								<em>
									DEPRESI merupakan gangguan perasaan (afek) yang ditandai
									dengan perasaan kehilangan kegembiraan/gairah hidup yang
									disertai dengan gejala-gejala lain, seperti gangguan tidur dan
									gangguan selera makan. (Lumongga Lubis, 2009).
								</em>
							</p>
							<p class="mt-4 text-sm text-gray-800">
								<em>
									Depresi biasanya terjadi saat stres yang dialami oleh
									seseorang tidak kunjung reda. Depresi yang dialami biasanya
									berkorelasi dengan kejadian traumatis yang baru saja terjadi
									atau menimpa seseorang, misalnya kematian seseorang yang
									sangat dicintai atau kehilangan pekerjaan yang sangat disukai.
									(Lumongga Lubis, 2009).
								</em>
							</p>
							<p class="mt-4">
								Berdasarkan jawaban yang Anda berikan, jika pengkategorian hasil
								tes Anda <strong>normal, ringan atau sedang,</strong> maka Anda
								sebaiknya melakukan perawatan diri dan menjaga perhatian kepada
								hal-hal yang mungkin menimbulkan perasaan depresi secara
								berkala.<br />Anda bisa melakukan kegiatan self-care seperti
								<strong>meditasi</strong>
								sebagai langkah pencegahan dari perasaan stres/cemas yang dapat
								memicu depresi.
							</p>
							<p class="mt-4">
								Jika pengkategorian hasil tes Anda
								<strong>sedang, parah atau sangat parah,</strong>
								mungkin Anda merasakan satu atau beberapa kondisi di bawah ini:
							</p>
							<ul class="w-10/12 list-disc list-outside ml-6 my-4 text-md">
								<li class="my-2">
									Kehilangan ketertarikan dan tidak mendapatkan lagi kesenangan
									dari aktivitas yang disukai
								</li>
								<li class="my-2">
									Berat badan menurun (tanpa melakukan program diet) atau naik
									secara drastis
								</li>
								<li class="my-2">
									Mengalami peningkatan atau penurunan nafsu makan
								</li>
								<li class="my-2">
									Insomnia (kesulitan tidur) atau hipersomnia (terus-menerus
									ingin tidur)
								</li>
								<li class="my-2">
									Terus merasa lelah atau tidak berenergi
								</li>
								<li class="my-2">
									Perasaan tidak berharga atau bersalah yang berlebihan
								</li>
								<li class="my-2">
									dsb.
								</li>
							</ul>
							<p class="mt-4">
								<strong>
									Untuk memastikan kondisi kesehatan mental Anda lebih lanjut
									dapat dikonsultasikan dengan psikolog profesional. Segera
									berkonsultasi dengan psikolog untuk mendapatkan diagnosa resmi
									dan bantuan profesional yang terpercaya.</strong
								>
							</p>
						</tab>
						<tab name="Kecemasan">
							<p class="my-1 text-sm text-gray-800">
								<em>
									Kecemasan adalah tanggapan dari sebuah ancaman, nyata ataupun
									khayal. (Lumongga Lubis, 2009).</em
								>
							</p>
							<p class="mt-4 text-sm text-gray-800">
								<em>
									Individu mengalami kecemasan karena adanya ketidakpastian di
									masa mendatang. Misalnya, seseorang yang menghadapi masalah
									penting dan belum mendapat penyelesaian yang pasti. Kecemasan
									juga bisa berkembang menjadi suatu gangguan jika menimbulkan
									ketakutan yang hebat dan menetap pada individu tersebut.
									(Lumongga Lubis, 2009).</em
								>
							</p>
							<p class="mt-4">
								Berdasarkan jawaban yang Anda berikan, jika pengkategorian hasil
								tes Anda <strong>normal, ringan atau sedang,</strong> maka Anda
								sebaiknya melakukan perawatan diri dan menjaga perhatian kepada
								hal-hal yang mungkin menimbulkan perasaan depresi secara
								berkala.<br />Anda bisa melakukan kegiatan self-care seperti
								<strong>meditasi</strong>
								sebagai langkah pencegahan dari perasaan stres/cemas yang dapat
								memicu depresi.
							</p>
							<p class="mt-4">
								Jika pengkategorian hasil tes Anda
								<strong>sedang, parah atau sangat parah,</strong>
								mungkin Anda merasakan satu atau beberapa kondisi di bawah ini:
							</p>
							<ul class="w-10/12 list-disc list-outside ml-6 my-4 text-md">
								<li class="my-2">
									Sulit mengendalikan kekhawatiran
								</li>
								<li class="my-2">Merasa gelisah atau tegang</li>
								<li class="my-2">Menjadi mudah lelah</li>
								<li class="my-2">
									Kesulitan berkonsentrasi atau pikiran menjadi kosong
								</li>
								<li class="my-2">
									Mengalami gangguan tidur (sulit tidur atau tertidur, kurang
									tidur)
								</li>
								<li class="my-2">dsb.</li>
							</ul>
							<p class="mt-4">
								<strong>
									Untuk memastikan kondisi kesehatan mental Anda lebih lanjut
									dapat dikonsultasikan dengan psikolog profesional. Segera
									berkonsultasi dengan psikolog untuk mendapatkan diagnosa resmi
									dan bantuan profesional yang terpercaya.</strong
								>
							</p>
						</tab>
						<tab name="Stres">
							<p class="my-1 text-sm text-gray-800">
								<em>
									Stres merupakan bentuk interaksi antara individu dengan
									lingkungannya, yang dinilai sebagai sesuatu yang membebani
									atau melampaui kemampuan yang dimilikinya, serta mengancam
									kesejahteraannya. Stres merupakan fenomena individual dan
									menunjukkan respons individu terhadap tuntutan lingkungan.
									(Lazarus, 1984).</em
								>
							</p>
							<p class="mt-4 text-sm text-gray-800">
								<em>
									Secara terus-menerus individu akan menilai tuntutan dan
									hambatan yang terdapat dalam lingkungan, serta menilai
									kemampuan dirinya untuk mengatasi tuntutan tersebut. Apabila
									individu merasakan ketidakseimbangan antara tuntutan dengan
									kemampuan yang dimilikinya, maka stres akan muncul. Tuntutan
									yang secara umum dapat memunculkan stres dapat
									diklasifikasikan dalam beberapa bentuk, yaitu frustasi,
									konflik, tekanan, dan ancaman (Lumongga Lubis, 2009).
								</em>
							</p>
							<p class="mt-4">
								Berdasarkan jawaban yang Anda berikan, jika pengkategorian hasil
								tes Anda <strong>normal, ringan atau sedang,</strong> maka Anda
								sebaiknya melakukan perawatan diri dan menjaga perhatian kepada
								hal-hal yang mungkin menimbulkan perasaan depresi secara
								berkala.<br />Anda bisa melakukan kegiatan self-care seperti
								<strong>meditasi</strong>
								sebagai langkah pencegahan dari perasaan stres/cemas yang dapat
								memicu depresi.
							</p>
							<p class="mt-4">
								Jika pengkategorian hasil tes Anda
								<strong>sedang, parah atau sangat parah,</strong>
								mungkin Anda merasakan satu atau beberapa kondisi di bawah ini:
							</p>
							<ul class="w-10/12 list-disc list-outside ml-6 my-4 text-md">
								<li class="my-2">Berkurangnya konsentrasi atau fokus</li>
								<li class="my-2">Merasa kesepian</li>
								<li class="my-2">Nyeri dada, detak jantung yang cepat</li>
								<li class="my-2">Gangguan pencernaan, sakit perut</li>
								<li class="my-2">
									Terus merasa gugup, gusar, dan/atau gelisah
								</li>
								<li class="my-2">
									Kehilangan nafsu makan atau terlalu banyak makan
								</li>
								<li class="my-2">dsb.</li>
							</ul>
							<p class="mt-4">
								<strong>
									Untuk memastikan kondisi kesehatan mental Anda lebih lanjut
									dapat dikonsultasikan dengan psikolog profesional. Segera
									berkonsultasi dengan psikolog untuk mendapatkan diagnosa resmi
									dan bantuan profesional yang terpercaya.</strong
								>
							</p>
						</tab>
					</tabs>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center mt-12 bg-riliv-soft">
			<div class="flex flex-col pb-24 pt-24 md:flex-row w-11/12 md:w-8/12">
				<div class="overflow-hidden md:pl-0 lg:pl-12">
					<img
						class="min-w-0 object-contain h-auto mb-8 lg:m-0 mx-auto hidden sm:block"
						src="../assets/illustration-doctor.png"
					/>
					<img
						class="min-w-0 object-contain h-auto mb-8 lg:m-0 mx-auto block sm:hidden"
						src="../assets/illustration-doctor.png"
						style="max-width: 300px"
					/>
				</div>
				<div
					class="flex flex-col text-center md:text-left text-gray-800 my-auto md:ml-16"
				>
					<p class="text-3xl font-semibold">
						Terima kasih telah mencari tahu kondisi kesehatan mental Anda
					</p>
					<p class="text-xl leading-relaxed mt-2" style="max-width: 700px;">
						Tes ini merupakan langkah awal yang tepat dalam memahami kondisi
						kesehatan mental Anda saat ini.<br /><br />
						Anda dapat menggunakan layanan Riliv untuk berkonsultasi dengan
						psikolog profesional dan nikmati akses beragam konten meditasi yang
						membantu Anda lebih mindful setiap hari.
					</p>
					<div class="w-5/12 md:w-4/12 mx-auto md:mx-0 mt-4">
						<v-button
							class="py-3 text-xs"
							msg="Coba Aplikasi Sekarang"
							@click.native="cobaAplikasi()"
						></v-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/base/Tabs.vue";
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
// import modal from "@/components/Modal.vue";

import ungu from "../assets/bg_ungu.png";
import orange from "../assets/bg_orange.png";
import biru from "../assets/bg_biru.png";

export default {
	components: {
		"v-button": Button,
		Tabs,
		Tab,
		apexchart: VueApexCharts,
	},
	data: function() {
		return {
			isOpen: true,
			isModalVisible: [false, false],
			couponCode: "RILIVSURABAYAMU",
			isLoading: true,
			response: "",
			user_id: "",
			isValid: false,
			checkTokenAPI: process.env.VUE_APP_CHECK_TOKEN_API,
			getResultAPI: process.env.VUE_APP_GET_RESULT_API,
			background: {
				ungu,
				orange,
				biru,
			},
			output: [],
			level: [],
			series: [
				{
					name: "Score",
					data: [0, 0, 0],
				},
			],
			chartOptions: {
				chart: {
					id: "vuechart-example",
				},
			},
		};
	},
	async mounted() {
		this.user_id = localStorage.getItem("identifier");
		// Check token
		await this.getData();
	},
	methods: {
		cobaAplikasi() {
			window.location.href =
				"https://play.google.com/store/apps/details?id=nozero.apps1";
		},
		/* eslint-disable no-console */
		getColor(score, type) {
			if (type === "Depresi") {
				// Depresi
				if (score >= 0 && score <= 9) {
					return "#2FD2E5";
				} else if (score >= 10 && score <= 13) {
					return "#949ACB";
				} else if (score >= 14 && score <= 20) {
					return "#CF93C1";
				} else if (score >= 21 && score <= 27) {
					return "#F598AE";
				} else {
					return "#F58982";
				}
			} else if (type === "Kecemasan") {
				// Kecemasan
				if (score >= 0 && score <= 7) {
					return "#2FD2E5";
				} else if (score >= 8 && score <= 9) {
					return "#949ACB";
				} else if (score >= 10 && score <= 14) {
					return "#CF93C1";
				} else if (score >= 15 && score <= 19) {
					return "#F598AE";
				} else {
					return "#F58982";
				}
			} else {
				// Stres
				if (score >= 0 && score <= 14) {
					return "#2FD2E5";
				} else if (score >= 15 && score <= 18) {
					return "#949ACB";
				} else if (score >= 19 && score <= 25) {
					return "#CF93C1";
				} else if (score >= 26 && score <= 33) {
					return "#F598AE";
				} else {
					return "#F58982";
				}
			}
		},
		toggleAccordion: function() {
			this.isOpen = !this.isOpen;
		},
		toggleLoading: function() {
			this.isLoading = !this.isLoading;
		},
		toggleModal(index) {
			// Sebenernya equivalent sama baris dibawah yang saya command,
			// cuma ternyata vue gabisa deteksi perubahan array secara langsung
			// jadi harus pake splice biar dia nge-remove trs assign value yang baru

			// this.isModalVisible[index] = !this.isModalVisible[index]
			this.isModalVisible.splice(index, 1, !this.isModalVisible[index]);
		},
		doCopy() {
			this.$copyText(this.couponCode).then(
				function() {
					alert(
						"Kode voucher berhasil di salin! \n \nAnda bisa memasukkan kode voucher di atas dalam aplikasi RILIV untuk mendapatkan GRATIS satu bulan Meditasi bersama Riliv Hening"
					);
				},
				function() {
					alert("Failed");
				}
			);
		},

		async checkTokenData() {},

		/* eslint-disable no-console */
		async getData() {
			//Tiap API yang pake middleware auth harus nyertain token di header
			const config = {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			};

			await axios.get(this.getResultAPI, config).then(
				(response) => (
					(this.output = response.data.data),
					(this.level = [
						this.output.depression_level,
						this.output.anxiety_level,
						this.output.stress_level,
					]),
					(this.series = [
						{
							name: "Grafik Hasil",
							data: [
								this.output.depression_score,
								this.output.anxiety_score,
								this.output.stress_score,
							],
						},
					]),
					(this.chartOptions = {
						chart: {
							id: "vuechart-example",
						},
						xaxis: {
							categories: ["Depresi", "Kecemasan", "Stres"],
						},
						yaxis: {
							max: 42,
							tickAmount: 4,
						},
						tooltip: {
							enabled: false,
						},
						plotOptions: {
							bar: {
								distributed: true,
							},
						},
						colors: [
							this.getColor(this.output.depression_score, "Depresi"),
							this.getColor(this.output.anxiety_score, "Kecemasan"),
							this.getColor(this.output.stress_score, "Stres"),
						],
					})
				),
				(error) => {
					const res = error;
					console.log(res.data);
					this.$router.push({ name: "home" });
				}
			);
		},
	},
	computed: {
		accordionClasses: function() {
			return {
				"is-closed": !this.isOpen,
				"": this.isOpen,
			};
		},
	},
};
</script>
<style>
.bg-riliv-soft {
	background-color: #e2f8fa;
}
.isLoaded {
	filter: blur(5px);
}

.floating {
	animation-name: floating;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
}
.is-closed .message-body {
	max-height: 0;
}

@keyframes floating {
	from {
		transform: translate(-50%, -10px);
	}
	65% {
		transform: translate(-50%, 0px);
	}
	to {
		transform: translate(-50%, -10px);
	}
}
</style>
