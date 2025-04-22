<script>
import {SelectButton as PvSelectButton} from "primevue";

export default {
  name: "language-switcher",
  components: {PvSelectButton},
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase"></pv-select-button>
</template>

<style scoped>

</style>