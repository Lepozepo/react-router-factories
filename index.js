var React = require('react');
var ReactRouter = require('react-router');

var wrappedReactRouter = Object.assign({}, ReactRouter, {
	Router: React.createFactory(ReactRouter.Router),
	Link: React.createFactory(ReactRouter.Link),
	IndexLink: React.createFactory(ReactRouter.IndexLink),
	RouterContext: React.createFactory(ReactRouter.RouterContext),
	Route: React.createFactory(ReactRouter.Route),
	Redirect: React.createFactory(ReactRouter.Redirect),
	IndexRoute: React.createFactory(ReactRouter.IndexRoute),
	IndexRedirect: React.createFactory(ReactRouter.IndexRedirect),
});

module.exports = wrappedReactRouter;