import DefaultTheme from "vitepress/theme"
import VueBlockie from "vue-blockies"

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component("VueBlockie", VueBlockie)
  },
}
