var React = require('react');
var ReactRouter = require('react-router');
var forIn = require('lodash');

forIn(ReactRouter, function(component, k) {
	ReactRouter[k] = React.createFactory(component);
});

module.exports = ReactRouter;