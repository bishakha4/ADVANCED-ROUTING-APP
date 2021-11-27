import { useHistory, useLocation, useRouteMatch } from "react-router-dom";



function Home() { //destructuring history & location & match from props
    
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    console.log(match);
    const queryParams = new URLSearchParams(location.search);
    return (
        <>
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.goForward()}>Go Forward</button>
            <button onClick={() => history.push("/about")}>Go to About - Push</button>
            <button onClick={() => history.replace("/about")}>
                Go to About - Replace
            </button>
            <p>Hello from Home !</p>
            <p>Query - {queryParams.get("sort")}</p>
        </>
    );
}

export default Home;