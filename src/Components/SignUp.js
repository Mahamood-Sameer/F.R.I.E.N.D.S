import React from 'react'
import './SignUp.css'
import { auth ,provider} from '../Firebase';
import logo from "./FRIENDS.drawio.png"

function SignIn() {

    const signUp_the_user=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
        }).catch((err)=>{
            alert(err.message)
        })
    }

    return (
        <div className="signIn">
            <div className="signIn_form">
                <img src={logo} alt="Logo"  />
                <br />
                <h3>To start the conversation just click on SignUp</h3>
                <br />
                <button onClick={()=>{signUp_the_user()}}>SignUp with Google</button>
            </div>
        </div>
    )
}

export default SignIn
