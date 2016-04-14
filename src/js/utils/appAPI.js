var AppActions = require('../actions/AppActions');

// list of actions that are available
// i.e. `searchMovies(movie)` for a movie finding app
module.exports = {

    searchMovies: function(movie) {
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + movie.title,
            dataType: 'json',
            cache: false,
            success: function(data) {
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, err) {
                alert(error);
            }.bind(this)
        });
    }

}
