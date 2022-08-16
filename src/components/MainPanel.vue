<script setup lang="ts">
import { ref } from 'vue'
import { NColorPicker } from 'naive-ui'
import ColorPickerLabel from './ColorPickerLabel.vue'
import Color from 'color'
import ColorButtons from './ColorButtons.vue'

const colorRgb = ref(Color('rgb(0, 141, 121)'))
const updateColor = (value: Color) => {
  colorRgb.value = Color(value)
}
</script>

<template>
  <!-- {{colorRgb}} -->
  <!-- {{colorHsv}} -->
  <ColorPickerLabel :color="colorRgb" />
  <NColorPicker
    :value="colorRgb.toString()"
    placement="bottom"
    :modes="['rgb']"
    :on-update:value="updateColor"
    :render-label="() => 'クリックでカラーピッカー表示'"
    :show-alpha="false"
  />
  <ColorButtons :update-color="updateColor" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
