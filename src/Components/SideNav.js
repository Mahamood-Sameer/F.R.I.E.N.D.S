import React, { useState, useEffect } from 'react'
import SideNavChannels from './SideNavChannels';
import './SideNav.css'
import { db } from '../Firebase';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function SideNav({user}) {

    const [channels, setChannels] = useState([])


    useEffect(() => {

        db.collection("Channels").onSnapshot((snapshot) => {
            setChannels(snapshot.docs.map((doc) => {
                return (
                    {
                        id:doc.id,
                        name: doc.data().name
                    }
                )

            }))

        })

    }, [])

    return (
        <div className="sidenav">
            <div className="sidenav__topheader">
                <div className="sidenav__topheader__info">
                    <h3>F.R.I.E.N.D.S</h3>
                    <h6><FiberManualRecordIcon /> {user?.displayName}</h6>
                    <SideNavChannels Icon={ExitToAppIcon} title="Logout" />
                </div>
                <CreateIcon className="sidenav__topheader__create__icon" />
            </div>
            <div className="sidenav__channels">
                <h4> CHANNELS 🚀</h4>
                {
                    channels.map((channel)=>{
                        return(
                            <>
                            <SideNavChannels title={channel.name} id={channel.id}/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideNav
