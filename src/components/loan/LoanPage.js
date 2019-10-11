import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import './loan.css';
import Slider from '../slider/Slider';

export default class LoanPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loanAmount: 1500,
            tenure: 12,
        }
    }

    componentDidMount() {
        this.fetchData(this.state);
    }

    fetchData = (state) => {
        fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${state.loanAmount}&numMonths=${state.tenure}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
                console.log("data--", data)
            });
    }

    getSliderData = (value) => {
        console.log('value===', value)
        if (value > 499) {
            this.setState({
                loanAmount: value
            }, () => {
                this.fetchData(this.state)
            })
        } else {
            this.setState({
                tenure: value
            }, () => {
                this.fetchData(this.state)
            })
        }
    }

    render() {
        const { loanAmount, tenure, data } = this.state;
        return (
            <Container maxWidth="sm" className="mainWrapper">
                <Card >
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>
                            LOAN CALCULATOR
                            </Typography>
                        <Divider />
                        <div className="loanWrapper">
                            <div>
                                <h4>Monthly Amount</h4>
                                <p>{data && `$${data.monthlyPayment.amount}/month`}</p>
                            </div>
                            <div>
                                <h4>Interest Rate</h4>
                                <p>{data && data.interestRate}</p>
                            </div>
                            <br />
                        </div>
                        <Divider />
                    </CardContent>
                    <Slider name="Loan Amount" value={loanAmount} minValue={500} maxValue={5000} getSliderData={this.getSliderData} />
                    <Slider name="Loan Duration(months)" value={tenure} minValue={6} maxValue={24} getSliderData={this.getSliderData} />
                </Card>
            </Container>
        );
    }
}