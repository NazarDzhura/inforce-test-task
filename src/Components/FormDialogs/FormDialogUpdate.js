import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import {Form} from "react-bootstrap";

export default function FormDialogUpdateTest(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState({
        name: props.product.name,
        description: props.product.description,
        count: props.product.count,
        color: props.product.color,
        weight: props.product.weight,
        image: props.product.image,
        comments: props.product.comments
    })
    const url = `https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products/${props.product.id}`;

    function submit(e) {
        e.preventDefault();
        axios.put(url, {
            name: data.name,
            description: data.description,
            count: data.count,
            color: data.color,
            weight: data.weight,
            image: data.image
        })
            .then(res => {
                document.location.reload();
                console.log(res.data);
            })
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    const style = {
        marginBottom: 10,
        marginTop: 10
    };

    return (
        <div>
            <Button className="btn-green shadow" variant="contained" color="primary" onClick={handleClickOpen}>
                Edit product
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Form onSubmit={(e) => submit(e)}>
                    <DialogTitle id="form-dialog-title">Edit product</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, edit the fields that you need.
                        </DialogContentText>
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.name}
                            style={style}
                            margin="dense"
                            id="name"
                            label="Product name"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.description}
                            style={style}
                            id="description"
                            label="Product Description"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.count}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="count"
                            label="Count"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.color}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="color"
                            label="Color"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.weight}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="weight"
                            label="Weight in grams"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.image}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="image"
                            label="Image URL"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary" type="submit">
                            Edit product
                        </Button>
                    </DialogActions>
                </Form>
            </Dialog>
        </div>
    );
}