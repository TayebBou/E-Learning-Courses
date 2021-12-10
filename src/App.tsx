import Layout from './hoc/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { FC } from 'react'

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  )
}

export default App
