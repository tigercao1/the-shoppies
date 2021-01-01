import React, { useState } from 'react'
import './App.scss';
import SearchBar from './components/Search-bar/SearchBar';
import ResultList from './components/Result-list/ResultList';
import MovieController from './controllers/MovieController';

function App() {
    const [isLoadingState, setLoadingState] = useState(false);
    const [movieData, setMovieData] = useState(null);
    const [numOfPages, setNumOfPages] = useState(null);
    const [currPage, setCurrPage] = useState(null);
    const [currTitle, setCurrTitle] = useState("");

    const movieController = new MovieController();

    const setLoading = (state) => {
        setLoadingState(state)
    }

    const processPagedData = (data) => {
        if (data && !isNaN(data)) {
            let totalResults = parseInt(data)
            let totalPages = Math.ceil(totalResults/10)
            console.log(totalPages)
            setNumOfPages(totalPages)
        }
    }

    const searchByTitle = (query) => {
        if (query) {
            setCurrTitle(query.title);
            movieController.searchByTitle(query).then((movies) => {
                if (movies.data) {
                        let responseData = movies.data;
                        if (responseData.Response === "True") {
                            setMovieData(responseData.Search);
                            processPagedData(responseData.totalResults);
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

    const updatePageNum = (num) => {
        let query = {
            title: currTitle,
            page: num
        }
        searchByTitle(query)
    }

    return (
        <div className="App">
            <SearchBar searchByTitle={searchByTitle} setLoadingState={setLoading}></SearchBar>
            <div className="app-body">
                <ResultList 
                    movieData={movieData} 
                    isLoading={isLoadingState} 
                    numOfPages={numOfPages}
                    currPage={currPage}
                    updatePageNum={updatePageNum}
                ></ResultList>
            </div>
        </div>
    );
}

export default App;
