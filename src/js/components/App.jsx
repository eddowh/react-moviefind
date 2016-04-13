/**
 * Main application
 */


var React = require('react');

// Flux
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore')

// Components
var SearchForm = require('./SearchForm.jsx');


var App = React.createClass({

    render: function() {
        return (
            <div>
                <SearchForm />
            </div>
        );
    }

});

module.exports = App;
