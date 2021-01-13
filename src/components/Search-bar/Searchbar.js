import React, { Component } from 'react';
import _ from 'lodash'
import './SearchBar.scss';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
        this.searchByTitle = _.debounce(this.searchByTitle, 500);
    }

    searchByTitle(title) {
        this.props.searchByTitle(title);
    }

    handleInput = (e) => {
        this.props.setLoadingState(true);
        this.props.initSearch();
        this.searchByTitle({title: e.target.value.trim()});
    }

    render() {
        return (
            <div className="search-bar">
                <p>Movie Title</p>
                <input type="text" id="search-field" placeholder="Search..." autoComplete="off" onChange={this.handleInput}></input>
            </div>
        )
    }

}

export default SearchBar;