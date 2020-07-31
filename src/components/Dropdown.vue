<template>
	<BaseAccordion v-bind="$attrs" v-on="$listeners">
		<div slot-scope="props" class="accordion-list p-4">
			<div
				class="accordion-wrapper mx-auto"
				v-for="(item, index) in items"
				v-bind:key="`dropdown${item.title.toLowerCase()}-${index}`"
			>
				<div class="accordion my-2 flex flex-col">
					<div
						@click="
							props.handleItemClick(index);
							toggleClass();
						"
						class="flex accordion-title cursor-pointer p-4 text-2xl font-semibold text-gray-800 items-center"
					>
						{{ item.title }}
						<div class="flex flex-wrap">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="w-8 h-8 mr-4 icon-cheveron-down"
								v-if="!props.openIndexes.includes(index)"
							>
								<path
									fill-rule="evenodd"
									d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
								></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="w-8 h-8 mr-4 icon-cheveron-up"
								v-if="props.openIndexes.includes(index)"
							>
								<path
									class="secondary"
									fill-rule="evenodd"
									d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
								></path>
							</svg>
						</div>
					</div>
					<div>
						<table class="w-full">
							<tr>
								<td>
									<div class="bg-gray-300 h-px">&zwnj;</div>
								</td>
							</tr>
						</table>
					</div>
					<transition name="fade">
						<div
							v-if="props.openIndexes.includes(index)"
							class="flex-1 accordion-content"
						>
							<div class="content p-4 text-lg text-gray-800">
								<span v-html="item.content"></span>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</BaseAccordion>
</template>

<script>
import BaseAccordion from "./base/BaseAccordion";

export default {
	props: ["items"],
	components: {
		BaseAccordion,
	},
	/* eslint-disable no-console */
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s, border 0s;
	/*max-height: 350px;*/
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	max-height: 0px;
	overflow: hidden;
}
</style>
