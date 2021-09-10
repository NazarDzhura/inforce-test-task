import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import {Form} from "react-bootstrap";

export default function FormDialogComment(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [comment, setComment] = useState("")

    const url = `https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products/${props.product.id}`;

    function submit(e) {
        e.preventDefault();
        axios.put(url, {
            comments: [...props.product.comments, comment]
        })
            .then(res => {
                document.location.reload();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        setComment("");
    }

    function handle(e){
        setComment(e.target.value)
    }

    const style = {
        marginBottom: 10,
        marginTop: 10,
        width: 500
    };

    return (
        <div>
            <Button className="btn-green shadow" variant="contained" color="primary" onClick={handleClickOpen}>
                Add new comment
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Form onSubmit={(e) => submit(e)}>
                    <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                    <DialogContent>
                        <TextField
                            onChange={(e) => handle(e)}
                            value={comment}
                            style={style}
                            id="description"
                            label="Please, write your comment"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            autoFocus
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary" type="submit">
                            Add comment
                        </Button>
                    </DialogActions>
                </Form>
            </Dialog>
        </div>
    );
}