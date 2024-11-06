import { ICoursesStates } from './coursesStates.model'
import { IToolbarStates } from './toolbarStates.model'

export interface IRootState {
  courses: ICoursesStates
  toolbar: IToolbarStates
}
