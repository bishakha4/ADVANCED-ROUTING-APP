import { useHistory } from "react-router-dom";

function About() { //destructuring history from props
    const history = useHistory();
    return (
        <>
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.goForward()}>Go Forward</button>
            <button onClick={() => history.push("/posts")}>Go to Posts - Push</button>
            <button onClick={() => history.replace("/posts")}>
                Go to Posts - Replace
            </button>
            <p>Hello from About !</p>
        </>
    );
}

export default About;