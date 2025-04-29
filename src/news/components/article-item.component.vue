<script>
import {Article} from "@/news/model/article.entity.js";

export default {
  name: "article-item",
  props: {
    article: {
      type: Article,
      required: true,
    }
  }
}
</script>

<template>
    <pv-card class="m-2">
      <template #header>
        <img :alt="article.title" :src="article.urlToImage" class="image-fit" />
      </template>
      <template #title>{{ article.title }}</template>
      <template #subtitle>{{ article.source.name }}</template>
      <template #content>
        <p class="m-0">
          {{
            article.description
          }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <a :href="article.url" target="_blank" :aria-label="$t('read-more')">{{ $t('read-more') }}</a>
        </div>
      </template>
    </pv-card>
</template>

<style scoped>
  .image-fit {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>