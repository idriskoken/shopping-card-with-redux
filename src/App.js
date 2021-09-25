import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from './containers/productList';
import ProductDetails from './containers/ProduktDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetails} />
          <Route >404 Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
