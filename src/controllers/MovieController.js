import { properties } from './../resources/properties';
import api from './../utils/api';

class MovieController {
    constructor() {
        this.params = {
            apiKey: properties.apikey
        };
        console.log(this)

        this.searchByTitle = this.searchByTitle.bind(this)
    }

    async searchByTitle(query) {
        console.log(this)
        let movies = await api.get('/', {
            params: {
                apiKey: this.params.apiKey,
                s: query
            }
        });

        console.log(movies);
    }
}

export default MovieController