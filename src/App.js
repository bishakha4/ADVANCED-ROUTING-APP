import { BrowserRouter, NavLink } from "react-router-dom";


import Reference from "./Reference";
import "./App.css";
import Routes from "./Routes";



function App() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
        
        const logout = () => {
            localStorage.removeItem("isLoggedIn");
            
    } 
    return (
            <BrowserRouter>
            {/* <Reference /> */}
            {
                isLoggedIn && (
                    <>
                         <NavLink to="/home" activeStyle={{ color: "red" }}>Home</NavLink>
                        <NavLink to="/about" activeClassName="nav">About</NavLink>
                        <NavLink to="/posts" activeClassName="nav">Posts</NavLink>
                        <button onClick = {logout}>Logout</button>
                        <br />
                    </>
                )
            }
                <Routes />
            </BrowserRouter>
        );
    }

export default App;