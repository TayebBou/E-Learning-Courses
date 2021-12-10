import { FC, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { jitsiActions } from '../../config/stateSlices/jitsiSlice'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Dialog } from 'primereact/dialog'
import styles from './Meeting.module.css'
import { IRootState } from '../../shared/models/rootState.model'
import { startConference } from './startConference'

declare global {
  interface Window {
    JitsiMeetExternalAPI: any
  }
}

const Meeting: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: IRootState) => state.jitsi.loading)
  const error = useSelector((state: IRootState) => state.jitsi.error)

  const onHide = () => {
    dispatch(jitsiActions.error(null))
  }

  const startConferenceCallback = useCallback(() => {
    startConference(dispatch)
  },[dispatch])

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConferenceCallback()
    else dispatch(jitsiActions.error('Jitsi Meet API script not loaded'))
  }, [dispatch, startConferenceCallback])

  return (
    <>
      <Dialog
        dismissableMask={true}
        visible={error ? true : false}
        onHide={() => onHide()}
        breakpoints={{ '960px': '75vw' }}
        style={{ width: '50vw' }}
        baseZIndex={1000}
      >
        <>
          <h1
            style={{
              textAlign: 'center',
              marginTop: '0',
              marginBottom: 'calc(80px - 2rem)',
            }}
          >
            <strong>{error}</strong>
          </h1>
        </>
      </Dialog>
      {loading ? <ProgressSpinner /> : null}
      <div
        id="jitsi-container"
        style={{ display: loading ? 'none' : 'block' }}
        className={styles['meeting-container']}
      />
    </>
  )
}

export default Meeting
