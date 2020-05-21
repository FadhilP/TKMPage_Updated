<template>
	<button
		class="w-full font-sans text-sm font-semibold text-white rounded shadow focus:outline-none"
		:class="custom"
		:style="style"
	>
		{{ msg }}
	</button>
</template>
<script>
// { 'text-cyan-500': variant == 'alternative', 'background-image:linear-gradient(273deg,#f46b5a,#f5a623)': variant == '' || variant == 'default' }

export default {
	name: "Button",
	props: {
		msg: String,
		variant: {
			type: String,
			default: null,
		},
	},
	computed: {
		style() {
			if (this.variant == "default") {
				return "background-image:linear-gradient(273deg,#f46b5a,#f5a623)";
			} else if (this.variant == "alternative") {
				return "";
			} else {
				return "background-image:linear-gradient(273deg,#f46b5a,#f5a623)";
			}
		},
		custom() {
			if (this.variant == "alternative") {
				return "hover:bg-gray-100 hover:text-gray-700 border-2 border-gray-200 transition ease-in-out duration-300 bg-transparent shadow-none";
			} else {
				return "hover:shadow-outline-orange transition ease-in-out duration-300";
			}
		},
	},
};
</script>

<style></style>
