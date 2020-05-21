import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/css/tailwind.css";
import {
	ValidationObserver,
	ValidationProvider,
	extend,
	localize,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import VueClipboard from "vue-clipboard2";
import VueSessionStorage from "vue-sessionstorage";
import VuePageTransition from "vue-page-transition";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faLine,
	faLinkedin,
	faTelegram,
	faTwitterSquare,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
	faUserSecret,
	faFacebookSquare,
	faLine,
	faLinkedin,
	faTelegram,
	faTwitterSquare,
	faWhatsapp
);

// install rules and localization
Object.keys(rules).forEach((rule) => {
	extend(rule, rules[rule]);
});

localize("en", en);

// Install components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VuePageTransition);
Vue.use(VueClipboard);
Vue.use(VueSessionStorage);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
