<template>
	<nb-card>
		<nb-card-item bordered>
			<nb-left>
				<nb-body>
					<nb-text>{{cardItem.label}}</nb-text>
					<nb-text note>{{cardItem.data}}</nb-text>
				</nb-body>
			</nb-left>
		</nb-card-item>

		<nb-card-item>
			<nb-body>
				<image
						:source="{ uri: cardItem.img }"
						:style="stylesObj.cardItemImage"
						class="card-item-image"
				/>
				<nb-text>{{cardItem.desc}}</nb-text>
			</nb-body>
		</nb-card-item>

		<nb-card-item :style="{ paddingVertical: 0 }">
			<nb-left>
				<nb-button transparent>
					<nb-icon name="logo-github"></nb-icon>
					<nb-text>{{cardItem.countViews}}</nb-text>
				</nb-button>
			</nb-left>
		</nb-card-item>
	</nb-card>
</template>

<script>
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
export default {
  name: 'card',
  components: {},
  props: {
    cardItem: Object,
	},
  computed: {},
  methods: {},
  data() {
    return {
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        }
      },
    };
  },
};
</script>

<style>

</style>
