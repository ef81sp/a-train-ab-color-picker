import { createRouter, createWebHistory } from 'vue-router'
import ColorPickerMain from '@/ColorPicker/ColorPickerMain.vue'

export const router = createRouter({
  routes: [{ path: '/', name: 'color-picker', component: ColorPickerMain }],
  history: createWebHistory('/a-train-ab-color-picker'),
})
