/**
 * Movie results.
 */


var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore')

var Movie = require('./Movie.jsx')


var MovieResults = React.createClass({

    render: function() {
        return (
            <div>
                <h3 className="text-center">
                    Results
                </h3>
                {
                    this.props.movies.map(function(movie, i) {
                        return (
                            <Movie movie={movie} key={i} />
                        )
                    })
                }
            </div>
        );
    }

});

module.exports = MovieResults;
