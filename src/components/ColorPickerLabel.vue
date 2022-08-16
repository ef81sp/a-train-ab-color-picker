<script setup lang="ts">
import { NSpace } from 'naive-ui'
import { computed } from 'vue'
import Color from 'color'
const props = defineProps<{
  color: Color
}>()

const hsv = computed(() => {
  return {
    h: Math.round((props.color.hue() / 360) * 100),
    s: Math.round(props.color.saturationv()),
    v: Math.round(props.color.value()),
  }
})
const rgb = computed(() => {
  return {
    r: props.color.red(),
    g: props.color.green(),
    b: props.color.blue(),
  }
})
</script>
<template>
  <NSpace justify="space-around">
    <div class="pane">
      <h2>RGB</h2>
      <NSpace justify="space-between">
        <p>R</p>
        <p>{{ rgb.r }}</p>
      </NSpace>
      <NSpace justify="space-between">
        <p>G</p>
        <p>{{ rgb.g }}</p>
      </NSpace>
      <NSpace justify="space-between">
        <p>B</p>
        <p>{{ rgb.b }}</p>
      </NSpace>
    </div>
    <div class="pane">
      <h2>A列車</h2>
      <NSpace justify="space-between">
        <p>色相</p>
        <p class="value">{{ hsv.h }}</p>
      </NSpace>
      <NSpace justify="space-between">
        <p>彩度</p>
        <p class="value">{{ hsv.s }}</p>
      </NSpace>
      <NSpace justify="space-between">
        <p>明るさ</p>
        <p class="value">{{ hsv.v }}</p>
      </NSpace>
      <NSpace justify="space-between">
        <p>色強度</p>
        <p>自分で調整</p>
      </NSpace>
    </div>
  </NSpace>
</template>
<style scoped>
p {
  margin: 0;
  padding: 0;
}
.value {
  font-weight: bold;
}
.pane {
  width: 10em;
}
</style>
