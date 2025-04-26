import {Source} from "@/news/model/source.entity.js";
import {LogoApiService} from "@/shared/services/logo-api.service.js";

const logoApi = new LogoApiService();

export class SourceAssembler {
    static toEntitiesFromResponse(response) {
        if (response.data.status !== "ok") {
            console.error(`${response.status}, ${response.code}, ${response.message}`);
            return [];
        }
        const sourcesResponse = response.data;
        return sourcesResponse.sources.map((source) => {
            return this.toEntityFromResource(source);
        });
    }

    static toEntityFromResource(resource) {
        let source = new Source({ ...resource});
        source.urlToLogo = source.url !== '' ? logoApi.getUrlToLogo(source.url) : '';
        return source;
    }
}