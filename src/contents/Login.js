import React from "react";

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} />
      </div>
    );
});


const Login = ({onSubmit}) => {
    const passwordRef = React.useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            password: passwordRef.current.value
        };
        onSubmit(data);
        passwordRef.current.value = ''
    };

    return (
      <div className="loginDiv">
        <form className="loginForm"onSubmit={handleSubmit} >
        <div>
        <Field ref={passwordRef} label="Password: " type="password" /> 
        <button className="loginButton" type="submit" >Submit</button>
        </div>
      </form>
      </div>
    )
}

export default Login;
