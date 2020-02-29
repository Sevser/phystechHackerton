<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
            transparent
            :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Расписание</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <scroll-view
          v-if="scheduleReady"
          :content-container-style="{contentContainer: {paddingVertical: 20}}">
      </scroll-view>
    </nb-content>

  </nb-container>
</template>
<script>

export default {
  name: 'schedule',
  components: {},
  props: {},
  computed: {
    scheduleReady() {
      return true;
    },
  },
  methods: {},
  data() {
    return {
      schedule: [{
      }],
    };
  },
};
</script>
