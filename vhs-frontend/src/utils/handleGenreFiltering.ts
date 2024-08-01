   export const filterMoviesByGenre = (movies: VHS[], selectedGenre: string | null) => {
     return selectedGenre === 'All' || selectedGenre === null
       ? movies
       : movies.filter(item => item.genre.includes(selectedGenre));
   };
  