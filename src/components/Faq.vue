<template>
	<div class="container mx-auto pt-16 p-4 lg:px-48 items-center">
		<!--Center-->
		<div class="justify-center pb-40">
			<h1
				class="pb-4 text-4xl md:text-5xl text-gray-800 text-center font-sans font-semibold"
			>
				Mengenai Tes Kesehatan Mental
			</h1>
			<div>
				<dropdown v-bind:items="items"> </dropdown>
			</div>
		</div>
	</div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

export default {
	components: {
		dropdown: Dropdown,
	},
	data() {
		return {
			items: [
				{
					title: "Apa itu tes kesehatan mental?",
					content: `
						<span>
							Tes kesehatan mental ini merupakan <em>screening</em> awal agar
							Anda dapat mengetahui kondisi kesehatan mental Anda. Sehingga,
							Anda bisa memahami bagaimana kondisi Anda dan menentukan langkah
							selanjutnya.
						</span>`,
				},
				{
					title: "Alat ukur apa yang digunakan dalam tes kesehatan mental ini?",
					content: `
						<span>
							Alat ukur yang digunakan pada tes ini adalah DASS21 (<em>Depression
							Anxiety Stress Scale</em>). Alat ukur ini berupa satu set yang terdiri
							dari tiga skala penilaian pribadi untuk mengukur kondisi emosional
							dari depresi, kecemasan dan stres
						</span>`,
				},
				{
					title: "Apa manfaatnya tes kesehatan mental ini bagi saya?",
					content: `
						<span>
							Tes ini membantu Anda mendapat gambaran kesehatan mental Anda
							secara umum. Anda dapat melakukan tes ini sebagai acuan untuk
							mendapat bantuan psikologis dengan profesional.
						</span>
					`,
				},
			],

			//msg: "Welcome to Your Vue.js App"
		};
	},
};
</script>

<style></style>
