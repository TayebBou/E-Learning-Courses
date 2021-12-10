import { dataFiltred } from "../../shared/models/coursesStates.model"
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
  LinearProgress
} from '@material-ui/core'
import styles from './Courses.module.css'
import data from './data.json'


export const getCoursesList = (dataFiltred: dataFiltred[], handleStartCourse: Function) => {
  
    return dataFiltred.map((i, j) => {

    const d = new Date(Date.now())
    const d1 = new Date(Date.now())
    let courseProgress = 0
    let disabledCourse = false

    const getContrastYIQ = (hexcolor: string) => {
      hexcolor = hexcolor.replace('#', '')
      var r = parseInt(hexcolor.substr(0, 2), 16)
      var g = parseInt(hexcolor.substr(2, 2), 16)
      var b = parseInt(hexcolor.substr(4, 2), 16)
      var yiq = (r * 299 + g * 587 + b * 114) / 1000
      return yiq >= 128 ? 'black' : 'white'
    }

    if (j === 0) {
      d.setHours(14, 30)
      d.setDate(d.getDate() + 1)
    } else if (j === 1) {
      d.setHours(14, 30)
    } else if (j === 2) {
      d.setHours(9, 30)
    } else if (j === 3) {
      d.setDate(d.getDate() - 1)
      d.setHours(14, 30)
    }
    if (d.getTime() < d1.getTime()) {
      courseProgress = 100
      disabledCourse = true
      if (d1.getTime() < d.getTime() + i.minutes * 60000) {
        courseProgress = 50
        disabledCourse = false
      }
    }

    return (
      <Card key={i.id} elevation={1} className={styles['card-style']}>
        <div
          style={{ background: i.hexColor, color: getContrastYIQ(i.hexColor) }}
          className={styles['card-header']}
        >
          <Typography color="inherit">{i.moduleName}</Typography>
          <div>
            <i
              className={styles['pi pi-clock']}
              style={{ fontSize: '0.83em', paddingRight: '0.5em' }}
            ></i>
            <span>{i.minutes} min</span>
          </div>
        </div>
        <CardContent style={{ textAlign: 'center' }}>
          <Typography style={{ fontSize: '1.4rem' }}>{i.matter}</Typography>
          <Typography color="textSecondary" style={{ fontSize: '0.9rem' }}>
            {d.getHours() +
              'h' +
              d.getMinutes() +
              ' ' +
              data.monthNames[d.getMonth()] +
              ' ' +
              d.getDate() +
              ', ' +
              d.getFullYear()}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions style={{ padding: 0 }}>
          <Button
            disabled={disabledCourse}
            onClick={() => (disabledCourse ? null : handleStartCourse())}
            color="primary"
            style={{ width: '100%', padding: '1em' }}
          >
            JOIN THE COURSE
          </Button>
        </CardActions>
        <LinearProgress
          variant="determinate"
          value={courseProgress}
          color="primary"
        />
      </Card>
    )
  })
}