import { auth } from '../Firebase'
import React from 'react'
import { useHistory } from "react-router-dom"


function SideNavChannels({ Icon,title,id }) {



    const history = useHistory()


    const SelectChannel = () => {
        if (title !== "Logout") {
            history.push(`/Channel/${id}`)
        }

        else{
            LogOut()
        }
    }

    const LogOut = ()=>{
        auth.signOut()
        history.push("/")
    }

    return (
        <div className="sidenavchannels__info" onClick={() => { SelectChannel() }}>
        
            {
                title === "Logout" ? <p><Icon /> {title}</p> : <p># {title}</p>
            }
        </div>
    )
}

export default SideNavChannels
