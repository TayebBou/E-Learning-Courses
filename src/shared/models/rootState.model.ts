import { ICoursesStates } from './coursesStates.model'
import { IJitsiStates } from './jitsiStates.model'
import { IToolbarStates } from './toolbarStates.model'

export interface IRootState {
  courses: ICoursesStates
  jitsi: IJitsiStates
  toolbar: IToolbarStates
}
