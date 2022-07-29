<script setup lang="ts">
  import Color from "color";
  import { NSpace, NButton, NTabs, NTabPane } from "naive-ui"
  import {colorList} from "../colorList";
  defineProps<{
    updateColor: (value: Color) => void;
  }>()
</script>
<template>
  <NTabs
    justify-content="space-evenly"
    type="line"
    size="small"
  >
    <NTabPane
      v-for="colorGroup in colorList"
      :key="colorGroup.groupName"
      :name="colorGroup.groupName"
      :tab="colorGroup.groupName"
      class="button-area"
    >
      <NSpace>
        <NButton
          v-for="color in colorGroup.colors"
          :key="color.name"
          :color="color.value.toString()"
          v-on:click="()=>updateColor(color.value)"
          size="tiny"
          :text-color="color.value.isLight() ? '#262626' :'#e6e6e6'"
        >
          {{color.name}}
        </NButton>
      </NSpace>
    </NTabPane>
  </NTabs>
</template>
<style scoped>
.button-area {
  max-height: 30vh;
  overflow-y: scroll;
}
</style>