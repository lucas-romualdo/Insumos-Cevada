import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from './navbar/navbar';
import cevada from './navbar/cevada/cevada';
import Acessórios from "./navbar/acessorios"
import lupulo from './navbar/lupulo/lupulo';
import fermentacao from './navbar/fermentacao/fermentacao';

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/cevada' exact component={cevada} />
        <Route path='/cats' component={lupulo} />
        <Route path='/sheeps' component={fermentacao} />
        <Route path='/goats' component={Acessórios} />
      </Switch>
    </Router>
  );
}

export default App;
