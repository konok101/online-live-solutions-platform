import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Navigation from '../../../src/Pages/Shared/Navigation'
 

const Room = () => {

    const {roomId}= useParams();
    const { user } = useContext(AuthContext);


    const myMeeting = async(element)=>{
        const appID = 2116513757;
        const serverSecrt = "527d1530b53a3cd1b5937cf96ab4df90" ;
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecrt, roomId, Date.now().toString(), user?.displayName);
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc?.joinRoom({
            container: element,
            scenario: { 
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true
        });

    }
    return (
        <div>

<Navigation/>
        
            <div ref={myMeeting} /> 
        </div>
    );
};

export default Room;