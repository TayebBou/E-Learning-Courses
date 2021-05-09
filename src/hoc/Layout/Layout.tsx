import './Layout.css'
import React from 'react';
import Toolbar from '../../containers/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const layout = ( props: any ) => (
        <React.Fragment>
            <Toolbar />
            <main className="Content">
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
);

export default layout;