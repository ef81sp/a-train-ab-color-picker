import Color from 'color'
import { defineStore } from 'pinia'

type State = {
  color: Color
}

export const useColorPickerStore = defineStore('colorPickerStore', {
  state: (): State => ({ color: Color('rgb(0, 141, 121)') }),
  getters: {
    colorString: (state): string => state.color.toString(),
  },
  actions: {
    updateColor(color: Color | string): void {
      this.color = Color(color)
    },
  },
})
