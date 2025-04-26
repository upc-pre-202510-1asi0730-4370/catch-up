import {Article} from "@/news/model/article.entity.js";
import {SourceAssembler} from "@/news/services/source.assembler.js";

export class ArticleAssembler {
    static toEntitiesFromResponse(response) {
        if (response.data.status !== "ok") {
            console.error(`${response.status}, ${response.code}, ${response.message}`);
            return [];
        }
        const articlesResponse = response.data;
        return articlesResponse["articles"].map((article) => {
            return this.toEntityFromResource(article);
        });
    }

    static toEntityFromResource(resource) {
        let article = new Article(resource);
        article.source = resource.source ?? SourceAssembler.toEntityFromResource(resource.source);
        return article;
    }
}