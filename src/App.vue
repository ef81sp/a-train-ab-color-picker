<script setup lang="ts">
import { computed, ref } from "vue";
import Main from "./components/MainPanel.vue"
import { NConfigProvider, darkTheme, NGlobalStyle, NPageHeader, NSwitch, NIcon, NButton, NSpace } from "naive-ui";
import { WeatherSunny24Regular, WeatherMoon24Regular,Question24Regular } from "@vicons/fluent"
import HelpModal from "./components/HelpModal.vue";

const themeSwitchValue = ref(false)
const theme = computed(() => themeSwitchValue.value ? darkTheme : null)
const showModal = ref(false)
</script>

<template>
  <NConfigProvider :theme="theme">
    <NGlobalStyle />
    <NPageHeader>
      <template #title>
        はじまるA列車 カラーピッカー
      </template>
      <template #extra>
        <NSpace
          align="center"
          justify="end"
        >
          <NSwitch
            v-model:value="themeSwitchValue"
            unchecked-color="#ff0000"
          >
            <template #unchecked-icon>
              <NIcon :component="WeatherSunny24Regular"/>
            </template>
            <template #unchecked>
              light
            </template>

            <template #checked-icon>
              <NIcon :component="WeatherMoon24Regular" />
            </template>
            <template #checked>
              dark
            </template>
          </NSwitch>
          <NButton
            circle
            size="small"
            @click="showModal = true"
          >
            <NIcon :component="Question24Regular"/>
          </NButton>
          <HelpModal v-model:show="showModal"/>
        </NSpace>
      </template>
    </NPageHeader>

    <Main />
  </NConfigProvider>
</template>

