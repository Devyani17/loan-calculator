import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        //width: 300 + theme.spacing(3) * 2,
        padding: theme.spacing(3),
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const handleSlider = (e,val) =>{
    console.log("e---",val);
}

export default function CustomizedSlider(props) {
    const classes = useStyles();
    const { name, minValue, maxValue } = props;
    const defaultValue = (maxValue - minValue) / 2;
    console.log("props--", props);

    return (
        <Paper className={classes.root} style={{ boxShadow: "none" }}>
            <div className={classes.margin} />
            <Typography gutterBottom style={{ marginBottom: 35 }}>{name}</Typography>
            <PrettoSlider valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={defaultValue}
                onChange={handleSlider}
                min={minValue}
                max={maxValue} />
            {name === "Tenure" ?
                (<div className="loanRange">
                    <div>{minValue}</div>
                    <div>{maxValue}</div>
                </div>) :
                (<div className="loanRange">
                    <div>{`$${minValue}`}</div>
                    <div>{`$${maxValue}`}</div>
                </div>)
            }
            <div className={classes.margin} />
        </Paper>
    );
}
