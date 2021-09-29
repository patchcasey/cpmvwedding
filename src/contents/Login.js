import React, { useState } from "react";

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} />
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
      style={{backgroundImage: `url(/marathon.jpg)`, backgroundSize: 'Cover'}}>
        <form className="loginForm"onSubmit={handleSubmit} >
        <div>
        <Field ref={passwordRef} label="Password: " type="password" /> 
        <button className="loginButton" type="submit" >Submit</button>
        </div>
        <br/>
        
        <div><span className="addressText">Hint: a very Casey password</span></div>
        <br/>
        <br/>
        <div><span className="amp">{wrongM}</span></div>
      </form>
      </div>
    )
}

export default Login;
