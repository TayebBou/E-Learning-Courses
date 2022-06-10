import styles from './Layout.module.css'
import { FC } from 'react'
import Toolbar from '../../containers/Navigation/Toolbar/Toolbar'
import Footer from '../../components/Footer/Footer'

const layout: FC = (props) => (
  <>
    <Toolbar />
    <main className={styles['Content']}>{props.children}</main>
    <Footer />
  </>
)

export default layout
