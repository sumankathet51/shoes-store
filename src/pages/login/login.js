import React, {useState} from 'react';
import Form from "../../components/form/form";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={"container container-login"}>
            <div className="wrapper">
                <div className="title">
                    Login Form
                </div>
                <form action="#">
                    <div className="field">
                        <input type="email" name="email" required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <label>Email</label>
                    </div>

                    <div className="field">
                        <input type="password" name="password" required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <label>Password</label>
                    </div>
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password?</a></div>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="signup-link">
                        Not a member? <a href="/signup">Signup now</a></div>
                </form>
            </div>
        </div>
    );
}

export default Login;