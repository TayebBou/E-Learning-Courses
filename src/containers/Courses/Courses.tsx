
import React, { useState } from 'react';
import styles from './Courses.module.css';
import {
    Button,
    Card,
    CardContent,
    OutlinedInput,
    TextField,
    Typography,
    CardActions,
    Divider,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    LinearProgress,
    ThemeProvider
} from '@material-ui/core';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import data from './data.json';

const Courses = (props : any) => {

    const [searchText, setSearchText] = useState('');
    const [selectedModule, setSelectedModule] = useState<string>('all');
    const [dataFiltred, setdataFiltred] = useState(data.courses);

    const theme = unstable_createMuiStrictModeTheme();

    const Courses = dataFiltred.map(( i: any, j: any ) => {

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const d = new Date(Date.now());
        const d1 = new Date(Date.now());
        let courseProgress = 0;
        let disabledCourse = false;

        const getContrastYIQ = (hexcolor : any) => {
            hexcolor = hexcolor.replace("#", "");
            var r = parseInt(hexcolor.substr(0,2),16);
            var g = parseInt(hexcolor.substr(2,2),16);
            var b = parseInt(hexcolor.substr(4,2),16);
            var yiq = ((r*299)+(g*587)+(b*114))/1000;
            return (yiq >= 128) ? 'black' : 'white';
        }

        if (j === 0) {
            d.setHours(14,30);
            d.setDate(d.getDate() + 1)
        } else if (j === 1) {
            d.setHours(14,30);
        } else if (j === 2) {
            d.setHours(9,30);
        } else if (j === 3) {
            d.setDate(d.getDate() - 1);
            d.setHours(14,30);
        }
        if (d.getTime() < d1.getTime()) {
            courseProgress = 100;
            disabledCourse = true;
            if(d1.getTime() < d.getTime() + i.minutes*60000) {
                courseProgress = 50;
                disabledCourse = false;
            }
        }

        return (
            <Card key={uuidv4()} elevation={1} className={styles["card-style"]}>
                <div style={{ background: i.hexColor, color: getContrastYIQ(i.hexColor) }} className={styles["card-header"]}>
                    <Typography color="inherit">{i.moduleName}</Typography>
                    <div >
                        <i className={styles["pi pi-clock"]} style={{ fontSize: '0.83em', paddingRight: '0.5em'}}></i>
                        <span>{i.minutes} min</span>
                    </div>
                </div>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography style={{ fontSize: '1.4rem' }}>{i.matter}</Typography>
                    <Typography color="textSecondary" style={{ fontSize: '0.9rem' }}>{d.getHours() + "h" + d.getMinutes() + " " + monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()}</Typography>
                </CardContent>
                <Divider/>
                <CardActions style={{ padding: 0 }}>
                    <Button
                        disabled={disabledCourse}
                        onClick={() => disabledCourse ? null : handleStartCourse()}
                        color="primary"
                        style={{ width: '100%', padding: '1em' }}
                    >
                        JOIN THE COURSE
                    </Button>
                </CardActions>
                <LinearProgress
                    variant="determinate"
                    value={courseProgress}
                    color="primary"
                />
            </Card>
        )});

    const handleSearchText = (event : any) => {
        if (event.target.value === '') {
            if (selectedModule === 'all') {
                setdataFiltred(data.courses);
            } else {
                setdataFiltred(data.courses.filter(({moduleName}): any => moduleName === selectedModule));
            }
        } else {
            if (selectedModule === 'all') {
                setdataFiltred(data.courses.filter(({matter}): any => matter.toLowerCase().startsWith(event.target.value.toLowerCase())));
            } else {
                setdataFiltred(data.courses.filter(({moduleName, matter}): any => moduleName === selectedModule && matter.toLowerCase().startsWith(event.target.value.toLowerCase())));
            }
        }
        setSearchText(event.target.value);
    }

    const handleSelectedModule = (event : any) => {
        if (event.target.value === 'all') {
            if (searchText === '') {
                setdataFiltred(data.courses);
            } else {
                setdataFiltred(data.courses.filter(({matter}): any => matter.toLowerCase().startsWith(searchText.toLowerCase())));
            }
        } else {
            if (searchText === '') {
                setdataFiltred(data.courses.filter(({moduleName}): any => moduleName === event.target.value));
            } else {
                setdataFiltred(data.courses.filter(({moduleName, matter}): any => moduleName === event.target.value && matter.toLowerCase().startsWith(searchText.toLowerCase())));
            }
        }
        setSelectedModule(event.target.value);
    }

    const handleStartCourse = () => {
        props.history.push('/meeting');
    }

    return (
        <React.Fragment>
            <div className={styles["courses-header"]} >
                <h2 className={`${styles["centerVertically"]} ${styles["courses-header-title"]}`}>Here are the videoconference courses assigned to you</h2>
                <ul className={styles["circles"]}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            { data.courses.length === 0 ? 
            <h2 className={styles["no-data-text"]}>There is no course available right now.</h2>
            :
            <div className={styles["courses-content"]}>
                <div className={styles["courses-content-header"]}>
                    <TextField
                        label="Find a matter"
                        placeholder="Enter a keyword..."
                        value={searchText}
                        inputProps={{
                            'aria-label': 'Search'
                        }}
                        onChange={(event) => handleSearchText(event)}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <FormControl variant="outlined" style={{ float: 'right' }}>
                        <InputLabel htmlFor="module-label-placeholder">
                            Module
                        </InputLabel>
                        <ThemeProvider theme={theme}>
                            <Select
                                value={selectedModule}
                                onChange={(event) => handleSelectedModule(event)}
                                input={<OutlinedInput labelWidth={("Module".length * 9)}/>}
                            >
                                <MenuItem value="all"><em>All</em></MenuItem>
                                <MenuItem value="mobile" >Mobile</MenuItem>
                                <MenuItem value="web" >Web</MenuItem>
                            </Select>
                        </ThemeProvider>
                    </FormControl>
                </div>
                <div>
                {Courses}
                </div>
            </div>}
        </React.Fragment>
    )

}

export default Courses;