import React from "react";
import {Switch,Route} from 'react-router-dom';
import Home from './home';
import Travel from './travel'
import Blog from'./blog'
class Main extends React.Component{
    render(){
      return (  
        <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/travel" component={Travel}/>
            <Route exact path="/blog" component={Blog}/>
        </Switch>
        </div>
      );
    }
  }
  export default Main;