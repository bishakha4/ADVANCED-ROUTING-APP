import { Route, Redirect } from "react-router-dom";


function PrivateRoute ({ path, component: Component }) {
    return (
        <Route path={path}  render = {() => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            return isLoggedIn ? <Component /> : <Redirect to="/login" />;
        }} />
        );
}


export default PrivateRoute;