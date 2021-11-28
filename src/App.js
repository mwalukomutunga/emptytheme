
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
      <Router  >    
      <div id="app" className="app app-header-fixed app-sidebar-fixed">
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
        <a href=";" className="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i
          className="fa fa-angle-up"></i></a>
    </div>    
      </Router>
      </>
  );
}

export default App;
