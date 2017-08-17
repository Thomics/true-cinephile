
// GET A MOVIE
export function getBooks(){
  return function(dispatch){
    //axios.get("/api/books")
    //  .then(function(response){
    //    dispatch({type:"GET_BOOKS", payload:response.data})
    //  })
    //  .catch(function(err){
    //    dispatch({type:"GET_BOOKS_REJECTED", payload:err})
    //  })

    var url = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=f6d14169d40228dbf6f63c2a7f56ce70`;

    fetch(url).then((response) => response.json()).then((data) => {
      var data = data.results[0];
      console.log(data);

      //If the movie exists search for the movie id.
      if(data) {

        //Using the movie ID, search for the movie object.
        fetch(`https://api.themoviedb.org/3/movie/${data.id}?api_key=f6d14169d40228dbf6f63c2a7f56ce70`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            dispatch({type: 'GET_MOVIE', payload: data});
          });

      } else {
        alert('The movie: ' + title + ' doesn\'t seem to be in the database');
      }
    });

    }
}
