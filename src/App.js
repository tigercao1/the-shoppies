import React, { useEffect, useState } from 'react'
import './App.scss';
import SearchBar from './components/Search-bar/SearchBar';
import ResultList from './components/Result-list/ResultList';
import MovieController from './controllers/MovieController';
import Nominations from './components/Nominations/Nominations';

function App() {
    const movieController = new MovieController();

    const MAX_NOMINATIONS = 5

    const [didFinishNominate, setDidFinishNominate] = useState(false);

    const retrieveLocalData = () => {
        let nominations = JSON.parse(localStorage.getItem('nominations')) || [];
        if (nominations.length >= MAX_NOMINATIONS) {
            setDidFinishNominate(true);
        }
        return nominations;
    }

    const [isLoadingState, setLoadingState] = useState(false);
    const [movieData, setMovieData] = useState(null);
    const [numOfPages, setNumOfPages] = useState(null);
    const [currTitle, setCurrTitle] = useState("");
    const [nominations, setNominations] = useState(retrieveLocalData);

    //TODO: Save to local on unmount or save to local on nomination

    const checkNominated = (id) => {
        return nominations.filter(e => e.id === id).length > 0
    }

    useEffect(() => {
        if (nominations.length >= MAX_NOMINATIONS) {
            setDidFinishNominate(true);
        } else {
            setDidFinishNominate(false);
        }
        setLocalData(nominations);
    }, [nominations])

    const setLoading = (state) => {
        setLoadingState(state);
    }

    const processPagedData = (data) => {
        if (data && !isNaN(data)) {
            let totalResults = parseInt(data);
            let totalPages = Math.ceil(totalResults/10);
            setNumOfPages(totalPages);
        }
    }

    const processMovieData = (data) => {
        let movies = [];
        if (data) {
            for (let movie of data) {
                let isNominated = checkNominated(movie.imdbID);
                movies.push({
                    title: movie.Title,
                    year: movie.Year,
                    id: movie.imdbID,
                    isNominated: isNominated
                });
            }
        }
        return movies;
    }

    const searchByTitle = (query) => {
        if (query) {
            setCurrTitle(query.title);
            movieController.searchByTitle(query).then((movies) => {
                if (movies.data) {
                        let responseData = movies.data;
                        if (responseData.Response === "True") {
                            setMovieData(processMovieData(responseData.Search));
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

    const setLocalData = (newNominations) => {
        localStorage.setItem("nominations", JSON.stringify(newNominations))
    }

    const updateNominations = (movie) => {
        if (nominations.length < MAX_NOMINATIONS) {
            setNominations((prevNominations) => {
                return [...prevNominations, movie];
            })
            let tempMovieData = [...movieData];
            for (let i in tempMovieData) {
                if (tempMovieData[i].id === movie.id) {
                    tempMovieData[i].isNominated = true;
                }
            }
            setMovieData(tempMovieData);
        }
    }

    const onRemove = (id) => {
        let newList = nominations.filter((item) => item.id !== id);
        setNominations(newList)
        let tempMovieData = [...movieData];
        for (let i in tempMovieData) {
            if (tempMovieData[i].id === id) {
                tempMovieData[i].isNominated = false;
            }
        }
        setMovieData(tempMovieData);
    }

    return (
        <div className="App">
            <SearchBar searchByTitle={searchByTitle} setLoadingState={setLoading}></SearchBar>
            <div className="app-body">
                <ResultList 
                    movieData={movieData} 
                    isLoading={isLoadingState} 
                    numOfPages={numOfPages}
                    updatePageNum={updatePageNum}
                    handleNomination={updateNominations}
                    didFinishNominate={didFinishNominate}
                ></ResultList>
                <Nominations 
                    nominations={nominations}
                    onRemove={onRemove}
                ></Nominations>
            </div>
        </div>
    );
}

export default App;
