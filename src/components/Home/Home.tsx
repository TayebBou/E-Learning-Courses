import homeBackground from '../../assets/images/home-background.jpg'
import { Button } from 'primereact/button'
import { RouteComponentProps } from 'react-router-dom'
import { FC } from 'react'

const Home: FC<RouteComponentProps> = (props) => (
    <div className="home">
      <div className="centerVerticallyHome">
        <div style={{ width: '50%', float: 'left' }}>
          <img
            src={homeBackground}
            alt="Home background"
            className="background-home"
          />
        </div>
        <div className="home-content">
          <h1 className="home-title">Welcome To E-Learning Courses</h1>
          <p style={{ color: '#014f8b' }}>
            Go check your videoconferences assigned to you or start an
            unscheduled one.
          </p>
          <Button
            onClick={() => props.history.push('/courses')}
            className="button-home-first"
            label="Check Your Videoconferences"
            icon="pi pi-calendar"
          />
          <Button
            onClick={() => props.history.push('/meeting')}
            label="Start A New Videoconference"
            className="p-button-outlined button-home-second"
            icon="pi pi-desktop"
          />
        </div>
      </div>
    </div>
  )

export default Home
