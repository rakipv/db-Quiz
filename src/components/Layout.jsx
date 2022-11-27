import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from "./Table"
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
    }, top: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }, input: {
        maxWidth: "800px",
        margin: "24px !important",

    }, table: {
        maxWidth: "1000px",
        margin: "24px"
    }, p: {
        color: "red"
    }
}));

const data = [{
    answer: "select * from country",
    records: [
        {
            id: 1, name: "blr", country: "in", district: "urban", poupulation: 4000

        }, {
            id: 2, name: "hyd", country: "in", district: "south", poupulation: 5000
        }, {
            id: 3, name: "che", country: "in", district: "eastern", poupulation: 3000

        }, {
            id: 4, name: "del", country: "in", district: "fiancial", poupulation: 8000

        },]
},]

export default function ContainedButtons() {
    const classes = useStyles();
    const [input, setInput] = React.useState('')
    const [answer, setAnswer] = React.useState('')
    const [wrong, setWrongAnswer] = React.useState(false)

    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <h3 >Display entire records of city</h3>
                <TextField
                    className={classes.input}
                    id="outlined-multiline-static"
                    label="Answer"
                    value={input}
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    onChange={(x) => { setInput(x.target.value) }}
                />
                <Button variant="contained" onClick={() => {
                    data.map(x => {
                        console.log(x)
                        if (x.answer === input) {
                            setAnswer(x)
                            setWrongAnswer(false)
                            return
                        }
                        setWrongAnswer(true)
                    })

                }}>Submit</Button>
                {wrong && answer !== '' && <p className={classes.p}>Wrong Answer</p>}
            </div>
            <div className={classes.table}>
                {answer?.answer && <Table answer={answer} />}

            </div>
        </div>
    );
}
