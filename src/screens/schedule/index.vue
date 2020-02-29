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
          office: '306 аудитория',
          lecturer: 'к.ф.м. наук Ковалев В. П..',
          type: 2, // 1 семинар, 2 лекция
          begin: '9:00',
          end: '10:25',
          notice: '',
        }, {
          label: 'Дискретная математика',
          office: '250 аудитория',
          lecturer: 'к.ф.м. наук Здор А.Г.',
          type: 2, // 1 семинар, 2 лекция
          begin: '10:35',
          end: '12:00',
          notice: '',
        }, {
          label: 'Архитектура ЭВМ',
          office: '250 аудитория',
          lecturer: 'к.ф.м. наук Проворов С.С.',
          type: 2, // 1 семинар, 2 лекция
          begin: '12:10',
          end: '13:45',
          notice: '',
        }],
      }, {
        header: 'Вторник',
        classes: [{
          label: 'Линейная алгебра',
          office: '306 аудитория',
          lecturer: 'к. ф. м. наук Бурмистров А.Н.',
          type: 2, // 1 семинар, 2 лекция
          begin: '9:00',
          end: '10:25',
          notice: '',
        }, {
          label: 'Линейная алгебра',
          office: '306 аудитория',
          lecturer: 'к.ф.м. наук Бурмистров А.Н.',
          type: 1, // 1 семинар, 2 лекция
          begin: '10:35',
          end: '12:00',
          notice: '',
        }, {
          label: 'Архитектура ЭВМ',
          office: '209 аудитория',
          lecturer: 'к.ф.м. наук Подаруев В.Ю.',
          type: 1, // 1 семинар, 2 лекция
          begin: '13:45',
          end: '15:10',
          notice: '',
        }, {
          label: 'Архитектура ЭВМ',
          office: '209 аудитория',
          lecturer: 'к. ф. м. наук Подаруев В.Ю.',
          type: 1, // 1 семинар, 2 лекция
          begin: '15:10',
          end: '16:45',
          notice: '',
        }],
      }, {
        header: 'Среда',
        classes: [{
          label: 'Матан',
          office: '306 аудитория',
          lecturer: 'к.ф.м. наук Ковалев В. П..',
          type: 2, // 1 семинар, 2 лекция
          begin: '9:00',
          end: '10:25',
          notice: '',
        }, {
            label: 'Английский язык',
            office: '237 аудитория',
            lecturer: 'к.и.н. Бирюкова Е.В.',
            type: 1, // 1 семинар, 2 лекция
            begin: '10:25',
            end: '12:00',
            notice: '',
          }, {
          label: 'Матан',
          office: '224 аудитория',
          lecturer: 'к.ф.м. наук Ковалев В. П..',
          type: 1, // 1 семинар, 2 лекция
          begin: '13:55',
          end: '15:10',
          notice: '',
        },{
          label: 'Матан',
          office: '224 аудитория',
          lecturer: 'к.ф.м. наук Ковалев В. П..',
          type: 1, // 1 семинар, 2 лекция
          begin: '15:20',
          end: '16:45',
          notice: '',
        }],
      }, {
        header: 'Четверг',
        classes: [{
          label: 'Общая физика: термодинамика',
          office: '314 аудитория',
          lecturer: 'к.ф.м. наук Козлов В.Ф.',
          type: 2, // 1 семинар, 2 лекция
          begin: '9:00',
          end: '10:25',
          notice: '',
        }, {
          label: 'Лабораторный практикум',
          office: '341 аудитория',
          lecturer: 'к.ф.м. наук Козлов В.Ф.',
          type: 2, // 1 семинар, 2 лекция
          begin: '10:35',
          end: '12:00',
          notice: '',
        }, {
          label: 'Дискретная математика',
          office: '250 аудитория',
          lecturer: 'к.ф.м. наук Беспорточный А.И.',
          type: 1, // 1 семинар, 2 лекция
          begin: '13:55',
          end: '15:10',
          notice: '',
        }, {
          label: 'Языки и методы программирования',
          office: '217 аудитория',
          lecturer: 'к.ф.м. наук Прооворов С.С.',
          type: 1, // 1 семинар, 2 лекция
          begin: '15:20',
          end: '16:45',
          notice: '',
        }, {
          label: 'Общая физика: семинар',
          office: '409 аудитория',
          lecturer: 'к.ф.м. наук Козлов В.Ф.',
          type: 1, // 1 семинар, 2 лекция
          begin: '16:55',
          end: '18:20',
          notice: '',
        }],
      }, {
        header: 'Пятница',
        classes: [{
          label: 'Алгоритмы и структуры данных',
          office: '241 аудитория',
          lecturer: 'к.ф.м. наук Анохин Ю.В.',
          type: 2, // 1 семинар, 2 лекция
          begin: '9:00',
          end: '10:25',
          notice: '',
        }, {
          label: 'Английский язык',
          office: '237 аудитория',
          lecturer: 'к.ф.м. наук Бирюкова Е.В.',
          type: 1, // 1 семинар, 2 лекция
          begin: '10:35',
          end: '12:00',
          notice: '',
        }],
      }, {
        header: 'Суббота',
        classes: [{
          label: 'Алгоритмы и структуры данных',
          office: '241 аудитория',
          lecturer: 'к.ф.м. наук Анохин Ю.В.',
          type: 2, // 1 семинар, 2 лекция
          begin: '9:00',
          end: '10:25',
          notice: '',
        }, {
          label: 'Алгоритмы и структуры данных',
          office: '241 аудитория',
          lecturer: 'к.ф.м. наук Анохин Ю.В.',
          type: 2, // 1 семинар, 2 лекция
          begin: '10:25',
          end: '12:00',
          notice: '',
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
