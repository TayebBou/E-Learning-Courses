import { useDispatch, useSelector } from 'react-redux'
import { coursesActions } from '../../config/stateSlices/coursesSlice'
import styles from './Courses.module.css'
import {
  OutlinedInput,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  ThemeProvider
} from '@material-ui/core'
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import data from './data.json'
import { IRootState } from '../../shared/models/rootState.model'
import { RouteComponentProps } from 'react-router-dom'
import { FC } from 'react'
import { Module } from '../../shared/models/module.model'
import { getCoursesList } from './coursesList'

const Courses: FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch()
  const searchText = useSelector(
    (state: IRootState) => state.courses.searchText,
  )
  const selectedModule = useSelector(
    (state: IRootState) => state.courses.selectedModule,
  )
  const dataFiltred = useSelector(
    (state: IRootState) => state.courses.dataFiltred,
  )

  const theme = unstable_createMuiStrictModeTheme()

  const handleSearchText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.target.value === '') {
      if (selectedModule === Module.ALL) {
        dispatch(coursesActions.dataFiltred(data.courses))
      } else {
        dispatch(
          coursesActions.dataFiltred(
            data.courses.filter(
              ({ moduleName }) => moduleName === selectedModule,
            ),
          ),
        )
      }
    } else {
      if (selectedModule === Module.ALL) {
        dispatch(
          coursesActions.dataFiltred(
            data.courses.filter(({ matter }) =>
              matter.toLowerCase().startsWith(event.target.value.toLowerCase()),
            ),
          ),
        )
      } else {
        dispatch(
          coursesActions.dataFiltred(
            data.courses.filter(
              ({ moduleName, matter }) =>
                moduleName === selectedModule &&
                matter
                  .toLowerCase()
                  .startsWith(event.target.value.toLowerCase()),
            ),
          ),
        )
      }
    }
    dispatch(coursesActions.searchText(event.target.value))
  }

  const handleSelectedModule = (
    event: React.ChangeEvent<{
      name?: string | undefined
      value: unknown
    }>,
  ) => {
    if (event.target.value === Module.ALL) {
      if (searchText === '') {
        dispatch(coursesActions.dataFiltred(data.courses))
      } else {
        dispatch(
          coursesActions.dataFiltred(
            data.courses.filter(({ matter }) =>
              matter.toLowerCase().startsWith(searchText.toLowerCase()),
            ),
          ),
        )
      }
    } else {
      if (searchText === '') {
        dispatch(
          coursesActions.dataFiltred(
            data.courses.filter(
              ({ moduleName }) => moduleName === event.target.value,
            ),
          ),
        )
      } else {
        dispatch(
          coursesActions.dataFiltred(
            data.courses.filter(
              ({ moduleName, matter }) =>
                moduleName === event.target.value &&
                matter.toLowerCase().startsWith(searchText.toLowerCase()),
            ),
          ),
        )
      }
    }
    dispatch(coursesActions.selectedModule(event.target.value))
  }

  const handleStartCourse = () => {
    props.history.push('/meeting')
  }

  return (
    <>
      <div className={styles['courses-header']}>
        <h2
          className={`${styles['centerVertically']} ${styles['courses-header-title']}`}
        >
          Here are the videoconference courses assigned to you
        </h2>
        <ul className={styles['circles']}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {data.courses.length === 0 ? (
        <h2 className={styles['no-data-text']}>
          There is no course available right now.
        </h2>
      ) : (
        <div className={styles['courses-content']}>
          <div className={styles['courses-content-header']}>
            <TextField
              label="Find a matter"
              placeholder="Enter a keyword..."
              value={searchText}
              inputProps={{
                'aria-label': 'Search',
              }}
              onChange={(event) => handleSearchText(event)}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl variant="outlined" style={{ float: 'right' }}>
              <InputLabel htmlFor="module-label-placeholder">Module</InputLabel>
              <ThemeProvider theme={theme}>
                <Select
                  value={selectedModule}
                  onChange={(event) => handleSelectedModule(event)}
                  input={<OutlinedInput labelWidth={'Module'.length * 9} />}
                >
                  <MenuItem value={Module.ALL}>
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={Module.MOBILE}>Mobile</MenuItem>
                  <MenuItem value={Module.WEB}>Web</MenuItem>
                </Select>
              </ThemeProvider>
            </FormControl>
          </div>
          <div>{getCoursesList(dataFiltred, handleStartCourse)}</div>
        </div>
      )}
    </>
  )
}

export default Courses
