import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SpinnerHoldingsTableRow from './SpinnerHoldingsTableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
    tableHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    buttonCell: {
        color: theme.palette.primary.main
    }
}));

// Format currency related strings to include commas and only two decimal places
const currencyFormat = (n) => {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// Table to display user holdings data
const HoldingsTable = ({data}) => {
    const classes = useStyles();
    
    let tableRows = <></>
    if(data) {
        tableRows = data.map((stock) => (
            <TableRow key={stock.symbol}>
                <TableCell component="th" scope="row"><b>{stock.symbol}</b></TableCell>
                <TableCell align="center">{parseInt(stock.quantity).toLocaleString()}</TableCell>
                <TableCell align="center">{currencyFormat(parseFloat(stock.bookValue))}</TableCell>
                <TableCell align="center">{currencyFormat(parseFloat(stock.marketValue))}</TableCell>
                <TableCell align="center">{currencyFormat(parseFloat(stock.unrealizedGain)) + " (" + parseFloat(stock.unrealizedPercentage).toFixed(2) + "%)"}</TableCell>
                <TableCell align="center">
                    <IconButton className={classes.buttonCell}><AddCircleIcon/></IconButton>
                    <IconButton className={classes.buttonCell}><ShoppingCartIcon/></IconButton>
                </TableCell>
            </TableRow>
        ))
    } else {
        tableRows = <SpinnerHoldingsTableRow/>;
    }

    const noHoldingsMessage = <Paper><Typography variant="h5" align="center">You currently have no holdings.</Typography></Paper>;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeader} >Symbol</TableCell>
                        <TableCell className={classes.tableHeader} align="center">Quantity</TableCell>
                        <TableCell className={classes.tableHeader} align="center">Book Value ($)</TableCell>
                        <TableCell className={classes.tableHeader} align="center">Market Value ($)</TableCell>
                        <TableCell className={classes.tableHeader} align="center">Unrealized Gain ($)</TableCell>
                        <TableCell className={classes.tableHeader} align="center">Buy / Sell</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
            {
                // Display a no holdings message if the user has no holdings
                (data && data.length == 0) ? noHoldingsMessage : <></>
            }
        </TableContainer>
    );
}

export default HoldingsTable;