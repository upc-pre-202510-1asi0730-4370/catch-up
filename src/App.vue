<script>
import LanguageSwitcher from "@/public/language-switcher.component.vue";
import FooterContent from "@/public/footer-content.component.vue";
import SourceList from "@/news/components/source-list.component.vue";
import {NewsApiService} from "@/news/services/news-api.service.js";
import {SourceAssembler} from "@/news/services/source.assembler.js";
import {ArticleAssembler} from "@/news/services/article.assembler.js";
import ArticleList from "@/news/components/article-list.component.vue";

export default {
  name: "App",
  components: {ArticleList, SourceList, FooterContent, LanguageSwitcher},
  data() {
    return {
      drawerVisible: true,
      articles: [],
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    this.getSources();
  },
  methods: {
    getSources() {
      this.newsApi.getSources()
          .then(response => {
            console.log(response);
            this.sources = SourceAssembler.toEntitiesFromResponse(response);
          })
          .catch(e => {
            this.errors.push(e);
            this.sources = [];
          });
    },
    getArticlesForSource(source) {
      this.newsApi.getArticlesForSourceId(source.id)
          .then(response => {
            console.log(response);
            this.articles = ArticleAssembler.toEntitiesFromResponse(response);
          })
          .catch(e => {
            this.errors.push(e);
            this.articles = [];
          });
    },
    toggleSidebar() {
      this.drawerVisible = !this.drawerVisible;
    },
    setSource(source) {
      console.log("source", source);
      this.getArticlesForSource(source);
      this.toggleSidebar();
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
          <source-list v-on:source-selected="setSource" v-model:visible="drawerVisible" v-model:sources="sources" />
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <article-list :articles="articles" />
  </div>
  <footer-content></footer-content>
</template>

<style scoped>
</style>