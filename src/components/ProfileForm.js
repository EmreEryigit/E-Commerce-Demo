import { useState, useRef, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';


const AuthForm = () => {
  const history = useHistory()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading]= useState(false)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault()
    const enteredMail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    setIsLoading(true)
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCs5k61UhkUodjWkzRVgkefNq-w3R1G6qI"
    

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredMail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          "Content-Type" : "application/json"
        }
      }).then(res => {
        setIsLoading(false)
        if(res.ok) {
          return res.json()
        } else {
          return res.json().then(data => {
            let errorMessage = "Auth Failed"
            // if(data && data.error && data.error.message){
            //   errorMessage = data.error.message
            // }
            
            throw new Error(errorMessage)
          })
        }
      }).then(data => {
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn)*1000)
        authCtx.login(data.idToken, expirationTime.toISOString() )
        history.replace("/")
      }).catch(e => {
        alert(e.message)
      })
  }

  return (
    <section >
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div >
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div >
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required  ref={passwordInputRef}/>
        </div>
        <div >
          {isLoading && <p>Sending request...</p>}
          {!isLoading && <button>Login</button>}
          
        </div>
      </form>
    </section>
  );
};

export default AuthForm;