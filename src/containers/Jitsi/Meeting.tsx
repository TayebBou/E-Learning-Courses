import { FC } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useSelector } from "react-redux";
import { IRootState } from "../../shared/models/rootState.model";

const Meeting: FC = () => {

  const selectedCourse = useSelector(
    (state: IRootState) => state.courses.selectedCourse,
  )
  
  return (
    <JitsiMeeting
      domain="meet.jit.si"
      roomName="E-Learning_Courses_Room_1"
      spinner={() => <ProgressSpinner />}
      lang="fr"
      configOverwrite={{
        subject: selectedCourse,
        hideConferenceSubject: false,
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
        disableDeepLinking: true,
        disableSimulcast: false,
        prejoinPageEnabled: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        SHOW_CHROME_EXTENSION_BANNER: false,
      }}
      userInfo={{
        displayName: "Professor Name",
        email: "",
      }}
      onApiReady={() => {
        window.scrollTo({ top: 72, behavior: 'smooth' });
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "100vh";
      }}
    />
  );
};

export default Meeting;
