<template>
  <nb-container>
    <status-bar :barStyle="'light-content'"></status-bar>
    <image-background :source="launchScreenBg" class="imageContainer">
      <nb-grid>
        <nb-row :size="1">
          <view class="text-container">
            <nb-h3 class="text-color-white-header">
              Личный кабинет МФТИ
            </nb-h3>
          </view>
        </nb-row>
        <nb-row :size="10">
          <card
              :item="cardItem"
              v-for="(cardItem, index) in newsArray">
          </card>
        </nb-row>
      </nb-grid>
    </image-background>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import launchScreenBg from "../../../assets/launchscreen-bg.png";
import launchscreenLogo from "../../../assets/logo-kitchen-sink.png";
import card from './card';

export default {
  components: {
    card,
  },
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    newsArray() {
      return [];
    },
  },
  data() {
    return {
      launchScreenBg,
      launchscreenLogo,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8
        },
        logoStyle: {
          left: Platform.OS === "android" ? 40 : 50,
          top: Platform.OS === "android" ? 35 : 60
        },
        btnContainer: {
          backgroundColor: "#6faf98",
          alignSelf: "center"
        }
      }
    };
  },
  methods: {
    handleLetGoBtnPress() {
      this.navigation.openDrawer();
    }
  }
};
</script>

<style>
.imageContainer {
  flex: 1;
}
.text-color-primary {
  color: blue;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.logo {
  position: absolute;
  width: 280;
  height: 100;
}
.text-container {
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  background-color: transparent;
  position: relative;
}
.text-color-white-header {
  margin-top: 15px;
  width: 100%;
  color: white;
  text-align: center;
}
.button-container {
  background-color: #6faf98;
  align-self: center;
}
</style>
