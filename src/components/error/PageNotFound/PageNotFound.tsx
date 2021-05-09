import './PageNotFound.css';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';

const PageNotFound = (props : any) => (
    <div className="page-not-found-parent-div">
        <div className="page-not-found-content-div">
            <h2 className="page-not-found-title">The page does not exist.</h2>
            <p style={{ margin: '2em', textAlign: 'center' }}>Check if the link you are trying to open is correct.</p>
            <div style={{ margin: '0 auto', width: 'fit-content' }}>
                <Button className="page-not-found-first-button" onClick={() => props.history.goBack()} label="Return" icon="pi pi-arrow-left" />
                <Button onClick={() => props.history.push("/home")} label="Back to the homepage" className="p-button-outlined page-not-found-second-button" icon="pi pi-home" />
            </div>
        </div>
    </div>
)

export default withRouter(PageNotFound);