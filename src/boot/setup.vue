<template>
  <view class="container">
    <app-loading v-if="!isAppReady || authRequest"> </app-loading>
    <app v-if="isAppReady && isAuth"></app>
    <login :onLogin="handleLogin" v-if="isAppReady && !isAuth"></login>
    <text>{{error}}</text>
  </view>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import login from '../screens/login/index';
import axios from 'axios';
import { Toast } from "native-base";

import { bus } from "../event bus";
import App from "../App.vue";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

export default {
  components: { App, AppLoading, login },
  data() {
    return {
      isAppReady: false,
      token: '',
      authRequest: false,
      error: '',
    };
  },
  computed: {
    isAuth() {
      return !!this.token;
    },
  },
  created() {
    this.loadFonts();
  },
  mounted() {
    bus.$on('login', this.handleLogin);
  },
  methods: {
    async handleLogin(loginParams) {
      this.authRequest = true;
      try {
        const authResult = await axios.get('http://virtserver.swaggerhub.com/SlavikMIPT/PhystechHack/1.0.0/inventory');
        this.error = authResult.data;
        this.token = authResult.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.authRequest = false;
      }
    },
    async loadFonts() {
      try {
        this.isAppReady = false;
        await Font.loadAsync({
          Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("../../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>
