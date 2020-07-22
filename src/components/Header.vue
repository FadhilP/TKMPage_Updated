<template>
	<div class="flex lg:w-11/12 pt-20 lg:pt-32 px-8 sm:px-12 mx-auto">
		<!--Left Col-->
		<div class="flex-col items-center lg:max-w-xl">
			<img
				class="object-contain lg:hidden w-6/12 md:w-4/12 mx-auto py-6"
				src="../assets/section-1.png"
				alt=""
			/>
			<h1
				class="my-4 text-4xl lg:text-5xl text-gray-800 leading-tight text-center lg:text-left slide-in-bottom-h1 font-sans font-semibold"
			>
				Cek Kesehatan Anda!
			</h1>
			<p
				class="w-full md:w-10/12 lg:w-full mx-auto pt-3 text-gray-700 text-base text-lg lg:text-2xl mb-8 text-center lg:text-left slide-in-bottom-subtitle leading-relaxed"
			>
				Langkah pertama menjadi bahagia adalah dengan menyadari kondisi
				kesahatan mental Anda saat ini. <br />Riliv berkomitmen memberikan
				layanan kesehatan mental terintegratif mulai dari pengetahuan hingga
				cara penanganan.
			</p>
			<div
				class="w-9/12 sm:w-4/12 lg:w-6/12 mx-auto lg:ml-0 lg:block pt-4 shadow-lg"
			>
				<v-button
					v-scroll-to="'.scroll-here'"
					class="mx-auto py-4"
					msg="Mulai Assessment Sekarang"
				></v-button>
			</div>
			<div class="flex flex-row pt-10 justify-center lg:justify-start">
				<div class="flex flex-col">
					<img
						class="object-contain h-16 lg:h-32 px-5 pl-0"
						src="../assets/logo-kotamadya.png"
						alt=""
					/>
				</div>
				<div class="flex flex-col">
					<img
						class="object-contain h-16 lg:h-32 px-5"
						src="../assets/logo-dinkes.png"
						alt=""
					/>
				</div>
			</div>
		</div>
		<!--Right Col-->
		<div class="hidden xl:flex w-5/12 xl:w-7/12 items-end flex-col pt-10 pl-20">
			<img class="object-contain" src="../assets/section-1.png" alt="" />
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
	components: {
		"v-button": Button,
	},
};
</script>

<style></style>
