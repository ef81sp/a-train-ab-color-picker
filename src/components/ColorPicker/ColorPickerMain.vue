<script setup lang="ts">
import { NColorPicker } from 'naive-ui'
import ColorPickerLabel from './ColorPickerLabel.vue'
import ColorButtons from './ColorPickerColorButtons.vue'
import { useColorPickerStore } from '~/store/colorPickerStore'

const colorPickerStore = useColorPickerStore()
</script>

<template>
  <ColorPickerLabel :color="colorPickerStore.color" />
  <NColorPicker
    :value="colorPickerStore.colorString"
    placement="bottom"
    :modes="['rgb']"
    :on-update:value="colorPickerStore.updateColor"
    :render-label="() => 'クリックでカラーピッカー表示'"
    :show-alpha="false"
  />
  <ColorButtons :update-color="colorPickerStore.updateColor" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
