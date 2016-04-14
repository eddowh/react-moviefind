/**
 * Main application
 */


var React = require('react');

// Flux
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore')

// Components
var SearchForm = require('./SearchForm.jsx');
var MovieResults = require('./MovieResults.jsx');


function getAppState() {
    return {
        movies: AppStore.getMovieResults()
    };
}


var App = React.createClass({

    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function(argument) {
        this.setState(getAppState());
    },

    render: function() {

        if (this.state.movies == '') {
            var movieResults = '';
        } else {
            var movieResults = <MovieResults movies={this.state.movies} />;
        }

        return (
            <div>
                <SearchForm />
                {movieResults}
            </div>
        );

    }

});


module.exports = App;
