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
        <nb-title>Учебный процесс</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <scroll-view :content-container-style="{contentContainer: {paddingVertical: 20}}">
        <view class="header-content">
          <view
              v-for="(item, index) in headerData"
              :key="index"
              class="header-data-viewer">
            <text class="header-data-viewer-label">{{item.label}}</text>
            <text class="header-data-viewer-value">{{item.value}}</text>
          </view>
        </view>
        <view class="student-status-container">
          <text class="student-status-container-label">Статус:</text>
          <text class="student-status-container-value">{{studentStatus}}</text>
        </view>
        <view class="student-status-container">
          <table :dataToShow="statusTableData"></table>
        </view>
        <view class="student-status-container">
          <text class="student-status-container-label">Рабочие учебные программы:</text>
        </view>
        <view class="student-status-container">
          <table :dataToShow="NirSection"></table>
        </view>
      </scroll-view>
    </nb-content>

  </nb-container>
</template>
<script>
import table from './table';

import { bus } from "../../event bus";

export default {
  components: {
    table,
  },
  name: 'StudyProcess',
  computed: {
    headerData() {
      return [{
        label: 'Средний балл',
        value: '6.86',
      }, {
        label: 'Рейтинг по курсу',
        value: '139',
      }, {
        label: 'Рейтинг по ФШ',
        value: '123',
      }]
    },
    studentStatus() {
      return 'Учится';
    },
    statusTableData() {
      return [{
        label: 'Уровень образования',
        value: '',
        link: '',
      }, {
        label: 'Курс',
        value: '1',
        link: '',
      }, {
        label: 'Подразделение',
        value: 'Физтех-школа Прикладной Математики и Информатики (ФПМИ)',
        link: '',
      }, {
        label: 'Группа',
        value: 'М05-907б',
        link: '',
      }, {
        label: 'Направление',
        value: '03.04.01 Прикладные математика и физика (магистратура)',
        link: '',
      }, {
        label: 'Программа',
        value: 'Системные исследования',
        link: '',
      }, {
        label: 'Форма оплаты обучения',
        value: 'Места за счет федерального бюджета',
        link: '',
      }];
    },
    NirSection() {
      return [{
        label: 'Базовая кафедра',
        value: 'кафедра системных исследований',
        link: '',
      }, {
        label: 'Научный руководитель',
        value: 'Попков Юрий Соломонович',
        link: '',
      }, {
        label: 'Тема дипломной работы',
        value: '',
        link: '',
      }];
    },
  },
  data() {
    return {};
  },
};
</script>
<style>

  .header-content {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }

  .header-data-viewer {
    display: flex;
    width: 33%;
  }

  .header-data-viewer-label {
    font-weight: bold;
  }

  .header-data-viewer-value {

  }

  .student-status-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }

  .student-status-container-label {
    padding: 10px 25px;
  }

  .student-status-container-value {
    border-color: green;
    border-width: 1px;
    color: green;
    padding: 10px 25px;
  }

</style>
