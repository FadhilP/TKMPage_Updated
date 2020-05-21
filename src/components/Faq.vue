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
				<dropdown
					:items="items"
					class="w-full lg:w-10/12 xl:w-full mx-auto"
				></dropdown>
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
					contents: `Kamu bisa mencoba tes kesehatan mental di bawah ini secara gratis. Tujuannya adalah membantu kamu mengetahui kondisi kesehatan mentalmu. Kamu pun bisa menentukan langkah selanjutnya. Jangan khawatir: seluruh data dan hasil tes kamu bersifat rahasia!
                `,
				},
				{
					title: "Metode apa yang digunakan untuk mengetes?",
					contents: `Dalam tes ini, metode yang digunakan adalah DASS21. Dengan metode ini, dapat diketahui gambaran awal kondisi kesehatan mental yang terkait depresi, kecemasan, dan stres.`,
				},
				{
					title: "Apa manfaatnya tes kesehatan mental ini bagi saya?",
					contents: `Tes ini membantu Anda mendapat gambaran kesehatan mental Anda secara umum. Gunakan tes ini sebagai acuan untuk mendapat bantuan psikologis dengan profesional.`,
				},
			],
			//msg: "Welcome to Your Vue.js App"
		};
	},
};
</script>

<style></style>
