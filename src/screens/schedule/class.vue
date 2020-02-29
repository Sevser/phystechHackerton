<template>
	<view class="class-container">
		<view class="class-period">
			<nb-text class="class-period-time">{{item.begin}}</nb-text>
			<view class="class-period-separator">
			</view>
			<nb-text class="class-period-time">{{item.end}}</nb-text>
		</view>
		<view class="class-description">
			<nb-text>{{item.label}}</nb-text>
			<nb-text>{{item.lecturer}}</nb-text>
			<nb-text>{{item.office}}</nb-text>
		</view>
	</view>
</template>

<script>

export default {
  name: 'class',
  components: {},
  props: {
    item: Object,
	},
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style>

	.class-container {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		margin-bottom: 25px;
	}
	.class-period {
		margin-right: 20px;
		margin-left: 3%;
		width: 17%;
		background-color: dodgerblue;
		display: flex;
		border-radius: 10px;
		padding: 0;
		flex-direction: column;
		position: relative;
	}
	.class-period-time {
		text-align: center;
		margin-top: 8px;
		margin-bottom:8px;
		font-size: 16px;
		color: white;
	}
	.class-period-separator {
		height: 20px;
		border-color: white;
		border-right-width: 1px;
		width: 49%;
	}
	.class-description {
		display: flex;
		flex-direction: column;
		padding-top: 15px;
		padding-left: 0;
		padding-right: 0;
		padding-bottom: 15px;
		width: 80%;
	}
</style>
