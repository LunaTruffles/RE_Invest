import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PageTemplate from './navbarFooter/PageTemplate';
import Properties from './Properties'
import InputDeal from './InputDeal'
import Donations from './payment/Donations';


function App() {
  return (
    <Router>
      <PageTemplate>
        <Switch>
          <Route path="/" exact>
            <InputDeal />
          </Route>
          
          <Route path="/deals" exact>
            <Properties />
          </Route>

          <Route path="/Donate" exact>
            <Donations />
          </Route>
          
        </Switch>
      </PageTemplate>
    </Router>
  );
}

export default App;
