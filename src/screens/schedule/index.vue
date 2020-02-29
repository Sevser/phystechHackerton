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

    <nb-tabs :renderTabBar="getScollableTabComp">
      <nb-tab
          v-for="(scheduleDay, index) in scheduleList"
          :heading="scheduleDay.header">
        <text>{{scheduleDay.header}}</text>
      </nb-tab>
    </nb-tabs>

  </nb-container>
</template>
<script>
import React from "react";
import { ScrollableTab } from "native-base";

export default {
  name: 'schedule',
  components: {},
  props: {},
  computed: {
    scheduleReady() {
      return true;
    },
    scheduleList() {
      return [{
        header: 'Понедельник',
        classes: [{
          label: 'Матан',
          office: '250 аудитория',
          lecturer: 'к. ф. м. наук Здор А.Г.',
          type: 1, // 1 семинар, 2 лекция
          begin: '',
          end: '',
          notice: '',
        }],
      }, {
        header: 'Вторник',
        classes: [{

        }],
      }, {
        header: 'Среда',
        classes: [{

        }],
      }, {
        header: 'Четверг',
        classes: [{

        }],
      }, {
        header: 'Пятница',
        classes: [{

        }],
      }, {
        header: 'Суббота',
        classes: [{

        }],
      }, {
        header: 'Воскресенье',
        classes: [{

        }],
      }];
    },
  },
  methods: {
    getScollableTabComp() {
      return <ScrollableTab />;
    },
  },
  data() {
    return {
    };
  },
};
</script>
