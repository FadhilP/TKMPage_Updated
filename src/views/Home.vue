<template>
	<div class="home font-sans">
		<Nav />
		<Header />
		<Faq />
		<Disclaimer />
	</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Faq from "@/components/Faq.vue";
import Disclaimer from "@/components/Disclaimer.vue";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
	container: "body",
	duration: 500,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true,
});

export default {
	name: "home",
	components: {
		Nav,
		Header,
		Faq,
		Disclaimer,
	},
};
</script>
