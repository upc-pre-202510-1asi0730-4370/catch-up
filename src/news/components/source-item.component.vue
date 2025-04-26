<script>
import {Source} from "@/news/model/source.entity.js";

export default {
  name: "source-item",
  props: {
    source: {
      type: Source,
      required: true
    }
  }
}
</script>

<template>
  <div class="m-4">
    <div class="flex align-content-start flex-wrap">
      <span class="flex align-items-center justify-content-center mr-2">
        <pv-avatar :image="source.urlToLogo" shape="circle" />
      </span>
      <span class="flex align-items-center justify-content-center">
        {{ source.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>