import React from "react";
import {Card, Divider, Grid, IconButton, makeStyles, Paper} from "@material-ui/core";
import FormDialogComment from "./FormDialogs/FormDialogComment";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

export default function Comments(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            minHeight: 450,
            padding: theme.spacing(2),
            textAlign: 'center',
            alignItems: "center",
        }
    }));

    const classes = useStyles();

    let comments = props.comments;
    function handleDelete(e, index) {
        e.preventDefault();
        const newComments = [...props.product.comments.splice(index, 1)];
        axios.put(`https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products/${props.product.id}`, {
            comments: [...props.product.comments]
        })
            .then(res => {
                document.location.reload();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let content = comments.map((comment, index) =>
            <Card key={index} className="shadow" style={{minHeight: 50, margin: 20, background: "#f6f7f8"}}>
                <p className="p-5 italic">{comment}</p>
                <IconButton
                    className="inline-block"
                    onClick={(e) => {handleDelete(e, index);}}
                    aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Card>
        )

    return (
    <Grid item xs={12}>
        <Paper className={classes.paper}>
            <h1 className="text-2xl font-bold mb-2">Comments</h1>
            <Divider variant="middle" />
            {content}
            <FormDialogComment product={props.product}/>
        </Paper>
    </Grid>
    );
}