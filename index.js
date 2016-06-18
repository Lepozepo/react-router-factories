var React = require('react');
var ReactRouter = require('react-router');
var forIn = require('lodash/forIn');

var wrappedReactRouter = {};
forIn(ReactRouter, function(component, k) {
	wrappedReactRouter[k] = React.createFactory(component);
});

module.exports = wrappedReactRouter;