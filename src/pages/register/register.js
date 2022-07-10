import React, {useState} from 'react';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setCpass] = useState('');
    const [dob, setDob] = useState('');
    const [errors, setErrors] = useState([]);

    const validate = () => {
        let flag = true;
        if(name.length < 8) {
            if(!errors.includes(' Name should be greater that 8 characters ')) {
                let currentArray = errors.slice();
                currentArray.push(' Name should be greater that 8 characters ');
                setErrors(currentArray);
            }
            flag = false;
        } else if(name.length > 255) {
            flag = false;
        }
        return flag;

    }


    return (
        <div className={"container container-login"}>
            <div className="wrapper">
                <div className="title">
                    Registration Form
                </div>
                {/*{*/}
                {/*    errors && errors.map((error, index) => {*/}
                {/*        return <div key={index} className={"error"} > {error} </div>*/}
                {/*    } )*/}
                {/*}*/}
                <form action="#" onSubmit={validate()}>
                    <div className="field">
                        <input type="text" name="name" required value={name} onChange={(e) => {setName(e.target.value)}}/>
                        <label>Name</label>
                    </div>

                    <div className="field">
                        <input type="email" name="email" required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <label>Email</label>
                    </div>

                    <div className="field">
                        <input type="password" name="password" required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <label>Password</label>
                    </div>

                    <div className="field">
                        <input type="password" name="cpass" required value={cpass} onChange={(e) => {setCpass(e.target.value)}}/>
                        <label>Confirm Password</label>
                    </div>

                    <div className="field">
                        <input type="date" name="dob" required value={dob} onChange={(e) => {setDob(e.target.value)}}/>
                        <label>Date Of Birth</label>
                    </div>
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                    <div className="field">
                        <input type="submit" value="Signup" />
                    </div>
                    <div className="signup-link">
                        Already a member? <a href="/login">Login now</a></div>
                </form>
            </div>
        </div>
    )
}

export default Register;