import { Dispatch } from "@reduxjs/toolkit"
import { jitsiActions } from "../../config/stateSlices/jitsiSlice"

export const startConference = (dispatch: Dispatch) => {
    try {
      const domain = 'meet.jit.si'
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
          prejoinPageEnabled: false,
        },
      }

      const api = new window.JitsiMeetExternalAPI(domain, options)
      api.addEventListener('passwordRequired', () => {
        api.executeCommand('password', '0000')
      })
      api.addEventListener('videoConferenceJoined', () => {
        dispatch(jitsiActions.loading())
        api.executeCommand('displayName', 'Professor Name')
        api.executeCommand('password', '0000')
      })
    } catch (error) {
      dispatch(jitsiActions.error('Failed to load Jitsi API'))
    }
}