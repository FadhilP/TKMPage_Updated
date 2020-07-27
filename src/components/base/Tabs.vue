<template>
	<div>
		<nav class="bg-white pt-2">
			<div class="-mb-px flex">
				<a
					v-for="tab in tabs"
					class="no-underline border-b-2 border-transparent tracking-wide font-normal py-5 mr-8 cursor-pointer"
					:class="{
						'blue-riliv': tab.isActive,
						'text-gray-500': tab.isActive == false,
					}"
					@click="selectTab(tab)"
					:key="tab.name"
				>
					<div
						class="pb-1 px-3 border-b-2"
						:class="{
							'border-blue-riliv': tab.isActive,
							'border-white': tab.isActive == false,
						}"
					>
						{{ tab.name }}
					</div>
				</a>
			</div>
		</nav>

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return { tabs: [] };
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab: function(selectedTab) {
			this.tabs.forEach((tab) => {
				tab.isActive = tab.name == selectedTab.name;
			});
		},
	},
};
</script>

<style>
.blue-riliv {
	color: #11cbe1;
}
.border-blue-riliv {
	border-color: #11cbe1;
}
</style>
