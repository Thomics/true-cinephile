// MOVIE REDUCERS

export function movieReducers(state={movie:{}}, action='') {


  switch(action.type) {
    case 'SEARCH_MOVIE':
      console.log('movie searched');
      console.log(action);
    return {...state, movie:{
      backdrop: data.backdrop_path,
      budget: data.budget,
      genre: data.genres,
      homepage: data.homepage,
      imdbId: data.imdb_id,
      movieId: data.id,
      movieName: data.original_title,
      overview: data.overview,
      poster: data.poster_path,
      release: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      tagline: data.tagline,
      rating: data.vote_average,
      voteCount: data.vote_count
    }};
    break;
  }

  return state;

}
