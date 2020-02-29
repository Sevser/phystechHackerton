<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-content :style="{ paddingTop: '50%' }" padder>
      <nb-form>
        <nb-item fixedLabel>
          <nb-label>Username</nb-label>
          <nb-input v-model="username"/>
        </nb-item>
        <nb-item fixedLabel>
          <nb-label>Password</nb-label>
          <nb-input v-model="password" secureTextEntry />
        </nb-item>
      </nb-form>
      <nb-button :onPress="handleInputData" :disabled="canAuth" block :style="{ margin: 15, marginTop: 50 }">
        <nb-text >Sign In</nb-text>
      </nb-button>
    </nb-content>

  </nb-container>
</template>
<script>
import { Toast } from "native-base";
import { bus } from '../../event bus';

export default {
  components: { },
  data() {
    return {
      username: 'sevser39@gmail.com',
      password: '1qwerQWER',
    };
  },
  props: {
    onLogin: Function,
  },
  computed: {
    canAuth() {
      return !(this.password && this.username);
    },
  },
  created() {
  },
  methods: {
    handleInputData(event) {
      bus.$emit('login', {
        username: this.username,
        password: this.password,
      });
    }
  }
};

</script>
<style>
</style>
