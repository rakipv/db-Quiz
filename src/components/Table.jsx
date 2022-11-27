import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
// id: 4, name: "del", country: "in", district: "fiancial", poupulation: 8000


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({ answer }) {
    const classes = useStyles();
    console.log(answer.records)
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">country&nbsp;</TableCell>
                        <TableCell align="right">district&nbsp;</TableCell>
                        <TableCell align="right">poupulation&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answer.records.map((row) => {
                        console.log(row)
                        return <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row?.id}
                            </TableCell>
                            <TableCell align="right">{row?.name}</TableCell>
                            <TableCell align="right">{row?.country}</TableCell>
                            <TableCell align="right">{row?.district}</TableCell>
                            <TableCell align="right">{row?.poupulation}</TableCell>
                        </TableRow>
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
