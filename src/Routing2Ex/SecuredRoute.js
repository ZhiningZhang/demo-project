import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Switch, Route , Redirect} from "react-router-dom";
import authentication from "./authentication";

function SecuredRoute(props){
    return(
      <Route path={props.path} render={data=>authentication.getLogInStatus()?(
        <props.component {...data}></props.component>):
        (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    )
  }

  export default SecuredRoute;