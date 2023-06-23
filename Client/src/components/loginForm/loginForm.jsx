import { useState } from 'react';
import style from './loginForm.module.css';


function validate (user) {
    let errors = {}

    if(!user.email) {
        errors.email = 'Enter your email';
    }

    if( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = 'Invalid email'
    }

    if(user.email.length >= 35) {
        errors.email = 'Invalid email'
    }

    if(!/\d/.test(user.password)){
        errors.password = 'Password must contain a letter'
    }

    if(user.password.length < 6 || user.password.length > 10){
        errors.password	= 'Password must be between 6 and 10 characters'
    }



    return errors;
}

function LoginForm ({login}) {

const [user, setUser] = useState({
    email: "",
    password: "",
})

const [errors, setErrors] = useState({
    email: "",
    password: "",
})

function handleChange (evento) {
    setUser({
        ...user,
        [evento.target.name]: evento.target.value
    })

    setErrors(validate({
        ...user,
        [evento.target.name]: evento.target.value  
    }))
}

function handleSubmit (evento) {
    evento.preventDefault(user)

    if(!errors.email && !errors.password){
        login(user)
    }else{
        alert('Informacion incorrecta')
    }
}

    return (
        <div className={style.formContainer}>
      <div className={style.formTitle}>
        <h1>Completa los campos requeridos</h1>
      </div>
      <form onSubmit = {handleSubmit}>
        <div className={style.credentials}>
          <label>Username</label>
          <input
            onChange={handleChange}
            placeholder="Email"
            name="email"
            value={user.email}
          />
          {errors.email ? <span>{errors.email}</span> : null}
        </div>
        <div className={style.credentials}>
          <label>Password</label>
          <input
            onChange={handleChange}
            placeholder='Password'
            type="password"
            name="password"
            value={user.password}
          />
          {errors.password ? <span>{errors.password}</span> : null}
        </div>
        <button className={style.submitBtn}>
          LOGIN
        </button>
        <button className={style.submitBtn}> 
          SIGN UP
        </button>
      </form>
    </div>
  );
}


export default LoginForm