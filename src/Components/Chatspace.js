import React, { useEffect, useState } from 'react'
import './Chatspace.css'
import { useParams } from "react-router-dom"
import { db } from '../Firebase';
import Message from './Message';
import firebase from '@firebase/app-compat';


function Chatspace({ user }) {

    let { channel } = useParams()

    const [channelinfo, setChannelInfo] = useState(null)

    const [channelmessages, setChannelMessages] = useState(null)

    const [message, setMessage] = useState("")

    useEffect(() => {
        if (channel) {
            db.collection('Channels').doc(channel).onSnapshot((snapShot) => {
                return (
                    setChannelInfo(
                        snapShot.data()
                    )
                )

            })

            db.collection('Channels').doc(channel).collection("ChannelMessages").orderBy('timestamp', 'asc').onSnapshot(snapShot => (
                setChannelMessages(
                    snapShot.docs.map(doc => (doc.data()))
                )
            ))
        }
    }, [channel])


    const AddingTheMessage = (e) => {
        e.preventDefault()
        if (message !== '') {
            db.collection("Channels").doc(channel).collection("ChannelMessages").doc().set({
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                userName: user.displayName,
                image: user.photoURL
            })
            setMessage("")
        }

    }

    console.log(channelinfo)
    console.log(channelmessages)

    return (
        <div className="chatspace">
            <h2>#{channelinfo?.name}</h2>
            <div classsName="chatspace__chat">
                {
                    channelmessages?.map(message => (
                        <Message message={message.message} username={message.userName} image={message.image} timestamp={message.timestamp} />
                    ))
                }
            </div>
            <div className="send__messages">
                <form onSubmit={(e) => { AddingTheMessage(e) }}>
                    <input type="text" value={message} onChange={(e) => {
                        setMessage(e.target.value)
                    }} placeholder={`Send a Message to ${channelinfo?.name}`} />
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    )
}

export default Chatspace
