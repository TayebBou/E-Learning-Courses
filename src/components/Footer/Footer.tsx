import { FC } from 'react'
import Logo from '../Logo/Logo'
import styles from './Footer.module.css'

const Footer: FC = () => (
  <footer className={styles['footer-class']}>
    <Logo style={{ marginTop: '0.7em' }} imageStyle="white" />
    <p className={styles['footer-text']}>
      Copyright © 2021 - Tous Droits Réservés -{' '}
      <strong>
        <span>E-Learning Courses</span>
      </strong>
    </p>
  </footer>
)

export default Footer
