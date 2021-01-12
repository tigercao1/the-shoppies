import React, { Component } from 'react';
import './ResultList.scss';
import ResultListItem from './Result-list-item/ResultListItem'
import PageBar from './Page-bar/PageBar';

class ResultList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movieData || null,
            isLoading: this.props.isLoading,
            didFinishNominate: this.props.didFinishNominate
        }
        this.updatePageNum = this.updatePageNum.bind(this);
        this.handleNomination = this.handleNomination.bind(this);
    }

    componentDidUpdate(prevProps) {
        // TODO: Movie data state is updated but the display is not updated.
        if (prevProps.movieData !== this.props.movieData) {
            this.setState({movies: this.props.movieData});
        }
        if (prevProps.isLoading !== this.props.isLoading) {
            this.setState({isLoading: this.props.isLoading});
        }
        if (prevProps.didFinishNominate !== this.props.didFinishNominate) {
            this.setState({didFinishNominate: this.props.didFinishNominate})
        }
    }

    updatePageNum(num) {
        this.props.updatePageNum(num);
        // this.props.setLoadingState(true);
    }

    handleNomination(movie) {
        this.props.handleNomination(movie);
    }

    render() {
        return (
            <div className="result-list">
                <p>Search results</p>
                {
                    this.state.isLoading ? <div className="placeholder">Loading</div> : 
                        this.state.movies ? 
                                (Array.isArray(this.state.movies) ? 
                                    <div className="list-body">
                                        {this.state.movies.map((movie, i) => {
                                            return <ResultListItem
                                                key={i}
                                                title={movie.title}
                                                year={movie.year}
                                                id={movie.id}
                                                isNominated={this.state.didFinishNominate ? true : movie.isNominated}
                                                handleNomination = {this.handleNomination}
                                            ></ResultListItem>
                                        })}
                                        <PageBar 
                                            updatePageNum={this.updatePageNum} 
                                            numOfPages={this.props.numOfPages}
                                        ></PageBar>
                                    </div>
                        : <div className="placeholder">{this.state.movies}</div>)
                    : <div className="placeholder">Search something</div>
                            

                }
            </div>
        )
    }
}

export default ResultList