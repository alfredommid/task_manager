import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const SignUp = () => {

    //Login State
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    })

    const { name, email, password, confirm } = user;

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

        //TODO Validate all the fields are complete
        
        //TODO Password of at least 6 characters

        //TODO Passwords match 

        //TODO Send the action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>New Account</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="First name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirm password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Same password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Create"/>
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Already have an account? Log In.
                </Link>
            </div>
        </div>
     );
}
 
export default SignUp;