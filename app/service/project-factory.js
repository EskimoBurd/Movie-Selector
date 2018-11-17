"use strict";

function FilmFinderFactory($http, $location) {
    let jsonPayload = null;
    const genres = [

        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }


    ];




    const loadWatch = () => {
        $location.path("/watchlist-page");
    };

    const getMovieList = () => {
        return wlArray;
    };

    const loadHome = () => {
        $location.path("/home-page");
    };


    const searchMovie = (searchCriteria) => {
        // ${searchCriteria.genre}
        return $http({
            method: "GET",
            url: `https://api.themoviedb.org/3/search/movie?api_key=a6e19e40ea2fd9ab20c2b6edf4b56aa5&query=${searchCriteria.keyword}&year=${Number(searchCriteria.primary_release_year)}`,
        }).then((data) => {
            let movies = data.data.results;
            for (let movie of movies) {
                for (let i = 0; i < movie.genre_ids.length; i++) {
                    for (let x = 0; x < genres.length; x++) {
                        if (genres[x].id === movie.genre_ids[i]) {
                            movie.genre_ids[i] = genres[x].name;
                        }
                    }
                }
            }
            console.log(movies);
            return movies;
        });
    };

   
    const wlArray = [];
    const addMovieToList = (movie) => {
        wlArray.unshift(movie);
        // console.log(wlArray);
        console.log(movie);
    };


    const removeFav = (index) => {
        wlArray.splice (index, 1);

    }




    return {
        searchMovie,
        loadWatch,
        loadHome,
        removeFav,
        addMovieToList,
        getMovieList


   }

}






angular
    .module("App")
    .factory("FilmFinderFactory", FilmFinderFactory);
