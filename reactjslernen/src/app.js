import {HelloWorld, MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute,browserHistory, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
ReactStormpath.init();
ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={MasterPage}>
		<IndexRoute component={IndexPage} />
		<LoginRoute path='/login' component={LoginPage} />
		<Route path='/register' component={RegistrationPage} />
		<AuthenticatedRoute>
			<Route path='/profile' component={ProfilePage} />
		</AuthenticatedRoute>
	</Route>
</Router>,
		document.getElementById('app-container')
	       );
