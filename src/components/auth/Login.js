import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    //Login State
    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const { email, password } = user;

    //Save the values
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Submitting the values entered
    const onSubmit = e => {
        e.preventDefault();

        //Validate all the fields are complete
        

        //Send the action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@mail.com"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Insert password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Go"/>
                    </div>
                </form>
                <Link to={"/SignUp"} className="enlace-cuenta">
                    Sign Up
                </Link>
            </div>
        </div>
     );
}
 
export default Login;