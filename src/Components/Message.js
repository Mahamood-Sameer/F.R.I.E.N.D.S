import React from 'react'


function Message({message,username,image,timestamp}) {
    return (
        <div className="message__box">
            <div className="message__info">
                <img src={image} alt="profile"></img>
                <p>{username}<p className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</p></p>
            </div>
            <hr />
            <p className="message">{message}</p>
            
        </div>
    )
}

export default Message
