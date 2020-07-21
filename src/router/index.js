import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Intro from "../views/Intro.vue";
import Subscribe from "../views/Subscribe.vue";
import Result from "../views/Result.vue";
import Registration from "../views/Registration.vue";
import Error404 from "../views/error/404.vue";
import Error403 from "../views/error/403.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/registration",
		name: "registration",
		component: Registration,
	},
	{
		path: "/test",
		name: "test",
		component: Test,
	},
	{
		path: "/intro",
		name: "intro",
		component: Intro,
	},
	{
		path: "/subscribe",
		name: "subscribe",
		component: Subscribe,
	},
	{
		path: "/result",
		name: "result",
		component: Result,
	},
	{
		path: "/404",
		name: "404",
		component: Error404,
	},
	{
		path: "/403",
		name: "403",
		component: Error403,
	},
	{
		path: "*",
		name: "not found",
		component: Error404,
	},
];

const router = new VueRouter({
	mode: "history",

	routes,
});

export default router;
