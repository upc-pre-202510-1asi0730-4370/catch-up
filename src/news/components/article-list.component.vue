<script>
import ArticleItem from "@/news/components/article-item.component.vue";
import {Article} from "@/news/model/article.entity.js";

export default {
  name: "article-list",
  components: {ArticleItem},
  props: {
    articles: {
      type: Array[Article],
      required: true,
    }
  }
}
</script>

<template>
  <div v-for="article in articles">
    <article-item :article="article" />
  </div>

</template>

<style scoped>

</style>