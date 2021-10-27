import React, { useState } from "react";

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input className="no-outline" ref={ref} type={type} />
      </div>
    );
});


const Login = ({onSubmit}) => {
  const [wrongM, setWrongM] = useState('')
    const passwordRef = React.useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            password: passwordRef.current.value
        };
        onSubmit(data);
        passwordRef.current.value = '';
        setWrongM('Incorrect password!');
    };

    return (
      <div className="loginDiv" 
      style={{backgroundImage: `url(/snow.jpg)`, backgroundSize: 'Cover'}}>
        <form className="loginForm"onSubmit={handleSubmit} >
        <div className="loginBox">
        <Field ref={passwordRef} label="Password: " type="password" /> 
        <button className="loginButton" type="submit" >Submit</button>
        </div>
        <br/>
        
        <div className="loginTextBox"><span className="addressText">Hint: her last name + his last name<br/> lowercase & one word</span></div>
        <br/>
        <br/>
        <div className="loginTextBox"><span className="amp">{wrongM}</span></div>
      </form>
      </div>
    )
}

export default Login;
