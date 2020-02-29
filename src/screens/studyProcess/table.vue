<template>
	<view>
		<view
				class="table-row"
				:key="index"
				v-for="(item, index) in dataToShow">
			<text>
				{{item.label}}
			</text>
			<text>
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

	.table-row {
		border-width: 1px;
		border-style: solid;
		border-color: gray;
	}
</style>
