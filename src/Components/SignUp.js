import React from 'react'
import './SignUp.css'
import { auth ,provider} from '../Firebase';

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
                <h1>F.R.I.E.N.D.S</h1>
                <br />
                <h3>To start the conversation just click on SignUp</h3>
                <br />
                <button onClick={()=>{signUp_the_user()}}>SignUp with Google</button>
            </div>
        </div>
    )
}

export default SignIn
