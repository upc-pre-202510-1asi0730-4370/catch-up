<script>
import {$t} from "@primeuix/styled";

export default {
  name: "footer-content",
}
</script>

<template>
  <div class="grid bg-primary mt-4 pt-4 align-content-start">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>Copyright &copy; 2025. ACME Studios</p>
    </div>
    <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
      <p>
        {{ $t('authoring-phrase.intro') }} <i class="pi pi-heart"></i>
        {{ $t('authoring-phrase.use') }} PrimeVue
        {{ $t('authoring-phrase.author', { brand: 'ACME' }) }}
      </p>
    </div>

  </div>

</template>

<style scoped>

</style>