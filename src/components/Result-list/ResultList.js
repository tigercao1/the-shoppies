import React, { Component } from 'react';
import './ResultList.scss';
import ResultListItem from './Result-list-item/ResultListItem'

class ResultList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movieData || null,
            isLoading: this.props.isLoading || false
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.movieData !== this.props.movieData) {
            this.setState({movies: this.props.movieData});
        }
        if (prevProps.isLoading !== this.props.isLoading) {
            this.setState({isLoading: this.props.isLoading});
        }
    }

    render() {
        return (
            <div className="result-list">
                {
                    this.state.isLoading ? 
                        <div>Loading</div> :
                            this.state.movies ? 
                                (Array.isArray(this.state.movies) ? this.state.movies.map((movie, i) => {
                                    return <ResultListItem
                                        key={i}
                                        title={movie.Title}
                                        year={movie.Year}
                                    ></ResultListItem>
                                }) : <div>{this.state.movies}</div>) 
                            : <div className="place-holder">Search something</div>
                }
            </div>
        )
    }
}

export default ResultList