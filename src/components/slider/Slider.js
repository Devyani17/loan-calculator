import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

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


export default function CustomizedSlider(props) {

    const handleSlider = (e, val) => {
        props.getSliderData(val)
    }
    
    const { name, minValue, maxValue, value } = props;

    return (
        <Paper style={{ boxShadow: "none", padding: 30 }}>
            <Typography gutterBottom style={{ marginBottom: 35 }}>{name}</Typography>
            <PrettoSlider valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={value}
                onChange={handleSlider}
                min={minValue}
                max={maxValue}
                name={name}
            />
            {
                name === "Loan Duration(months)" ?
                    (<div className="loanRange">
                        <div>{minValue}</div>
                        <div>{maxValue}</div>
                    </div>) :
                    (<div className="loanRange">
                        <div>{`$${minValue}`}</div>
                        <div>{`$${maxValue}`}</div>
                    </div>)
            }
        </Paper>
    )
}
