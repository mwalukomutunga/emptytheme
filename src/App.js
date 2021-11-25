
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Crops from "./pages/crop";
import InsuranceCosts from "./pages/insuranceCosts";
import InsurancePeriods from "./pages/InsurancePeriods";
import Dashboard from "./pages/Dashboard";
import InsuranceItems from "./pages/insuranceItems";
import FCS from "./pages/fcs";
import FCSStreams from "./pages/streams";
import Wrapper from "./components/wrapper";

const App = () => {
  return (
    <>
      <Router basename="/" >
       <Wrapper/>
        <Switch>
          <Route exact  path="/" component={Dashboard} />
          <Route exact  path="/fcs" component={FCS} />
          <Route exact  path="/fcstreams" component={FCSStreams} />
          <Route exact path="/valuechain" component={Crops} />  
          <Route exact path="/items" component={InsuranceItems} />  
          <Route exact path="/costs" component={InsuranceCosts} />          
          <Route exact path="/periods" component={InsurancePeriods} />          
          <Route component={Dashboard} />
        </Switch>       
      </Router>
      </>
  );
}

export default App;
