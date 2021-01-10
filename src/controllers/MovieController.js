import { properties } from './../resources/properties';
import api from './../utils/api';

class MovieController {
    constructor() {
        this.params = {
            apiKey: properties.apikey
        };
        this.searchByTitle = this.searchByTitle.bind(this);
    }

    async searchByTitle(query) {
        let queryParameter = {apiKey: this.params.apiKey, s: query.title, type: "movie"};
        if (query.page) {
            queryParameter.page = query.page
        }
        let movies = await api.get('/', {
            params: queryParameter
        });
        return movies;
    }

}

export default MovieController