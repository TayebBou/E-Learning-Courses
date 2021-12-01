import React, {useEffect, useState} from 'react';

import { ProgressSpinner } from 'primereact/progressspinner';
import { Dialog } from 'primereact/dialog';
import './Meeting.css';


declare global {
    interface Window {
        JitsiMeetExternalAPI: any;
    }
}

const Meeting = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    const onHide = () => {
        setError(null);
    }
  
    const startConference = () => {
        try {
            const domain = 'meet.jit.si';
            const options = {
                roomName: 'E-Learning Courses Room 1',
                height: '100%',
                parentNode: document.getElementById('jitsi-container'),
                interfaceConfigOverwrite: {
                    SHOW_CHROME_EXTENSION_BANNER: false,
                },
                configOverwrite: {
                    disableDeepLinking: true,
                    disableSimulcast: false,
                    prejoinPageEnabled: false
                },
            };
        
            const api = new window.JitsiMeetExternalAPI(domain, options);
            api.addEventListener('passwordRequired', () => {
                api.executeCommand('password', "0000");
            });
            api.addEventListener('videoConferenceJoined', () => {
                console.log('Local User Joined');
                setLoading(false);
                api.executeCommand('displayName', 'Professor Name');
                api.executeCommand('password', "0000");
            });
        } catch (error) {
            console.error('Failed to load Jitsi API', error);
            setError('Failed to load Jitsi API');
        }
    }

    useEffect(() => {
        // verify the JitsiMeetExternalAPI constructor is added to the global..
        if (window.JitsiMeetExternalAPI) startConference();
        else setError('Jitsi Meet API script not loaded');
    }, []);
  
    return (
        <React.Fragment>
            <Dialog dismissableMask={true}
                visible={error ? true : false} onHide={() => onHide()} 
                breakpoints={{'960px': '75vw'}} style={{width: '50vw'}}
                baseZIndex={1000}>
                    <React.Fragment>
                        <h1 style={{ textAlign: 'center', marginTop: '0', marginBottom: 'calc(80px - 2rem)' }} ><strong>{error}</strong></h1>
                    </React.Fragment>
            </Dialog>
            {loading ?
            <ProgressSpinner/>
            : null}
            <div
            id="jitsi-container"
            style={{ display: (loading ? 'none' : 'block') }}
            className="meeting-container"
            />
        </React.Fragment>
    )
};

export default Meeting;
