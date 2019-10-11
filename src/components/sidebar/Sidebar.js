import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './Sidebar.css';

const handleListItem = (loanAmount, tenure) => {
    const data = {
        loanAmount,
        tenure
    }
    global.fetchData(data);
}

export default function Sidebar() {
    var retrievedData = JSON.parse(localStorage.getItem('logs'));
    console.log("retrievedData--", retrievedData)

    return (
        <div className="sidebarWrapper">
            <div className="historyTitle">LOAN HISTORY</div>
            <Divider />
            <div className="listHeading">
                <ListItem>
                    <ListItemText primary="Amount($)" />
                    <ListItemText primary="Duration(months)" />
                </ListItem>
            </div>
            <div style={{ height: '75vh', overflowY: 'scroll' }}>
                {retrievedData && retrievedData.map((item, i) => {
                    return (
                        <ListItem button key={i} onClick={() => handleListItem(item.principal.amount, item.numPayments)}>
                            <ListItemText primary={item.principal.amount} />
                            <ListItemText primary={item.numPayments} />
                        </ListItem>
                    )
                })}
            </div>
        </div>
    )
}