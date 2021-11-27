function Login() {
    

    const login = () => {
        localStorage.setItem("isLoggedIn", true);
        window.location.reload();
    };
    return (
        <form>
            <div>
                <label>Email : </label>
                <input type = "email" />
            </div>
            <div>
                <label>Password : </label>
                <input type = "password" />
            </div>
            <div>
                <button onClick = {login}>Login</button>
            </div>
            
        </form>
    );
}


export default Login;