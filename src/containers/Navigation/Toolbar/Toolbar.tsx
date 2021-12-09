import { FC, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toolbarActions } from '../../../config/stateSlices/toolbarSlice'
import Logo from '../../../components/Logo/Logo'
import { TabMenu } from 'primereact/tabmenu'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { IRootState } from '../../../shared/models/rootState.model'
import { getItems } from './items'

const Toolbar: FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch()
  const isMedium = useSelector((state: IRootState) => state.toolbar.isMedium)
  const visibleLeft = useSelector(
    (state: IRootState) => state.toolbar.visibleLeft,
  )
    
  // handling screen size when change
  const handleResize = useCallback(() => {
    if (window.innerWidth < 900) {
      dispatch(toolbarActions.isMedium(true))
    } else {
      dispatch(toolbarActions.isMedium(false))
      dispatch(toolbarActions.visibleLeft(false))
    }
  }, [dispatch])

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <>
      <Sidebar
        visible={visibleLeft}
        baseZIndex={1000000}
        onHide={() => dispatch(toolbarActions.visibleLeft(false))}
      >
        <Logo
          imageStyle="blue"
          textStyle={{ color: '#7373a3' }}
          style={{
            position: 'relative',
            marginBottom: '3em',
            marginTop: '2em',
          }}
        />
        <Button
          style={{ width: '100%', marginBottom: '1em' }}
          onClick={() => {
            props.history.push('/home')
            dispatch(toolbarActions.visibleLeft(false))
          }}
          label="Home"
          className="p-button-danger p-button-text sidebar-button"
          icon="pi pi-fw pi-home sidebar-icon"
        />
        <Button
          style={{ width: '100%', marginBottom: '1em' }}
          onClick={() => {
            props.history.push('/courses')
            dispatch(toolbarActions.visibleLeft(false))
          }}
          label="Courses"
          className="p-button-danger p-button-text sidebar-button"
          icon="pi pi-fw pi-calendar sidebar-icon"
        />
      </Sidebar>
      <header className="Toolbar">
        <Logo imageStyle="white" />
        {!isMedium ? (
          <TabMenu model={getItems(props)} />
        ) : (
          <Button
            icon="pi pi-bars big"
            onClick={() => dispatch(toolbarActions.visibleLeft(true))}
            className="p-mr-2 burger-button"
          />
        )}
      </header>
    </>
  )
}

export default withRouter(Toolbar)
