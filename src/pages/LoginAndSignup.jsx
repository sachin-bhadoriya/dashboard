import { useState } from 'react'
import "./styles/loginAndSignup.scss"
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LoginAndSignup = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [userContactNumber, setUserContactNumber] = useState("")
  const [password, setPassword] = useState("")
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [isLoginPage, setIsLoginPage] = useState(true)

  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault()
    const data = { username, password }
    console.log("data for login", data);
    navigate("/dashboard")
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const data = { name, userContactNumber, username, password }
    console.log("data for signup", data);
    setIsLoginPage(true)
  }

  return (
    <div className='login-and-signup-page-container'>
      <div className='animate-box'></div>
      <div className="login-form-container">
        <form onSubmit={isLoginPage ? handleLogin : handleSignup}>
          <img src="/dashboard.png" alt="icon" width={120} />

          {
            isLoginPage ?
              null
              :
              <>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" placeholder='Enter your Name here ...' value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="contact">Contact Number</label>
                <input id='contact' type="text" placeholder='Enter your Contact Number here ...' value={userContactNumber} onChange={(e) => setUserContactNumber(e.target.value)} />
              </>
          }


          <label htmlFor="username">Username</label>
          <input id='username' type="text" placeholder='Enter your Username here ...' value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            {isPasswordShow ? <IoEyeOffSharp onClick={() => setIsPasswordShow(!isPasswordShow)} /> : <IoEyeSharp onClick={() => setIsPasswordShow(!isPasswordShow)} />}
            <input id='password' type={isPasswordShow ? "text" : "password"} placeholder='Enter your Password here ...' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">{isLoginPage ? "Login" : "Signup"}</button>
          <div className='bottom-line'>{isLoginPage ? "Have not an Account ?" : "Already Have an Account ?"} <span className='signup-button' onClick={() => setIsLoginPage(!isLoginPage)}>{isLoginPage ? "Signup Here" : "Login Here"}</span></div>
        </form>
      </div>
    </div>
  )
}

export default LoginAndSignup