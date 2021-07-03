import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers';
import { LoginPage } from './components/Login/login';
import { RegisterPage } from './components/register/register';
import Categories from './components/categories/categories';
import SubCategory from './components/categories/subCategories';
import Products from './components/products/products';
import ProductDetails from './components/products/productDetails';


class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <Route exact path="/product/view/:p" component={ProductDetails} />
                                <Route exact path="/product/:p/:subP" component={Products} />
                                <Route exact path="/" component={Categories} />
                                <Route exact path="/subCategory/:cat" component={SubCategory} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                {/* <Redirect from="*" to="/" /> */}
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return { alert };
}

export default connect(mapStateToProps)(App);