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
    // const [pWord, setpWord] = useState('');
    const passwordRef = React.useRef();

//     const handleClick = () => {
//     passwordRef.current.value = '';
//   };

    const handleSubmit = e => {
        {console.log('run')};
        e.preventDefault();
        const data = {
            password: passwordRef.current.value
        };
        onSubmit(data);
        passwordRef.current.value = ''
    };

    return (
        <form onSubmit={handleSubmit} >
        <Field ref={passwordRef} label="Password: " type="password" />
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    )
}

export default Login;
