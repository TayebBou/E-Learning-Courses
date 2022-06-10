import styles from './PageNotFound.module.css'
import { Button } from 'primereact/button'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { FC } from 'react'

const PageNotFound: FC<RouteComponentProps> = (props) => (
  <div className={styles['page-not-found-parent-div']}>
    <div className={styles['page-not-found-content-div']}>
      <h2 className={styles['page-not-found-title']}>
        The page does not exist.
      </h2>
      <p style={{ margin: '2em', textAlign: 'center' }}>
        Check if the link you are trying to open is correct.
      </p>
      <div style={{ margin: '0 auto', width: 'fit-content' }}>
        <Button
          className={styles['page-not-found-first-button']}
          onClick={() => props.history.goBack()}
          label="Return"
          icon="pi pi-arrow-left"
        />
        <Button
          onClick={() => props.history.push('/home')}
          label="Back to the homepage"
          className={`p-button-outlined ${styles['page-not-found-second-button']}`}
          icon="pi pi-home"
        />
      </div>
    </div>
  </div>
)

export default withRouter(PageNotFound)
