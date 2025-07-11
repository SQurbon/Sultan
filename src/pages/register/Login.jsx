import React, { useState } from 'react'
import './Register.css'
import { FaRegEye } from "react-icons/fa";

function Login() {
    const [show,setShow]=useState(false)
    return (
        <div className='login'>
            <div className="login-card">

             <h3>
              Логин
             </h3>
                <div className="login-card-input">
                    <label >
                        <h5>

                            маил:
                        </h5>
                        <input type="email" />
                    </label>

                    <label className='show-inp'>
                        <h5>парол:</h5>
                        <input type={ !show ? "password" :"text"}/>
                        <FaRegEye className='show-icon' onClick={(prev)=>setShow(show===!prev)} />
                    </label>
                </div>

<button className='login-card-button'>
    потвердит
</button>
            </div>

        </div>
    )
}

export default Login
