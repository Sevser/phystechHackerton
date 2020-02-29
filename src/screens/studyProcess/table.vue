<template>
	<view class="table-container">
		<view
				class="table-row"
				:key="index"
				v-for="(item, index) in dataToShow">
			<text class="subtitle">
				{{item.label}}
			</text>
			<text  class="value">
				{{item.value}}
			</text>
		</view>
	</view>
</template>

<script>

export default {
  name: 'table',
  components: {},
  props: {
    dataToShow: Array,
	},
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style>

	.table-container {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: gray;
	}

	.table-row {
		border-width: 1px;
		border-style: solid;
		border-color: gray;
		border-bottom-width: 0;
		display: flex;
		padding-left: 5px;
		flex-direction: row;
	}
	.subtitle {
		width: 50%;
		border-right-width: 1px;
		border-right-color: gray;
		border-style: solid;
		padding-left: 5px;
		font-weight: bold;
	}
	.value {
		width: 49%;
	}
</style>
