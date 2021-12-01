import styles from './Layout.module.css'
import React from 'react';
import Toolbar from '../../containers/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const layout = ( props: any ) => (
        <React.Fragment>
            <Toolbar />
            <main className={styles["Content"]}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
);

export default layout;