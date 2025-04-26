<script>
import SourceItem from "@/news/components/source-item.component.vue";
import {Source} from "@/news/model/source.entity.js";

export default {
  name: "source-list",
  components: {SourceItem},
  props: {
    sources: Array[Source],
    visible: Boolean,
  }
}
</script>

<template>
  <pv-drawer v-bind:visible="visible">
    <source-item v-for="source in sources" :source="source" :key="source.id" />
  </pv-drawer>
</template>

<style scoped>

</style>