import React, { useState, useEffect } from 'react';
import Logo from '../../../components/Logo/Logo';
import { TabMenu } from 'primereact/tabmenu';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';

const Toolbar = (props : any) => {

    const [isMedium, setIsMedium] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(false);
    let isWidthMedium = window.innerWidth < 900 ? true : false;
 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 900) {
        setIsMedium(true)
    } else {
        setIsMedium(false)
        setVisibleLeft(false)
    }
    isWidthMedium = isMedium;
    }

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    })

    const items = [
        {className: "hidden-selected"},
        {className: props.history.location.pathname === "/home" ? "p-tabmenuitem p-highlight" : "p-tabmenuitem", label: 'Home', icon: 'pi pi-fw pi-home', command: ()=> props.history.push("/home")},
        {className: props.history.location.pathname === "/courses" ? "p-tabmenuitem p-highlight" : "p-tabmenuitem", label: 'Courses', icon: 'pi pi-fw pi-calendar', command: ()=> props.history.push("/courses")},
    ];

    return (
        <React.Fragment>
            <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                <Logo imageStyle="blue" textStyle={{ color: '#7373a3'}} style={{ position: 'relative', marginBottom: '3em', marginTop: '2em' }} />
                <Button style={{ width: '100%', marginBottom: '1em' }} onClick={() => {props.history.push("/home"); setVisibleLeft(false)}} label="Home" className="p-button-danger p-button-text sidebar-button" icon='pi pi-fw pi-home sidebar-icon' />
                <Button style={{ width: '100%', marginBottom: '1em' }} onClick={() => {props.history.push("/courses"); setVisibleLeft(false)}} label="Courses" className="p-button-danger p-button-text sidebar-button" icon='pi pi-fw pi-calendar sidebar-icon' />
            </Sidebar>
            <header className="Toolbar">
                <Logo imageStyle="white" />
                { !isWidthMedium ? 
                <TabMenu model={items} />
                : 
                <Button icon="pi pi-bars big" onClick={() => setVisibleLeft(true)} className="p-mr-2 burger-button" /> }
            </header>
        </React.Fragment>
)};

export default withRouter(Toolbar);