<script>
import LanguageSwitcher from "@/public/language-switcher.component.vue";
import FooterContent from "@/public/footer-content.component.vue";

export default {
  name: "App",
  components: {FooterContent, LanguageSwitcher},
  methods: {
    toggleSidebar() {

    }
  }
}
</script>

<template>

  <div>
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp" text @click="toggleSidebar" />
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    // contenido
  </div>
  <footer-content></footer-content>
</template>

<style scoped>
</style>