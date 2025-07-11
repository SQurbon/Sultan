import React from 'react'
import './Register.css'
import { FaRegEye } from 'react-icons/fa'


function Register() {
    const [show,setShow]=React.useState(false)
    const [show2,setShow2]=React.useState(false)
  return (
    <div className='login'>
    <div className="register-card">

     <h3>
       Регистрация
     </h3>
        <form className="login-card-input">
            <label >
                <h5>

                    маил:
                </h5>
                <input type="email" />
            </label>

            <label   className='show-inp'>
                <h5>парол:</h5>
                <input type={ !show ? "password" :"text"}/>
                <FaRegEye className='show-icon' onClick={(prev)=>setShow(show===!prev)} />
            </label>
            <label   className='show-inp'>
                <h5>повторит парол:</h5>
                <input type={ !show2 ? "password" :"text"}/>
                <FaRegEye className='show-icon' onClick={(prev)=>setShow2(show2===!prev)} />
            </label>
        </form>

<button className='login-card-button'>
потвердит
</button>
    </div>

</div>
  )
}

export default Register
