import React, { useState } from 'react'
import './App.scss';
import SearchBar from './components/Search-bar/SearchBar';
import ResultList from './components/Result-list/ResultList';
import MovieController from './controllers/MovieController';

function App() {
    const [isLoadingState, setLoadingState] = useState(false);
    const [movieData, setMovieData] = useState(null);

    const movieController = new MovieController();

    const setLoading = (state) => {
        setLoadingState(state)
    }

    const searchByTitle = (query) => {
        if (query) {
            movieController.searchByTitle(query).then((movies) => {
                if (movies.data) {
                        let responseData = movies.data;
                        if (responseData.Response === "True") {
                            setMovieData(responseData.Search);
                        } else {
                            console.log(responseData.Error);
                            setMovieData(responseData.Error);
                        }
                }
            }).catch((err) => {
                if (err.response) {
                    handleError(err.response.data);
                }
            }).finally(() => {
                setLoadingState(false);
            });
        } else {
            setMovieData(null);
            setLoadingState(false);
        }
    }

    const handleError = (err) => {
            // TODO: Modal error
            console.log(err);
    }

    return (
        <div className="App">
            <SearchBar searchByTitle={searchByTitle} setLoadingState={setLoading}></SearchBar>
            <div className="app-body">
                <ResultList movieData={movieData} isLoading={isLoadingState}></ResultList>
            </div>
        </div>
    );
}

export default App;
