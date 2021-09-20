import React, { Component } from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import { BrowserRouter as Router,NavLink,Route} from "react-router-dom";




interface Istate{}
interface Ipropse{}
class App extends Component<Ipropse,Istate>{
  constructor(propse:Ipropse){
    super(propse);
  }
  render(){
    return(
      <React.Fragment>
        <Router>
<NavLink to ="/page_one"  activeStyle={{color:"red"}} exact={true} strict><b>Page_one</b>

</NavLink>
<NavLink to ="/Page_two" activeStyle={{color:"green"}} exact={true} strict><b>Page_two</b>

</NavLink>
<NavLink to ="/Page_three" activeStyle={{color:"yellow"}} exact={true} strict><b>Page_three</b>

</NavLink>
<Route path="/Page_one" component={Pageone} exact={true} strict></Route>
<Route path="/page_two" component={Pagetwo} exact={true} strict></Route>
<Route path="/Page_three" component={Pagethree} exact={true} strict></Route>
        </Router>
      </React.Fragment>
    )
  }
}
  export default App;
