
async function fetchAndSaveMovies(page = 1) {
    // Your bearer token
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE3ZDhhODAwMjYzMzY3OTA5NjZlNGMzN2FkNTBhYSIsIm5iZiI6MTc0MTQwMjIwOC4yNzgsInN1YiI6IjY3Y2JiMDYwOWEzZjcwMTNmYTRmNjdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZHCncC2oSyO19h9mG-3FGw2Gp9lsOG3_syGvPUOuzM";
    
    // API URL with page parameter
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    
    // Array to store the movies
    let moviesArray = [];
    
    try {
      // Configure request with authorization header
      const options = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      
      // Make the API request
      const response = await fetch(url, options);
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Extract the movies array from the response
      moviesArray = data.results.map(movie => {
        // Return a cleaned-up movie object with selected properties
        return {
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          posterPath: movie.poster_path,
          overview: movie.overview,
          voteAverage: movie.vote_average,
          popularity: movie.popularity,
          genreIds: movie.genre_ids
        };
      });
      
      console.log(`Successfully saved ${moviesArray.length} movies to array`);
      console.log(moviesArray);
      return moviesArray;
      
    } catch (error) {
      console.error('Error fetching and saving movies:', error);
      return []; // Return empty array in case of error
    }
}

// Export the function using CommonJS
module.exports = fetchAndSaveMovies;
// console.log(fetchAndSaveMovies(1));