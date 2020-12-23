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
        let movies = await api.get('/', {
            params: {
                apiKey: this.params.apiKey,
                s: query
            }
        });
        return movies;
    }

}

export default MovieController