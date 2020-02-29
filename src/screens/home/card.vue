<template>
	<nb-card>
		<nb-card-item bordered>
			<nb-left>
				<nb-thumbnail :source="logo"></nb-thumbnail>
				<nb-body>
					<nb-text>{{cardItem.label}}</nb-text>
					<nb-text note>{{cardItem.data}}</nb-text>
				</nb-body>
			</nb-left>
		</nb-card-item>

		<nb-card-item>
			<nb-body>
				<image
						:url="cardItem.url"
						:source="cardImage"
						class="card-item-image"
						:style="stylesObj.cardItemImage"
				/>
				<nb-text>{{cardItem.description}}</nb-text
				>
			</nb-body>
		</nb-card-item>

		<nb-card-item :style="{ paddingVertical: 0 }">
			<nb-left>
				<nb-button transparent>
					<nb-icon name="logo-github"></nb-icon>
					<nb-text>{{cardItem.countViewe}}</nb-text>
				</nb-button>
			</nb-left>
		</nb-card-item>
	</nb-card>
</template>

<script>

export default {
  name: 'card',
  components: {},
  props: {
    cardItem: Object,
	},
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style>

</style>
