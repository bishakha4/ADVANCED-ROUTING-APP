import {Route, Redirect, Switch } from "react-router-dom";


import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Home from './Home';
import About from './About';
import PostApp from './PostApp';
import Post from './Post';
import NotFound from "./NotFound";


function Routes() {
   
    return (
        <Switch>
            <Route path="/" exact >
                <Redirect to="/home" />
            </Route> 
            <Route path="/login" component={Login} />     
            <PrivateRoute 
            path="/home" 
            component = {Home}
             />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path ="/posts/:id" component = {Post} />
            <PrivateRoute path="/posts" component = {PostApp} />
            <PrivateRoute path="*" component={NotFound} />
        </Switch>

        
            // or If NOT USING EXACT THEN MOVE THE "/" PART TO THE END.
            // <Switch>    
            //     <Route path="/home" component={Home} />
            //     <Route path="/home" component={Home} />
            //     <Route path="/about" component={About} />
            //     <Route path="/posts" component={PostApp} />
            //     <Route path="/" exact component={Home} />
            // </Switch>




    );
}

export default Routes;