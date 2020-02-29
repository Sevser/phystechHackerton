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
      <nb-text>Content goes here</nb-text>
    </nb-content>

  </nb-container>
</template>
