import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShopList from './containers/ShopList';

const routes = () => (
    <Switch>
        <Route path='/shop/detail' component={ShopList} />
        

        <Redirect to="/error" />
    </Switch>
)
render(
    <Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/shop" render={routes} />
				</Switch>
			</BrowserRouter>
		</Provider>,
	document.getElementById('root')
)