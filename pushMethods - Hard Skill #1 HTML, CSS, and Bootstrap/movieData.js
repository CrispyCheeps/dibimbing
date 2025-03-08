const fetchMovieData = require('./data.js');

const MovieData = {
    movies: [],

    // Method to load the Data
    async loadMovies(page = 1) {
        this.movies = await fetchMovieData(page);
        return this.movies;
    },

    // Get all movies
    getAllMovies() {
        return this.movies;
    },
}

// Load movies and then get all movies
(async () => {
    await MovieData.loadMovies();
    console.log(MovieData.getAllMovies());
})();

module.exports = MovieData;