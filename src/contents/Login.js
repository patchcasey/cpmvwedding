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
    };

    return (
        <form onSubmit={handleSubmit} >
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
}

export default Login;
