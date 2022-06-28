import './App.scss'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Ekipa from './components/Ekipa';
import Pocetna from './components/Pocetna';
import Soon from './components/Soon';
import {Podatki} from './components/Podatki';

function App() {
  return (
    <Router>
      <div className="App">        
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Ekipa osoba={Podatki}/>
            </Route>
            <Route  path="/plan" component={Pocetna}/>
            <Route  path="/kontakt" component={Soon}/>
            <Route  path="/lokacija" component={Soon}/>
            <Route  path="/planovi" component={Soon}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;


