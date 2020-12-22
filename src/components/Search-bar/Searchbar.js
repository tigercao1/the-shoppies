import React, { Component } from 'react';
import _ from 'lodash'
import MovieController from './../../controllers/MovieController'
import './Searchbar.scss';

class Searchbar extends Component {

    constructor() {
        super();
        this.state = {
            title: null
        };
        this.movieController = new MovieController();
        this.handleInput = this.handleInput.bind(this);
        this.searchByTitle = _.debounce(this.movieController.searchByTitle, 500);
    }

    handleInput = (e) => {
        this.searchByTitle(e.target.value);
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text" id="search-field" onChange={this.handleInput}></input>
            </div>
        )
    }

}

export default Searchbar;