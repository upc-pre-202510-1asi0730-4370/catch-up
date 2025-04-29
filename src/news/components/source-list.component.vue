<script>
import SourceItem from "@/news/components/source-item.component.vue";
import {Source} from "@/news/model/source.entity.js";

export default {
  name: "source-list",
  components: {SourceItem},
  emits: ["source-selected"],
  props: {
    sources: Array[Source],
    visible: Boolean,
  },
  methods: {
    onSourceSelected(source) {
      this.$emit("source-selected", source);
    }
  }
}
</script>

<template>
  <pv-drawer v-bind:visible="visible">
    <source-item
        @source-selected="onSourceSelected(source)"
        v-for="source in sources" :source="source" :key="source.id" />
  </pv-drawer>
</template>

<style scoped>

</style>